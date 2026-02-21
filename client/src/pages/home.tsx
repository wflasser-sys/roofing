import {
  Shield, Hammer, ClipboardCheck, Phone, Mail, MapPin, Star,
  PlayCircle, CheckCircle2, Zap, ArrowRight, DollarSign,
  ChevronDown, AlertTriangle, Wind, Droplets, Sun, Home,
  Award, Clock, ThumbsUp, Wrench, Send, User, MessageSquare,
  Calendar, TrendingUp, HardHat, FileText
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const NAVY = "#0B1C2D";
const RED = "#C4161C";
const LIGHT_BG = "#F5F6F8";

/* ─────────────────────────────────────────
   FILE PLACEMENT (all go in client/public/)
   ─────────────────────────────────────────
   client/public/logo.png
   https://i.ibb.co/4ZTkjB6L/before-after.png
   client/public/videos/hero-roof.mp4
   ─────────────────────────────────────────
   Files in /public are served at root in
   both Vite dev AND production builds.
───────────────────────────────────────── */
const LOGO_SRC        = "/logo.png";
const BEFORE_AFTER_SRC = "https://i.ibb.co/4ZTkjB6L/before-after.png";
const HERO_VIDEO_SRC  = "/videos/hero-roof.mp4";

// ── Intersection Observer hook for scroll animations ──
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Animated counter ──
function AnimatedNumber({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const num = parseInt(target.replace(/\D/g, ""));
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 20);
    return () => clearInterval(timer);
  }, [inView, target]);
  const prefix = target.startsWith("$") ? "$" : "";
  const suf = target.includes("+") ? "+" : target.includes("%") ? "%" : suffix;
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suf}</span>;
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #0B1C2D;
    --red: #C4161C;
    --light-bg: #F5F6F8;
    --max-w: 1200px;
    --btn-r: 4px;
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'Barlow', sans-serif; color: var(--navy); background: #fff; overflow-x: hidden; }

  .container { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }

  /* ── SCROLL ANIMATIONS ── */
  .fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
  }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  .fade-left {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
  }
  .fade-left.visible { opacity: 1; transform: translateX(0); }
  .fade-right {
    opacity: 0;
    transform: translateX(40px);
    transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1);
  }
  .fade-right.visible { opacity: 1; transform: translateX(0); }
  .delay-1 { transition-delay: 0.1s !important; }
  .delay-2 { transition-delay: 0.2s !important; }
  .delay-3 { transition-delay: 0.3s !important; }
  .delay-4 { transition-delay: 0.4s !important; }
  .delay-5 { transition-delay: 0.5s !important; }
  .delay-6 { transition-delay: 0.6s !important; }

  /* ── AUTHORITY STRIP ── */
  .authority-strip {
    height: 44px; background: var(--red); color: #fff;
    font-family: 'Barlow Condensed', sans-serif; font-size: 13px;
    letter-spacing: 0.08em; text-transform: uppercase; display: flex; align-items: center;
  }
  .authority-inner { display: flex; justify-content: space-between; align-items: center; width: 100%; }
  .authority-badges { display: flex; gap: 24px; align-items: center; }
  .authority-badge { display: flex; align-items: center; gap: 6px; }
  .authority-right { display: flex; align-items: center; gap: 12px; font-weight: 700; }
  .authority-divider { width: 1px; height: 18px; background: rgba(255,255,255,0.35); }

  /* ── HEADER ── */
  .header {
    height: 90px; background: #fff; border-bottom: 1px solid #e5e7eb;
    position: sticky; top: 0; z-index: 50; display: flex; align-items: center;
    transition: box-shadow 0.3s;
  }
  .header.scrolled { box-shadow: 0 4px 24px rgba(11,28,45,0.1); }
  .header-inner { display: flex; justify-content: space-between; align-items: center; width: 100%; }
  .logo-img { height: 52px; object-fit: contain; }
  .logo-text {
    font-family: 'Barlow Condensed', sans-serif; font-size: 28px; font-weight: 800;
    color: var(--navy); letter-spacing: -0.02em; text-decoration: none;
  }
  .logo-text span { color: var(--red); }
  .nav { display: flex; gap: 32px; list-style: none; }
  .nav a {
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; color: var(--navy); text-decoration: none;
    transition: color 0.2s; position: relative;
  }
  .nav a::after {
    content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px;
    background: var(--red); transition: width 0.25s;
  }
  .nav a:hover::after { width: 100%; }
  .nav a:hover { color: var(--red); }
  .header-right { display: flex; align-items: center; gap: 24px; }
  .header-phone { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; }

  /* ── BUTTONS ── */
  .btn-primary {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 56px; padding: 0 28px; background: var(--red); color: #fff;
    font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; border: none;
    border-radius: var(--btn-r); cursor: pointer; text-decoration: none;
    box-shadow: 0 6px 20px rgba(196,22,28,0.28);
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .btn-primary:hover { background: #a81218; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(196,22,28,0.38); }
  .btn-outline {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 56px; padding: 0 28px; background: transparent; color: #fff;
    font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; border: 2px solid rgba(255,255,255,0.7);
    border-radius: var(--btn-r); cursor: pointer; text-decoration: none;
    transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  }
  .btn-outline:hover { background: #fff; color: var(--navy); border-color: #fff; transform: translateY(-2px); }
  .btn-navy {
    display: inline-flex; align-items: center; justify-content: center; gap: 8px;
    height: 56px; padding: 0 28px; background: var(--navy); color: #fff;
    font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; border: none;
    border-radius: var(--btn-r); cursor: pointer; text-decoration: none;
    box-shadow: 0 6px 20px rgba(11,28,45,0.25);
    transition: background 0.2s, transform 0.15s;
  }
  .btn-navy:hover { background: #162d45; transform: translateY(-2px); }

  /* ── HERO ── */
  .hero {
    position: relative; min-height: 90vh;
    display: flex; align-items: center; background: var(--navy); overflow: hidden;
  }
  .hero-video { position: absolute; inset: 0; z-index: 0; }
  .hero-video video { width: 100%; height: 100%; object-fit: cover; opacity: 0.55; }
  /* NO gradient overlay — removed per request */
  .hero-dark-base { position: absolute; inset: 0; background: rgba(11,28,45,0.45); z-index: 1; }
  .hero-content { position: relative; z-index: 10; padding: 120px 0; max-width: 760px; }
  .hero h1 {
    font-family: 'Barlow Condensed', sans-serif; font-size: clamp(38px, 6vw, 68px);
    font-weight: 900; line-height: 1.05; color: #fff; margin-bottom: 24px;
    text-transform: uppercase; animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) both;
  }
  .hero h1 span { color: var(--red); }
  .hero-sub {
    font-size: 20px; font-weight: 500; color: rgba(255,255,255,0.85); max-width: 600px;
    margin-bottom: 36px; line-height: 1.6;
    animation: heroFadeUp 0.9s 0.15s cubic-bezier(.22,1,.36,1) both;
  }
  .hero-btns {
    display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 52px;
    animation: heroFadeUp 0.9s 0.3s cubic-bezier(.22,1,.36,1) both;
  }
  .hero-trust {
    display: flex; flex-wrap: wrap; gap: 32px; color: rgba(255,255,255,0.65);
    animation: heroFadeUp 0.9s 0.45s cubic-bezier(.22,1,.36,1) both;
  }
  .hero-trust-item {
    display: flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase;
  }
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── STORM BANNER ── */
  .storm-banner {
    background: var(--navy); padding: 16px; text-align: center;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700;
    letter-spacing: 0.05em; text-transform: uppercase; color: #fff;
  }
  .storm-banner a { color: var(--red); text-decoration: underline; }

  /* ── TRUST LOGO STRIP ── */
  .trust-strip { background: var(--light-bg); padding: 52px 0; border-bottom: 1px solid #e5e7eb; }
  .trust-label {
    text-align: center; font-family: 'Barlow Condensed', sans-serif; font-size: 12px;
    font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
    color: rgba(11,28,45,0.35); margin-bottom: 32px;
  }
  .trust-logos { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 48px; }
  .trust-logo-item {
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    opacity: 0.55; transition: opacity 0.3s, transform 0.3s; cursor: default;
  }
  .trust-logo-item:hover { opacity: 1; transform: scale(1.06); }
  .trust-logo-item img { height: 44px; object-fit: contain; }
  .trust-logo-item span {
    font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--navy);
  }

  /* ── SECTIONS ── */
  .section { padding: 120px 0; }
  .section-light { background: var(--light-bg); }
  .section-white { background: #fff; }
  .section-navy { background: var(--navy); color: #fff; }

  .section-title {
    font-family: 'Barlow Condensed', sans-serif; font-size: clamp(32px, 4vw, 52px);
    font-weight: 900; line-height: 1.1; text-transform: uppercase;
  }
  .section-title span { color: var(--red); }
  .section-subtitle {
    font-size: 17px; color: rgba(11,28,45,0.6); line-height: 1.65; margin-top: 12px;
    max-width: 680px;
  }
  .red-bar { width: 64px; height: 4px; background: var(--red); margin-top: 14px; }
  .red-bar-center { margin-left: auto; margin-right: auto; }

  /* ── PROBLEM SECTION ── */
  .problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
  .problem-list { list-style: none; display: flex; flex-direction: column; gap: 18px; }
  .problem-item { display: flex; gap: 12px; align-items: flex-start; font-size: 17px; color: rgba(11,28,45,0.75); line-height: 1.5; }

  /* ── PROCESS ── */
  .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 64px; }
  .process-card {
    background: rgba(255,255,255,0.04); border-left: 3px solid var(--red);
    padding: 32px; position: relative; overflow: hidden;
    transition: background 0.3s, transform 0.3s;
  }
  .process-card:hover { background: rgba(255,255,255,0.08); transform: translateY(-4px); }
  .process-num {
    position: absolute; top: -12px; right: 12px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 100px; font-weight: 900;
    color: rgba(255,255,255,0.05); line-height: 1; pointer-events: none; user-select: none;
  }
  .process-icon { color: var(--red); margin-bottom: 16px; }
  .process-card h3 {
    font-family: 'Barlow Condensed', sans-serif; font-size: 20px; font-weight: 800;
    text-transform: uppercase; color: #fff; margin-bottom: 10px;
  }
  .process-card p { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; }

  /* ── METRICS ── */
  .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; text-align: center; }
  .metric-num {
    font-family: 'Barlow Condensed', sans-serif; font-size: 56px; font-weight: 900;
    color: var(--red); line-height: 1; margin-bottom: 8px;
  }
  .metric-label {
    font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700;
    letter-spacing: 0.12em; text-transform: uppercase; color: rgba(11,28,45,0.45);
  }

  /* ── SERVICES GRID ── */
  .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .service-card {
    border: 2px solid #eee; border-radius: 4px; overflow: hidden;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s; cursor: pointer;
  }
  .service-card:hover {
    border-color: var(--red); transform: translateY(-6px);
    box-shadow: 0 16px 48px rgba(196,22,28,0.12);
  }
  .service-img { position: relative; height: 220px; overflow: hidden; }
  .service-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
  .service-card:hover .service-img img { transform: scale(1.08); }
  .service-img-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 40%, rgba(11,28,45,0.65)); }
  .service-body { padding: 28px; }
  .service-body h3 {
    font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 800;
    text-transform: uppercase; margin-bottom: 10px;
  }
  .service-body p { font-size: 15px; color: rgba(11,28,45,0.65); line-height: 1.6; margin-bottom: 16px; }
  .service-link {
    display: inline-flex; align-items: center; gap: 6px; color: var(--red);
    font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; transition: gap 0.2s;
  }
  .service-link:hover { gap: 12px; }

  /* ── BEFORE / AFTER SLIDER ── */
  .ba-slider-wrap {
    position: relative; width: 100%; max-width: 900px; margin: 0 auto;
    border: 4px solid var(--navy); border-radius: 4px; overflow: hidden;
    user-select: none; cursor: col-resize;
    box-shadow: 0 24px 64px rgba(11,28,45,0.18);
  }
  .ba-img-after { width: 100%; display: block; }
  .ba-img-before-wrap {
    position: absolute; top: 0; left: 0; height: 100%; overflow: hidden;
    transition: width 0.0s;
  }
  .ba-img-before { width: 900px; max-width: 900px; height: 100%; object-fit: cover; display: block; }
  .ba-divider {
    position: absolute; top: 0; bottom: 0; width: 4px; background: #fff;
    cursor: col-resize; display: flex; align-items: center; justify-content: center;
    z-index: 10; transform: translateX(-2px);
    box-shadow: 0 0 12px rgba(0,0,0,0.4);
  }
  .ba-handle {
    width: 48px; height: 48px; background: #fff; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3); flex-shrink: 0;
    font-size: 18px; color: var(--navy); font-weight: 900; letter-spacing: -2px;
  }
  .ba-label-before, .ba-label-after {
    position: absolute; bottom: 16px; padding: 8px 16px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 800;
    letter-spacing: 0.1em; text-transform: uppercase; color: #fff; border-radius: 2px; z-index: 5;
  }
  .ba-label-before { left: 16px; background: rgba(11,28,45,0.85); }
  .ba-label-after { right: 16px; background: rgba(196,22,28,0.9); }

  /* ── STATIC BEFORE/AFTER GRID ── */
  .ba-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .ba-item { position: relative; height: 380px; overflow: hidden; border-radius: 4px; }
  .ba-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
  .ba-item:hover img { transform: scale(1.04); }
  .ba-label-bar {
    position: absolute; bottom: 0; left: 0; right: 0; padding: 14px 20px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 13px; font-weight: 800;
    letter-spacing: 0.1em; text-transform: uppercase; color: #fff;
  }
  .ba-item.before { border: 4px solid var(--navy); }
  .ba-item.before .ba-label-bar { background: var(--navy); }
  .ba-item.after { border: 4px solid var(--red); }
  .ba-item.after .ba-label-bar { background: var(--red); }

  /* ── WHY CHOOSE US ── */
  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .why-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 40px; }
  .why-stat { padding: 24px; background: rgba(255,255,255,0.05); border-left: 3px solid var(--red); }
  .why-stat-num { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 900; color: var(--red); margin-bottom: 4px; }
  .why-stat-label { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); }
  .why-authority { border: 4px solid var(--red); padding: 40px; background: rgba(11,28,45,0.5); backdrop-filter: blur(8px); }
  .why-authority h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 22px; font-weight: 800; text-transform: uppercase; color: #fff; margin-bottom: 24px; }
  .why-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
  .why-list-item { display: flex; gap: 12px; align-items: center; font-size: 15px; color: rgba(255,255,255,0.8); }

  /* ── DAMAGE TYPES ── */
  .damage-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .damage-card {
    background: #fff; border-top: 4px solid var(--red); padding: 32px 24px;
    text-align: center; border-radius: 0 0 4px 4px;
    box-shadow: 0 4px 20px rgba(11,28,45,0.07);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .damage-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(11,28,45,0.12); }
  .damage-icon { color: var(--red); margin: 0 auto 16px; display: block; }
  .damage-card h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; }
  .damage-card p { font-size: 14px; color: rgba(11,28,45,0.6); line-height: 1.55; }

  /* ── MATERIAL COMPARISON ── */
  .material-table { width: 100%; border-collapse: collapse; }
  .material-table th {
    background: var(--navy); color: #fff; padding: 16px 20px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; text-align: left;
  }
  .material-table th:first-child { border-radius: 4px 0 0 0; }
  .material-table th:last-child { border-radius: 0 4px 0 0; }
  .material-table td { padding: 14px 20px; font-size: 15px; border-bottom: 1px solid #eee; }
  .material-table tr:nth-child(even) td { background: var(--light-bg); }
  .material-table tr:hover td { background: rgba(196,22,28,0.04); }
  .check-cell { color: #16a34a; font-weight: 700; }
  .recommended-badge {
    display: inline-block; background: var(--red); color: #fff;
    font-family: 'Barlow Condensed', sans-serif; font-size: 10px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase; padding: 2px 8px; border-radius: 2px;
    margin-left: 8px;
  }

  /* ── VIDEO TESTIMONIALS ── */
  .video-scroll-wrap { overflow: hidden; position: relative; }
  .video-scroll { display: flex; gap: 24px; animation: scroll 40s linear infinite; padding: 12px 0; }
  .video-scroll:hover { animation-play-state: paused; }
  @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  .video-card { flex-shrink: 0; width: 280px; aspect-ratio: 9/16; position: relative; overflow: hidden; border-radius: 4px; cursor: pointer; box-shadow: 0 8px 28px rgba(11,28,45,0.18); }
  .video-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
  .video-card:hover img { transform: scale(1.06); }
  .video-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(11,28,45,0.85) 0%, rgba(11,28,45,0.1) 55%);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: background 0.3s;
  }
  .video-play { transition: transform 0.3s; }
  .video-card:hover .video-play { transform: scale(1.15); }
  .video-name { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; color: #fff; text-align: center; margin-top: 12px; }
  .video-loc { font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.55); }

  /* ── TEXT TESTIMONIALS ── */
  .testimonial-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .testimonial-card {
    background: #fff; border-left: 4px solid var(--red);
    padding: 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    transition: box-shadow 0.3s, transform 0.3s;
  }
  .testimonial-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.12); transform: translateY(-4px); }
  .stars { display: flex; gap: 3px; color: var(--red); margin-bottom: 16px; }
  .testimonial-text { font-size: 15px; color: var(--navy); line-height: 1.7; margin-bottom: 24px; font-style: italic; }
  .testimonial-meta { display: flex; justify-content: space-between; align-items: flex-end; }
  .testimonial-name { font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  .testimonial-loc { font-size: 11px; color: rgba(11,28,45,0.4); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }
  .testimonial-date { font-size: 11px; color: rgba(11,28,45,0.3); font-weight: 700; text-transform: uppercase; }

  /* ── GEO SECTION ── */
  .city-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px 24px; margin: 48px 0; }
  .city-item {
    font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.6);
    cursor: pointer; transition: color 0.2s, padding-left 0.2s; padding: 4px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .city-item:hover { color: var(--red); padding-left: 6px; }
  .geo-para { max-width: 780px; margin: 0 auto; text-align: center; color: rgba(255,255,255,0.6); line-height: 1.7; }

  /* ── FAQ ── */
  .faq-wrap { max-width: 800px; margin: 0 auto; }
  .faq-item { border-bottom: 1px solid #eaeaea; }
  .faq-q {
    width: 100%; display: flex; justify-content: space-between; align-items: center;
    padding: 24px 0; background: none; border: none; cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.04em; color: var(--navy); text-align: left;
    transition: color 0.2s;
  }
  .faq-q:hover { color: var(--red); }
  .faq-arrow { transition: transform 0.35s; color: var(--red); flex-shrink: 0; }
  .faq-arrow.open { transform: rotate(180deg); }
  .faq-a {
    font-size: 15px; color: rgba(11,28,45,0.65); line-height: 1.7; padding-bottom: 24px;
    animation: faqOpen 0.3s ease;
  }
  @keyframes faqOpen { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

  /* ── FINANCING ── */
  .financing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .financing-card {
    border: 2px solid var(--navy); padding: 48px;
    height: 420px; display: flex; flex-direction: column; justify-content: center;
    align-items: center; text-align: center; transition: border-color 0.3s, box-shadow 0.3s;
  }
  .financing-card:hover { border-color: var(--red); box-shadow: 0 12px 40px rgba(196,22,28,0.1); }
  .financing-card h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 28px; font-weight: 800; text-transform: uppercase; margin-bottom: 16px; }
  .financing-card p { color: rgba(11,28,45,0.55); margin-bottom: 32px; }
  .financing-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 32px; }
  .financing-item {
    display: flex; align-items: center; gap: 12px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700;
    letter-spacing: 0.04em; text-transform: uppercase; color: rgba(11,28,45,0.75);
  }

  /* ── CONTACT SECTION (light, no black) ── */
  .contact-section { background: var(--light-bg); padding: 120px 0; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .contact-info h2 { color: var(--navy); }
  .contact-info p { font-size: 17px; color: rgba(11,28,45,0.65); line-height: 1.7; margin-top: 16px; margin-bottom: 40px; }
  .contact-details { display: flex; flex-direction: column; gap: 20px; }
  .contact-detail-item {
    display: flex; align-items: center; gap: 16px;
    padding: 20px; background: #fff; border-left: 4px solid var(--red);
    box-shadow: 0 2px 12px rgba(11,28,45,0.06); transition: box-shadow 0.3s, transform 0.3s;
  }
  .contact-detail-item:hover { box-shadow: 0 6px 24px rgba(11,28,45,0.1); transform: translateX(4px); }
  .contact-detail-icon { color: var(--red); flex-shrink: 0; }
  .contact-detail-label { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(11,28,45,0.4); }
  .contact-detail-value { font-size: 16px; font-weight: 600; color: var(--navy); margin-top: 2px; }
  .contact-form { background: #fff; padding: 48px; box-shadow: 0 8px 40px rgba(11,28,45,0.1); border-top: 4px solid var(--red); }
  .contact-form h3 { font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 800; text-transform: uppercase; margin-bottom: 8px; }
  .contact-form-sub { font-size: 14px; color: rgba(11,28,45,0.5); margin-bottom: 28px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .form-label { font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(11,28,45,0.5); }
  .form-input, .form-select, .form-textarea {
    width: 100%; height: 52px; border: 1.5px solid #e3e3e3; padding: 0 16px;
    font-family: 'Barlow', sans-serif; font-size: 15px; color: var(--navy);
    border-radius: 4px; background: #fff; outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: var(--red); box-shadow: 0 0 0 3px rgba(196,22,28,0.1);
  }
  .form-textarea { height: 120px; padding: 12px 16px; resize: vertical; }
  .form-select { appearance: none; cursor: pointer; }

  /* ── PROJECTS GRID ── */
  .projects-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .project-item { position: relative; aspect-ratio: 1; overflow: hidden; background: var(--navy); cursor: pointer; }
  .project-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; opacity: 0.88; }
  .project-item:hover img { transform: scale(1.1); }
  .project-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(11,28,45,0.92) 0%, transparent 55%);
    opacity: 0; transition: opacity 0.35s;
    display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;
  }
  .project-item:hover .project-overlay { opacity: 1; }
  .project-loc { font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 800; text-transform: uppercase; color: #fff; }
  .project-type { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--red); margin-top: 3px; }

  /* ── FINAL CTA (light navy, not black) ── */
  .final-cta-section { background: var(--navy); padding: 140px 0; text-align: center; position: relative; overflow: hidden; }
  .final-cta-section::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(196,22,28,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
  .final-cta h2 {
    font-family: 'Barlow Condensed', sans-serif; font-size: clamp(36px, 5vw, 60px);
    font-weight: 900; line-height: 1.15; text-transform: uppercase;
    color: #fff; margin-bottom: 48px;
  }
  .final-cta h2 span { color: var(--red); }
  .final-cta-btn { max-width: 440px; width: 100%; height: 70px; font-size: 18px; box-shadow: 0 16px 48px rgba(196,22,28,0.4); margin-bottom: 40px; }
  .final-phone-label { font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 8px; }
  .final-phone { font-family: 'Barlow Condensed', sans-serif; font-size: clamp(32px, 5vw, 48px); font-weight: 900; color: #fff; }
  .final-cta-badges { display: flex; justify-content: center; gap: 32px; margin-top: 40px; flex-wrap: wrap; }
  .final-badge {
    display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.5);
    font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  }

  /* ── FOOTER ── */
  .footer { background: var(--navy); padding: 100px 0 0; border-top: 1px solid rgba(255,255,255,0.08); }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; color: rgba(255,255,255,0.5); }
  .footer-logo-img { height: 48px; object-fit: contain; margin-bottom: 20px; display: block; }
  .footer-logo-text { font-family: 'Barlow Condensed', sans-serif; font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 16px; display: block; }
  .footer-logo-text span { color: var(--red); }
  .footer-desc { max-width: 280px; font-size: 14px; line-height: 1.65; margin-bottom: 28px; }
  .footer-contact { display: flex; flex-direction: column; gap: 12px; }
  .footer-contact-item { display: flex; align-items: center; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.7); }
  .footer-col h4 { font-family: 'Barlow Condensed', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #fff; margin-bottom: 24px; }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .footer-col a { font-size: 14px; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s, padding-left 0.2s; }
  .footer-col a:hover { color: var(--red); padding-left: 4px; }
  .footer-certs { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 24px; }
  .footer-cert-badge {
    border: 1px solid rgba(255,255,255,0.2); padding: 6px 12px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 11px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.55);
    border-radius: 2px;
  }
  .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 60px; padding: 24px 0; text-align: center; font-size: 12px; color: rgba(255,255,255,0.3); }

  /* ── FLOATING CTA ── */
  .floating-cta { position: fixed; bottom: 32px; right: 32px; z-index: 99; transition: transform 0.35s, opacity 0.35s; }
  .floating-cta.hidden { transform: translateY(96px); opacity: 0; pointer-events: none; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .process-grid { grid-template-columns: repeat(2, 1fr); }
    .metrics-grid { grid-template-columns: repeat(2, 1fr); }
    .damage-grid { grid-template-columns: repeat(2, 1fr); }
    .services-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 768px) {
    .section { padding: 70px 0; }
    .authority-inner { flex-direction: column; gap: 6px; text-align: center; }
    .authority-badges { flex-wrap: wrap; justify-content: center; }
    .nav { display: none; }
    .header-phone { display: none; }
    .hero h1 { font-size: 38px; }
    .hero-content { padding: 70px 0; }
    .problem-grid, .financing-grid, .why-grid, .ba-grid, .contact-grid, .footer-grid { grid-template-columns: 1fr; }
    .services-grid, .testimonial-grid { grid-template-columns: 1fr; }
    .projects-grid, .city-grid { grid-template-columns: repeat(2, 1fr); }
    .metrics-grid, .damage-grid { grid-template-columns: repeat(2, 1fr); }
    .process-grid { grid-template-columns: 1fr; }
    .form-row { grid-template-columns: 1fr; }
    .authority-strip { height: auto; padding: 10px 0; }
    .final-cta-badges { gap: 16px; }
  }
