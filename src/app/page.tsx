'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function LpPage() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, (e) => {
        e.classList.add('in');
      });
      return;
    }
    const io = new IntersectionObserver(
      (en) => {
        en.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    Array.prototype.forEach.call(els, (e) => {
      io.observe(e);
    });

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div className="lp-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500;600&family=Zen+Kaku+Gothic+New:wght@400;500&family=Roboto+Mono:wght@400&display=swap');

        :root{
          --deep:#12151D;
          --deep2:#181C25;
          --ink:#1C2029;
          --slate:#525969;
          --muted:#7B8291;
          --mist:#F1F1EF;
          --paper:#FBFBFA;
          --brass:#A8874E;
          --brass-soft:#C6AC7C;
          --line:rgba(28,32,41,.12);
          --line-d:rgba(255,255,255,.13);
          --display:"Shippori Mincho B1",serif;
          --body:"Zen Kaku Gothic New",system-ui,sans-serif;
          --mono:"Roboto Mono",ui-monospace,monospace;

          /* type scale */
          --fs-micro:9.5px;
          --fs-small:11.5px;
          --fs-body:13.5px;
          --fs-lead:15px;
          --fs-h3:14.5px;
          --fs-h2:18px;
          --fs-statement:26px;
        }
        .lp-container *{box-sizing:border-box}
        .lp-container{
          margin:0;background:var(--paper);color:var(--ink);
          font-family:var(--body);font-size:var(--fs-body);line-height:1.95;
          letter-spacing:.03em;font-feature-settings:"palt" 1;
          -webkit-font-smoothing:antialiased;
        }
        .lp-container img,.lp-container svg{display:block}
        .lp-container p{margin:0 0 1.1em;text-wrap:pretty}
        .lp-container p:last-child{margin-bottom:0}
        .lp-container h1,.lp-container h2,.lp-container h3,.lp-container h4{font-family:var(--display);font-weight:600;line-height:1.8;letter-spacing:.05em;margin:0;text-wrap:pretty}

        .wrap{width:100%;max-width:1000px;margin:0 auto;padding:0 28px}
        .narrow{max-width:760px}

        /* utility type */
        .label{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.28em;color:var(--brass);display:block;margin:0 0 18px}
        .label--light{color:var(--brass-soft)}
        .small{font-size:var(--fs-small);color:var(--muted);line-height:1.9}
        .statement{font-family:var(--display);font-size:var(--fs-statement);line-height:1.75;letter-spacing:.05em;margin:0}

        .ico{width:20px;height:20px;stroke:var(--brass);fill:none;stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round}
        .ico--light{stroke:var(--brass-soft)}
        .ico--lg{width:26px;height:26px}

        .sec{padding:clamp(58px,7vw,92px) 0}
        .sec--deep{background:var(--deep);color:#D9DCE4}
        .sec--deep2{background:var(--deep2);color:#D9DCE4}
        .sec--mist{background:var(--mist)}
        .sec--paper{background:var(--paper)}
        .sec-head{margin-bottom:40px;max-width:40em}
        .sec-head h2{font-size:var(--fs-h2);margin-bottom:12px}
        .sec-head p{color:var(--muted);font-size:var(--fs-small);margin:0}
        .sec--deep .sec-head p,.sec--deep2 .sec-head p{color:#8C93A4}
        .sec--deep .sec-head h2,.sec--deep2 .sec-head h2{color:#EDEFF4}

        /* ---------- hero ---------- */
        .hero{
          background:linear-gradient(180deg,#0F1219 0%,#151A24 60%,#1B202B 100%);
          color:#E2E5EC;padding:clamp(76px,10vw,116px) 0 clamp(52px,6vw,72px);
          position:relative;overflow:hidden;
        }
        .hero::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;
          background:linear-gradient(90deg,transparent,rgba(198,172,124,.5),transparent)}
        .hero .brand{font-family:var(--mono);font-size:10px;letter-spacing:.32em;color:var(--brass-soft);margin:0 0 32px}
        .hero h1{font-size:var(--fs-statement);line-height:1.78;margin:0 0 22px;color:#F2F4F8}
        .hero h1 .accent{color:var(--brass-soft)}
        .hero-lead{color:#9BA3B4;font-size:var(--fs-body);max-width:31em;margin:0 0 34px;line-height:2.1}
        .cta-row{display:flex;flex-wrap:wrap;gap:10px 14px;align-items:center}
        .btn{
          display:inline-flex;align-items:center;gap:10px;text-decoration:none;
          font-family:var(--body);font-weight:500;font-size:12.5px;letter-spacing:.14em;
          padding:14px 28px;border:1px solid var(--brass);color:var(--brass-soft);
          transition:background .25s ease,color .25s ease,border-color .25s ease;
        }
        .btn svg{stroke:currentColor;width:14px;height:14px;fill:none;stroke-width:1.2}
        .btn:hover{background:var(--brass);color:#12151D;border-color:var(--brass)}
        .btn--ghost{border-color:rgba(255,255,255,.26);color:#CFD4DE}
        .btn--ghost:hover{background:rgba(255,255,255,.07);color:#fff;border-color:rgba(255,255,255,.38)}
        .hero-note{font-family:var(--mono);font-size:10px;letter-spacing:.16em;color:#727A8C;margin:26px 0 0}
        .hero-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line-d);
          border-top:1px solid var(--line-d);margin-top:46px}
        .hero-facts div{background:#151A24;padding:18px 18px 20px}
        .hero-facts .ico{margin-bottom:12px}
        .hero-facts dt{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.2em;color:#727A8C;margin:0 0 6px}
        .hero-facts dd{margin:0;font-family:var(--display);font-size:13.5px;letter-spacing:.05em;color:#E2E5EC}

        /* ---------- philosophy ---------- */
        .phil-intro{border-bottom:1px solid var(--line-d);padding-bottom:30px}
        .phil-intro h2{font-size:var(--fs-h2);color:#F0F2F6}
        .chapter{padding:clamp(42px,5vw,58px) 0;border-bottom:1px solid var(--line-d)}
        .chapter:last-child{border-bottom:0;padding-bottom:0}
        .chapter-head{display:flex;align-items:center;gap:14px;margin-bottom:22px}
        .chapter-head .ico{width:18px;height:18px}
        .chapter-name{font-family:var(--mono);font-size:10.5px;letter-spacing:.32em;color:var(--brass-soft)}
        .chapter-jp{font-family:var(--body);font-size:10.5px;letter-spacing:.2em;color:#6B7284}
        .chapter-num{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.2em;color:#5D6474;margin-left:auto}
        .chapter .statement{color:#F2F4F8;margin-bottom:18px;font-size:22px}
        .chapter-body{color:#9BA3B4;font-size:var(--fs-body);max-width:36em;line-height:2.15}

        /* week strip */
        .week{list-style:none;display:flex;gap:5px;margin:30px 0 10px;padding:0}
        .week li{
          width:34px;height:34px;display:grid;place-items:center;border:1px solid var(--line-d);
          font-family:var(--display);font-size:11.5px;color:#6B7284;letter-spacing:0;
        }
        .week li.sun{border-color:var(--brass);color:#12151D;background:var(--brass-soft)}
        .week-cap{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.2em;color:#6B7284;margin:0}

        /* VALUE — 横一列レイアウト */
        .vlist{margin:30px 0 0;border-top:1px solid var(--line-d)}
        .vrow{
          display:grid;grid-template-columns:44px 34px minmax(190px,1fr) minmax(0,2fr);
          gap:0 22px;align-items:start;padding:22px 0;border-bottom:1px solid var(--line-d);
        }
        .vrow .vnum{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.16em;color:#5D6474;padding-top:5px}
        .vrow .ico{margin-top:2px}
        .vrow h4{font-size:var(--fs-h3);color:#EDEFF4;margin:0;line-height:1.9}
        .vrow p{margin:0;color:#8C93A4;font-size:var(--fs-small);line-height:2.0}

        /* ---------- approach ---------- */
        .two{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);border:1px solid var(--line)}
        .two>div{background:#fff;padding:clamp(24px,3vw,32px)}
        .two>div:first-child{background:#EBEBE8}
        .two h3{font-size:var(--fs-h3);margin:14px 0 10px}
        .two p{color:var(--slate);font-size:var(--fs-small);line-height:2.0;margin:0}
        .two-tag{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.2em;color:var(--muted);margin:0}
        .two>div:last-child .two-tag{color:var(--brass)}
        .two>div:first-child .ico{stroke:var(--muted)}
        .two .ico{margin-top:14px}
        .qlist{list-style:none;margin:16px 0 0;padding:0}
        .qlist li{font-size:var(--fs-small);color:var(--slate);padding:8px 0 8px 20px;position:relative;
          border-top:1px solid var(--line);line-height:1.9}
        .qlist li::before{content:"";position:absolute;left:0;top:17px;width:9px;height:1px;background:var(--brass)}

        /* ---------- steps ---------- */
        .steps{display:grid;grid-template-columns:1fr 1fr;gap:26px}
        .step{border-top:1px solid var(--ink);padding-top:22px}
        .step-top{display:flex;align-items:center;gap:12px;margin-bottom:14px}
        .step-n{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.24em;color:var(--brass);margin:0}
        .step h3{font-size:var(--fs-h3);margin:0 0 12px}
        .step p{color:var(--slate);font-size:var(--fs-small);line-height:2.05}
        .step ul{list-style:none;margin:14px 0 16px;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:0 14px}
        .step ul li{font-size:var(--fs-small);color:var(--slate);padding:5px 0 5px 15px;position:relative}
        .step ul li::before{content:"";position:absolute;left:0;top:14px;width:7px;height:1px;background:var(--brass)}
        .step-close{font-family:var(--display);font-size:var(--fs-lead);color:var(--ink);letter-spacing:.05em;margin:0;line-height:1.9}

        /* ---------- features ---------- */
        .feat{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line-d);border:1px solid var(--line-d)}
        .feat article{background:var(--deep);padding:24px 22px 26px}
        .feat .n{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.2em;color:#5D6474;margin:0 0 16px}
        .feat .ico{margin-bottom:14px}
        .feat h3{font-size:var(--fs-h3);color:#EDEFF4;margin:0 0 10px}
        .feat p{color:#8C93A4;font-size:var(--fs-small);line-height:2.0;margin:0}

        /* ---------- lists ---------- */
        .cols{display:grid;grid-template-columns:1fr 1fr;gap:clamp(26px,5vw,56px)}
        .cols h3{font-size:var(--fs-h3);margin:12px 0 0}
        .plainlist{list-style:none;margin:12px 0 0;padding:0}
        .plainlist li{font-size:var(--fs-small);color:var(--slate);padding:10px 0 10px 19px;position:relative;
          border-bottom:1px solid var(--line);line-height:1.85}
        .plainlist li::before{content:"";position:absolute;left:0;top:20px;width:8px;height:1px;background:var(--brass)}

        /* ---------- profile ---------- */
        .portrait{margin:-24px -24px 20px;border-bottom:1px solid var(--line);background:#EFEFEC}
        .portrait img{width:100%;height:auto;display:block;filter:saturate(.92) contrast(1.02)}
        .profile{display:grid;grid-template-columns:260px 1fr;gap:clamp(26px,4.5vw,50px);align-items:start}
        .card{border:1px solid var(--line);padding:24px;background:#fff}
        .name{font-family:var(--display);font-size:17px;margin:0;letter-spacing:.07em}
        .name span{display:block;font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.22em;color:var(--muted);margin-top:7px}
        .card dl{margin:18px 0 0;font-size:var(--fs-small)}
        .card dt{font-family:var(--mono);font-size:9px;letter-spacing:.18em;color:var(--muted);margin:12px 0 2px}
        .card dt:first-of-type{margin-top:0}
        .card dd{margin:0;line-height:1.8;color:var(--ink)}
        .badges{list-style:none;display:flex;flex-wrap:wrap;gap:6px;margin:18px 0 0;padding:0}
        .badges li{font-family:var(--mono);font-size:9.5px;letter-spacing:.05em;border:1px solid var(--line);padding:6px 10px;color:var(--slate)}
        .profile-body p{color:var(--slate);font-size:var(--fs-body);line-height:2.15}
        .ilink{color:var(--ink);text-decoration:none;border-bottom:1px solid var(--brass);padding-bottom:1px}
        .ilink:hover{color:var(--brass)}

        /* ---------- apply ---------- */
        .spec{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line-d);
          border:1px solid var(--line-d);margin:34px 0}
        .spec div{background:var(--deep2);padding:22px}
        .spec .ico{margin-bottom:12px}
        .spec dt{font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.2em;color:#727A8C;margin:0 0 8px}
        .spec dd{margin:0;font-family:var(--display);font-size:var(--fs-lead);letter-spacing:.05em;color:#EDEFF4}
        .spec .free{color:var(--brass-soft)}
        .spec .free small{font-family:var(--body);font-size:10.5px;letter-spacing:.08em;color:#8C93A4;margin-left:6px}
        .apply-close{color:#F2F4F8;margin:0 0 18px;font-size:22px}
        .fineprint{font-family:var(--mono);font-size:10px;letter-spacing:.12em;color:#727A8C;margin:22px 0 0}

        /* ---------- form ---------- */
        .formbox{border:1px solid var(--line);background:#fff;padding:8px}
        .formbox iframe{display:block;width:100%;border:0}
        .form-note{font-size:var(--fs-small);color:var(--muted);line-height:2.0;margin:18px 0 0}

        /* ---------- footer ---------- */
        .foot{background:#0D1016;color:#727A8C;padding:44px 0 38px;font-size:var(--fs-small);line-height:2.0}
        .foot-top{display:flex;flex-wrap:wrap;gap:18px;justify-content:space-between;align-items:flex-end;
          border-bottom:1px solid var(--line-d);padding-bottom:22px;margin-bottom:20px}
        .foot-brand{font-family:var(--display);font-size:15px;color:#D9DCE4;margin:0;letter-spacing:.08em}
        .foot-brand span{display:block;font-family:var(--mono);font-size:var(--fs-micro);letter-spacing:.22em;color:#5D6474;margin-top:7px}
        .foot-links{list-style:none;display:flex;flex-wrap:wrap;gap:5px 18px;margin:0;padding:0}
        .foot-links a{color:#8C93A4;text-decoration:none;font-size:11px;letter-spacing:.08em}
        .foot-links a:hover{color:var(--brass-soft)}

        /* ---------- motion ---------- */
        .rv{opacity:0;transform:translateY(12px);transition:opacity .8s ease,transform .8s ease}
        .rv.in{opacity:1;transform:none}

        @media (max-width:900px){
          .feat{grid-template-columns:repeat(2,1fr)}
        }
        @media (max-width:820px){
          :root{--fs-statement:20px;--fs-h2:17px}
          .hero-facts{grid-template-columns:repeat(2,1fr)}
          .two,.steps,.cols,.profile,.spec{grid-template-columns:1fr}
          .step ul{grid-template-columns:1fr}
          .steps{gap:32px}
          .btn{width:100%;justify-content:center}
          .vrow{grid-template-columns:26px 1fr;gap:0 14px;padding:20px 0}
          .vrow .vnum{grid-column:1/-1;padding:0 0 8px}
          .vrow h4{grid-column:2}
          .vrow p{grid-column:2;margin-top:8px}
          .week li{width:30px;height:30px;font-size:11px}
        }
        @media (prefers-reduced-motion:reduce){
          *{transition:none!important;animation:none!important}
          .rv{opacity:1;transform:none}
          html{scroll-behavior:auto}
        }
        :focus-visible{outline:1px solid var(--brass);outline-offset:3px}
      `}</style>

      {/* icon sprite */}
      <svg style={{ display: 'none' }} aria-hidden="true">
        <symbol id="i-compass" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15.4 8.6l-2 4.8-4.8 2 2-4.8z"/></symbol>
        <symbol id="i-talk" viewBox="0 0 24 24"><path d="M4 5h16v10H9l-5 4z"/><path d="M8 9h8M8 12h5"/></symbol>
        <symbol id="i-code" viewBox="0 0 24 24"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4"/></symbol>
        <symbol id="i-mind" viewBox="0 0 24 24"><path d="M12 20c-4 0-7-2.7-7-6.4C5 8.9 8 5 12 5s7 3.9 7 8.6c0 3.7-3 6.4-7 6.4z"/><path d="M12 16v-3M10 12.2c0-1 .7-1.6 2-2.3"/></symbol>
        <symbol id="i-route" viewBox="0 0 24 24"><circle cx="6" cy="7" r="2"/><circle cx="18" cy="17" r="2"/><path d="M8 7h6a3 3 0 010 6h-4a3 3 0 000 6h6"/></symbol>
        <symbol id="i-map" viewBox="0 0 24 24"><path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2z"/><path d="M9 4v14M15 6v14"/></symbol>
        <symbol id="i-hands" viewBox="0 0 24 24"><path d="M3 12l4-4 5 4 5-4 4 4"/><path d="M7 8v8M17 8v8"/></symbol>
        <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="13" r="4"/><path d="M12 5v2M5 13H3M21 13h-2M6.5 7.5l1.4 1.4M17.5 7.5l-1.4 1.4"/></symbol>
        <symbol id="i-moon" viewBox="0 0 24 24"><path d="M19 14.5A8 8 0 019.5 5a7.5 7.5 0 109.5 9.5z"/></symbol>
        <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-9a3.6 3.6 0 017-1.4A3.6 3.6 0 0119 11c0 4.6-7 9-7 9z"/></symbol>
        <symbol id="i-flag" viewBox="0 0 24 24"><path d="M6 21V4"/><path d="M6 5h11l-2 3.5L17 12H6"/></symbol>
        <symbol id="i-key" viewBox="0 0 24 24"><circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H21M18 12v3M15 12v2"/></symbol>
        <symbol id="i-people" viewBox="0 0 24 24"><circle cx="9" cy="9" r="3"/><path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5"/><path d="M16 7.5a3 3 0 010 5.6M17.5 19c0-2-.8-3.7-2-4.7"/></symbol>
        <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/></symbol>
        <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 4l2.3 5 5.4.6-4 3.7 1.1 5.3-4.8-2.7-4.8 2.7L8.3 13.3l-4-3.7L9.7 9z"/></symbol>
        <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></symbol>
        <symbol id="i-tag" viewBox="0 0 24 24"><path d="M4 4h7l9 9-7 7-9-9z"/><circle cx="8" cy="8" r="1.2"/></symbol>
        <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"/></symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15M14 7l5 5-5 5"/></symbol>
        <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M15.5 15.5L20 20"/></symbol>
        <symbol id="i-doc" viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/></symbol>
      </svg>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <p className="brand">UIT-FUKUOKA / CAREER COUNSELING</p>
          <h1>日曜の夜に、<span className="accent">ワクワク</span>している。<br />そんなITエンジニアを、福岡から増やす。</h1>
          <p className="hero-lead">転職はゴールではなく、その人らしい人生を実現するための手段です。UIT-Fukuokaは求人紹介より先に、あなたのキャリアを整理することから始めます。</p>
          <div className="cta-row">
            <a className="btn" href="#apply">キャリア相談を申し込む<svg viewBox="0 0 24 24"><use href="#i-arrow" /></svg></a>
            <a className="btn btn--ghost" href="#philosophy">考え方を見る</a>
          </div>
          <p className="hero-note">対象：ITエンジニアの方　／　90分・1回　／　2026年12月まで無料</p>

          <dl className="hero-facts">
            <div><svg className="ico ico--light"><use href="#i-talk" /></svg><dt>SUPPORT</dt><dd>キャリア相談が中心</dd></div>
            <div><svg className="ico ico--light"><use href="#i-mind" /></svg><dt>METHOD</dt><dd>アドラー心理学</dd></div>
            <div><svg className="ico ico--light"><use href="#i-clock" /></svg><dt>CAREER</dt><dd>人材業界 約20年</dd></div>
            <div><svg className="ico ico--light"><use href="#i-map" /></svg><dt>AREA</dt><dd>福岡／全国対応</dd></div>
          </dl>
        </div>
      </header>

      {/* PHILOSOPHY */}
      <section className="sec sec--deep2" id="philosophy">
        <div className="wrap">
          <div className="phil-intro rv">
            <span className="label label--light">PHILOSOPHY</span>
            <h2>私たちが何を目指し、何を果たし、何を大切にするか。</h2>
          </div>

          {/* VISION */}
          <div className="chapter rv">
            <div className="chapter-head">
              <svg className="ico ico--light"><use href="#i-sun" /></svg>
              <span className="chapter-name">VISION</span>
              <span className="chapter-jp">目指す未来</span>
              <span className="chapter-num">01</span>
            </div>
            <p className="statement">日曜の夜にワクワクする、<br />ITエンジニアを増やす。</p>
            <p className="chapter-body">転職はゴールではなく、その人らしい人生を実現するための手段です。仕事を通じて自己実現し、社会へ貢献できる人を増やすことを目指します。</p>
            <ol className="week" aria-hidden="true">
              <li>月</li><li>火</li><li>水</li><li>木</li><li>金</li><li>土</li><li className="sun">日</li>
            </ol>
            <p className="week-cap">SUNDAY 21:00</p>
          </div>

          {/* MISSION */}
          <div className="chapter rv">
            <div className="chapter-head">
              <svg className="ico ico--light"><use href="#i-compass" /></svg>
              <span className="chapter-name">MISSION</span>
              <span className="chapter-jp">果たす使命</span>
              <span className="chapter-num">02</span>
            </div>
            <p className="statement">キャリアカウンセリングを通じて自分軸を明確にし、<br />納得できるキャリア選択を支援する。</p>
            <p className="chapter-body">アドラー心理学を活用し、一人ひとりの価値観や強み、人生の目的を整理し、その人にとって最適な選択を一緒に考えます。転職することも、今の会社で成長することも、どちらも尊重します。</p>
          </div>

          {/* VALUE */}
          <div className="chapter rv">
            <div className="chapter-head">
              <svg className="ico ico--light"><use href="#i-heart" /></svg>
              <span className="chapter-name">VALUE</span>
              <span className="chapter-jp">大切にする価値観・行動指針</span>
              <span className="chapter-num">03</span>
            </div>
            <p className="statement">5つの指針が、面談のすべてを支えています。</p>

            <div className="vlist">
              <div className="vrow">
                <span className="vnum">VALUE 01</span>
                <svg className="ico ico--light"><use href="#i-people" /></svg>
                <h4>相手の決断を尊重する</h4>
                <p>私たちは答えを押し付けません。その人自身が納得できる選択を支援します。</p>
              </div>
              <div className="vrow">
                <span className="vnum">VALUE 02</span>
                <svg className="ico ico--light"><use href="#i-compass" /></svg>
                <h4>自分軸を大切にする</h4>
                <p>条件ではなく、「どう生きたいか」を一緒に考えます。</p>
              </div>
              <div className="vrow">
                <span className="vnum">VALUE 03</span>
                <svg className="ico ico--light"><use href="#i-flag" /></svg>
                <h4>勇気づける</h4>
                <p>できない理由ではなく、できる可能性に目を向け、一歩踏み出す勇気を育みます。</p>
              </div>
              <div className="vrow">
                <span className="vnum">VALUE 04</span>
                <svg className="ico ico--light"><use href="#i-target" /></svg>
                <h4>適材適所を実現する</h4>
                <p>人にはそれぞれ強みがあります。その強みが最も発揮できる場所を、共に見つけます。</p>
              </div>
              <div className="vrow">
                <span className="vnum">VALUE 05</span>
                <svg className="ico ico--light"><use href="#i-star" /></svg>
                <h4>共同体感覚を大切にする</h4>
                <p>自己受容、他者信頼、他者貢献を土台に、自分だけの成功ではなく、人や社会への貢献を通して幸福を実現します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="sec sec--mist">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="label">OUR APPROACH</span>
            <h2>求人紹介より先に、キャリアを整理する。</h2>
            <p>一般的な転職エージェントは、求人紹介から始まります。私たちは、その順番を逆にしました。</p>
          </div>
          <div className="two rv">
            <div>
              <p className="two-tag">GENERAL AGENT</p>
              <svg className="ico"><use href="#i-search" /></svg>
              <h3>求人ありきで進む</h3>
              <p>条件に合う求人の紹介から始まるため、「そもそも自分は何を実現したいのか」が置き去りになりがちです。</p>
            </div>
            <div>
              <p className="two-tag">UIT-FUKUOKA</p>
              <svg className="ico"><use href="#i-compass" /></svg>
              <h3>キャリアの整理から始める</h3>
              <p>最初に行うのは、あなた自身の言葉を引き出すこと。次の4つを一緒に整理します。</p>
              <ul className="qlist">
                <li>何を実現したいのか</li>
                <li>どんな働き方をしたいのか</li>
                <li>どんな人生を送りたいのか</li>
                <li>5年後、10年後どうなっていたいのか</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="label">2 STEPS</span>
            <h2>UIT-Fukuokaの2ステップ支援</h2>
            <p>順番には意味があります。自分軸ができてから、はじめて企業を見る。だからミスマッチが起きにくくなります。</p>
          </div>
          <div className="steps rv">
            <article className="step">
              <div className="step-top">
                <svg className="ico ico--lg"><use href="#i-compass" /></svg>
                <p className="step-n">STEP 01</p>
              </div>
              <h3>キャリアデザイン</h3>
              <p>まずは、あなた自身を整理します。</p>
              <ul>
                <li>現在のスキル</li>
                <li>強み</li>
                <li>価値観</li>
                <li>仕事で大切にしたいこと</li>
                <li>将来なりたい姿</li>
                <li>実現したい生活</li>
              </ul>
              <p className="step-close">これらを整理し、自分軸を一緒につくります。</p>
            </article>
            <article className="step">
              <div className="step-top">
                <svg className="ico ico--lg"><use href="#i-route" /></svg>
                <p className="step-n">STEP 02</p>
              </div>
              <h3>転職サポート</h3>
              <p>キャリアプランが固まったあと、本当に転職が必要なら、あなたに合った企業をご紹介します。求人ありきではありません。あなたのキャリアプランに合った企業だけをご紹介します。</p>
              <p className="step-close">転職しないという結論も、同じように尊重します。</p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec sec--deep">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="label label--light">FEATURES</span>
            <h2>UIT-Fukuokaの4つの特徴</h2>
          </div>
          <div className="feat rv">
            <article>
              <p className="n">01</p>
              <svg className="ico ico--light"><use href="#i-talk" /></svg>
              <h3>キャリア相談が中心</h3>
              <p>求人紹介より、キャリア設計を大切にしています。</p>
            </article>
            <article>
              <p className="n">02</p>
              <svg className="ico ico--light"><use href="#i-code" /></svg>
              <h3>ITエンジニアに特化</h3>
              <p>ITエンジニアとして働く方を専門にサポートします。</p>
            </article>
            <article>
              <p className="n">03</p>
              <svg className="ico ico--light"><use href="#i-mind" /></svg>
              <h3>アドラー心理学を活用</h3>
              <p>条件だけでなく、「どういう人生にしたいか」まで考えます。</p>
            </article>
            <article>
              <p className="n">04</p>
              <svg className="ico ico--light"><use href="#i-hands" /></svg>
              <h3>転職を強要しない</h3>
              <p>転職しないという結論も尊重します。答えは押し付けません。</p>
            </article>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="label">FOR YOU</span>
            <h2>相談で得られること、こんな方におすすめ</h2>
          </div>
          <div className="cols rv">
            <div>
              <svg className="ico ico--lg"><use href="#i-key" /></svg>
              <h3>キャリア相談で得られること</h3>
              <ul className="plainlist">
                <li>将来の方向性が明確になる</li>
                <li>自分の強みが分かる</li>
                <li>働くイメージができる</li>
                <li>転職すべきか判断できる</li>
                <li>転職後のミスマッチを防げる</li>
                <li>自分軸が明確になる</li>
              </ul>
            </div>
            <div>
              <svg className="ico ico--lg"><use href="#i-user" /></svg>
              <h3>こんな方におすすめです</h3>
              <ul className="plainlist">
                <li>キャリアに迷っている</li>
                <li>転職すべきか悩んでいる</li>
                <li>将来が漠然と不安</li>
                <li>自分の強みを知りたい</li>
                <li>新しい企業で長く働きたい</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ANOTHER OPTION */}
      <section className="sec sec--mist">
        <div className="wrap narrow rv">
          <span className="label">ANOTHER OPTION</span>
          <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '16px' }}>転職しないという選択もあります。</h2>
          <p style={{ color: 'var(--slate)', fontSize: 'var(--fs-body)', lineHeight: '2.15' }}>キャリア相談をした結果、「今は転職しない」という結論になることもあります。それも立派なキャリアプランです。私たちは無理に転職を勧めることはありません。</p>
          <ul className="plainlist" style={{ marginTop: '20px', borderTop: '1px solid var(--line)' }}>
            <li>今の会社でもう少し経験を積む</li>
            <li>資格取得を優先する</li>
            <li>クラウドを学習する</li>
            <li>リーダー経験を積んでから転職する</li>
          </ul>
        </div>
      </section>

      {/* COUNSELOR */}
      <section className="sec sec--paper">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="label">COUNSELOR</span>
            <h2>話を聴くのは、こんな人間です。</h2>
          </div>
          <div className="profile rv">
            <div className="card">
              <figure className="portrait">
                <Image src="/images/kunitake.jpg" alt="キャリアカウンセラー 国武建次" width="462" height="480" loading="lazy" />
              </figure>
              <p className="name">国武 建次<span>KUNITAKE KENJI</span></p>
              <dl>
                <dt>BIRTH</dt><dd>1968年2月3日</dd>
                <dt>BASE</dt><dd>福岡県久留米市在住</dd>
                <dt>EDUCATION</dt><dd>九州産業大学 経営学部</dd>
                <dt>COMPANY</dt><dd><a className="ilink" href="https://www.sn-kikaku.co.jp/" target="_blank" rel="noopener noreferrer">株式会社新日本企画</a></dd>
              </dl>
              <ul className="badges">
                <li>キャリアコンサルタント（国家資格）</li>
                <li>アドラー心理学カウンセラー</li>
              </ul>
            </div>
            <div className="profile-body">
              <p>これまで人材業界で計約20年、企業と人材の架け橋の仕事をしてきました。直近はプログラミングの職業訓練校で、未経験からプログラマーを志望する求職者（職業訓練生）へのキャリアカウンセリングを8年間行っています。未経験でITエンジニアを志望する求職者とIT企業とのマッチングを中心に取り組んできました。</p>
              <p>今後は、福岡のIT企業と福岡で働きたいITエンジニア（経験者を含む）の適材適所に貢献していくことが目標です。転職希望者の悩みや希望を伺い、最適な新しい一歩を選べるよう全力でサポートいたします。</p>
              <p><a className="ilink" href="https://note.com/kuni_cc0702" target="_blank" rel="noopener noreferrer">noteにアドラー心理学のことを書いています</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section className="sec sec--deep2" id="apply">
        <div className="wrap narrow rv">
          <span className="label label--light">CAREER COUNSELING</span>
          <p className="statement apply-close">転職はゴールではありません。<br />「この選択をして良かった」と思える人生が、ゴールです。</p>
          <p style={{ color: '#9BA3B4', fontSize: 'var(--fs-body)', lineHeight: '2.15' }}>そのためにまず必要なのは、求人を探すことではなく、自分自身を知ること。あなたの理想のキャリアを、一緒に描いてみませんか。</p>

          <dl className="spec">
            <div><svg className="ico ico--light"><use href="#i-code" /></svg><dt>対象者</dt><dd>ITエンジニアの方</dd></div>
            <div><svg className="ico ico--light"><use href="#i-clock" /></svg><dt>時間</dt><dd>90分・1回</dd></div>
            <div><svg className="ico ico--light"><use href="#i-tag" /></svg><dt>費用</dt><dd className="free">無料<small>2026年12月まで</small></dd></div>
          </dl>

          <div className="cta-row">
            <a className="btn" href="#form">申込みフォームへ<svg viewBox="0 0 24 24"><use href="#i-arrow" /></svg></a>
          </div>
          <p className="fineprint">福岡以外（東京・大阪など）で働きたい方もご相談いただけます。</p>
        </div>
      </section>

      {/* 申込みフォーム（Googleフォーム埋め込み） */}
      <section className="sec sec--paper" id="form">
        <div className="wrap narrow rv">
          <div className="sec-head" style={{ marginBottom: '28px' }}>
            <span className="label">APPLICATION</span>
            <h2>キャリア相談 申込みフォーム</h2>
            <p>1分ほどで送信できます。折り返し、日程のご相談をメールでお返しします。</p>
          </div>

          <div className="formbox">
            <iframe
              src="https://forms.gle/CeH5rWxHqL33iyx96"
              title="キャリア相談 申込みフォーム"
              loading="lazy"
              width="100%"
              height="1180"
              style={{ border: 0, display: 'block', width: '100%' }}
            >
              読み込んでいます…
            </iframe>
          </div>

          <p className="form-note">
            フォームが表示されない場合は、
            <a className="ilink" href="https://forms.gle/CeH5rWxHqL33iyx96" target="_blank" rel="noopener noreferrer">こちらから直接ご記入いただけます</a>。
            ご記入いただいた個人情報は、キャリア相談のご連絡以外には使用いたしません。
          </p>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <div className="foot-top">
            <p className="foot-brand">UIT-Fukuoka<span>ユーアイティフクオカ ／ CAREER COUNSELING</span></p>
            <ul className="foot-links">
              <li><a href="https://uit-fukuoka-career-counseling-1.jimdosite.com/%E6%A6%82%E8%A6%81/" target="_blank" rel="noopener noreferrer">概要</a></li>
              <li><a href="https://uit-fukuoka-career-counseling-1.jimdosite.com/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC/" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a></li>
              <li><a href="https://note.com/kuni_cc0702" target="_blank" rel="noopener noreferrer">note</a></li>
              <li><a href="#form">お問合せ・お申込み</a></li>
            </ul>
          </div>
          <p style={{ margin: 0 }}>福岡へUIターンを希望される方、福岡で働きたいITエンジニアの方へ。ライフキャリアカウンセリングと、福岡での転職支援を行っています。</p>
          <p style={{ margin: '10px 0 0', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.14em' }}>© UIT-Fukuoka</p>
        </div>
      </footer>
    </div>
  );
}