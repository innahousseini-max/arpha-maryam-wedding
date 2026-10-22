/* ===== CONFIGURATION (modifiez ici) ===== */
const CFG = {
  date: "2026-12-11T07:00:00",                 // mariage religieux (heure du compte à rebours)
  music: "assets/musique.mp3",                  // placez votre fichier mp3 ici
  whatsapp: "https://chat.whatsapp.com/BseRqDu6lNr2t3UskqiSDD?s=cl&p=i&mlu=4&ilr=4",
  maps: "https://www.google.com/maps/search/?api=1&query=Pr%C3%A9sidentielle%20Domicile%20Alhadji%20Housseini%20Bobboy",
  photos: [],                                   // ex: ["assets/photos/1.jpg","assets/photos/2.jpg"]
  supabaseUrl: "https://biptyqzwnvpjaeomxoul.supabase.co",
  supabaseKey: "sb_publishable_JAAc39PIiqake9whuriWjg_GgwjzlyX",
  story: ["Peut-être étions-nous écrits l'un dans l'histoire de l'autre bien avant de le savoir. Deux âmes qui se croisaient sans savoir qu'un jour l'autre deviendrait maison.",
    "Ce qui commença par de simples moments devint lentement quelque chose de plus profond. L'amour arriva si naturellement que nous en remarquâmes à peine la première lueur.",
    "Et ceci n'est que le début de toutes les vies que nous vivrons encore ensemble."],
  program: [
    ["Mardi 8 décembre", [["Bangourdé (présentation du trousseau de la mariée)", "16H00", "Présidentielle - Domicile Alhadji Housseini Bobboy"]]],
    ["Jeudi 10 décembre", [["Dambordou (cérémonie du henné)", "19H30", "Présidentielle - Domicile Alhadji Housseini Bobboy"]]],
    ["Vendredi 11 décembre", [
      ["DOA et Tégal (mariage religieux)", "07H00", "Présidentielle - Domicile Alhadji Housseini Bobboy"],
      ["Yiwordou (lavage du henné de la mariée)", "15H30", "Présidentielle - Domicile Alhadji Housseini Bobboy"],
      ["Sodditordou (présentation de la mariée à sa belle famille)", "16H30", "Marouaré - Domicile Alhadji Mamoudou"],
      ["Accompagnement de la mariée au domicile conjugal", "17H30", "Lieu à confirmer"]]],
    ["Samedi 12 décembre", [["Mariage civil & Réception", "10H00", "Parc Boisé"]]],
    ["Dimanche 13 décembre", [["Retour définitif", "10H30", "Domicile conjugal"]]]
  ]
};
/* ========================================= */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x) e.textContent = x; return e; };

/* Roses (photos détourées) sur les bordures */
$$("[data-flora]").forEach(e => { e.innerHTML = '<img src="assets/fleur.webp" alt="" loading="lazy">'; });

/* Éclats de diamant */
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) for (let i = 0; i < 18; i++) {
  const s = el("div", "sp", "✦"); s.style.cssText = `left:${Math.random() * 100}vw;top:${Math.random() * 100}vh;font-size:${8 + Math.random() * 14}px;animation-delay:${-Math.random() * 4}s;animation-duration:${2.5 + Math.random() * 3}s`; $("#fx").append(s);
}

/* Papillons et fleurs blanches flottantes (images) */
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
  const fx = $("#fx");
  for (let i = 0; i < 6; i++) {
    const b = el("div", "bf"); b.innerHTML = '<img src="assets/papillon.webp" alt="">';
    b.style.cssText = `left:${10 + Math.random() * 80}vw;top:${40 + Math.random() * 50}vh;width:${28 + Math.random() * 20}px;animation-duration:${14 + Math.random() * 12}s;animation-delay:${-Math.random() * 14}s`; fx.append(b);
  }
  for (let i = 0; i < 9; i++) {
    const p = el("div", "pt"); p.innerHTML = '<img src="assets/fleur-blanche.webp" alt="">';
    p.style.cssText = `left:${Math.random() * 100}vw;width:${18 + Math.random() * 20}px;animation-duration:${11 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s`; fx.append(p);
  }
}

