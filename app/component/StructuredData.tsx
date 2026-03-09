export default function StructuredData() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "奈良キャバクラ求人",
      url: "https://example.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://example.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }