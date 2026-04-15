import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.scss';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'UIT Fukuoka | 福岡エンジニア専門キャリア相談所',
    template: '%s | UIT Fukuoka',
  },
  description:
    '福岡・UIターンエンジニアのキャリア相談なら UIT Fukuoka。転職前提なし、初回90分無料。あなたのキャリアを、もっと自由に。',
  keywords: [
    '福岡', 'エンジニア', '転職', 'UIターン', 'キャリア相談', 'IT転職', '無料相談'
  ],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'UIT Fukuoka',
    title: 'UIT Fukuoka | 福岡エンジニア専門キャリア相談所',
    description:
      '福岡・UIターンエンジニアのキャリア相談なら UIT Fukuoka。転職前提なし、初回90分無料。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'UIT Fukuoka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UIT Fukuoka | 福岡エンジニア専門キャリア相談所',
    description:
      '福岡・UIターンエンジニアのキャリア相談なら UIT Fukuoka。転職前提なし、初回90分無料。',
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
      <body>{children}</body>
    </html>
  );
}
