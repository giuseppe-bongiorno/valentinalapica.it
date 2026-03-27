import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, Menu, X, Star, Heart, Baby, Stethoscope, CalendarDays, ArrowRight, MessageCircle, ExternalLink, CheckCircle, Award, GraduationCap, Building2, Users, Sparkles, Activity, Pill, Search } from "lucide-react";

// ─── Design Tokens ───
const palette = {
  rose: "#8B2252",
  roseLight: "#A83D6B",
  rosePale: "#F9F0F3",
  cream: "#FDF8F4",
  creamDark: "#F5EDE6",
  gold: "#C4956A",
  goldLight: "#D4A574",
  navy: "#1B2A4A",
  charcoal: "#2D2D2D",
  slate: "#5A6577",
  mist: "#8B95A5",
  white: "#FFFFFF",
  border: "#E8DDD4",
};

// ─── Page Registry ───
const PAGES = {
  home: "home",
  ginecologa: "ginecologa-genova",
  visita: "visita-ginecologica",
  paptest: "pap-test",
  ecografia: "ecografia-transvaginale",
  gravidanza: "gravidanza",
  endometriosi: "endometriosi",
  contraccezione: "contraccezione",
  menopausa: "menopausa",
  contatti: "contatti",
  blog: "blog",
};

// ─── Styles ───
const globalCSS = `
* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family:'DM Sans',sans-serif; color:${palette.charcoal}; background:${palette.cream}; overflow-x:hidden; }
h1,h2,h3,h4 { font-family:'Cormorant Garamond',serif; }

@keyframes fadeUp { from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn { from{opacity:0}to{opacity:1} }
@keyframes slideIn { from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)} }
@keyframes pulse { 0%,100%{transform:scale(1)}50%{transform:scale(1.05)} }

.fade-up { animation: fadeUp 0.7s ease both; }
.fade-in { animation: fadeIn 0.5s ease both; }
.slide-in { animation: slideIn 0.6s ease both; }

.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }

.hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
@media(hover:hover) { .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(139,34,82,0.12); } }

.cta-btn {
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:14px 28px; min-height:48px;
  background:${palette.rose}; color:white; border:none; border-radius:50px;
  font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600;
  cursor:pointer; transition:all 0.3s ease; text-decoration:none;
  -webkit-tap-highlight-color:transparent;
}
.cta-btn:hover { background:${palette.roseLight}; transform:translateY(-2px); box-shadow:0 8px 24px rgba(139,34,82,0.25); }

.cta-btn-outline {
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:12px 24px; min-height:48px;
  background:transparent; color:${palette.rose}; border:2px solid ${palette.rose};
  border-radius:50px; font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600;
  cursor:pointer; transition:all 0.3s ease; text-decoration:none;
  -webkit-tap-highlight-color:transparent;
}
.cta-btn-outline:hover { background:${palette.rosePale}; }

.wa-btn {
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  padding:14px 28px; min-height:48px;
  background:#25D366; color:white; border:none; border-radius:50px;
  font-family:'DM Sans',sans-serif; font-size:15px; font-weight:600;
  cursor:pointer; transition:all 0.3s ease;
  -webkit-tap-highlight-color:transparent;
}
.wa-btn:hover { background:#20BD5A; transform:translateY(-2px); }

.section-pad { padding:clamp(48px,8vw,80px) clamp(16px,4vw,24px); max-width:1100px; margin:0 auto; }

.btn-row { display:flex; gap:12px; flex-wrap:wrap; }
@media(max-width:480px) {
  .btn-row { flex-direction:column; }
  .btn-row .cta-btn, .btn-row .wa-btn, .btn-row .cta-btn-outline { width:100%; }
}

.gold-line { width:48px; height:3px; background:${palette.gold}; border-radius:2px; margin-bottom:16px; }

a { color:${palette.rose}; text-decoration:none; }
a:hover { text-decoration:underline; }

@media(prefers-reduced-motion:reduce) {
  *, *::before, *::after { animation-duration:0.01ms !important; transition-duration:0.01ms !important; }
  html { scroll-behavior:auto; }
}
`;

// ─── FAQ Accordion ───
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background:palette.white, borderRadius:12, border:`1px solid ${palette.border}`, overflow:"hidden" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width:"100%", padding:"16px 20px", display:"flex", justifyContent:"space-between", alignItems:"center", background:"none", border:"none", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:600, color:palette.charcoal, textAlign:"left", lineHeight:1.4 }}
          >
            {item.q}
            <ChevronDown size={18} style={{ flexShrink:0, marginLeft:12, transition:"transform 0.3s", transform: open===i?"rotate(180deg)":"rotate(0)" }} />
          </button>
          <div style={{ maxHeight: open===i?400:0, overflow:"hidden", transition:"max-height 0.4s ease" }}>
            <p style={{ padding:"0 20px 16px", fontSize:14, lineHeight:1.7, color:palette.slate }}>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Trust Badges ───
function TrustBadges() {
  const badges = [
    { icon: <GraduationCap size={22}/>, title:"Laureata con lode", sub:"Univ. di Genova, 2012" },
    { icon: <Building2 size={22}/>, title:"Specializzata", sub:"Policlinico San Martino" },
    { icon: <Heart size={22}/>, title:"Formazione pediatrica", sub:"Istituto Gaslini" },
    { icon: <Award size={22}/>, title:"Iscritta OMCeO", sub:"Genova n. 16037" },
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))", gap:12 }}>
      {badges.map((b,i) => (
        <div key={i} className={`fade-up stagger-${i+1}`} style={{ display:"flex", alignItems:"center", gap:12, padding:"16px 18px", background:palette.white, borderRadius:12, border:`1px solid ${palette.border}` }}>
          <div style={{ color:palette.gold, flexShrink:0 }}>{b.icon}</div>
          <div><div style={{ fontSize:13, fontWeight:700, color:palette.charcoal }}>{b.title}</div><div style={{ fontSize:12, color:palette.mist }}>{b.sub}</div></div>
        </div>
      ))}
    </div>
  );
}

// ─── Testimonials ───
function Testimonials() {
  const reviews = [
    { text:"Dottoressa professionale, empatica e molto disponibile. Informata e preparata, la consiglio assolutamente.", name:"Paziente verificata", src:"MioDottore" },
    { text:"Dopo aver sperato per anni una ginecologa competente, finalmente posso affermare di averla trovata!", name:"Paziente verificata", src:"MioDottore" },
    { text:"Le sue spiegazioni sono dettagliate, chiare e rassicuranti. Umanamente gentile e capace di mettere a proprio agio.", name:"Paziente verificata", src:"MioDottore" },
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:20 }}>
      {reviews.map((r,i) => (
        <div key={i} className="hover-lift" style={{ background:palette.white, borderRadius:16, padding:28, border:`1px solid ${palette.border}`, position:"relative" }}>
          <div style={{ display:"flex", gap:3, marginBottom:12 }}>{[1,2,3,4,5].map(s=><Star key={s} size={14} fill={palette.gold} color={palette.gold}/>)}</div>
          <p style={{ fontSize:14, lineHeight:1.7, color:palette.slate, fontStyle:"italic", marginBottom:16 }}>"{r.text}"</p>
          <div style={{ fontSize:12, color:palette.mist }}>{r.name} — <span style={{ color:palette.rose }}>{r.src}</span></div>
        </div>
      ))}
    </div>
  );
}

