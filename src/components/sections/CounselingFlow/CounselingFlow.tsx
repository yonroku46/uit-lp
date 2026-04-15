import { Search, Compass, Zap, Lightbulb } from 'lucide-react';
import styles from './CounselingFlow.module.scss';

const flowSteps = [
  {
    Icon: Search,
    title: '現状確認',
    items: [
      'これまでの仕事・キャリアの整理',
      '自分自身の強みの再認識',
      '大事にしたい価値観への気づき',
      '自分の「軸」の深掘り',
    ],
  },
  {
    Icon: Compass,
    title: '希望する将来の姿',
    items: [
      '手に入れたいものを明確化',
      '理想とするライフスタイルの追求',
      'ワクワクする未来を想像する',
    ],
  },
  {
    Icon: Zap,
    title: '課題を明確にする',
    items: [
      '表面的な問題ではなく「本質的な課題」の特定',
      '何を得られたら幸福度が上がるか',
    ],
  },
  {
    Icon: Lightbulb,
    title: '具体的な解決策を見つける',
    items: [
      'カウンセリングでの気づきを整理',
      '前後の変化と現在の立ち位置を確認',
      '次の一歩となる具体的な行動を決定',
    ],
  },
];

export default function CounselingFlow() {
  return (
    <section className={styles.flow} id="flow">
      <div className={styles.flow__inner}>
        <header className={styles.flow__header}>
          <p className={styles.flow__label}>SESSION FLOW</p>
          <h2 className={styles.flow__heading}>
            ライフキャリア
            <br />
            <span className={styles.flow__headingAccent}>カウンセリングの流れ</span>
          </h2>
          <p className={styles.flow__desc}>
            90分間のセッションでは、表面的な悩みだけでなく、
            <br />
            あなたの人生（ライフ）と仕事（キャリア）を統合した「新たな気づき」を得ることに重きを置いています。
          </p>
        </header>

        <div className={styles.flow__grid}>
          {flowSteps.map((step, idx) => (
            <div key={idx} className={styles.flow__card}>
              <div className={styles.flow__cardHeader}>
                <div className={styles.flow__cardIcon}>
                  <step.Icon size={24} />
                </div>
                <div className={styles.flow__cardIndex}>0{idx + 1}</div>
              </div>
              <h3 className={styles.flow__cardTitle}>{step.title}</h3>
              <ul className={styles.flow__itemList}>
                {step.items.map((item, i) => (
                  <li key={i} className={styles.flow__item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.flow__footer}>
          <p className={styles.flow__footerText}>
            新たな気づきが、新たな行動に繋がり、結果に変化をもたらします。
          </p>
        </div>
      </div>
    </section>
  );
}
