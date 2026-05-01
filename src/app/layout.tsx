import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Script from 'next/script';
import { FB_PIXEL_ID, GA_TRACKING_ID } from '@/lib/tracking';
import '../styles/globals.scss';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'UIT-Fukuoka | 福岡エンジニア専門キャリア相談所',
    template: '%s | UIT-Fukuoka',
  },
  description:
    '福岡・UIターンエンジニアのキャリア相談なら UIT-Fukuoka。転職前提なし、初回90分無料。あなたのキャリアを、もっと自由に。',
  keywords: [
    '福岡', 'エンジニア', '転職', 'UIターン', 'キャリア相談', 'IT転職', '無料相談'
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'UIT-Fukuoka',
    title: 'UIT-Fukuoka | 福岡エンジニア専門キャリア相談所',
    description:
      '福岡・UIターンエンジニアのキャリア相談なら UIT-Fukuoka。転職前提なし、初回90分無料。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UIT-Fukuoka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UIT-Fukuoka | 福岡エンジニア専門キャリア相談所',
    description:
      '福岡・UIターンエンジニアのキャリア相談なら UIT-Fukuoka。転職前提なし、初回90分無料。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Google Tag Manager (gtag.js) */}
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtm-base"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}');
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel */}
        {FB_PIXEL_ID && (
          <>
            <Script
              id="fb-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