// ─── Section Title ───
function SectionTitle({ label, title, subtitle, center }) {
  const align = center ? "center" : "left";
  return (
    <div style={{ textAlign:align, marginBottom:40 }} className="fade-up">
      {label && <div style={{ fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:palette.gold, marginBottom:8 }}>{label}</div>}
      <h2 style={{ fontSize:"clamp(28px,4vw,40px)", fontWeight:600, color:palette.navy, lineHeight:1.2, marginBottom:subtitle?12:0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize:16, color:palette.slate, maxWidth:600, margin:center?"0 auto":"0", lineHeight:1.6 }}>{subtitle}</p>}
    </div>
  );
}

// ─── Service Card ───
function ServiceCard({ icon, title, desc, onClick }) {
  return (
    <div className="hover-lift" onClick={onClick} style={{ background:palette.white, borderRadius:16, padding:28, border:`1px solid ${palette.border}`, cursor:"pointer", transition:"all 0.3s" }}>
      <div style={{ width:48, height:48, borderRadius:12, background:palette.rosePale, display:"flex", alignItems:"center", justifyContent:"center", color:palette.rose, marginBottom:16 }}>{icon}</div>
      <h3 style={{ fontSize:20, fontWeight:600, color:palette.navy, marginBottom:8 }}>{title}</h3>
      <p style={{ fontSize:14, lineHeight:1.6, color:palette.slate, marginBottom:16 }}>{desc}</p>
      <span style={{ fontSize:13, fontWeight:600, color:palette.rose, display:"flex", alignItems:"center", gap:4 }}>Scopri di più <ArrowRight size={14}/></span>
    </div>
  );
}

