// app/api/ask/route.ts
import OpenAI from "openai";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const MUST = (name: string, v?: string) => {
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
};

const client = new OpenAI({
  apiKey: MUST("OPENAI_API_KEY", process.env.OPENAI_API_KEY),
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json().catch(() => ({}));
    if (!message || typeof message !== "string") {
      return Response.json({ text: "No message provided." }, { status: 400 });
    }

    const assistantId = MUST(
      "OPENAI_ASSISTANT_ID",
      process.env.OPENAI_ASSISTANT_ID
    );

    // Quick sanity: confirm the assistant exists
    const asst = await client.beta.assistants.retrieve(assistantId);

    // 1) Create a thread
    const thread = await client.beta.threads.create();

    // 2) Add user message
    await client.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // 3) Run and wait
    const run = await client.beta.threads.runs.createAndPoll(thread.id, {
      assistant_id: assistantId,
    });

    // If not completed, return diagnostics to help you fix it
    if (run.status !== "completed") {
      return Response.json(
        {
          text: "Sorry—something went wrong (run not completed).",
          debug: {
            run_status: run.status,
            last_error: run.last_error ?? null,
            required_action: run.required_action ?? null,
            assistant_id: assistantId,
            assistant_name: asst.name,
            assistant_model: asst.model,
            tool_resources: (asst as any).tool_resources ?? null,
          },
        },
        { status: 500 }
      );
    }

    // 4) Read the latest assistant message
    const list = await client.beta.threads.messages.list(thread.id, {
      order: "desc",
      limit: 1,
    });
    const latest = list.data[0];
    const text =
      latest?.content
        .map((c: any) => (c.type === "text" ? c.text.value : ""))
        .join("\n")
        .trim() || "…";

    return Response.json({ text });
  } catch (err: any) {
    console.error("[/api/ask] ERROR:", err?.message || err, err?.stack);
    return Response.json(
      { text: `Server error: ${err?.message || "unknown"}` },
      { status: 500 }
    );
  }
}