/* Billet acrylique (dentelle transparente) + filigranes dorés de l'enveloppe */
(function () {
  const vine = (x0, y0, x1, y1) => {
    const L = Math.hypot(x1 - x0, y1 - y0), n = Math.floor(L / 9), ux = (x1 - x0) / L, uy = (y1 - y0) / L; let p = "", lf = "";
    for (let i = 0; i <= n; i++) {
      const t = i * 9, w = 5 * Math.sin(i * .8), x = x0 + ux * t - uy * w, y = y0 + uy * t + ux * w; p += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
      if (i % 2 && i < n) { const s = i % 4 == 1 ? 1 : -1, cx = (x - uy * s * 7).toFixed(1), cy = (y + ux * s * 7).toFixed(1), a = (Math.atan2(uy, ux) * 180 / Math.PI + s * 55).toFixed(0);
        lf += `<ellipse cx="${cx}" cy="${cy}" rx="8" ry="3.6" transform="rotate(${a} ${cx} ${cy})"/>`; }
    }
    return `<path d="${p}" fill="none"/>` + lf;
  };
  $(".lc").innerHTML = `<g stroke="#d4bf86" stroke-width="1.8" fill="rgba(255,255,255,.75)" stroke-linejoin="round" style="filter:drop-shadow(0 1px 2px rgba(120,90,30,.35))">` +
    vine(30, 17, 270, 17) + vine(30, 383, 270, 383) + vine(17, 30, 17, 370) + vine(283, 30, 283, 370) +
    [[20, 20], [280, 20], [20, 380], [280, 380]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12"/><circle cx="${x}" cy="${y}" r="6"/>`).join("") + `</g>`;
  const FIL = `<svg viewBox="0 0 200 80"><g fill="url(#gdg)" stroke="#7a5614" stroke-width=".6"><path d="M4 72C40 72 58 22 108 26S170 54 196 18" fill="none" stroke="url(#gdg)" stroke-width="3.2"/>` +
    [[30, 66, -20], [52, 52, -55], [70, 34, -70], [96, 27, -10], [122, 32, 25], [148, 44, 35], [172, 40, -40]].map(([x, y, a]) => `<path transform="translate(${x} ${y}) rotate(${a})" d="M0 0C8-11 24-11 30 0C24 9 8 9 0 0Z"/>`).join("") +
    `<circle cx="190" cy="16" r="6" fill="none" stroke="url(#gdg)" stroke-width="2.4"/><circle cx="12" cy="66" r="5" fill="none" stroke="url(#gdg)" stroke-width="2.2"/></g></svg>`;
  [["flap", "ft1"], ["flap", "ft2"], ["pocket", "fb1"], ["pocket", "fb2"]].forEach(([p, c]) => { const d = el("i", "fil " + c); d.innerHTML = FIL; $("." + p).append(d); });
})();

/* Enveloppe d'introduction */
const env = $("#env");
function openEnv() {
  if (env.classList.contains("open")) return closeIntro();
  env.classList.add("open"); $("#hint").textContent = "Touchez pour découvrir l'invitation";
  setTimeout(closeIntro, 5200);
}
function closeIntro() { $("#intro").classList.add("gone"); document.body.style.overflow = ""; }
document.body.style.overflow = "hidden";
env.onclick = openEnv; $("#hint").onclick = () => env.classList.contains("open") && closeIntro();
env.onkeydown = e => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), openEnv());

/* Musique : disque cliquable play / pause */
const aud = $("#aud"), disc = $("#disc");
aud.src = CFG.music;
disc.onclick = () => {
  if (aud.paused) aud.play().then(() => { disc.classList.add("on"); $("#ico").textContent = "❚❚"; $("#dtxt").textContent = "Pause"; })
    .catch(() => { $("#dtxt").textContent = "Musique indisponible"; });
  else { aud.pause(); disc.classList.remove("on"); $("#ico").textContent = "▶"; $("#dtxt").textContent = "Cliquez pour jouer"; }
};