// ─── Service Page Template ───
function ServicePage({ title, intro, sections, faqs, ctaText, nav }) {
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg, ${palette.navy} 0%, ${palette.rose} 100%)`, padding:"clamp(80px,12vw,100px) clamp(16px,4vw,24px) clamp(40px,8vw,60px)", textAlign:"center" }}>
        <div className="fade-up" style={{ maxWidth:800, margin:"0 auto" }}>
          <h1 style={{ fontSize:"clamp(26px,5vw,44px)", fontWeight:700, color:palette.white, lineHeight:1.2, marginBottom:16 }}>{title}</h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.85)", lineHeight:1.6, maxWidth:640, margin:"0 auto" }}>{intro}</p>
        </div>
      </div>
      <div className="section-pad">
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom:48 }} className="fade-up">
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:16 }}>{s.heading}</h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize:15, lineHeight:1.8, color:palette.slate, marginBottom:12 }}>{p}</p>
            ))}
          </div>
        ))}

        {faqs && faqs.length > 0 && (
          <div style={{ marginTop:48 }}>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:24 }}>Domande frequenti</h2>
            <FAQ items={faqs} />
          </div>
        )}

        <div style={{ marginTop:48, padding:"clamp(20px,4vw,32px)", background:`linear-gradient(135deg, ${palette.rosePale}, ${palette.creamDark})`, borderRadius:20, textAlign:"center" }}>
          <h3 style={{ fontSize:"clamp(20px,3vw,24px)", fontWeight:600, color:palette.navy, marginBottom:8 }}>{ctaText || "Prenota la tua visita"}</h3>
          <p style={{ fontSize:15, color:palette.slate, marginBottom:20 }}>Contattami per fissare un appuntamento nel mio studio a Genova.</p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <button className="cta-btn" onClick={()=>nav(PAGES.contatti)}><Phone size={16}/> 351 817 1675</button>
            <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// HOMEPAGE
// ══════════════════════════════════════
function HomePage({ nav }) {
  const services = [
    { icon:<Stethoscope size={22}/>, title:"Visita ginecologica", desc:"Controllo completo con ecografia, Pap test e consulenza personalizzata.", page:PAGES.visita },
    { icon:<Search size={22}/>, title:"Pap test e HPV", desc:"Screening cervicale rapido e indolore per la prevenzione oncologica.", page:PAGES.paptest },
    { icon:<Activity size={22}/>, title:"Ecografia transvaginale", desc:"Diagnosi di precisione con ecografia transvaginale e 3D.", page:PAGES.ecografia },
    { icon:<Baby size={22}/>, title:"Gravidanza", desc:"Ti accompagno dal primo trimestre al parto con competenza e umanità.", page:PAGES.gravidanza },
    { icon:<Heart size={22}/>, title:"Endometriosi", desc:"Diagnosi ecografica esperta e percorsi terapeutici personalizzati.", page:PAGES.endometriosi },
    { icon:<Pill size={22}/>, title:"Contraccezione", desc:"Consulenza dedicata per trovare il metodo più adatto a te.", page:PAGES.contraccezione },
    { icon:<Sparkles size={22}/>, title:"Menopausa", desc:"Ormoni bioidentici e terapia personalizzata per vivere bene.", page:PAGES.menopausa },
    { icon:<Users size={22}/>, title:"Ginecologia pediatrica", desc:"Competenza specifica maturata all'Istituto Gaslini di Genova.", page:PAGES.ginecologa },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ position:"relative", minHeight:"100svh", display:"flex", alignItems:"center", overflow:"hidden", background:`linear-gradient(160deg, ${palette.cream} 0%, ${palette.rosePale} 40%, ${palette.creamDark} 100%)` }}>
        <div style={{ position:"absolute", top:0, right:0, width:"45%", height:"100%", background:`linear-gradient(180deg, transparent, ${palette.rosePale})`, opacity:0.5, borderBottomLeftRadius:"40%", zIndex:0 }} />
        <div style={{ position:"absolute", bottom:-60, left:-60, width:"clamp(100px,20vw,200px)", height:"clamp(100px,20vw,200px)", borderRadius:"50%", background:palette.gold, opacity:0.07 }} />
        <div style={{ position:"absolute", top:"20%", right:"10%", width:"clamp(60px,10vw,120px)", height:"clamp(60px,10vw,120px)", borderRadius:"50%", border:`2px solid ${palette.border}`, opacity:0.3 }} />

        <div className="section-pad" style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr", gap:40, paddingTop:"clamp(88px,14vw,120px)" }}>
          <div className="fade-up" style={{ maxWidth:720 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 16px", background:palette.white, borderRadius:50, border:`1px solid ${palette.border}`, marginBottom:24, fontSize:13, color:palette.slate }}>
              <MapPin size={14} color={palette.rose}/> Studio a Genova, zona Carignano
            </div>
            <h1 style={{ fontSize:"clamp(36px,6vw,56px)", fontWeight:700, color:palette.navy, lineHeight:1.1, marginBottom:20 }}>
              Dott.ssa Valentina<br/>La Pica
            </h1>
            <p style={{ fontSize:"clamp(18px,2.5vw,22px)", fontWeight:500, color:palette.rose, fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", marginBottom:16 }}>
              Specialista in Ginecologia e Ostetricia
            </p>
            <p style={{ fontSize:16, lineHeight:1.7, color:palette.slate, maxWidth:540, marginBottom:32 }}>
              Ti accolgo nel mio studio a Genova per offrirti un percorso di cura personalizzato, basato sull'ascolto, la competenza e la fiducia. Ogni visita inizia con il tempo di conoscerti.
            </p>
            <div className="btn-row" style={{ marginBottom:32 }}>
              <button className="cta-btn" onClick={()=>nav(PAGES.contatti)}><CalendarDays size={16}/> Prenota la visita</button>
              <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
            </div>
            <div style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
              <div style={{ display:"flex", gap:3 }}>{[1,2,3,4,5].map(s=><Star key={s} size={14} fill={palette.gold} color={palette.gold}/>)}</div>
              <span style={{ fontSize:13, color:palette.mist }}>Recensioni verificate su MioDottore</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ background:palette.white, borderTop:`1px solid ${palette.border}`, borderBottom:`1px solid ${palette.border}` }}>
        <div className="section-pad" style={{ paddingTop:40, paddingBottom:40 }}>
          <TrustBadges />
        </div>
      </section>

      {/* CHI SONO */}
      <section style={{ background:palette.cream }}>
        <div className="section-pad">
          <SectionTitle label="Chi sono" title="Formazione, esperienza, ascolto" subtitle="La mia priorità è dedicare a ciascuna paziente il tempo necessario per visitarla con cura, spiegarle i risultati e rispondere a ogni domanda." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(300px,100%),1fr))", gap:32 }}>
            <div className="fade-up">
              <p style={{ fontSize:15, lineHeight:1.8, color:palette.slate, marginBottom:16 }}>
                Mi sono laureata con lode in Medicina e Chirurgia nel 2012 all'Università degli Studi di Genova. Ho completato la Specializzazione in Ginecologia e Ostetricia al Policlinico Universitario IRCCS San Martino, il principale ospedale della Liguria.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:palette.slate, marginBottom:16 }}>
                Ho arricchito il mio percorso con esperienze all'Istituto Giannina Gaslini per la ginecologia pediatrica e all'Humanitas Research Hospital di Milano per la medicina della riproduzione.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:palette.slate }}>
                Credo nella medicina che mette al centro la persona. Parlo in modo semplice e diretto, perché capire cosa succede al proprio corpo è il primo diritto di ogni paziente.
              </p>
            </div>
            <div className="fade-up stagger-2" style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { label:"Menopausa e ormoni bioidentici", desc:"Terapia personalizzata con molecole identiche a quelle del corpo femminile" },
                { label:"Vulvodinia e dolore pelvico", desc:"Approccio globale e multidisciplinare" },
                { label:"Ginecologia pediatrica", desc:"Formazione specialistica all'Istituto Gaslini" },
                { label:"Endometriosi", desc:"Diagnosi ecografica esperta e percorsi terapeutici su misura" },
              ].map((item,i) => (
                <div key={i} style={{ padding:"16px 20px", background:palette.white, borderRadius:12, borderLeft:`3px solid ${palette.gold}` }}>
                  <div style={{ fontSize:14, fontWeight:700, color:palette.navy, marginBottom:4 }}>{item.label}</div>
                  <div style={{ fontSize:13, color:palette.mist }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign:"center", marginTop:32 }}>
            <button className="cta-btn-outline" onClick={()=>nav(PAGES.ginecologa)}>Scopri di più su di me <ArrowRight size={14}/></button>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section style={{ background:palette.white }}>
        <div className="section-pad">
          <SectionTitle label="Servizi" title="Come posso aiutarti" subtitle="Offro una gamma completa di servizi ginecologici e ostetrici nel mio studio a Genova, zona Carignano." center />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(240px,100%),1fr))", gap:20 }}>
            {services.map((s,i) => (
              <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} onClick={()=>nav(s.page)} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background:palette.rosePale }}>
        <div className="section-pad">
          <SectionTitle label="Recensioni" title="Cosa dicono le mie pazienti" subtitle="Le opinioni di chi ha già scelto di affidarsi a me." center />
          <Testimonials />
          <div style={{ textAlign:"center", marginTop:24 }}>
            <a href="https://www.miodottore.it/valentina-la-pica/ginecologo/genova" target="_blank" rel="noopener noreferrer" style={{ fontSize:13, color:palette.rose, display:"inline-flex", alignItems:"center", gap:4 }}>
              Leggi tutte le recensioni su MioDottore <ExternalLink size={12}/>
            </a>
          </div>
        </div>
      </section>

      {/* DOVE TROVARMI */}
      <section style={{ background:palette.cream }}>
        <div className="section-pad">
          <SectionTitle label="Dove ricevo" title="Due sedi a Genova per te" />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(280px,100%),1fr))", gap:24 }}>
            {[
              { name:"Genova Centro", addr:"Via Cesarea 2/20 secondo piano, 16121 Genova", zone:"Via XX Settembre · Carignano · Foce · Castelletto · Centro", transport:"10 min a piedi da Genova Brignole · Bus AMT 15, 17, 20", primary:true },
             /* { name:"Casa della Salute Nervi", addr:"Viale Franchini 24, 16167 Genova", zone:"Nervi · Quarto · Quinto · Bogliasco · Recco", transport:"Stazione Genova Nervi · Bus AMT", primary:false },*/
            ].map((s,i) => (
              <div key={i} style={{ background:palette.white, borderRadius:16, padding:28, border:s.primary?`2px solid ${palette.rose}`:`1px solid ${palette.border}` }}>
                {s.primary && <div style={{ fontSize:11, fontWeight:700, color:palette.rose, textTransform:"uppercase", letterSpacing:1.5, marginBottom:8 }}>Sede principale</div>}
                <h3 style={{ fontSize:20, fontWeight:600, color:palette.navy, marginBottom:8 }}>{s.name}</h3>
                <div style={{ display:"flex", alignItems:"flex-start", gap:8, marginBottom:8 }}>
                  <MapPin size={14} color={palette.gold} style={{ marginTop:3, flexShrink:0 }}/>
                  <span style={{ fontSize:14, color:palette.slate }}>{s.addr}</span>
                </div>
                <div style={{ fontSize:13, color:palette.mist, marginBottom:8 }}>{s.zone}</div>
                <div style={{ fontSize:13, color:palette.mist }}>{s.transport}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background:palette.white }}>
        <div className="section-pad">
          <SectionTitle label="FAQ" title="Domande frequenti" center />
          <div style={{ maxWidth:700, margin:"0 auto" }}>
            <FAQ items={[
              { q:"Come si svolge la prima visita ginecologica?", a:"La prima visita dura circa 30–40 minuti. Inizia con un colloquio sulla tua storia clinica. Segue l'esame ginecologico e, se necessario, un'ecografia transvaginale. L'obiettivo è conoscerti e impostare insieme un piano di prevenzione personalizzato." },
              { q:"Bisogna prepararsi prima della visita?", a:"Non servono preparazioni particolari. Ti consiglio di non essere nel periodo mestruale se devi fare il Pap test. Porta con te eventuali referti precedenti e l'elenco dei farmaci che assumi." },
              { q:"Si può prenotare online?", a:"Sì. Puoi prenotare tramite WhatsApp al 351 817 1675, via email a segreteria@valentinalapica.it oppure online attraverso MioDottore.it." },
              { q:"La dottoressa visita anche in inglese?", a:"Sì. Ricevo in italiano e in inglese. Lo studio è aperto anche a pazienti internazionali che vivono a Genova e in Liguria." },
              { q:"Quanto costa la visita ginecologica?", a:"Il costo dipende dalla prestazione (visita base, con ecografia, con Pap test). Contatta la segreteria al 351 817 1675 per un preventivo aggiornato." },
            ]} />
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section style={{ background:`linear-gradient(135deg, ${palette.navy}, ${palette.rose})`, padding:"clamp(48px,10vw,80px) clamp(16px,4vw,24px)", textAlign:"center" }}>
        <div className="fade-up" style={{ maxWidth:600, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,4vw,38px)", fontWeight:700, color:palette.white, marginBottom:16 }}>Prenditi cura di te.</h2>
          <p style={{ fontSize:"clamp(14px,2vw,16px)", color:"rgba(255,255,255,0.8)", lineHeight:1.6, marginBottom:32 }}>
            Prenota la tua visita ginecologica a Genova. Ti dedicherò tutto il tempo necessario per ascoltarti e prendermi cura della tua salute.
          </p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <button className="cta-btn" style={{ background:palette.white, color:palette.rose }} onClick={()=>nav(PAGES.contatti)}>
              <Phone size={16}/> Chiama il 351 817 1675
            </button>
            <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}>
              <MessageCircle size={16}/> Scrivi su WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════
// GINECOLOGA A GENOVA (Pillar Page)
// ══════════════════════════════════════
function GinecologaPage({ nav }) {
  return (
    <ServicePage
      nav={nav}
      title="Ginecologa a Genova"
      intro="Se stai cercando una ginecologa a Genova esperta, attenta e disponibile, sei nel posto giusto. Ti accolgo nel mio studio privato a Genova, in zona Carignano, con un approccio basato sull'ascolto e la competenza."
      sections={[
        { heading:"Chi sono: formazione ed esperienza", paragraphs:[
          "Sono la Dott.ssa Valentina La Pica, medico specialista in Ginecologia e Ostetricia. Mi sono laureata con lode in Medicina e Chirurgia nel 2012 all'Università degli Studi di Genova e ho conseguito la Specializzazione al Policlinico Universitario IRCCS San Martino, il principale ospedale della Liguria.",
          "Il mio percorso si è arricchito con esperienze in centri di eccellenza: al Policlinico San Martino per ginecologia benigna, endometriosi, ecografia 3D e isteroscopia; all'Istituto Giannina Gaslini per la ginecologia pediatrica; all'Humanitas Research Hospital di Milano per la medicina della riproduzione.",
          "Sono iscritta all'Ordine dei Medici di Genova (n. 16037) e partecipo regolarmente a congressi nazionali e internazionali per rimanere aggiornata sulle ultime evidenze scientifiche.",
        ]},
        { heading:"Servizi ginecologici nel mio studio a Genova", paragraphs:[
          "Visita ginecologica completa — controllo annuale con colloquio, esame obiettivo, ecografia transvaginale e Pap test. Lo eseguo con calma, spiegandoti ogni passaggio.",
          "Ecografia transvaginale e 3D — diagnosi ad alta precisione di cisti ovariche, endometriosi, fibromi, polipi e malformazioni uterine.",
          "Pap test e screening HPV — esami rapidi e indolori per la prevenzione del tumore della cervice uterina.",
          "Assistenza alla gravidanza — ecografie, screening prenatali (bitest, NIPT, morfologica), gestione di gravidanze fisiologiche e a rischio.",
          "Endometriosi e dolore pelvico cronico — diagnosi ecografica esperta e percorsi terapeutici personalizzati.",
          "Vulvodinia — approccio globale e multidisciplinare a una condizione ancora poco diagnosticata.",
          "Menopausa e ormoni bioidentici — terapia ormonale personalizzata con molecole identiche a quelle del corpo femminile.",
          "Contraccezione — consulenza dedicata per pillola, spirale IUD, anello, impianto sottocutaneo.",
          "Ginecologia pediatrica — competenza specifica maturata all'Istituto Gaslini.",
          "Infertilit\u00E0 di coppia — valutazione completa e coordinamento con centri di PMA.",
        ]},
        { heading:"Dove si trova lo studio a Genova", paragraphs:[
          "Il mio studio privato si trova in Viale Sauli 39/3, nel quartiere di Carignano, a Genova. È una zona centrale e ben collegata, facilmente raggiungibile da Genova Centro, Castelletto, Foce, San Fruttuoso, Albaro, Sturla, Quinto e Nervi.",
          "Per chi viene da fuori Genova, lo studio è a 10 minuti a piedi dalla stazione di Genova Brignole, raggiungibile anche dall'autostrada A12 (uscita Genova Est). Le pazienti da Chiavari, Rapallo, Savona, La Spezia e dall'entroterra ligure possono raggiungermi facilmente.",
          "Ricevo anche presso la Casa della Salute in Viale Franchini 24, Genova Nervi — comoda per chi risiede nel Levante genovese: Quarto, Quinto, Nervi, Bogliasco, Pieve Ligure, Sori, Recco, Camogli.",
        ]},
        { heading:"Come prenotare", paragraphs:[
          "Prenotare è semplice: chiama o scrivi su WhatsApp al 351 817 1675, invia un'email a segreteria@valentinalapica.it oppure prenota online su MioDottore.it. Ricevo su appuntamento dal lunedì al venerdì.",
        ]},
      ]}
      faqs={[
        { q:"Quanto costa una visita ginecologica a Genova?", a:"Il costo varia in base alle prestazioni incluse (visita base, con ecografia, Pap test). Contatta la segreteria al 351 817 1675 per un preventivo personalizzato." },
        { q:"Qual è la miglior ginecologa a Genova?", a:"La scelta dipende dalle tue esigenze. La Dott.ssa La Pica ha formazione al Policlinico San Martino e Gaslini, con competenze in menopausa, endometriosi, gravidanza e ginecologia pediatrica. Le pazienti la descrivono come professionale, empatica e attenta." },
        { q:"La Dott.ssa La Pica riceve in inglese?", a:"Sì. Lo studio è aperto anche a pazienti di madrelingua inglese che vivono a Genova o in Liguria." },
        { q:"Si possono fare ecografia e Pap test nello stesso appuntamento?", a:"Sì. Eseguo entrambi gli esami nella stessa seduta, ottimizzando i tempi." },
        { q:"Come si arriva allo studio in Viale Sauli?", a:"Bus AMT linee 15, 17, 20 (fermata Corso Torino / Piazza Palermo). A 10 minuti a piedi dalla stazione Brignole. In auto: uscita Genova Est. Parcheggi nelle vie circostanti." },
        { q:"La Dott.ssa si occupa anche di menopausa e ormoni bioidentici?", a:"Sì. La menopausa e la terapia con ormoni bioidentici sono tra le sue aree di specializzazione. Offre percorsi personalizzati per vampate, insonnia, secchezza vaginale e prevenzione osteoporosi." },
      ]}
      ctaText="Prenota la tua visita ginecologica a Genova"
    />
  );
}

// ══════════════════════════════════════
// CONTATTI
// ══════════════════════════════════════
function ContattiPage() {
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg, ${palette.navy} 0%, ${palette.rose} 100%)`, padding:"clamp(80px,12vw,100px) clamp(16px,4vw,24px) clamp(40px,8vw,60px)", textAlign:"center" }}>
        <div className="fade-up" style={{ maxWidth:700, margin:"0 auto" }}>
          <h1 style={{ fontSize:"clamp(26px,5vw,44px)", fontWeight:700, color:palette.white, marginBottom:16 }}>Prenota la Tua Visita</h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.85)", lineHeight:1.6 }}>Sono a tua disposizione. Contattami per fissare un appuntamento o per qualsiasi domanda.</p>
        </div>
      </div>
      <div className="section-pad">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(300px,100%),1fr))", gap:32 }}>
          {/* Contact methods */}
          <div>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:24 }}>Come contattarmi</h2>
            {[
              { icon:<Phone size={20}/>, label:"Telefono e WhatsApp", value:"(+39) 351 817 1675", sub:"Chiamate e messaggi WhatsApp", action:()=>window.open("tel:+393518171675") },
              { icon:<Mail size={20}/>, label:"Email", value:"segreteria@valentinalapica.it", sub:"Rispondo entro 24 ore lavorative" },
              { icon:<CalendarDays size={20}/>, label:"Prenotazione online", value:"MioDottore.it", sub:"Prenota direttamente online", action:()=>window.open("https://www.miodottore.it/valentina-la-pica/ginecologo/genova","_blank") },
              { icon:<Clock size={20}/>, label:"Orari", value:"Su appuntamento", sub:"Lunedì — Venerdì" },
            ].map((c,i) => (
              <div key={i} onClick={c.action} style={{ display:"flex", gap:16, padding:"20px 0", borderBottom:`1px solid ${palette.border}`, cursor:c.action?"pointer":"default", minHeight:72 }}>
                <div style={{ width:44, height:44, borderRadius:12, background:palette.rosePale, display:"flex", alignItems:"center", justifyContent:"center", color:palette.rose, flexShrink:0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize:12, color:palette.mist, textTransform:"uppercase", letterSpacing:1, marginBottom:4 }}>{c.label}</div>
                  <div style={{ fontSize:16, fontWeight:600, color:palette.navy }}>{c.value}</div>
                  <div style={{ fontSize:13, color:palette.slate }}>{c.sub}</div>
                </div>
              </div>
            ))}
            <div className="btn-row" style={{ marginTop:24 }}>
              <button className="cta-btn" onClick={()=>window.open("tel:+393518171675")}><Phone size={16}/> Chiama ora</button>
              <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
            </div>
          </div>
          {/* Locations */}
          <div>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:24 }}>Sedi</h2>
            {[
              { name:"Genova Centro", addr:"Via Cesarea 2/20 secondo piano, 16121 Genova", zone:"Via XX Settembre · Carignano · Foce · Castelletto · Centro", transport:"10 min a piedi da Genova Brignole · Bus AMT 15, 17, 20", primary:true },
              /*{ name:"Casa della Salute Nervi", addr:"Viale Franchini 24 — 16167 Genova", details:["Stazione Genova Nervi","Ideale per: Quarto, Quinto, Bogliasco, Recco, Camogli"], primary:false },*/
            ].map((s,i) => (
              <div key={i} style={{ background:palette.white, borderRadius:16, padding:24, border:s.primary?`2px solid ${palette.rose}`:`1px solid ${palette.border}`, marginBottom:16 }}>
                {s.primary && <div style={{ fontSize:11, fontWeight:700, color:palette.rose, textTransform:"uppercase", letterSpacing:1.5, marginBottom:8 }}>Sede principale</div>}
                <h3 style={{ fontSize:18, fontWeight:600, color:palette.navy, marginBottom:4 }}>{s.name}</h3>
                <p style={{ fontSize:14, color:palette.slate, marginBottom:12 }}>{s.addr}</p>
                {s.details.map((d,j) => (
                  <div key={j} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                    <CheckCircle size={12} color={palette.gold}/>
                    <span style={{ fontSize:13, color:palette.mist }}>{d}</span>
                  </div>
                ))}
              </div>
            ))}
            {/* Map placeholder */}
            <div style={{ background:palette.creamDark, borderRadius:16, height:200, display:"flex", alignItems:"center", justifyContent:"center", border:`1px solid ${palette.border}`, marginTop:8 }}>
              <div style={{ textAlign:"center", color:palette.mist }}>
                <MapPin size={32} style={{ marginBottom:8 }}/>
                <p style={{ fontSize:13 }}>Google Maps — Viale Sauli 39/3, Genova</p>
                <p style={{ fontSize:11, marginTop:4 }}>Inserire iframe Google Maps nel sito finale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// BLOG