`;

// ── Animated section wrapper ──
function Animate({ children, className = "", dir = "up", delay = 0, style = {} }) {
  const [ref, inView] = useInView(0.1);
  const base = dir === "left" ? "fade-left" : dir === "right" ? "fade-right" : "fade-up";
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <div ref={ref} className={`${base} ${delayClass} ${inView ? "visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

const faqs = [
  { q: "Will my insurance cover the full cost?", a: "In most storm damage cases, yes. Our team has processed $100M+ in claims with a 98% approval rate. We handle all documentation and adjuster meetings on your behalf — most homeowners pay $0 out of pocket." },
  { q: "How long does a full roof replacement take?", a: "Most residential replacements are completed in 1–2 days. We work efficiently without sacrificing quality, and we handle all cleanup and debris removal before we leave." },
  { q: "What warranties do you offer?", a: "We provide a lifetime workmanship warranty on all installations, plus manufacturer warranties from GAF and Owens Corning ranging from 30 years to lifetime coverage on materials." },
  { q: "What areas do you serve?", a: "We serve the entire Dallas-Fort Worth metroplex including Plano, Frisco, McKinney, Richardson, Allen, Carrollton, Irving, Arlington, and all surrounding cities within 60 miles." },
  { q: "How soon can you inspect after a storm?", a: "We offer same-day inspections in most cases. Call our direct line and we'll dispatch a certified inspector within hours. Drone assessment is included at no charge." },
  { q: "Do you handle commercial roofing?", a: "Yes — our commercial division handles flat roofs, TPO, EPDM, and metal roofing for businesses of all sizes. Free commercial assessments are available on request." },
];

// ── Before/After Slider Component ──
function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setPosition(pct);
  };

  const onMouseDown = (e) => { e.preventDefault(); setDragging(true); };
  const onMouseMove = (e) => { if (dragging) updatePosition(e.clientX); };
  const onMouseUp = () => setDragging(false);
  const onTouchMove = (e) => updatePosition(e.touches[0].clientX);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="ba-slider-wrap"
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* After image (full width, base layer) */}
      <img src={BEFORE_AFTER_SRC} alt="After roof replacement" className="ba-img-after" style={{ display: "block", width: "100%" }} />

      {/* Before image (clipped) */}
      <div className="ba-img-before-wrap" style={{ width: `${position}%` }}>
        <img
          src={BEFORE_AFTER_SRC}
          alt="Before roof damage"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth + "px" : "900px", height: "100%", objectFit: "cover", objectPosition: "left", display: "block", filter: "sepia(0.4) contrast(0.9)" }}
        />
      </div>

      {/* Divider handle */}
      <div className="ba-divider" style={{ left: `${position}%` }}>
        <div className="ba-handle">◀▶</div>
      </div>

      {/* Labels */}
      <div className="ba-label-before">Before</div>
      <div className="ba-label-after">After</div>
    </div>
  );
}