/* Compte à rebours */
$("#cd").innerHTML = ["Jours", "Heures", "Minutes", "Secondes"].map(l => `<div><b>00</b><small>${l}</small></div>`).join("");
const T = new Date(CFG.date).getTime();
(function tick() {
  const d = Math.max(0, T - Date.now()), v = [d / 864e5, d / 36e5 % 24, d / 6e4 % 60, d / 1e3 % 60];
  $$("#cd b").forEach((b, i) => b.textContent = String(Math.floor(v[i])).padStart(2, "0")); setTimeout(tick, 1000);
})();

/* Lieu, WhatsApp, histoire, programme */
$("#maps").href = CFG.maps; $("#wa").href = CFG.whatsapp;
CFG.story.forEach(t => $("#story").append(el("p", "", t)));
CFG.program.forEach(([day, items]) => {
  const d = el("div", "day"); d.append(el("h3", "", day));
  items.forEach(([t, h, l]) => { const e = el("p", "ev", t); e.append(el("span", "", h), el("em", "", "📍 " + l)); d.append(e); });
  $("#prog").append(d);
});

/* Galerie */
const gal = $("#gal");
(CFG.photos.length ? CFG.photos : Array(6).fill(null)).forEach(u => {
  const b = el("button"); b.setAttribute("aria-label", "Photo");
  if (u) { const i = new Image(); i.src = u; i.alt = "Photo des mariés"; i.loading = "lazy"; b.append(i); b.onclick = () => { $("#lb img").src = u; $("#lb").classList.add("show"); }; }
  else b.textContent = "A & M";
  gal.append(b);
});
$("#lb").onclick = () => $("#lb").classList.remove("show");

/* RSVP + Livre d'or (Supabase si configuré, sinon stockage local de démonstration) */
const useDB = CFG.supabaseUrl && CFG.supabaseKey;
const H = { apikey: CFG.supabaseKey, "Content-Type": "application/json" };
if (!CFG.supabaseKey.startsWith("sb_")) H.Authorization = "Bearer " + CFG.supabaseKey; // anciennes clés (JWT) uniquement
const fdate = t => new Date(t).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
async function load() {
  try {
    if (useDB) { const r = await fetch(`${CFG.supabaseUrl}/rest/v1/messages?select=name,present,message,created_at&order=created_at.desc&limit=100`, { headers: H }); return await r.json(); }
    return JSON.parse(localStorage.getItem("am_msgs") || "[]");
  } catch { return []; }
}
function render(list) {
  const box = $("#wishes"); box.replaceChildren();
  if (!Array.isArray(list) || !list.length) return box.append(el("p", "", "Soyez le premier à laisser un message."));
  list.forEach(m => {
    const w = el("div", "wish"), t = el("time", "", fdate(m.created_at));
    w.append(t, el("b", "", m.name));
    if (m.message) w.append(el("p", "", "« " + m.message + " »"));
    w.append(el("small", m.present ? "" : "no", m.present ? "✦ Sera présent(e)" : "Ne pourra pas être présent(e)")); box.append(w);
  });
}
let present = true;
$$("[data-v]").forEach(b => b.onclick = () => { present = b.dataset.v === "1"; $$("[data-v]").forEach(x => x.classList.toggle("on", x === b)); });
$("#rsvp").onsubmit = async e => {
  e.preventDefault();
  const m = { name: $("#nm").value.trim(), present, message: $("#msg").value.trim(), created_at: new Date().toISOString() };
  const ok = $("#ok"); ok.textContent = "Envoi en cours…";
  try {
    if (useDB) { const r = await fetch(`${CFG.supabaseUrl}/rest/v1/messages`, { method: "POST", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify(m) }); if (!r.ok) throw 0; }
    else localStorage.setItem("am_msgs", JSON.stringify([m, ...JSON.parse(localStorage.getItem("am_msgs") || "[]")]));
    ok.textContent = "Merci ! Votre réponse a bien été envoyée."; e.target.reset(); present = true;
    $$("[data-v]").forEach((x, i) => x.classList.toggle("on", i === 0)); render(await load());
  } catch { ok.textContent = "Une erreur est survenue, veuillez réessayer."; }
};
load().then(render);

/* Apparition au scroll */
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && (x.target.classList.add("in"), io.unobserve(x.target))), { threshold: .12 });
$$(".rv").forEach(e => io.observe(e));
