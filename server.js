const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({ limit: '2mb' }));

function getEraTheme(year) {
  if (year <= 2035) {
    return {
      era: 'Industrial Transition',
      bg1: '#f8fbff',
      bg2: '#e8eef5',
      bg3: '#dbe7f3',
      card: 'rgba(255,255,255,0.78)',
      hero: 'rgba(255,255,255,0.82)',
      line: 'rgba(100,116,139,0.24)',
      text: '#0f172a',
      muted: '#475569',
      accent: '#3b82f6',
      accent2: '#64748b',
      glow: 'rgba(59,130,246,0.14)',
      visionA: 'rgba(255,255,255,0.90)',
      visionB: 'rgba(226,232,240,0.82)',
      snapshotTone:
        'The world is in transition. AI is practical, robotics is emerging, and infrastructure still feels industrial beneath the polish.'
    };
  }

  if (year <= 2055) {
    return {
      era: 'Augmented Society',
      bg1: '#fcfdff',
      bg2: '#eef2ff',
      bg3: '#e0f2fe',
      card: 'rgba(255,255,255,0.74)',
      hero: 'rgba(255,255,255,0.76)',
      line: 'rgba(99,102,241,0.18)',
      text: '#111827',
      muted: '#4b5563',
      accent: '#6366f1',
      accent2: '#0ea5e9',
      glow: 'rgba(99,102,241,0.18)',
      visionA: 'rgba(255,255,255,0.86)',
      visionB: 'rgba(224,231,255,0.78)',
      snapshotTone:
        'Computation fades into the background. Smart surfaces, wearables, and predictive systems quietly shape daily life.'
    };
  }

  if (year <= 2075) {
    return {
      era: 'Post-Scarcity Systems',
      bg1: '#ecfeff',
      bg2: '#dff7ff',
      bg3: '#dbeafe',
      card: 'rgba(240,253,255,0.72)',
      hero: 'rgba(236,254,255,0.78)',
      line: 'rgba(6,182,212,0.24)',
      text: '#082f49',
      muted: '#155e75',
      accent: '#06b6d4',
      accent2: '#2563eb',
      glow: 'rgba(6,182,212,0.24)',
      visionA: 'rgba(236,254,255,0.88)',
      visionB: 'rgba(186,230,253,0.74)',
      snapshotTone:
        'Automation is mature, science accelerates, and civilization begins to feel engineered rather than improvised.'
    };
  }

  return {
    era: 'Far Future Civilization',
    bg1: '#f5f3ff',
    bg2: '#e0f2fe',
    bg3: '#ede9fe',
    card: 'rgba(245,243,255,0.68)',
    hero: 'rgba(243,232,255,0.76)',
    line: 'rgba(139,92,246,0.24)',
    text: '#2e1065',
    muted: '#5b21b6',
    accent: '#8b5cf6',
    accent2: '#06b6d4',
    glow: 'rgba(139,92,246,0.30)',
    visionA: 'rgba(245,243,255,0.88)',
    visionB: 'rgba(224,231,255,0.72)',
    snapshotTone:
      'Biology, intelligence, and infrastructure are deeply fused. The world feels less built and more continuously redesigned.'
  };
}

function buildFuture({ year, interests }) {
  const set = new Set(interests);
  const theme = getEraTheme(year);

  const snapshot = [theme.snapshotTone];
  const technologies = [];
  const opportunities = [];
  const imagePrompts = [];

  if (set.has('AI')) {
    if (year < 2040) {
      snapshot.push('AI copilots move from apps into everyday interfaces, especially voice, search, and lightweight glasses.');
      technologies.push('Ambient AI assistants guide decisions in work, study, and everyday logistics.');
      opportunities.push('A personal strategic copilot that turns your reading, notes, and goals into a weekly action map.');
      imagePrompts.push('Bright wearable AI glasses, minimal futuristic interface, white product design.');
    } else if (year < 2070) {
      snapshot.push('AI becomes ambient infrastructure rather than a visible product category.');
      technologies.push('Personal cognition layers summarize the world in real time across vision, audio, and text.');
      opportunities.push('A premium AI reality layer that interprets places, objects, and people through AR.');
      imagePrompts.push('Futuristic AR glasses in a bright city, clean Meta-inspired aesthetic.');
    } else {
      snapshot.push('Artificial intelligence feels less like software and more like a civilizational operating system.');
      technologies.push('Collective AI systems coordinate energy, science, transport, and education.');
      opportunities.push('A civilization-scale simulation platform for governments, labs, and founders.');
      imagePrompts.push('Far future intelligence network, luminous city systems, optimistic sci-fi.');
    }
  }

  if (set.has('Human Enhancement')) {
    if (year < 2045) {
      technologies.push('Enhancement begins with subtle cognitive aids, wearables, and interface design.');
      opportunities.push('Smart glasses that merge memory cues, translation, and focus support into one interface.');
      imagePrompts.push('Ray-Ban Meta inspired smart glasses campaign, bright product photography.');
    } else if (year < 2070) {
      technologies.push('Enhancement becomes a consumer category spanning cognition, appearance, and performance.');
      opportunities.push('A prestige augmentation brand combining wearables, coaching, and biotech optimization.');
      imagePrompts.push('Augmented humans, premium wearable technology, bright future editorial.');
    } else {
      technologies.push('The question shifts from whether humans should enhance themselves to how identity survives the process.');
      opportunities.push('A platform for continuity of memory, identity, and rights in heavily modified humans.');
      imagePrompts.push('Post-human identity design, bright ethereal editorial sci-fi.');
    }
  }

  if (set.has('Robotics')) {
    if (year < 2040) {
      technologies.push('Warehouse, delivery, and industrial robots spread first in high-cost labor environments.');
      opportunities.push('Robotic operations software for mid-size firms priced out of full automation.');
      imagePrompts.push('Sleek robotics lab, white industrial design, daylight, clean engineering.');
    } else if (year < 2070) {
      technologies.push('Robotics shifts from industrial specialization to general-purpose physical assistance.');
      opportunities.push('A consumer robot platform with modular skills for care, logistics, and home repair.');
      imagePrompts.push('Humanoid household robot, elegant bright showroom, soft blue accents.');
    } else {
      technologies.push('Robots become the physical substrate of civilization, from maintenance to exploration.');
      opportunities.push('Autonomous megastructure maintenance systems for orbital and ocean infrastructure.');
      imagePrompts.push('Advanced robotics maintaining futuristic infrastructure, bright visionary realism.');
    }
  }

  if (set.has('Longevity')) {
    if (year < 2045) {
      technologies.push('Preventive health models catch disease risk earlier through continuous monitoring.');
      opportunities.push('A health twin that translates wearable and blood data into future risk forecasts.');
      imagePrompts.push('Bright future clinic, health dashboard, wearable sensors, optimistic biotech.');
    } else if (year < 2070) {
      technologies.push('Longevity shifts from supplements and rituals to measurable system-level intervention.');
      opportunities.push('Biological age reversal clinics paired with AI-personalized treatment engines.');
      imagePrompts.push('Luxury longevity clinic, minimal glass architecture, biotech future.');
    } else {
      technologies.push('Life extension becomes a normal expectation for elite healthcare systems.');
      opportunities.push('A long-horizon identity and estate platform built for radically extended lives.');
      imagePrompts.push('Post-human wellness architecture, bright ethereal biotech future.');
    }
  }

  if (set.has('Cities')) {
    if (year < 2040) {
      technologies.push('Cities become denser, smarter, and more instrumented before they become truly transformed.');
      opportunities.push('Urban intelligence maps that simulate housing, transport, and energy tradeoffs.');
      imagePrompts.push('Clean near-future city, smart mobility, bright white architecture.');
    } else if (year < 2070) {
      technologies.push('City systems are orchestrated by prediction engines tied to infrastructure and behavior.');
      opportunities.push('A city operating layer for mayors, planners, and developers.');
      imagePrompts.push('Meta-inspired future city, glass towers, clean blue sky, hopeful.');
    } else {
      technologies.push('The line between city, network, and organism becomes blurry.');
      opportunities.push('Adaptive living districts that reconfigure energy, transit, and public space in real time.');
      imagePrompts.push('Far future city, luminous megastructures, bright optimistic sci-fi.');
    }
  }

  if (set.has('Energy')) {
    if (year < 2045) {
      technologies.push('Energy becomes a constraint on AI, data centers, and industrial expansion.');
      opportunities.push('A grid intelligence company that predicts demand spikes from AI and robotics clusters.');
      imagePrompts.push('Modern clean energy infrastructure, bright daylight, futuristic engineering.');
    } else if (year < 2070) {
      technologies.push('Abundant clean energy changes what is economically possible.');
      opportunities.push('A founding platform for energy-heavy manufacturing in newly cheap-power regions.');
      imagePrompts.push('Futuristic energy campus, white and cyan, advanced infrastructure.');
    } else {
      technologies.push('Civilization-scale energy systems enable planetary engineering and extreme computation.');
      opportunities.push('Planetary infrastructure firms emerge around water, climate, and habitat control.');
      imagePrompts.push('Planetary energy systems, bright atmospheric sci-fi realism.');
    }
  }

  if (set.has('Space')) {
    if (year < 2045) {
      technologies.push('Commercial launch and orbital manufacturing become normal strategic industries.');
      opportunities.push('A software layer for space asset risk, routing, and insurance analytics.');
      imagePrompts.push('Clean space habitat concept, bright future aerospace aesthetic.');
    } else if (year < 2070) {
      technologies.push('Persistent industrial presence in orbit starts to feel economically ordinary.');
      opportunities.push('Orbital design tools for habitats, logistics, and autonomous maintenance.');
      imagePrompts.push('Orbital city concept, bright elegant sci-fi, white and blue.');
    } else {
      technologies.push('Off-world infrastructure matters less as fantasy and more as strategic necessity.');
      opportunities.push('A multi-planet coordination platform for transport, energy, and biosystems.');
      imagePrompts.push('Interplanetary civilization, bright high-design futuristic structures.');
    }
  }

  if (technologies.length === 0) {
    technologies.push('Human systems become more predictive, more connected, and more aesthetically integrated with everyday life.');
    opportunities.push('A design studio that visualizes future products, cities, and lifestyles for founders and investors.');
    imagePrompts.push('Bright futuristic concept board, minimal Meta-inspired design.');
  }

  return {
    theme,
    snapshot: snapshot.slice(0, 3),
    technologies: technologies.slice(0, 4),
    opportunities: opportunities.slice(0, 4),
    imagePrompts: imagePrompts.slice(0, 4)
  };
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Future Lab V2</title>
  <style>
    :root {
      --bg1: #f8fbff;
      --bg2: #e8eef5;
      --bg3: #dbe7f3;
      --card: rgba(255,255,255,0.78);
      --hero: rgba(255,255,255,0.82);
      --line: rgba(100,116,139,0.24);
      --text: #0f172a;
      --muted: #475569;
      --accent: #3b82f6;
      --accent2: #64748b;
      --glow: rgba(59,130,246,0.14);
      --visionA: rgba(255,255,255,0.90);
      --visionB: rgba(226,232,240,0.82);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      min-height: 100vh;
      background:
        radial-gradient(circle at 10% 10%, var(--glow), transparent 24%),
        radial-gradient(circle at 90% 12%, color-mix(in srgb, var(--accent2) 12%, transparent), transparent 22%),
        radial-gradient(circle at 65% 78%, rgba(255,255,255,0.7), transparent 20%),
        linear-gradient(135deg, var(--bg1) 0%, var(--bg2) 50%, var(--bg3) 100%);
      transition: background 0.7s ease, color 0.4s ease;
    }

    .wrap {
      width: min(1260px, calc(100% - 32px));
      margin: 0 auto;
      padding: 28px 0 42px;
    }

    .hero {
      border: 1px solid var(--line);
      background: var(--hero);
      backdrop-filter: blur(18px);
      border-radius: 34px;
      padding: 30px;
      box-shadow: 0 20px 55px color-mix(in srgb, var(--accent) 10%, transparent);
      transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid var(--line);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--muted);
      background: rgba(255,255,255,0.55);
    }

    h1 {
      margin: 16px 0 10px;
      font-size: clamp(2.6rem, 6vw, 5.2rem);
      line-height: 0.95;
      letter-spacing: -0.05em;
      max-width: 880px;
    }

    .grad {
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .sub {
      max-width: 850px;
      color: var(--muted);
      font-size: 1.04rem;
      line-height: 1.65;
      margin: 0;
    }

    .topbar {
      display: grid;
      grid-template-columns: 1.25fr 0.75fr;
      gap: 18px;
      margin-top: 18px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 30px;
      padding: 20px;
      backdrop-filter: blur(18px);
      box-shadow: 0 14px 38px color-mix(in srgb, var(--accent) 8%, transparent);
      transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
    }

    .label, .section-title {
      font-size: 0.82rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .section-title {
      margin: 0 0 12px;
      font-size: 0.88rem;
    }

    .year-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin: 6px 0 8px;
    }

    .year-value {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: -0.06em;
    }

    .era-tag {
      padding: 10px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,0.6);
      border: 1px solid var(--line);
      color: var(--muted);
      font-size: 0.92rem;
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--accent);
    }

    .jump-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 14px;
    }

    .jump-btn, .simulate-btn {
      border: 1px solid var(--line);
      color: var(--text);
      border-radius: 16px;
      padding: 12px 16px;
      font: inherit;
      cursor: pointer;
      transition: 0.18s ease, background 0.4s ease, border-color 0.4s ease;
      background: rgba(255,255,255,0.66);
    }

    .simulate-btn {
      width: 100%;
      margin-top: 16px;
      background: linear-gradient(90deg, color-mix(in srgb, var(--accent) 16%, white), color-mix(in srgb, var(--accent2) 16%, white));
      font-weight: 700;
    }

    .jump-btn:hover, .simulate-btn:hover, .interest:hover {
      transform: translateY(-1px);
    }

    .interest-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 12px;
      margin-top: 8px;
    }

    .interest {
      padding: 16px;
      border-radius: 22px;
      background: rgba(255,255,255,0.62);
      border: 1px solid var(--line);
      cursor: pointer;
      transition: 0.18s ease, background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
      user-select: none;
      color: var(--text);
      text-align: center;
      font-weight: 600;
    }

    .interest.active {
      background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 16%, white), color-mix(in srgb, var(--accent2) 10%, white));
      border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
      box-shadow: 0 10px 28px var(--glow);
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1.08fr 1.08fr 0.84fr;
      gap: 18px;
      margin-top: 18px;
    }

    .list {
      display: grid;
      gap: 12px;
    }

    .item {
      padding: 14px 16px;
      border-radius: 18px;
      background: rgba(255,255,255,0.56);
      border: 1px solid var(--line);
      color: var(--text);
      line-height: 1.55;
      transition: background 0.4s ease, border-color 0.4s ease;
    }

    .vision-grid {
      display: grid;
      gap: 12px;
    }

    .vision-card {
      min-height: 118px;
      border-radius: 24px;
      border: 1px solid var(--line);
      padding: 16px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, var(--visionA), var(--visionB));
      transition: background 0.5s ease, border-color 0.5s ease;
    }

    .vision-card::after {
      content: '';
      position: absolute;
      width: 170px;
      height: 170px;
      border-radius: 999px;
      right: -50px;
      top: -50px;
      background: radial-gradient(circle, var(--glow), transparent 65%);
    }

    .vision-kicker {
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--muted);
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    }

    .vision-text {
      font-size: 1rem;
      line-height: 1.45;
      max-width: 88%;
      position: relative;
      z-index: 1;
    }

    .status {
      margin-top: 12px;
      color: var(--muted);
      font-size: 0.92rem;
    }

    .theme-note {
      margin-top: 8px;
      font-size: 0.92rem;
      color: var(--muted);
    }

    @media (max-width: 1080px) {
      .topbar, .content-grid { grid-template-columns: 1fr; }
      .interest-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <div class="eyebrow">Future Lab · Era Reactive UI · Meta-Inspired</div>
      <h1>Scroll through <span class="grad">possible futures</span>.</h1>
      <p class="sub">
        Choose a year. Select the domains you care about. Simulate a world, discover technologies inside it, and get a brighter, more reactive interface that actually shifts atmosphere by era.
      </p>
    </section>

    <div class="topbar">
      <section class="card">
        <div class="label">Timeline</div>
        <div class="year-row">
          <div class="year-value" id="yearValue">2050</div>
          <div class="era-tag" id="eraTag">Augmented Society</div>
        </div>
        <input id="yearSlider" type="range" min="2025" max="2100" step="1" value="2050" />
        <div class="jump-row">
          <button class="jump-btn" data-year="2028">2028</button>
          <button class="jump-btn" data-year="2040">2040</button>
          <button class="jump-btn" data-year="2055">2055</button>
          <button class="jump-btn" data-year="2075">2075</button>
          <button class="jump-btn" data-year="2100">2100</button>
        </div>
        <div class="theme-note" id="themeNote">Era skin updates as you move through time.</div>
      </section>

      <section class="card">
        <div class="label">Simulation Control</div>
        <div class="status">Pick a few interests to keep the future coherent and stylish.</div>
        <button class="simulate-btn" id="simulateBtn">Simulate Future</button>
        <div class="status" id="statusText">Ready.</div>
      </section>
    </div>

    <section class="card" style="margin-top:18px;">
      <div class="label">Domains</div>
      <div class="interest-grid" id="interestGrid">
        <div class="interest active" data-value="AI">AI</div>
        <div class="interest active" data-value="Human Enhancement">Human Enhancement</div>
        <div class="interest" data-value="Robotics">Robotics</div>
        <div class="interest" data-value="Longevity">Longevity</div>
        <div class="interest" data-value="Cities">Cities</div>
        <div class="interest" data-value="Energy">Energy</div>
        <div class="interest" data-value="Space">Space</div>
      </div>
    </section>

    <div class="content-grid">
      <section class="card">
        <h2 class="section-title">World Snapshot</h2>
        <div class="list" id="snapshotList"></div>
      </section>

      <section class="card">
        <h2 class="section-title">Technology Frontier</h2>
        <div class="list" id="techList"></div>
      </section>

      <section class="card">
        <h2 class="section-title">Future Vision Board</h2>
        <div class="vision-grid" id="visionGrid"></div>
      </section>
    </div>

    <section class="card" style="margin-top:18px;">
      <h2 class="section-title">Opportunity Layer</h2>
      <div class="list" id="opportunityList"></div>
    </section>
  </div>

  <script>
    var state = {
      year: 2050,
      interests: ['AI', 'Human Enhancement']
    };

    var yearSlider = document.getElementById('yearSlider');
    var yearValue = document.getElementById('yearValue');
    var eraTag = document.getElementById('eraTag');
    var snapshotList = document.getElementById('snapshotList');
    var techList = document.getElementById('techList');
    var opportunityList = document.getElementById('opportunityList');
    var visionGrid = document.getElementById('visionGrid');
    var statusText = document.getElementById('statusText');
    var interestGrid = document.getElementById('interestGrid');
    var jumpButtons = document.querySelectorAll('.jump-btn');
    var simulateBtn = document.getElementById('simulateBtn');
    var themeNote = document.getElementById('themeNote');

    function getLocalTheme(year) {
      if (year <= 2035) {
        return {
          era: 'Industrial Transition',
          bg1: '#f8fbff',
          bg2: '#e8eef5',
          bg3: '#dbe7f3',
          card: 'rgba(255,255,255,0.78)',
          hero: 'rgba(255,255,255,0.82)',
          line: 'rgba(100,116,139,0.24)',
          text: '#0f172a',
          muted: '#475569',
          accent: '#3b82f6',
          accent2: '#64748b',
          glow: 'rgba(59,130,246,0.14)',
          visionA: 'rgba(255,255,255,0.90)',
          visionB: 'rgba(226,232,240,0.82)'
        };
      }
      if (year <= 2055) {
        return {
          era: 'Augmented Society',
          bg1: '#fcfdff',
          bg2: '#eef2ff',
          bg3: '#e0f2fe',
          card: 'rgba(255,255,255,0.74)',
          hero: 'rgba(255,255,255,0.76)',
          line: 'rgba(99,102,241,0.18)',
          text: '#111827',
          muted: '#4b5563',
          accent: '#6366f1',
          accent2: '#0ea5e9',
          glow: 'rgba(99,102,241,0.18)',
          visionA: 'rgba(255,255,255,0.86)',
          visionB: 'rgba(224,231,255,0.78)'
        };
      }
      if (year <= 2075) {
        return {
          era: 'Post-Scarcity Systems',
          bg1: '#ecfeff',
          bg2: '#dff7ff',
          bg3: '#dbeafe',
          card: 'rgba(240,253,255,0.72)',
          hero: 'rgba(236,254,255,0.78)',
          line: 'rgba(6,182,212,0.24)',
          text: '#082f49',
          muted: '#155e75',
          accent: '#06b6d4',
          accent2: '#2563eb',
          glow: 'rgba(6,182,212,0.24)',
          visionA: 'rgba(236,254,255,0.88)',
          visionB: 'rgba(186,230,253,0.74)'
        };
      }
      return {
        era: 'Far Future Civilization',
        bg1: '#f5f3ff',
        bg2: '#e0f2fe',
        bg3: '#ede9fe',
        card: 'rgba(245,243,255,0.68)',
        hero: 'rgba(243,232,255,0.76)',
        line: 'rgba(139,92,246,0.24)',
        text: '#2e1065',
        muted: '#5b21b6',
        accent: '#8b5cf6',
        accent2: '#06b6d4',
        glow: 'rgba(139,92,246,0.30)',
        visionA: 'rgba(245,243,255,0.88)',
        visionB: 'rgba(224,231,255,0.72)'
      };
    }

    function applyTheme(year) {
      var t = getLocalTheme(year);
      document.documentElement.style.setProperty('--bg1', t.bg1);
      document.documentElement.style.setProperty('--bg2', t.bg2);
      document.documentElement.style.setProperty('--bg3', t.bg3);
      document.documentElement.style.setProperty('--card', t.card);
      document.documentElement.style.setProperty('--hero', t.hero);
      document.documentElement.style.setProperty('--line', t.line);
      document.documentElement.style.setProperty('--text', t.text);
      document.documentElement.style.setProperty('--muted', t.muted);
      document.documentElement.style.setProperty('--accent', t.accent);
      document.documentElement.style.setProperty('--accent2', t.accent2);
      document.documentElement.style.setProperty('--glow', t.glow);
      document.documentElement.style.setProperty('--visionA', t.visionA);
      document.documentElement.style.setProperty('--visionB', t.visionB);

      yearValue.textContent = String(year);
      eraTag.textContent = t.era;
      themeNote.textContent = 'Current era skin: ' + t.era;
    }

    function renderList(target, items) {
      target.innerHTML = items.map(function(item) {
        return '<div class="item">' + item + '</div>';
      }).join('');
    }

    function renderVision(prompts, year) {
      visionGrid.innerHTML = prompts.map(function(prompt, i) {
        return (
          '<div class="vision-card">' +
            '<div class="vision-kicker">Vision ' + (i + 1) + ' · ' + year + '</div>' +
            '<div class="vision-text">' + prompt + '</div>' +
          '</div>'
        );
      }).join('');
    }

    async function simulate() {
      simulateBtn.disabled = true;
      statusText.textContent = 'Simulating future...';

      try {
        var res = await fetch('/api/simulate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(state)
        });

        var data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Simulation failed');
        }

        applyTheme(state.year);
        eraTag.textContent = data.theme.era;
        renderList(snapshotList, data.snapshot);
        renderList(techList, data.technologies);
        renderList(opportunityList, data.opportunities);
        renderVision(data.imagePrompts, state.year);
        statusText.textContent = 'Future generated.';
      } catch (err) {
        statusText.textContent = err.message;
      } finally {
        simulateBtn.disabled = false;
      }
    }

    yearSlider.addEventListener('input', function(e) {
      state.year = Number(e.target.value);
      applyTheme(state.year);
    });

    interestGrid.addEventListener('click', function(e) {
      var card = e.target.closest('.interest');
      if (!card) return;

      var value = card.dataset.value;
      card.classList.toggle('active');

      if (state.interests.indexOf(value) !== -1) {
        state.interests = state.interests.filter(function(v) { return v !== value; });
      } else {
        state.interests.push(value);
      }
    });

    jumpButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var y = Number(btn.dataset.year);
        state.year = y;
        yearSlider.value = String(y);
        applyTheme(y);
      });
    });

    simulateBtn.addEventListener('click', simulate);

    applyTheme(state.year);
    simulate();
  </script>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(html);
});

app.post('/api/simulate', (req, res) => {
  const year = Number(req.body?.year || 2050);
  const interests = Array.isArray(req.body?.interests) ? req.body.interests : [];
  const result = buildFuture({ year, interests });
  res.json(result);
});

app.listen(PORT, () => {
  console.log('Future Lab v2 running on http://localhost:' + PORT);
});