export default function ApexRoofing() {
  const [showCTA, setShowCTA] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 800);
      setHeaderScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <>
      <style>{styles}</style>

      {/* ── FLOATING CTA ── */}
      <div className={`floating-cta${showCTA ? "" : " hidden"}`}>
        <a href="#contact" className="btn-primary" style={{ height: 60, fontSize: 14, gap: 8, boxShadow: "0 8px 32px rgba(196,22,28,0.45)" }}>
          <Phone size={17} /> Get Free Quote
        </a>
      </div>

      {/* ── AUTHORITY STRIP ── */}
      <div className="authority-strip">
        <div className="container" style={{ width: "100%" }}>
          <div className="authority-inner">
            <div className="authority-badges">
              <span className="authority-badge"><Shield size={13} /> Licensed &amp; Insured</span>
              <span className="authority-badge"><Star size={13} /> 5-Star Rated</span>
              <span className="authority-badge"><Award size={13} /> BBB Accredited</span>
              <span className="authority-badge"><Clock size={13} /> 25+ Years Experience</span>
            </div>
            <div className="authority-right">
              <Phone size={13} />
              <span>(214) 555-0123</span>
              <span className="authority-divider" />
              <span>Same-Day Inspections Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className={`header${headerScrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            {/* Logo — tries image first, falls back to text */}
            <a href="/">
              <img
                src={LOGO_SRC}
                alt="Apex Roofing"
                className="logo-img"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="logo-text" style={{ display: "none" }}>APEX <span>ROOFING</span></span>
            </a>
            <nav>
              <ul className="nav">
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#before-after">Before &amp; After</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#financing">Financing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <div className="header-right">
              <span className="header-phone">(214) 555-0123</span>
              <a href="#contact" className="btn-primary" style={{ height: 48, padding: "0 22px", fontSize: 14 }}>Free Quote</a>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-video">
          <video src={HERO_VIDEO_SRC} autoPlay loop muted playsInline />
        </div>
        {/* Subtle dark base only — no gradient */}
        <div className="hero-dark-base" />
        <div className="container">
          <div className="hero-content">
            <h1>Dallas' Authority In <br /><span>Premium Roofing</span></h1>
            <p className="hero-sub">
              Structural excellence and insurance claim mastery for homeowners who demand the best.
              25+ years of local dominance across the DFW metroplex.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Schedule Free Inspection</a>
              <a href="#contact" className="btn-outline">Get Instant Estimate</a>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-item"><Shield size={14} style={{ color: RED }} /> Licensed &amp; Insured</span>
              <span className="hero-trust-item"><Star size={14} style={{ color: RED }} /> 5-Star Rated</span>
              <span className="hero-trust-item"><Hammer size={14} style={{ color: RED }} /> Lifetime Warranty</span>
              <span className="hero-trust-item"><Clock size={14} style={{ color: RED }} /> Same-Day Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORM ALERT BANNER ── */}
      <div className="storm-banner">
        <AlertTriangle size={17} style={{ color: RED }} />
        <span>⚡ Storm Alert: Severe hail reported across DFW — <a href="#contact">schedule your free inspection today</a> before your claim window closes.</span>
      </div>

      {/* ── TRUST LOGO STRIP ── */}
      <div className="trust-strip">
        <div className="container">
          <p className="trust-label">Certified By Industry's Most Trusted Names</p>
          <div className="trust-logos">
            {/* Company logo */}
            <div className="trust-logo-item">
              <img src={LOGO_SRC} alt="Apex Roofing" onError={(e) => { e.target.style.display = "none"; }} />
            </div>
            <div className="trust-logo-item">
              <img src="https://www.gaf.com/-/media/images/navigation/footer/gaf/logo-footer.svg?as=0&width=168" alt="GAF" />
              <span>GAF Certified</span>
            </div>
            <div className="trust-logo-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Owens_Corning_logo.svg/320px-Owens_Corning_logo.svg.png" alt="Owens Corning" />
              <span>Preferred Contractor</span>
            </div>
            <div className="trust-logo-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/BBB-logo.jpg/320px-BBB-logo.jpg" alt="BBB" />
              <span>A+ Rated</span>
            </div>
            <div className="trust-logo-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjE3IbOFclX4cyMokQsgu7hDSn6iAHG83ZTw&s" alt="Google Reviews" />
              <span>5-Star Google</span>
            </div>
            <div className="trust-logo-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Angi_logo.svg/320px-Angi_logo.svg.png" alt="Angi" onError={(e) => e.target.style.display="none"} />
              <span>Angi Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <section className="section section-white">
        <div className="container">
          <div className="problem-grid">
            <Animate dir="left">
              <h2 className="section-title">Storm Damage, Leaks, or <br /><span>Insurance Confusion?</span></h2>
              <div className="red-bar" style={{ marginTop: 16, marginBottom: 24 }} />
              <p style={{ fontSize: 17, color: "rgba(11,28,45,0.65)", lineHeight: 1.7 }}>
                Apex Roofing handles everything from initial drone inspection to final warranty walkthrough. We navigate the complex insurance landscape so you don't have to.
              </p>
              <a href="#contact" className="btn-primary" style={{ marginTop: 32 }}>Get Free Assessment</a>
            </Animate>
            <Animate dir="right">
              <ul className="problem-list">
                {[
                  "Hail or wind damage not caught until it's too late",
                  "Insurance companies underpaying or denying valid claims",
                  "Contractors who install shingles but don't understand structure",
                  "Leaks that worsen every rain season without proper diagnosis",
                  "Warranties that don't cover what you think they do",
                  "Overpriced quotes with no transparency on materials",
                ].map((item, i) => (
                  <li key={i} className="problem-item">
                    <CheckCircle2 size={20} style={{ color: RED, flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── DAMAGE TYPES ── */}
      <section className="section section-light">
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 className="section-title" style={{ textAlign: "center" }}>We Handle Every Type of <span>Roof Damage</span></h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 12 }} />
            </div>
          </Animate>
          <div className="damage-grid">
            {[
              { icon: Wind, title: "Wind Damage", desc: "Lifted shingles, torn flashing, and structural compromise from high-velocity Texas winds." },
              { icon: Droplets, title: "Hail Damage", desc: "Impact bruising, granule loss, and hidden structural damage from hailstorms — we document it all." },
              { icon: Sun, title: "UV & Age Wear", desc: "Blistering, cracking, and premature aging caused by intense Texas sun and heat cycles." },
              { icon: Home, title: "Structural Damage", desc: "Sagging decks, rotted sheathing, and compromised rafters that require expert structural repair." },
            ].map((item, i) => (
              <Animate key={i} delay={i + 1}>
                <div className="damage-card">
                  <item.icon size={36} className="damage-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section section-navy" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=60" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.1 }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="why-grid">
            <Animate dir="left">
              <h2 className="section-title" style={{ color: "#fff" }}>Built To Protect Your <br /><span>Home For Decades</span></h2>
              <div className="red-bar" style={{ marginTop: 16, marginBottom: 20 }} />
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
                We aren't just contractors — we are insurance claim specialists and structural experts. While others install shingles, we fortify your home's most vital asset against Texas storms.
              </p>
              <div className="why-stats" style={{ marginTop: 32 }}>
                {[
                  { num: "25+", label: "Years Experience" },
                  { num: "$100M+", label: "Claims Managed" },
                  { num: "98%", label: "Approval Rate" },
                  { num: "5000+", label: "Roofs Replaced" },
                ].map((s, i) => (
                  <div key={i} className="why-stat">
                    <div className="why-stat-num"><AnimatedNumber target={s.num} /></div>
                    <div className="why-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </Animate>
            <Animate dir="right">
              <div className="why-authority">
                <h3>The Apex Difference</h3>
                <ul className="why-list">
                  {[
                    "Premium GAF & Owens Corning Materials",
                    "Lifetime Workmanship Warranty",
                    "Maximum Storm Resilience Ratings",
                    "Increased Property Resale Value",
                    "Full Insurance Claim Navigation",
                    "Drone-Assisted Roof Inspections",
                    "24/7 Emergency Response",
                    "Clean Jobsite Guarantee",
                  ].map((item, i) => (
                    <li key={i} className="why-list-item">
                      <CheckCircle2 size={17} style={{ color: RED, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section id="process" className="section section-navy" style={{ paddingTop: 0 }}>
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center", paddingTop: 64, marginBottom: 0 }}>
              <h2 className="section-title" style={{ color: "#fff" }}>Our 6-Step Process</h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 14 }} />
              <p style={{ color: "rgba(255,255,255,0.55)", marginTop: 16, fontSize: 16 }}>Transparent, efficient, and stress-free — from first call to final walkthrough.</p>
            </div>
          </Animate>
          <div className="process-grid" style={{ marginTop: 56 }}>
            {[
              { step: "01", icon: Shield, title: "Free Inspection", desc: "Drone + physical assessment. Full documentation for your insurance claim at no charge." },
              { step: "02", icon: FileText, title: "Insurance Support", desc: "We attend the adjuster meeting, document every detail, and advocate for your full claim value." },
              { step: "03", icon: ClipboardCheck, title: "Scope of Work", desc: "Detailed written proposal with material specs, timeline, and complete cost transparency." },
              { step: "04", icon: HardHat, title: "Material Delivery", desc: "Premium GAF or Owens Corning materials delivered directly — no bait-and-switch substitutions." },
              { step: "05", icon: Hammer, title: "Professional Install", desc: "Clean, efficient installation by our specialized certified crews. Jobsite cleaned daily." },
              { step: "06", icon: CheckCircle2, title: "Final Warranty", desc: "Walkthrough, photo documentation, and delivery of your lifetime warranty paperwork." },
            ].map((item, i) => (
              <Animate key={i} delay={Math.min(i + 1, 6)}>
                <div className="process-card">
                  <span className="process-num">{item.step}</span>
                  <item.icon size={26} className="process-icon" style={{ color: RED }} />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="section section-light">
        <div className="container">
          <div className="metrics-grid">
            {[
              { num: "5000", label: "Roofs Replaced", suffix: "+" },
              { num: "100", label: "Million in Claims", prefix: "$", suffix: "M+" },
              { num: "98", label: "Claim Approval Rate", suffix: "%" },
              { num: "25", label: "Years in DFW", suffix: "+" },
            ].map((m, i) => (
              <Animate key={i} delay={i + 1} style={{ textAlign: "center" }}>
                <div className="metric-num">
                  {m.prefix}{m.suffix?.includes("M") ? (
                    <><AnimatedNumber target="100" />{m.suffix}</>
                  ) : (
                    <><AnimatedNumber target={m.num.toString()} />{m.suffix}</>
                  )}
                </div>
                <div className="metric-label">{m.label}</div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="services" className="section section-white">
        <div className="container">
          <Animate>
            <h2 className="section-title">Our Services</h2>
            <div className="red-bar" style={{ marginBottom: 52 }} />
          </Animate>
          <div className="services-grid">
            {[
              { icon: Hammer, title: "Roof Replacement", desc: "Complete tear-off and installation using premium GAF or Owens Corning materials. Lifetime warranty included.", link: "/roof-replacement", image: "https://temaroofingservices.com/wp-content/uploads/2023/09/Professional-roofers-during-a-commercial-roof-replacement.--1030x687.jpg" },
              { icon: Zap, title: "Storm Damage Repair", desc: "24/7 emergency response for hail and wind damage. Full insurance claim assistance from inspection to completion.", link: "/storm-damage", image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=600&q=80" },
              { icon: ClipboardCheck, title: "Insurance Claims", desc: "Expert navigation of the insurance process. $100M+ in claims processed with a 98% approval rate.", link: "/insurance-claims", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
              { icon: Shield, title: "Free Inspections", desc: "Advanced drone and manual inspections. Catch problems early before they become expensive disasters.", link: "/inspections", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80" },
              { icon: Wrench, title: "Emergency Repairs", desc: "Rapid deployment crews available 24/7 for leaks and structural compromises. Priority response guaranteed.", link: "/#services", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80" },
              { icon: TrendingUp, title: "Roof Maintenance", desc: "Annual inspection and maintenance programs to extend roof life. Priority service and exclusive discounts included.", link: "/#services", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80" },
            ].map((s, i) => (
              <Animate key={i} delay={Math.min(i + 1, 6)}>
                <div className="service-card">
                  <div className="service-img">
                    <img src={s.image} alt={s.title} />
                    <div className="service-img-overlay" />
                  </div>
                  <div className="service-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <a href={s.link} className="service-link">Learn More <ArrowRight size={14} /></a>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER — INTERACTIVE SLIDER ── */}
      <section id="before-after" className="section section-light">
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 className="section-title">See The <span>Apex Difference</span></h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 12 }} />
              <p className="section-subtitle" style={{ margin: "16px auto 0", textAlign: "center" }}>
                Drag the slider to compare before and after. Real results from a real Dallas-area project.
              </p>
            </div>
          </Animate>

          {/* Interactive slider using your before-after.png */}
          <Animate>
            <BeforeAfterSlider />
          </Animate>

          {/* Static grid below for additional pairs */}
          <div className="ba-grid" style={{ marginTop: 32 }}>
            <Animate dir="left">
              <div className="ba-item before">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Before hail damage" />
                <div className="ba-label-bar">Before: Hail Damage</div>
              </div>
            </Animate>
            <Animate dir="right">
              <div className="ba-item after">
                <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80" alt="After GAF install" />
                <div className="ba-label-bar">After: Premium GAF Install</div>
              </div>
            </Animate>
          </div>
          <div className="ba-grid" style={{ marginTop: 28 }}>
            <Animate dir="left">
              <div className="ba-item before">
                <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80" alt="Before wind damage" />
                <div className="ba-label-bar">Before: Wind Damage</div>
              </div>
            </Animate>
            <Animate dir="right">
              <div className="ba-item after">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="After architectural shingles" />
                <div className="ba-label-bar">After: Architectural Shingles</div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── MATERIAL COMPARISON TABLE ── */}
      <section className="section section-white">
        <div className="container">
          <Animate>
            <div style={{ marginBottom: 48 }}>
              <h2 className="section-title">Roofing Material <span>Comparison</span></h2>
              <div className="red-bar" style={{ marginTop: 12 }} />
              <p className="section-subtitle" style={{ marginTop: 16 }}>We help you choose the right material for your home, budget, and Texas climate.</p>
            </div>
          </Animate>
          <Animate>
            <div style={{ overflowX: "auto" }}>
              <table className="material-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Lifespan</th>
                    <th>Wind Rating</th>
                    <th>Hail Resistance</th>
                    <th>Warranty</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { mat: <>GAF Timberline HDZ <span className="recommended-badge">We Recommend</span></>, life: "30-50 yrs", wind: "130 mph", hail: "Class 4 ✓", warranty: "Lifetime", best: "Most homes" },
                    { mat: "Owens Corning Duration", life: "30-40 yrs", wind: "130 mph", hail: "Class 4 ✓", warranty: "Lifetime", best: "Value-focused" },
                    { mat: "Architectural Shingles", life: "25-30 yrs", wind: "110 mph", hail: "Class 3", warranty: "30 years", best: "Budget-conscious" },
                    { mat: "Metal Roofing", life: "40-70 yrs", wind: "140 mph", hail: "Class 4 ✓", warranty: "Lifetime", best: "Long-term investment" },
                    { mat: "Cedar Shake", life: "30-40 yrs", wind: "100 mph", hail: "Class 2", warranty: "20 years", best: "Aesthetic-driven" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600 }}>{row.mat}</td>
                      <td>{row.life}</td>
                      <td>{row.wind}</td>
                      <td className={row.hail.includes("✓") ? "check-cell" : ""}>{row.hail}</td>
                      <td>{row.warranty}</td>
                      <td>{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section id="projects" className="section section-light">
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <h2 className="section-title">Completed Projects</h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 12 }} />
              <p style={{ marginTop: 8, fontSize: 12, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(11,28,45,0.35)" }}>Industrial Grade Residential Excellence</p>
            </div>
          </Animate>
          <div className="projects-grid">
            {[
              { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80", loc: "Highland Park", type: "GAF Timberline HDZ" },
              { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", loc: "North Dallas", type: "Owens Corning Duration" },
              { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80", loc: "Plano, TX", type: "Architectural Slate" },
              { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", loc: "Frisco, TX", type: "Premium Cedar Shake" },
              { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80", loc: "Richardson, TX", type: "Designer Shingles" },
              { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80", loc: "McKinney, TX", type: "Storm-Resistant HDZ" },
              { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&q=80", loc: "Allen, TX", type: "Charcoal Black" },
              { src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80", loc: "Carrollton, TX", type: "Weathered Wood" },
            ].map((p, i) => (
              <div key={i} className="project-item">
                <img src={p.src} alt={p.loc} />
                <div className="project-overlay">
                  <div className="project-loc">{p.loc}</div>
                  <div className="project-type">{p.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ── */}
      <section className="section section-white" style={{ overflow: "hidden" }}>
        <div className="container" style={{ marginBottom: 48 }}>
          <Animate>
            <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
              <h2 className="section-title">Real Results. <br /><span>Real Dallas Homeowners.</span></h2>
              <p style={{ marginTop: 16, fontSize: 17, color: "rgba(11,28,45,0.6)", lineHeight: 1.65 }}>
                Don't just take our word for it — hear directly from Dallas-area homeowners we've helped.
              </p>
            </div>
          </Animate>
        </div>
        <div className="video-scroll-wrap">
          <div className="video-scroll">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} style={{ display: "flex", gap: 24, flexShrink: 0 }}>
                {[
                  { name: "Michael Thompson", loc: "Highland Park", thumb: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80" },
                  { name: "Sarah Williams", loc: "North Dallas", thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
                  { name: "David Miller", loc: "Plano", thumb: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80" },
                  { name: "Jennifer Garcia", loc: "Richardson", thumb: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" },
                  { name: "Robert Chen", loc: "Frisco", thumb: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80" },
                ].map((v, i) => (
                  <div key={i} className="video-card">
                    <img src={v.thumb} alt={v.name} />
                    <div className="video-overlay">
                      <PlayCircle size={64} color="#fff" className="video-play" />
                      <div className="video-name">{v.name}</div>
                      <div className="video-loc">{v.loc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEXT TESTIMONIALS ── */}
      <section className="section section-light">
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">What Our Clients Say</h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 12 }} />
            </div>
          </Animate>
          <div className="testimonial-grid">
            {[
              { name: "Michael Thompson", loc: "Highland Park", text: "Apex saved my roof after the 2024 hail storm. They handled everything from inspection to insurance. I didn't pay a penny out of pocket and now have a brand new roof with a lifetime warranty.", date: "2 weeks ago" },
              { name: "Sarah Williams", loc: "North Dallas", text: "Professional, fast, and they got my insurance to cover everything. The crew was respectful and cleaned up perfectly. I've already recommended them to three neighbors.", date: "1 month ago" },
              { name: "David Miller", loc: "Plano", text: "The lifetime warranty gave me total peace of mind. Best contractor in TX. They found damage I didn't know existed and my adjuster approved everything.", date: "3 weeks ago" },
              { name: "Jennifer Garcia", loc: "Richardson", text: "Apex came out within 24 hours after our hail storm for a free inspection. Drone footage, documentation, full claim handling. Professional from start to finish.", date: "1 month ago" },
              { name: "Robert Chen", loc: "Frisco", text: "They got my claim approved for $28,000. Skeptical at first, but Apex knew exactly what to document. The new roof looks incredible and boosted my home's value.", date: "2 months ago" },
              { name: "Amanda Rodriguez", loc: "McKinney", text: "Emergency Sunday night leak — they were on-site in 2 hours. Followed up with a full replacement covered by insurance. This is how roofing should be done.", date: "3 weeks ago" },
            ].map((t, i) => (
              <Animate key={i} delay={Math.min(i + 1, 6)}>
                <div className="testimonial-card">
                  <div className="stars">{[1,2,3,4,5].map(s => <Star key={s} size={16} fill={RED} color={RED} />)}</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-meta">
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-loc">{t.loc}</div>
                    </div>
                    <div className="testimonial-date">{t.date}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEO AREA ── */}
      <section className="section section-navy">
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center" }}>
              <h2 className="section-title" style={{ color: "#fff" }}>Serving All of <span>DFW</span></h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 12 }} />
            </div>
          </Animate>
          <div className="city-grid">
            {["Dallas", "Plano", "Frisco", "McKinney", "Allen", "Richardson", "Carrollton", "Irving", "Garland", "Mesquite", "Arlington", "Fort Worth", "Denton", "Lewisville", "Flower Mound", "The Colony"].map((city, i) => (
              <span key={i} className="city-item">{city}</span>
            ))}
          </div>
          <p className="geo-para">
            Apex Roofing serves the entire Dallas-Fort Worth metroplex. Our crews reach any DFW address within 2 hours for emergency calls and offer same-day inspections across all service areas.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-white">
        <div className="container">
          <Animate>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
              <div className="red-bar red-bar-center" style={{ marginTop: 12 }} />
            </div>
          </Animate>
          <div className="faq-wrap">
            {faqs.map((faq, i) => (
              <Animate key={i} delay={1}>
                <div className="faq-item">
                  <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <ChevronDown size={20} className={`faq-arrow${openFaq === i ? " open" : ""}`} />
                  </button>
                  {openFaq === i && <p className="faq-a">{faq.a}</p>}
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINANCING ── */}
      <section id="financing" className="section section-light">
        <div className="container">
          <div className="financing-grid">
            <Animate dir="left">
              <h2 className="section-title">Flexible Financing <br /><span>Available Today</span></h2>
              <p style={{ marginTop: 20, marginBottom: 32, fontSize: 17, color: "rgba(11,28,45,0.65)", lineHeight: 1.7 }}>
                A premium roof shouldn't be a financial burden. Fast approval, low monthly payments, and zero upfront costs for qualified homeowners.
              </p>
              <div className="financing-list">
                {[
                  { icon: DollarSign, text: "0% Interest Options Available" },
                  { icon: ThumbsUp, text: "No Upfront Payments Required" },
                  { icon: Clock, text: "60-Second Approval Process" },
                  { icon: CheckCircle2, text: "Won't Affect Your Credit Score" },
                ].map((item, i) => (
                  <div key={i} className="financing-item">
                    <item.icon size={18} style={{ color: RED, flexShrink: 0 }} />
                    {item.text}
                  </div>
                ))}
              </div>
            </Animate>
            <Animate dir="right">
              <div className="financing-card">
                <img src={LOGO_SRC} alt="Apex Roofing" style={{ height: 48, objectFit: "contain", marginBottom: 24 }} onError={(e) => e.target.style.display="none"} />
                <h3>Check Your Options</h3>
                <p>Get a financing decision in seconds — no hard credit pull required.</p>
                <a href="#contact" className="btn-primary" style={{ width: "100%" }}>Check Financing Options</a>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION (light bg, no black) ── */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <Animate dir="left">
              <div className="contact-info">
                <img src={LOGO_SRC} alt="Apex Roofing" style={{ height: 52, objectFit: "contain", marginBottom: 24 }} onError={(e) => e.target.style.display="none"} />
                <h2 className="section-title">Get Your Free <br /><span>Roof Inspection</span></h2>
                <div className="red-bar" style={{ marginTop: 14 }} />
                <p>Our certified inspectors will assess your roof, document all damage, and walk you through your options — at absolutely no cost to you.</p>
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <Phone size={22} className="contact-detail-icon" />
                    <div>
                      <div className="contact-detail-label">Call Us Anytime</div>
                      <div className="contact-detail-value">(214) 555-0123</div>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <Mail size={22} className="contact-detail-icon" />
                    <div>
                      <div className="contact-detail-label">Email Us</div>
                      <div className="contact-detail-value">info@apexroofing.com</div>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <MapPin size={22} className="contact-detail-icon" />
                    <div>
                      <div className="contact-detail-label">Service Area</div>
                      <div className="contact-detail-value">Dallas-Fort Worth, TX</div>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <Clock size={22} className="contact-detail-icon" />
                    <div>
                      <div className="contact-detail-label">Hours</div>
                      <div className="contact-detail-value">Mon–Sat 7am–7pm | Emergency 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
            <Animate dir="right">
              <div className="contact-form">
                {formSent ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <CheckCircle2 size={56} style={{ color: RED, margin: "0 auto 20px" }} />
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 800, textTransform: "uppercase", marginBottom: 12 }}>We'll Be In Touch!</h3>
                    <p style={{ color: "rgba(11,28,45,0.6)" }}>Our team will contact you within 2 hours to schedule your free inspection.</p>
                  </div>
                ) : (
                  <>
                    <h3>Request Free Inspection</h3>
                    <p className="contact-form-sub">Fill out the form and we'll contact you within 2 hours.</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">Full Name *</label>
                          <input className="form-input" type="text" placeholder="John Smith" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Phone Number *</label>
                          <input className="form-input" type="tel" placeholder="(214) 000-0000" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input className="form-input" type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Service Needed *</label>
                        <select className="form-select form-input" required value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                          <option value="">Select a service...</option>
                          <option>Free Roof Inspection</option>
                          <option>Insurance Claim Assistance</option>
                          <option>Full Roof Replacement</option>
                          <option>Storm Damage Repair</option>
                          <option>Emergency Repair</option>
                          <option>Roof Maintenance</option>
                          <option>Commercial Roofing</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Message / Notes</label>
                        <textarea className="form-textarea" placeholder="Tell us about your roof situation..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                      </div>
                      <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 8 }}>
                        <Send size={16} /> Submit Request
                      </button>
                      <p style={{ fontSize: 12, color: "rgba(11,28,45,0.4)", textAlign: "center", marginTop: 12 }}>
                        No spam. We'll only contact you about your roofing needs.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (navy, not black) ── */}
      <section className="final-cta-section">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Animate>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div className="final-cta">
                <h2>Don't Wait Until Minor Damage <br />Becomes A <span>Major Expense</span></h2>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <a href="#contact" className="btn-primary final-cta-btn">Schedule Free Roof Inspection</a>
                  <div className="final-phone-label">Direct Office Line</div>
                  <div className="final-phone">(214) 555-0123</div>
                  <div className="final-cta-badges">
                    <span className="final-badge"><Shield size={14} /> Licensed &amp; Insured</span>
                    <span className="final-badge"><Award size={14} /> BBB Accredited</span>
                    <span className="final-badge"><CheckCircle2 size={14} /> Lifetime Warranty</span>
                    <span className="final-badge"><Clock size={14} /> Same-Day Response</span>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src={LOGO_SRC} alt="Apex Roofing" className="footer-logo-img" onError={(e) => { e.target.style.display="none"; e.target.nextSibling.style.display="block"; }} />
              <span className="footer-logo-text" style={{ display: "none" }}>APEX <span>ROOFING</span></span>
              <p className="footer-desc">Professional residential and commercial roofing contractor serving the greater Dallas-Fort Worth area. Licensed, insured, and certified by the industry's leading manufacturers.</p>
              <div className="footer-contact">
                <div className="footer-contact-item"><MapPin size={14} style={{ color: RED }} /> Dallas, TX 75201</div>
                <div className="footer-contact-item"><Phone size={14} style={{ color: RED }} /> (214) 555-0123</div>
                <div className="footer-contact-item"><Mail size={14} style={{ color: RED }} /> info@apexroofing.com</div>
              </div>
              <div className="footer-certs">
                <span className="footer-cert-badge">GAF Certified</span>
                <span className="footer-cert-badge">OC Preferred</span>
                <span className="footer-cert-badge">BBB A+</span>
                <span className="footer-cert-badge">TX Lic #123456</span>
              </div>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="/roof-replacement">Roof Replacement</a></li>
                <li><a href="/storm-damage">Storm Damage</a></li>
                <li><a href="/insurance-claims">Insurance Claims</a></li>
                <li><a href="/inspections">Free Inspections</a></li>
                <li><a href="/emergency">Emergency Repairs</a></li>
                <li><a href="/commercial">Commercial Roofing</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#before-after">Before &amp; After</a></li>
                <li><a href="#financing">Financing</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="/blog">Roofing Blog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Service Areas</h4>
              <ul>
                <li><a href="#">Dallas</a></li>
                <li><a href="#">Plano</a></li>
                <li><a href="#">Frisco</a></li>
                <li><a href="#">McKinney</a></li>
                <li><a href="#">Allen</a></li>
                <li><a href="#">Fort Worth</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Apex Roofing LLC. All rights reserved. TX Contractor License: #123456789 | Fully Bonded &amp; Insured | Privacy Policy
          </div>
        </div>
      </footer>
    </>
  );
}