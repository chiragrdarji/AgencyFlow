import { Helmet } from 'react-helmet-async';
import { MetaTags } from '@/lib/seoMeta';

interface SEOProps extends MetaTags {
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  children,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="og:title" property="og:title" content={ogTitle || title} />
      <meta name="og:description" property="og:description" content={ogDescription || description} />
      {ogImage && <meta name="og:image" property="og:image" content={ogImage} />}
      {ogUrl && <meta name="og:url" property="og:url" content={ogUrl} />}
      <meta name="twitter:card" content={twitterCard || 'summary_large_image'} />
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {children}
    </Helmet>
  );
}
