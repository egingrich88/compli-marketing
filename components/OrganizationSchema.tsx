const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Compli",
  legalName: "Compli LLC",
  url: "https://compli.biz",
  logo: "https://compli.biz/compli-logo-light.png",
  description:
    "Federal compliance platform for American employers, with AI & Biometrics as flagship.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "272 Bell Ave",
    addressLocality: "Cadillac",
    addressRegion: "MI",
    postalCode: "49601",
    addressCountry: "US",
  },
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
    />
  );
}
