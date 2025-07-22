export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jolaoluwa Olusanya",
    alternateName: "Jola",
    url: "https://www.jolaoluwa.site",
    jobTitle: "Fullstack Developer",
    sameAs: [
      "https://www.linkedin.com/in/jolaoluwa-olusanya-539798234",
      "https://github.com/Jolaoluwa17",
    ],
    image: "https://www.jolaoluwa.site/jolaoluwa.jpg"
  };

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.jolaoluwa.site" />

      {/* JSON‑LD for Google’s Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
