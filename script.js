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

/* Décor floral SVG (roses poudrées + feuilles argentées) */
function rose(x, y, s, r) {
  let p = "";
  for (let i = 0; i < 5; i++) p += `<ellipse cx="50" cy="26" rx="21" ry="26" fill="url(#g1)" stroke="#c9a0a6" stroke-width="1" transform="rotate(${i * 72} 50 50)"/>`;
  for (let i = 0; i < 5; i++) p += `<ellipse cx="50" cy="34" rx="14" ry="17" fill="url(#g2)" stroke="#d7b5b9" stroke-width=".8" transform="rotate(${i * 72 + 36} 50 50)"/>`;
  p += `<circle cx="50" cy="50" r="11" fill="url(#g1)" stroke="#b9848b"/><path d="M50 44c6 0 7 8 0 9-4 0-4-5-1-5" fill="none" stroke="#b9848b" stroke-width="1.5"/>`;
  return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s}) translate(-50 -50)">${p}</g>`;
}
function leaf(x, y, r, s) { return `<ellipse cx="${x}" cy="${y}" rx="${16 * s}" ry="${6 * s}" fill="#aab3ac" stroke="#8e969a" stroke-width=".7" transform="rotate(${r} ${x} ${y})"/>`; }
const FLORA = `<svg viewBox="0 0 200 200">${[[30,150,-50,1.4],[70,170,-20,1.2],[20,100,-80,1.2],[60,110,-40,1.5],[95,130,-10,1.3],[40,60,-100,1],[110,85,-30,1.1],[130,160,-5,1]].map(a=>leaf(...a)).join("")}${rose(64,128,.62,10)}${rose(112,84,.42,-20)}${rose(40,76,.36,30)}${rose(138,142,.3,40)}</svg>`;
$$("[data-flora]").forEach(e => e.innerHTML = FLORA);

/* Papillons & pétales */
if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
  const fx = $("#fx");
  for (let i = 0; i < 6; i++) {
    const b = el("div", "bf"); b.innerHTML = `<svg viewBox="0 0 40 30"><g class="wl"><path d="M20 15C10 0 0 4 2 14c1 8 12 9 18 1z" fill="#e9c9cb" stroke="#8e929b"/></g><g class="wr"><path d="M20 15C30 0 40 4 38 14c-1 8-12 9-18 1z" fill="#d9a4aa" stroke="#8e929b"/></g></svg>`;
    b.style.cssText = `left:${10 + Math.random() * 80}vw;top:${40 + Math.random() * 50}vh;animation-duration:${14 + Math.random() * 12}s;animation-delay:${-Math.random() * 14}s`;
    fx.append(b);
  }
  for (let i = 0; i < 12; i++) {
    const p = el("div", "pt", "❀"); p.style.cssText = `left:${Math.random() * 100}vw;font-size:${12 + Math.random() * 12}px;color:${i % 2 ? "#e0b4b9" : "#c2c5cc"};animation-duration:${10 + Math.random() * 10}s;animation-delay:${-Math.random() * 14}s`;
    fx.append(p);
  }
}

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
