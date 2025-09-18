import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = "Maszynownia",
  description = "Trening EMS dla dorosłych i gimnastyka dla dzieci w Józefowie",
  keywords = "EMS, trening, gimnastyka, dzieci, Józefów",
  image = "/images/og-image.jpg",
  canonical = ""
}) {
  const fullTitle = title === "Maszynownia" ? title : `${title} | Maszynownia`;
  const canonicalUrl = canonical ? `https://maszynownia.pl${canonical}` : "https://maszynownia.pl/";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}