// ══════════════════════════════════════
function BlogPage() {
  const articles = [
    { title:"Pap Test: Cos'è, Quando Farlo e Perché È Fondamentale", cat:"Prevenzione", desc:"Tutto sul Pap test: cos'è, ogni quanto farlo, come prepararsi. Guida completa della ginecologa." },
    { title:"Prima Visita Ginecologica: Guida per Non Avere Paura", cat:"Guida", desc:"Come si svolge, come prepararsi e cosa chiedere alla ginecologa. Passo dopo passo." },
    { title:"Gravidanza: Prima Visita ed Esami Trimestre per Trimestre", cat:"Gravidanza", desc:"Sei incinta? Il calendario completo degli esami e delle ecografie." },
    { title:"Endometriosi: Come Riconoscerla e Cosa Fare", cat:"Patologie", desc:"I 6 sintomi principali, la diagnosi ecografica e le opzioni di trattamento." },
    { title:"Infezioni Vaginali Ricorrenti: Cause e Cure", cat:"Salute intima", desc:"Candida, vaginosi, cistite: perché tornano e come curarle definitivamente." },
    { title:"Contraccezione: Quale Metodo È Giusto per Te?", cat:"Contraccezione", desc:"Pillola, spirale, anello o impianto? Confronto completo dei metodi." },
    { title:"Menopausa e Ormoni Bioidentici: Guida Completa", cat:"Menopausa", desc:"Sintomi, rimedi e come funziona la terapia con ormoni bioidentici." },
    { title:"Dolore Pelvico Cronico e Vulvodinia: Non È \"Normale\"", cat:"Dolore pelvico", desc:"Cause, diagnosi e l'approccio multidisciplinare al trattamento." },
    { title:"Controllo Ginecologico: Ogni Quanto e Perché Non Rimandare", cat:"Prevenzione", desc:"Le regole per età e gli esami da non saltare." },
    { title:"Ovaio Policistico (PCOS): Sintomi, Cura e Fertilità", cat:"Patologie", desc:"Come riconoscerlo, gestirlo e restare incinta con la PCOS." },
  ];
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg, ${palette.navy} 0%, ${palette.rose} 100%)`, padding:"clamp(80px,12vw,100px) clamp(16px,4vw,24px) clamp(40px,8vw,60px)", textAlign:"center" }}>
        <div className="fade-up">
          <h1 style={{ fontSize:"clamp(26px,5vw,44px)", fontWeight:700, color:palette.white, marginBottom:12 }}>Blog</h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.85)" }}>Articoli di approfondimento sulla salute ginecologica, scritti dalla Dott.ssa La Pica</p>
        </div>
      </div>
      <div className="section-pad">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(300px,100%),1fr))", gap:24 }}>
          {articles.map((a,i) => (
            <article key={i} className="hover-lift" style={{ background:palette.white, borderRadius:16, overflow:"hidden", border:`1px solid ${palette.border}` }}>
              <div style={{ height:8, background:`linear-gradient(90deg, ${palette.rose}, ${palette.gold})` }}/>
              <div style={{ padding:24 }}>
                <div style={{ fontSize:11, fontWeight:700, color:palette.gold, textTransform:"uppercase", letterSpacing:1.5, marginBottom:12 }}>{a.cat}</div>
                <h3 style={{ fontSize:18, fontWeight:600, color:palette.navy, lineHeight:1.3, marginBottom:12 }}>{a.title}</h3>
                <p style={{ fontSize:14, color:palette.slate, lineHeight:1.6, marginBottom:16 }}>{a.desc}</p>
                <span style={{ fontSize:13, fontWeight:600, color:palette.rose, display:"flex", alignItems:"center", gap:4, cursor:"pointer" }}>Leggi l'articolo <ArrowRight size={14}/></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// NAVBAR
// ══════════════════════════════════════
function Navbar({ page, nav }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const [prevPage, setPrevPage] = useState(page);
  if (prevPage !== page) {
    setPrevPage(page);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  const navItem = (label, target) => (
    <button
      onClick={()=>nav(target)}
      aria-current={page===target ? "page" : undefined}
      style={{ background:"none", border:"none", cursor:"pointer", fontSize:14, fontWeight: page===target?700:500, color: page===target?palette.rose:palette.charcoal, fontFamily:"'DM Sans',sans-serif", padding:"8px 0", transition:"color 0.2s" }}
    >{label}</button>
  );

  const serviceItems = [
    { label:"Visita ginecologica", page:PAGES.visita },
    { label:"Pap test e HPV", page:PAGES.paptest },
    { label:"Ecografia", page:PAGES.ecografia },
    { label:"Gravidanza", page:PAGES.gravidanza },
    { label:"Endometriosi", page:PAGES.endometriosi },
    { label:"Contraccezione", page:PAGES.contraccezione },
    { label:"Menopausa", page:PAGES.menopausa },
  ];

  return (
    <>
      <nav aria-label="Navigazione principale" style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background: scrolled?"rgba(253,248,244,0.95)":"rgba(253,248,244,0.8)", backdropFilter:"blur(12px)", borderBottom: scrolled?`1px solid ${palette.border}`:"1px solid transparent", transition:"all 0.3s" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={()=>nav(PAGES.home)} aria-label="Torna alla homepage" style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:"50%", background:`linear-gradient(135deg, ${palette.rose}, ${palette.gold})`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"white", fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:18 }}>V</span>
            </div>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:palette.navy, fontFamily:"'Cormorant Garamond',serif", lineHeight:1 }}>Dott.ssa La Pica</div>
              <div style={{ fontSize:10, color:palette.mist, letterSpacing:0.5 }}>Ginecologa · Genova</div>
            </div>
          </button>

          {/* Desktop nav */}
          <div style={{ display:"flex", alignItems:"center", gap:24 }} className="desktop-nav">
            {navItem("Home", PAGES.home)}
            <div style={{ position:"relative" }} onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)}>
              <button aria-haspopup="true" aria-expanded={servicesOpen} style={{ background:"none", border:"none", cursor:"pointer", fontSize:14, fontWeight:500, color:palette.charcoal, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", gap:4 }}>
                Servizi <ChevronDown size={14} style={{ transition:"transform 0.2s", transform:servicesOpen?"rotate(180deg)":"" }}/>
              </button>
              {servicesOpen && (
                <div role="menu" style={{ position:"absolute", top:"100%", left:-20, background:palette.white, borderRadius:12, boxShadow:"0 12px 40px rgba(0,0,0,0.12)", padding:8, minWidth:220, border:`1px solid ${palette.border}` }}>
                  {serviceItems.map((s,i) => (
                    <button role="menuitem" key={i} onClick={()=>nav(s.page)} style={{ display:"block", width:"100%", textAlign:"left", padding:"10px 16px", background:"none", border:"none", cursor:"pointer", fontSize:14, color:palette.charcoal, fontFamily:"'DM Sans',sans-serif", borderRadius:8, transition:"background 0.2s" }}
                      onMouseEnter={e=>e.target.style.background=palette.rosePale}
                      onMouseLeave={e=>e.target.style.background="transparent"}
                    >{s.label}</button>
                  ))}
                </div>
              )}
            </div>
            {navItem("Ginecologa Genova", PAGES.ginecologa)}
            {navItem("Blog", PAGES.blog)}
            {navItem("Contatti", PAGES.contatti)}
            <button className="cta-btn" style={{ padding:"8px 20px", fontSize:13 }} onClick={()=>nav(PAGES.contatti)}>
              <Phone size={14}/> Prenota
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={()=>setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            style={{ display:"none", background:"none", border:"none", cursor:"pointer", color:palette.navy, padding:8, minWidth:44, minHeight:44 }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" role="navigation" aria-label="Menu mobile" className="mobile-menu" style={{ background:palette.white, borderTop:`1px solid ${palette.border}`, padding:24, display:"flex", flexDirection:"column", gap:4 }}>
            {[
              { label:"Home", page:PAGES.home },
              ...serviceItems,
              { label:"Ginecologa a Genova", page:PAGES.ginecologa },
              { label:"Blog", page:PAGES.blog },
              { label:"Contatti", page:PAGES.contatti },
            ].map((item,i) => (
              <button key={i} onClick={()=>nav(item.page)} aria-current={page===item.page?"page":undefined} style={{ display:"block", padding:"14px 16px", minHeight:48, background:"none", border:"none", cursor:"pointer", fontSize:15, fontWeight: page===item.page?700:400, color: page===item.page?palette.rose:palette.charcoal, fontFamily:"'DM Sans',sans-serif", textAlign:"left", borderRadius:8, WebkitTapHighlightColor:"transparent" }}>
                {item.label}
              </button>
            ))}
            <button className="cta-btn" style={{ marginTop:12, justifyContent:"center" }} onClick={()=>nav(PAGES.contatti)}>
              <Phone size={16}/> Prenota la visita
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media(min-width:769px) { .mobile-toggle, .mobile-menu { display:none !important; } }
        @media(max-width:768px) { .desktop-nav { display:none !important; } .mobile-toggle { display:block !important; } }
      `}</style>
    </>
  );
}

