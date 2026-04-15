import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="ヒーローセクション">
      {/* 背景レイヤー */}
      <div className={styles.hero__bg} aria-hidden="true">
        <div className={styles.hero__image} />
        <div className={styles.hero__grid} />
        <div className={styles.hero__glow1} />
        <div className={styles.hero__glow2} />
      </div>

      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          {/* バッジ */}
          <div className={styles.hero__badge} role="text">
            <span className={styles.hero__badgeDot} />
            福岡・UIターンエンジニア専門
          </div>

          {/* メインキャッチコピー */}
          <h1 className={styles.hero__headline}>
            あなたのキャリアを
            <br />
            <span className={styles.hero__headlineAccent}>もっと自由に</span>
          </h1>

          {/* サブコピー */}
          <p className={styles.hero__sub}>
            転職前提ナシ。まずはあなたのキャリアを一緒に整理しませんか。
            <br className={styles.hero__br} />
            福岡のIT市場を知り尽くしたカウンセラーが、初回90分を完全無料でサポートします。
          </p>

          {/* CTA群 */}
          <div className={styles.hero__ctas}>
            <a href="#contact" className={styles.hero__ctaPrimary}>
              無料相談に申し込む
              <span className={styles.hero__ctaArrow} aria-hidden="true">→</span>
            </a>
            <a href="#process" className={styles.hero__ctaSecondary}>
              ご利用の流れを見る
            </a>
          </div>
        </div>

        {/* ビジュアルカード */}
        <div className={styles.hero__visual} aria-hidden="true">
          <div className={styles.hero__card}>
            <div className={styles.hero__cardHeader}>
              <div className={styles.hero__cardDots}>
                <span /><span /><span />
              </div>
              <span className={styles.hero__cardTitle}>career.ts</span>
            </div>
            <div className={styles.hero__cardBody}>
              <div className={styles['hero__code-line']}>
                <span className={styles['hero__code-keyword']}>const</span>
                {' '}
                <span className={styles['hero__code-var']}>myCareer</span>
                {' = {'}
              </div>
              <div className={`${styles['hero__code-line']} ${styles['hero__code-line--indent']}`}>
                <span className={styles['hero__code-key']}>goal</span>
                {': '}
                <span className={styles['hero__code-string']}>&quot;自由に働く&quot;</span>
                {','}
              </div>
              <div className={`${styles['hero__code-line']} ${styles['hero__code-line--indent']}`}>
                <span className={styles['hero__code-key']}>location</span>
                {': '}
                <span className={styles['hero__code-string']}>&quot;福岡&quot;</span>
                {','}
              </div>
              <div className={`${styles['hero__code-line']} ${styles['hero__code-line--indent']}`}>
                <span className={styles['hero__code-key']}>support</span>
                {': '}
                <span className={styles['hero__code-string']}>&quot;UIT Fukuoka&quot;</span>
                {','}
              </div>
              <div className={`${styles['hero__code-line']} ${styles['hero__code-line--indent']}`}>
                <span className={styles['hero__code-key']}>fee</span>
                {': '}
                <span className={styles['hero__code-number']}>0</span>
                {','}
              </div>
              <div className={styles['hero__code-line']}>{'};'}</div>
              <div className={styles['hero__code-line']}>&nbsp;</div>
              <div className={styles['hero__code-line']}>
                <span className={styles['hero__code-keyword']}>await</span>
                {' '}
                <span className={styles['hero__code-method']}>consult</span>
                {'(myCareer);'}
              </div>
              <div className={styles['hero__code-cursor']} />
            </div>
          </div>
          <div className={styles.hero__cardGlow} />
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className={styles.hero__scroll} aria-label="スクロールしてください">
        <span className={styles.hero__scrollLine} />
        <span className={styles.hero__scrollText}>Scroll</span>
      </div>
    </section>
  );
}
