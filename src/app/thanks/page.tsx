import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import ThanksTrigger from '@/components/sections/Thanks/ThanksTrigger';
import styles from './Thanks.module.scss';

export const metadata: Metadata = {
  title: '送信完了 | UIT-Fukuoka',
  description: 'お問い合わせいただきありがとうございます。内容を確認し、担当者よりご連絡いたします。',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThanksPage() {
  return (
    <div className={styles.thanksPage}>
      <Header />
      <main className={styles.thanksPage__main} id="main-content">
        <section
          className={styles.thanksPage__card}
          id="thanks-section"
          aria-labelledby="thanks-heading"
        >
          <div className={styles.thanksPage__iconWrapper}>
            <Check 
              size={48} 
              strokeWidth={1.5} 
              className={styles.thanksPage__icon} 
              aria-hidden="true"
            />
          </div>

          <div className={styles.thanksPage__header}>
            <h1 className={styles.thanksPage__title} id="thanks-heading">
              送信が完了しました
            </h1>
          </div>

          <div className={styles.thanksPage__desc}>
            <p>
              お問い合わせありがとうございます。
              <br />
              内容確認後、担当カウンセラーよりご連絡差し上げます。
            </p>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
              ※ 土日祝は対応にお時間をいただく場合がございます。あらかじめご了承ください。
            </p>
          </div>

          <Link 
            href="/" 
            className={styles.thanksPage__button}
            id="back-to-home-btn"
          >
            トップページに戻る
          </Link>
        </section>
      </main>
      <ThanksTrigger />
      <Footer />
    </div>
  );
}
