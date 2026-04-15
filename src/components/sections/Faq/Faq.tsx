'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Faq.module.scss';

const faqs = [
  {
    question: '転職を考えていなくても相談できますか？',
    answer:
      'はい、もちろんです。「転職すべきかどうか迷っている」「今の職場で成長できているか不安」など、キャリアに関するどんな悩みでも歓迎します。転職ありきではなく、あなたにとってのベストを一緒に考えます。',
  },
  {
    question: '相談はオンラインのみですか？',
    answer:
      '基本はZoomによるオンライン相談ですが、福岡市内在住の方は対面相談も可能です。詳細はお問い合わせフォームよりご連絡ください。',
  },
  {
    question: '対象となるエンジニアの種類は？',
    answer:
      'バックエンド・フロントエンド・インフラ・モバイルなど、職種を問わず対応しています。経験年数も問いません。未経験からエンジニアを目指している方のご相談もお受けしています。',
  },
  {
    question: '初回相談後に費用はかかりますか？',
    answer:
      '初回90分は完全無料です。その後の継続支援についても、エンジニア側への請求は一切ありません。転職が成立した場合は企業側からの成功報酬のみを受け取るモデルで運営しています。',
  },
  {
    question: '福岡在住でなくても相談できますか？',
    answer:
      'はい、全国どこからでもオンラインで相談いただけます。特に福岡へのUIターンを検討されている方のご相談を多くいただいており、移住・生活面のサポート情報もご提供しています。',
  },
  {
    question: 'どのくらいの期間で転職できますか？',
    answer:
      '個人の状況によって異なりますが、平均的には初回相談から内定まで2〜3ヶ月程度です。スキルアップが必要なケースやタイミングによっては、長期的なサポートを行うこともあります。',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-heading">
      <div className={styles.faq__inner}>
        <header className={styles.faq__header}>
          <p className={styles.faq__label}>FAQ</p>
          <h2 className={styles.faq__heading} id="faq-heading">
            よくある
            <span className={styles.faq__headingAccent}>ご質問</span>
          </h2>
        </header>

        <dl className={styles.faq__list}>
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.faq__item} ${isOpen ? styles['faq__item--open'] : ''}`}
              >
                <dt>
                  <button
                    className={styles.faq__question}
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span className={styles.faq__questionText}>{item.question}</span>
                    <span className={styles.faq__icon} aria-hidden="true">
                      <ChevronDown size={20} strokeWidth={2} />
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className={styles.faq__answer}
                  hidden={!isOpen}
                >
                  <p className={styles.faq__answerText}>{item.answer}</p>
                </dd>
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
}