// ══════════════════════════════════════
// FOOTER
// ══════════════════════════════════════
function Footer({ nav }) {
  return (
    <footer style={{ background:palette.navy, color:"rgba(255,255,255,0.7)", padding:"clamp(40px,8vw,60px) clamp(16px,4vw,24px) 32px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))", gap:"clamp(24px,4vw,40px)", marginBottom:48 }}>
          <div>
            <div style={{ fontSize:22, fontWeight:700, color:palette.white, fontFamily:"'Cormorant Garamond',serif", marginBottom:8 }}>Dott.ssa Valentina La Pica</div>
            <p style={{ fontSize:13, lineHeight:1.6, marginBottom:16 }}>Specialista in Ginecologia e Ostetricia. Studio a Genova, zona Carignano. Visite in italiano e inglese.</p>
            <div style={{ display:"flex", gap:12 }}>
              {["LinkedIn","Instagram","TikTok"].map(s => (
                <span key={s} style={{ fontSize:12, padding:"4px 10px", border:"1px solid rgba(255,255,255,0.2)", borderRadius:20, cursor:"pointer" }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:palette.white, marginBottom:16 }}>Servizi</div>
            {["Visita ginecologica","Pap test","Ecografia","Gravidanza","Endometriosi","Contraccezione","Menopausa"].map(s => (
              <div key={s} style={{ fontSize:13, marginBottom:8, cursor:"pointer" }} onClick={()=>nav(PAGES[s.toLowerCase().split(" ")[0]] || PAGES.ginecologa)}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:palette.white, marginBottom:16 }}>Contatti</div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}><Phone size={14}/> <span style={{ fontSize:13 }}>351 817 1675</span></div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}><Mail size={14}/> <span style={{ fontSize:13 }}>segreteria@valentinalapica.it</span></div>
            <div style={{ display:"flex", alignItems:"flex-start", gap:8, marginBottom:12 }}><MapPin size={14} style={{ marginTop:2 }}/> <span style={{ fontSize:13 }}>V.le Sauli 39/3<br/>16121 Genova</span></div>
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:palette.white, marginBottom:16 }}>Prenota</div>
            <button className="cta-btn" style={{ width:"100%", justifyContent:"center", marginBottom:12 }} onClick={()=>window.open("tel:+393518171675")}><Phone size={16}/> Chiama</button>
            <button className="wa-btn" style={{ width:"100%", justifyContent:"center" }} onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <div style={{ fontSize:12 }}>© 2026 Dott.ssa Valentina La Pica · P.IVA 11174040961 · OMCeO GE 16037</div>
          <div style={{ fontSize:12, display:"flex", gap:16 }}>
            <span style={{ cursor:"pointer" }}>Privacy Policy</span>
            <span style={{ cursor:"pointer" }}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════
// SERVICE PAGE DATA
// ══════════════════════════════════════
const serviceData = {
  [PAGES.visita]: {
    title: "Visita Ginecologica a Genova",
    intro: "La visita ginecologica è il gesto più importante che puoi fare per la tua salute intima. Ti accolgo nel mio studio a Genova Carignano in un ambiente riservato.",
    sections: [
      { heading:"Cosa comprende la visita", paragraphs:[
        "Ogni visita include tre momenti: un colloquio anamnestico sulla tua storia clinica, l'esame obiettivo delicato con spiegazione di ogni passaggio, e l'ecografia transvaginale quando indicata. Se necessario, eseguo anche il Pap test nella stessa seduta.",
      ]},
      { heading:"Quando fare la visita ginecologica", paragraphs:[
        "Consiglio il primo controllo a partire dai 18–20 anni o dall'inizio dell'attività sessuale. Successivamente, un controllo annuale è sufficiente. Prenota anche per: irregolarità mestruali, dolore pelvico, perdite anomale, bruciore o prurito.",
      ]},
    ],
    faqs: [
      { q:"La visita ginecologica fa male?", a:"No. L'esame può creare un leggero fastidio, ma non è doloroso. Ti spiego ogni passaggio in anticipo e procedo con delicatezza." },
      { q:"Posso fare ecografia e Pap test nella stessa visita?", a:"Sì. Eseguo entrambi gli esami nello stesso appuntamento per un quadro completo." },
    ],
  },
  [PAGES.paptest]: {
    title: "Pap Test e Screening HPV a Genova",
    intro: "Il Pap test è l'esame di screening più efficace per prevenire il tumore del collo dell'utero. Lo eseguo in modo rapido e indolore.",
    sections: [
      { heading:"Come funziona il Pap test", paragraphs:[
        "Prelevo delicatamente un campione di cellule dal collo dell'utero. Il campione viene analizzato in laboratorio per individuare cellule anomale. Non è doloroso: puoi avvertire una leggera pressione di pochi secondi.",
      ]},
      { heading:"Pap test e HPV test: la differenza", paragraphs:[
        "Il Pap test analizza le cellule per anomalie. L'HPV test cerca il Papillomavirus. Dopo i 30 anni, l'HPV test è raccomandato come primo esame, con il Pap test come approfondimento.",
      ]},
      { heading:"Ogni quanto fare il Pap test", paragraphs:[
        "Pap test ogni 3 anni dai 25 ai 30 anni. HPV test ogni 5 anni dai 30 ai 65 anni. In caso di fattori di rischio, posso consigliare frequenza più ravvicinata.",
      ]},
    ],
    faqs: [
      { q:"Il Pap test fa male?", a:"No. Puoi sentire un lieve fastidio di pochi secondi. Lo eseguo con strumenti monouso e massima delicatezza." },
    ],
  },
  [PAGES.ecografia]: {
    title: "Ecografia Transvaginale e 3D a Genova",
    intro: "L'ecografia transvaginale è l'esame più preciso per visualizzare utero, ovaie e strutture pelviche. Eseguo anche ecografie 3D per diagnosi avanzate.",
    sections: [
      { heading:"Quando è indicata", paragraphs:[
        "L'ecografia transvaginale diagnostica: cisti ovariche, endometriosi, fibromi uterini, polipi endometriali, ovaio policistico. È anche il primo esame nella gravidanza iniziale.",
      ]},
      { heading:"L'esame è doloroso?", paragraphs:[
        "No. L'ecografia è indolore e dura 10–15 minuti. Utilizzo una sonda sottile con gel. Ti mostro le immagini in tempo reale.",
      ]},
    ],
    faqs: [
      { q:"Devo prepararmi?", a:"No. È consigliabile avere la vescica vuota. Puoi andare in bagno prima dell'esame." },
    ],
  },
  [PAGES.gravidanza]: {
    title: "Assistenza alla Gravidanza a Genova",
    intro: "Scoprire di essere incinta è un momento che cambia la vita. Ti accompagno con competenza e serenità in ogni fase.",
    sections: [
      { heading:"Il calendario degli esami", paragraphs:[
        "Primo trimestre: conferma gravidanza, datazione ecografica, bitest e translucenza nucale, eventuale NIPT.",
        "Secondo trimestre: ecografia morfologica, esami ematici, curva glicemica.",
        "Terzo trimestre: ecografia di accrescimento, monitoraggio fetale, tampone vaginale.",
      ]},
      { heading:"Quando prenotare la prima visita", paragraphs:[
        "Prenota appena scopri di essere incinta, idealmente entro le 8–10 settimane. Confermeremo la gravidanza, la dateremo e imposteremo il calendario dei controlli.",
      ]},
    ],
    faqs: [
      { q:"Ogni quanto andare dalla ginecologa in gravidanza?", a:"Circa una volta al mese nei primi due trimestri, ogni 2 settimane nell'ultimo mese. Più frequente in gravidanze a rischio." },
      { q:"Segue anche gravidanze a rischio?", a:"Sì. Grazie alla formazione al San Martino, gestisco anche gravidanze complesse coordinandomi con i reparti ospedalieri." },
    ],
  },
  [PAGES.endometriosi]: {
    title: "Endometriosi: Diagnosi e Cura a Genova",
    intro: "L'endometriosi colpisce il 10–15% delle donne fertili. Il ritardo diagnostico medio è di 7–8 anni. Nel mio studio offro diagnosi ecografica esperta.",
    sections: [
      { heading:"I sintomi dell'endometriosi", paragraphs:[
        "I segnali più comuni: dolore pelvico cronico, mestruazioni molto dolorose, dolore durante i rapporti, difficoltà a concepire, gonfiore e disturbi intestinali ciclici, stanchezza cronica. Se riconosci anche solo uno di questi sintomi, una valutazione può fare la differenza.",
      ]},
      { heading:"Come diagnostico l'endometriosi", paragraphs:[
        "La diagnosi parte dall'ascolto attento. Procedo con esame obiettivo mirato ed ecografia transvaginale specializzata. Nelle mani esperte, l'ecografia identifica la maggior parte delle localizzazioni endometriosiche.",
      ]},
      { heading:"Il percorso di cura", paragraphs:[
        "Il trattamento dipende da età, sintomi, desiderio di gravidanza e gravità. Le opzioni: terapia medica, gestione del dolore e, quando indicato, chirurgia laparoscopica.",
      ]},
    ],
    faqs: [
      { q:"L'endometriosi si può guarire?", a:"È cronica ma gestibile. Con un percorso personalizzato è possibile controllare i sintomi e migliorare significativamente la qualità della vita." },
      { q:"Endometriosi e gravidanza: si può restare incinta?", a:"Sì. Molte donne con endometriosi concepiscono spontaneamente. Per l'infertilità correlata esistono percorsi di PMA efficaci." },
    ],
  },
  [PAGES.contraccezione]: {
    title: "Contraccezione Personalizzata a Genova",
    intro: "Non esiste un unico metodo adatto a tutte. La scelta dipende dalla tua età, salute, stile di vita e preferenze.",
    sections: [
      { heading:"I metodi disponibili", paragraphs:[
        "Pillola estroprogestinica e progestinica: il metodo più diffuso, scelto in base alla tua storia clinica.",
        "Spirale IUD al rame: non ormonale, efficace 5–10 anni. Ideale per chi preferisce evitare ormoni.",
        "Spirale ormonale (IUS): rilascia progestinico. Utile anche per mestruazioni abbondanti.",
        "Anello vaginale e cerotto: alternative pratiche alla pillola quotidiana.",
        "Impianto sottocutaneo: protezione per 3 anni, procedura rapida.",
      ]},
    ],
    faqs: [
      { q:"L'inserimento della spirale fa male?", a:"Puoi sentire un crampo di pochi secondi. È possibile usare un antidolorifico locale. La maggior parte delle pazienti lo descrive come sopportabile." },
    ],
  },
  [PAGES.menopausa]: {
    title: "Menopausa e Ormoni Bioidentici a Genova",
    intro: "La menopausa non è una malattia. È una fase naturale che merita attenzione e cura personalizzata con le terapie più moderne.",
    sections: [
      { heading:"I sintomi della menopausa", paragraphs:[
        "Vampate di calore, sudorazioni notturne, insonnia, sbalzi d'umore, secchezza vaginale, calo della libido, aumento del rischio cardiovascolare e di osteoporosi. Ogni donna li vive in modo diverso: per questo serve un approccio personalizzato.",
      ]},
      { heading:"Cosa sono gli ormoni bioidentici", paragraphs:[
        "Gli ormoni bioidentici sono molecole chimicamente identiche a quelle prodotte naturalmente dal corpo femminile (estradiolo, progesterone). La terapia viene personalizzata su misura in base ai sintomi, agli esami e alla storia clinica.",
      ]},
      { heading:"I benefici della terapia ormonale", paragraphs:[
        "Quando indicata: riduce o elimina vampate e sudorazioni, migliora sonno e umore, allevia la secchezza vaginale, protegge la densità ossea e riduce il rischio cardiovascolare nelle donne che iniziano vicino alla menopausa.",
      ]},
    ],
    faqs: [
      { q:"Gli ormoni bioidentici sono sicuri?", a:"Le evidenze indicano che la terapia bioidentica, prescritta alle dosi adeguate e monitorata, è efficace e sicura per la maggior parte delle donne. Ha indicazioni e controindicazioni valutate caso per caso." },
      { q:"A che età inizia la menopausa?", a:"L'età media in Italia è 51 anni, ma varia tra 45 e 55. Prima dei 40 si parla di menopausa precoce e serve una valutazione specialistica." },
    ],
  },
};

// ─── Meta tag per pagina (SEO) ───
const META = {
  [PAGES.home]: {
    title: "Dott.ssa Valentina La Pica — Ginecologa a Genova",
    description: "Specialista in Ginecologia e Ostetricia a Genova Carignano. Laureata con lode, specializzata al Policlinico San Martino. Prenota al 351 817 1675.",
  },
  [PAGES.ginecologa]: {
    title: "Ginecologa a Genova | Dott.ssa Valentina La Pica",
    description: "Cerchi una ginecologa a Genova? La Dott.ssa La Pica visita in zona Carignano e Nervi. Specializzata al San Martino e all'Istituto Gaslini.",
  },
  [PAGES.visita]: {
    title: "Visita Ginecologica a Genova | Dott.ssa La Pica",
    description: "Visita ginecologica completa con ecografia transvaginale e Pap test. Studio privato a Genova Carignano. Prenota online o al 351 817 1675.",
  },
  [PAGES.paptest]: {
    title: "Pap Test e Screening HPV a Genova | Dott.ssa La Pica",
    description: "Pap test e HPV test rapido e indolore a Genova. Prevenzione del tumore cervicale. Prenota la visita al 351 817 1675.",
  },
  [PAGES.ecografia]: {
    title: "Ecografia Transvaginale a Genova | Dott.ssa La Pica",
    description: "Ecografia transvaginale e 3D a Genova per diagnosi di cisti, endometriosi, fibromi, polipi. Studio Carignano. Prenota al 351 817 1675.",
  },
  [PAGES.gravidanza]: {
    title: "Assistenza Gravidanza a Genova | Dott.ssa La Pica",
    description: "Ecografie, screening prenatali e assistenza alla gravidanza a Genova. Dalla conferma al parto. Prenota al 351 817 1675.",
  },
  [PAGES.endometriosi]: {
    title: "Endometriosi a Genova: Diagnosi e Cura | Dott.ssa La Pica",
    description: "Diagnosi ecografica esperta dell'endometriosi a Genova. Percorsi terapeutici personalizzati. Prenota la visita al 351 817 1675.",
  },
  [PAGES.contraccezione]: {
    title: "Contraccezione a Genova | Consulenza Personalizzata",
    description: "Pillola, spirale IUD, anello, impianto: consulenza contraccettiva personalizzata a Genova con la Dott.ssa La Pica.",
  },
  [PAGES.menopausa]: {
    title: "Menopausa e Ormoni Bioidentici a Genova | Dott.ssa La Pica",
    description: "Terapia personalizzata con ormoni bioidentici per vampate, insonnia, secchezza vaginale. Studio privato a Genova Carignano.",
  },
  [PAGES.contatti]: {
    title: "Prenota una Visita | Dott.ssa Valentina La Pica Genova",
    description: "Prenota la tua visita ginecologica a Genova. Chiama o scrivi su WhatsApp al 351 817 1675. Studio in Viale Sauli 39/3, Carignano.",
  },
  [PAGES.blog]: {
    title: "Blog di Ginecologia | Dott.ssa Valentina La Pica Genova",
    description: "Articoli di approfondimento sulla salute ginecologica: Pap test, menopausa, endometriosi, gravidanza. Scritti dalla Dott.ssa La Pica.",
  },
};

// ══════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════
export default function App() {
  const [page, setPage] = useState(PAGES.home);

  useEffect(() => {
    const m = META[page] || META[PAGES.home];
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", m.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", m.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", m.description);
  }, [page]);

  const nav = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (page === PAGES.home) return <HomePage nav={nav}/>;
    if (page === PAGES.ginecologa) return <GinecologaPage nav={nav}/>;
    if (page === PAGES.contatti) return <ContattiPage nav={nav}/>;
    if (page === PAGES.blog) return <BlogPage nav={nav}/>;
    if (serviceData[page]) {
      const d = serviceData[page];
      return <ServicePage nav={nav} title={d.title} intro={d.intro} sections={d.sections} faqs={d.faqs}/>;
    }
    return <HomePage nav={nav}/>;
  };

  return (
    <>
      <style>{globalCSS}</style>
      <Navbar page={page} nav={nav}/>
      <main style={{ minHeight:"100vh" }}>
        {renderPage()}
      </main>
      <Footer nav={nav}/>

      {/* FLOATING WhatsApp */}
      <button
        onClick={()=>window.open("https://wa.me/393518171675","_blank")}
        style={{ position:"fixed", bottom:24, right:24, width:56, height:56, borderRadius:"50%", background:"#25D366", border:"none", cursor:"pointer", boxShadow:"0 4px 16px rgba(37,211,102,0.4)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:999, transition:"transform 0.3s" }}
        onMouseEnter={e=>e.currentTarget.style.transform="scale(1.1)"}
        onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} color="white"/>
      </button>
    </>
  );
}