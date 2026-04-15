import {
  ClipboardCheck,
  MessageSquare,
  Target,
  Rocket,
} from 'lucide-react';
import Image from 'next/image';
import styles from './Process.module.scss';

const steps = [
  {
    number: '01',
    Icon: ClipboardCheck,
    title: '無料相談を申し込む',
    description: 'フォームまたはメールで申し込み。24時間以内に担当カウンセラーから連絡します。',
  },
  {
    number: '02',
    Icon: MessageSquare,
    title: 'オンラインカウンセリング',
    description: 'Zoomで90分の初回相談。現状・希望・不安を丁寧にヒアリングします。完全無料です。',
  },
  {
    number: '03',
    Icon: Target,
    title: 'キャリア戦略の策定',
    description: 'ヒアリングをもとに、あなたに合ったキャリアロードマップを一緒に作成します。',
  },
  {
    number: '04',
    Icon: Rocket,
    title: '転職支援 or スキルアップ',
    description: '転職活動なら企業紹介・書類添削・面接対策を。スキルアップなら学習プランの設計も支援します。',
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="process" aria-labelledby="process-heading">
      <div className={styles.process__bgAccent} aria-hidden="true" />

      <div className={styles.process__inner}>
        <header className={styles.process__header}>
          <p className={styles.process__label}>HOW IT WORKS</p>
          <h2 className={styles.process__heading} id="process-heading">
            ご利用の
            <span className={styles.process__headingAccent}>流れ</span>
          </h2>
          <p className={styles.process__desc}>
            申し込みから相談まで、最短当日対応。
            <br />
            まずは気軽なメッセージでも大歓迎です。
          </p>
        </header>

        <div className={styles.process__content}>
          {/* 左側のビジュアル */}
          <div className={styles.process__visual}>
            <div className={styles.process__imageWrapper}>
              <Image
                src="/images/process-consultation.png"
                alt="Online Consulting"
                fill
                className={styles.process__image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={styles.process__imageOverlay} />
              <div className={styles.process__imageBadge}>
                オンラインで完結
              </div>
            </div>
          </div>

          {/* 右側のステップリスト */}
          <div className={styles.process__main}>
            <ol className={styles.process__list}>
              {steps.map(({ number, Icon, title, description }, idx) => (
                <li key={idx} className={styles.process__step}>
                  <div className={styles.process__stepSide}>
                    <div className={styles.process__stepIconBox}>
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={styles.process__stepConnector} />
                    )}
                  </div>
                  <div className={styles.process__stepInfo}>
                    <span className={styles.process__stepNumText}>STEP {number}</span>
                    <h3 className={styles.process__stepTitle}>{title}</h3>
                    <p className={styles.process__stepDesc}>{description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className={styles.process__cta}>
              <a href="#contact" className={styles.process__ctaBtn}>
                まずは無料相談してみる →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
