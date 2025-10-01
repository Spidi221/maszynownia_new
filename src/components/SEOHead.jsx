import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = "Maszynownia",
  description = "Trening EMS dla dorosłych i gimnastyka dla dzieci w Józefowie",
  keywords = "EMS, trening, gimnastyka, dzieci, Józefów",
  image = "/images/og-image.jpg",
  canonical = "",
  type = "website",
  services = [],
  pricing = [],
  location = "Józefów",
  businessType = "fitness"
}) {
  const fullTitle = title === "Maszynownia" ? title : `${title} | Maszynownia`;
  const canonicalUrl = canonical ? `https://maszynownia.pl${canonical}` : "https://maszynownia.pl/";
  const imageUrl = image.startsWith('http') ? image : `https://maszynownia.pl${image}`;

  // Email based on business type
  const contactEmail = businessType === "gymnastics"
    ? "maszynowniastrefagimnastyki@gmail.com"
    : "maszynowniaems@gmail.com";

  // Enhanced Local Business Schema for Maszynownia
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "Gym"],
    "name": "Maszynownia",
    "description": "Profesjonalne studio treningu EMS dla dorosłych i zajęć gimnastycznych dla dzieci w Józefowie. 8 lat doświadczenia, nowoczesny sprzęt bezprzewodowy.",
    "url": "https://maszynownia.pl",
    "logo": "https://maszynownia.pl/images/logo-ems.webp",
    "image": ["https://maszynownia.pl/images/hero-ems-new.webp", "https://maszynownia.pl/images/girl-gymnastics-final.webp"],
    "telephone": "+48696376377",
    "email": contactEmail,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Generała Sikorskiego 113",
      "addressLocality": "Józefów",
      "postalCode": "05-410",
      "addressRegion": "Mazowieckie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.133889,
      "longitude": 21.227563
    },
    "areaServed": [
      "Józefów", "Warszawa", "Otwock", "Michalin", "Góra Kalwaria", "Piaseczno", "Konstancin-Jeziorna"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/maszynowniatreningems",
      "https://www.instagram.com/maszynownia"
    ],
    "priceRange": "79zł - 1560zł",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "PLN"
  };

  // Service schema for EMS Training
  const emsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Trening EMS",
    "description": "Profesjonalny trening elektrostymulacji mięśni (EMS) w 30 minut. Skuteczność tradycyjnego 90-minutowego treningu siłowego w znacznie krótszym czasie.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maszynownia",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Generała Sikorskiego 113",
        "addressLocality": "Józefów",
        "postalCode": "05-410",
        "addressCountry": "PL"
      }
    },
    "areaServed": "Józefów",
    "serviceType": "Fitness Training",
    "category": "EMS Training",
    "offers": [
      {
        "@type": "Offer",
        "name": "Trening EMS Intro",
        "price": "79",
        "priceCurrency": "PLN",
        "description": "Trening wprowadzający EMS"
      },
      {
        "@type": "Offer",
        "name": "Karnet Elite 12 treningów",
        "price": "1560",
        "priceCurrency": "PLN",
        "description": "Najpopularniejszy karnet - 12 treningów EMS"
      }
    ]
  };

  // Service schema for Gymnastics
  const gymnasticsServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strefa Gimnastyki",
    "description": "Zajęcia ogólnorozwojowe z elementami akrobatyki dla dzieci i młodzieży. Rozwój koordynacji, siły, gibkości i równowagi.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Maszynownia"
    },
    "areaServed": ["Józefów", "Michalin", "Góra Kalwaria"],
    "serviceType": "Youth Sports Training",
    "category": "Gymnastics",
    "audience": {
      "@type": "Audience",
      "audienceType": "Children",
      "suggestedMinAge": 4,
      "suggestedMaxAge": 13
    }
  };

  // FAQ Schema for Answer Engine Optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czym jest trening EMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Trening EMS (Electrical Muscle Stimulation) to nowoczesna metoda treningu wykorzystująca elektrostymulację mięśni. Pozwala osiągnąć rezultaty tradycyjnego 90-minutowego treningu w zaledwie 30 minut, aktywując 90% mięśni jednocześnie."
        }
      },
      {
        "@type": "Question",
        "name": "Ile kosztuje trening EMS w Józefowie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ceny treningów EMS w Maszynowni: trening intro 79 zł, trening jednorazowy 160 zł, karnety od 600 zł (4 treningi) do 1560 zł (12 treningów - najpopularniejszy)."
        }
      },
      {
        "@type": "Question",
        "name": "Gdzie są zajęcia gimnastyczne dla dzieci w Józefowie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zajęcia gimnastyczne dla dzieci w Maszynowni odbywają się w trzech lokalizacjach: Józefów (ul. Dolna 19), Michalin (ul. Sienkiewicza 2) i Góra Kalwaria. Oferujemy zajęcia ogólnorozwojowe z elementami akrobatyki dla dzieci w wieku 4-13 lat."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie usługi oferuje Strefa Gimnastyki?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strefa Gimnastyki oferuje 5 głównych usług: warsztaty gimnastyczne weekendowe, urodziny z gimnastyką (2h od 5 roku życia), pikniki sportowe dla rodzin, zajęcia w placówkach edukacyjnych z własnym sprzętem, oraz obozy akrobatyczne prowadzone przez Annę Błaszkiewicz."
        }
      },
      {
        "@type": "Question",
        "name": "Kto prowadzi zajęcia gimnastyczne w Maszynowni?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zajęcia prowadzą certyfikowani trenerzy: Klaudia Kołodziejska (główny trener), Klaudia Nowicka (trener gimnastyki), oraz Anna Błaszkiewicz (kierownik wypoczynku z 10-letnim doświadczeniem, prowadzi obozy akrobatyczne)."
        }
      }
    ]
  };

  // Enhanced Services Schema for Gymnastics
  const gymnasticsServicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://maszynownia.pl/strefagimnastyki#warsztaty",
        "name": "Warsztaty gimnastyczne",
        "description": "Weekendowe intensywne szkolenia dla dzieci chcących pogłębić swoje umiejętności gimnastyczne i akrobatyczne",
        "provider": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "serviceType": "Sports Training",
        "audience": {
          "@type": "Audience",
          "audienceType": "Children",
          "suggestedMinAge": 6,
          "suggestedMaxAge": 16
        }
      },
      {
        "@type": "Service",
        "@id": "https://maszynownia.pl/strefagimnastyki#urodziny",
        "name": "Urodziny z gimnastyką",
        "description": "2 godziny zabawy od 5. roku życia - niezapomniane urodziny pełne ruchu i radości",
        "provider": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "serviceType": "Party Entertainment",
        "duration": "PT2H",
        "audience": {
          "@type": "Audience",
          "audienceType": "Children",
          "suggestedMinAge": 5
        }
      },
      {
        "@type": "Service",
        "@id": "https://maszynownia.pl/strefagimnastyki#pikniki",
        "name": "Pikniki sportowe",
        "description": "Aktywna atrakcja dla rodzin - organizujemy rodzinne wydarzenia na świeżym powietrzu",
        "provider": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "serviceType": "Family Recreation",
        "audience": {
          "@type": "Audience",
          "audienceType": "Families"
        }
      },
      {
        "@type": "Service",
        "@id": "https://maszynownia.pl/strefagimnastyki#placowki",
        "name": "Zajęcia w placówkach",
        "description": "Dojeżdżamy z własnym sprzętem do przedszkoli, szkół i innych placówek",
        "provider": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "serviceType": "Educational Services",
        "areaServed": ["Józefów", "Warszawa", "Mazowieckie"]
      },
      {
        "@type": "Service",
        "@id": "https://maszynownia.pl/strefagimnastyki#obozy",
        "name": "Obozy akrobatyczne",
        "description": "Prowadzone przez Annę Błaszkiewicz - letnie obozy pełne nauki i zabawy",
        "provider": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "serviceType": "Summer Camp",
        "instructor": {
          "@type": "Person",
          "name": "Anna Błaszkiewicz",
          "jobTitle": "Kierownik Wypoczynku"
        }
      }
    ]
  };

  // Team/Organization Schema for Gymnastics
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maszynownia - Strefa Gimnastyki",
    "employee": [
      {
        "@type": "Person",
        "name": "Klaudia Kołodziejska",
        "jobTitle": "Główny Trener Gimnastyki",
        "worksFor": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Certyfikat trenera gimnastyki"
        }
      },
      {
        "@type": "Person",
        "name": "Klaudia Nowicka",
        "jobTitle": "Trener Gimnastyki",
        "worksFor": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "knowsAbout": ["Bezpieczny trening", "Techniki gimnastyczne dla dzieci"]
      },
      {
        "@type": "Person",
        "name": "Anna Błaszkiewicz",
        "jobTitle": "Kierownik Wypoczynku",
        "worksFor": {
          "@type": "Organization",
          "name": "Maszynownia"
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Nauczyciel wychowania fizycznego"
        },
        "yearsOfExperience": 10
      }
    ]
  };

  // Combine schemas based on page type
  const getSchemas = () => {
    const schemas = [localBusinessSchema];

    if (businessType === 'ems' || canonical === '/ems') {
      schemas.push(emsServiceSchema);
    }

    if (businessType === 'gymnastics' || canonical === '/strefagimnastyki') {
      schemas.push(gymnasticsServiceSchema);
      schemas.push(gymnasticsServicesSchema);
      schemas.push(teamSchema);
    }

    // Add FAQ schema for main pages
    if (canonical === '' || canonical === '/ems' || canonical === '/strefagimnastyki') {
      schemas.push(faqSchema);
    }

    return schemas;
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Enhanced Meta Tags for Local SEO */}
      <meta name="geo.region" content="PL-MZ" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content="52.133889;21.227563" />
      <meta name="ICBM" content="52.133889, 21.227563" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content="pl" />
      <meta name="language" content="Polish" />

      {/* GEO Optimization for AI Search Engines */}
      <meta name="entity" content="Maszynownia - Local Business" />
      <meta name="entity-type" content="Fitness Studio, Gym, Sports Training Center" />
      <meta name="business-category" content="Health & Fitness, Youth Sports, EMS Training" />
      <meta name="service-area" content="Józefów, Warszawa, Otwock, Michalin, Góra Kalwaria, Piaseczno, Konstancin-Jeziorna" />
      <meta name="expertise" content="EMS Training, Children Gymnastics, Acrobatics, Youth Sports Development" />
      <meta name="authority-signals" content="8 years experience, certified trainers, wireless EMS equipment, 3 locations" />
      <meta name="ai-summary" content="Maszynownia: Premier fitness studio in Józefów offering professional EMS training (30min sessions) for adults and comprehensive gymnastics programs for children aged 4-13. Established 2017, serving Warsaw metropolitan area with certified trainers and modern equipment." />

      {/* Answer Engine Optimization Tags */}
      <meta name="qa-fitness-ems" content="EMS training 30 minutes equals 90-minute traditional workout, prices from 79zł, wireless equipment, individual approach" />
      <meta name="qa-children-gymnastics" content="Gymnastics classes for children 4-13 years, 3 locations: Józefów 160zł, Michalin 170zł, Góra Kalwaria, certified trainers" />
      <meta name="qa-services-offered" content="5 main services: weekend gymnastics workshops, gymnastics birthday parties (2h), family sports picnics, institution visits with equipment, summer acrobatic camps" />
      <meta name="qa-contact-booking" content={`SMS to 696 376 377 with child name, age, location preference, or email ${contactEmail}`} />

      {/* Knowledge Graph Optimization */}
      <meta name="organization-founding-year" content="2017" />
      <meta name="organization-size" content="Small Business (3-10 employees)" />
      <meta name="business-hours" content="Monday-Friday 06:00-21:00, Saturday-Sunday 08:00-18:00" />
      <meta name="payment-methods" content="Cash, Credit Card, Bank Transfer" />
      <meta name="unique-selling-points" content="Oldest EMS studio in Józefów, Wireless EMS equipment, Individual 1:1 training approach, Certified children gymnastics trainers" />

      {/* Enhanced Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Maszynownia Józefów`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Maszynownia" />
      <meta property="og:locale" content="pl_PL" />

      {/* Business Open Graph */}
      <meta property="business:contact_data:street_address" content="ul. Generała Sikorskiego 113" />
      <meta property="business:contact_data:locality" content="Józefów" />
      <meta property="business:contact_data:postal_code" content="05-410" />
      <meta property="business:contact_data:country_name" content="Poland" />
      <meta property="business:contact_data:phone_number" content="+48696376377" />
      <meta property="business:contact_data:email" content={contactEmail} />

      {/* Enhanced Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={`${title} - Maszynownia Józefów`} />

      {/* App Links for Mobile */}
      <meta property="al:web:url" content={canonicalUrl} />

      {/* Structured Data */}
      {getSchemas().map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      {/* Preconnect for Critical Resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
}