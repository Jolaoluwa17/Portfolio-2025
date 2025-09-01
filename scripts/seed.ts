// scripts/seed.ts
import "dotenv/config"; 


import OpenAI from "openai";
import fs from "node:fs";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

async function main() {
  // 1) Create a vector store (camelCase API in your SDK)
  const store = await client.vectorStores.create({ name: "rose-portfolio" });

  // 2) Upload & index files, then poll until ready
  await client.vectorStores.fileBatches.uploadAndPoll(store.id, {
    files: [fs.createReadStream("content/identity.md")],
  });

  // 3) Create an Assistant wired to your vector store
  const assistant = await client.beta.assistants.create({
    name: "Rose Portfolio Concierge",
    model: "gpt-4o-mini",
    instructions: `
You are Jolaoluwa's portfolio concierge. Answer only from Jolaoluwa's files.
If a question is off-topic, briefly redirect to his work and invite booking.
Never invent facts.
`,
    tools: [{ type: "file_search" }],
    tool_resources: { file_search: { vector_store_ids: [store.id] } },
  });

  console.log("ASSISTANT_ID:", assistant.id);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
