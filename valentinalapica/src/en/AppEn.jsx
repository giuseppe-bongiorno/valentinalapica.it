import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, Menu, X, Star, Heart, Baby, Stethoscope, CalendarDays, ArrowRight, MessageCircle, ExternalLink, CheckCircle, Award, GraduationCap, Building2, Users, Sparkles, Activity, Pill, Search } from "lucide-react";

const palette = {
  rose: "#8B2252", roseLight: "#A83D6B", rosePale: "#F9F0F3",
  cream: "#FDF8F4", creamDark: "#F5EDE6", gold: "#C4956A",
  navy: "#1B2A4A", charcoal: "#2D2D2D", slate: "#5A6577",
  mist: "#8B95A5", white: "#FFFFFF", border: "#E8DDD4",
};

const PAGES = {
  home: "home",
  gyn: "gynaecologist-genoa",
  exam: "gynaecological-examination",
  pap: "pap-smear",
  ultrasound: "transvaginal-ultrasound",
  pregnancy: "pregnancy",
  endometriosis: "endometriosis",
  contraception: "contraception",
  menopause: "menopause",
  contact: "contact",
  blog: "blog",
};

// ─── FAQ ───
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
      {items.map((item, i) => (
        <div key={i} style={{ background:palette.white, borderRadius:12, border:`1px solid ${palette.border}`, overflow:"hidden" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width:"100%", padding:"16px 20px", display:"flex", justifyContent:"space-between", alignItems:"center", background:"none", border:"none", cursor:"pointer", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:600, color:palette.charcoal, textAlign:"left", lineHeight:1.4 }}
            aria-expanded={open === i}
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
    { icon:<GraduationCap size={22}/>, title:"Honours Degree", sub:"Univ. of Genoa, 2012" },
    { icon:<Building2 size={22}/>, title:"Specialisation", sub:"Policlinico San Martino" },
    { icon:<Heart size={22}/>, title:"Paediatric Training", sub:"Gaslini Institute" },
    { icon:<Award size={22}/>, title:"GMC Registered", sub:"OMCeO Genova n. 16037" },
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))", gap:12 }}>
      {badges.map((b,i) => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:12, padding:"16px 18px", background:palette.white, borderRadius:12, border:`1px solid ${palette.border}` }}>
          <div style={{ color:palette.gold, flexShrink:0 }}>{b.icon}</div>
          <div>
            <div style={{ fontSize:13, fontWeight:700, color:palette.charcoal }}>{b.title}</div>
            <div style={{ fontSize:12, color:palette.mist }}>{b.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Testimonials ───
function Testimonials() {
  const reviews = [
    { text:"Professional, empathetic and very helpful. Knowledgeable and well-prepared — I highly recommend her.", name:"Verified patient", src:"MioDottore" },
    { text:"After years of searching for a competent gynaecologist, I can finally say I have found her!", name:"Verified patient", src:"MioDottore" },
    { text:"Her explanations are detailed, clear and reassuring. Humanly kind and able to put you at ease.", name:"Verified patient", src:"MioDottore" },
  ];
  return (
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(280px,100%),1fr))", gap:20 }}>
      {reviews.map((r,i) => (
        <div key={i} style={{ background:palette.white, borderRadius:16, padding:28, border:`1px solid ${palette.border}` }}>
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
    <div style={{ textAlign:align, marginBottom:40 }}>
      {label && <div style={{ fontSize:12, fontWeight:700, letterSpacing:2, textTransform:"uppercase", color:palette.gold, marginBottom:8 }}>{label}</div>}
      <h2 style={{ fontSize:"clamp(28px,4vw,40px)", fontWeight:600, color:palette.navy, lineHeight:1.2, marginBottom:subtitle?12:0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize:16, color:palette.slate, maxWidth:600, margin:center?"0 auto":"0", lineHeight:1.6 }}>{subtitle}</p>}
    </div>
  );
}

// ─── Service Card ───
function ServiceCard({ icon, title, desc, onClick }) {
  return (
    <div onClick={onClick} style={{ background:palette.white, borderRadius:16, padding:28, border:`1px solid ${palette.border}`, cursor:"pointer", transition:"all 0.3s" }}>
      <div style={{ width:48, height:48, borderRadius:12, background:palette.rosePale, display:"flex", alignItems:"center", justifyContent:"center", color:palette.rose, marginBottom:16 }}>{icon}</div>
      <h3 style={{ fontSize:20, fontWeight:600, color:palette.navy, marginBottom:8 }}>{title}</h3>
      <p style={{ fontSize:14, lineHeight:1.6, color:palette.slate, marginBottom:16 }}>{desc}</p>
      <span style={{ fontSize:13, fontWeight:600, color:palette.rose, display:"flex", alignItems:"center", gap:4 }}>Learn more <ArrowRight size={14}/></span>
    </div>
  );
}

// ─── Service Page Template ───
function ServicePage({ title, intro, sections, faqs, ctaText, nav }) {
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg, ${palette.navy} 0%, ${palette.rose} 100%)`, padding:"clamp(80px,12vw,100px) clamp(16px,4vw,24px) clamp(40px,8vw,60px)", textAlign:"center" }}>
        <div style={{ maxWidth:800, margin:"0 auto" }}>
          <h1 style={{ fontSize:"clamp(26px,5vw,44px)", fontWeight:700, color:palette.white, lineHeight:1.2, marginBottom:16 }}>{title}</h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.85)", lineHeight:1.6, maxWidth:640, margin:"0 auto" }}>{intro}</p>
        </div>
      </div>
      <div className="section-pad">
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom:48 }}>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:16 }}>{s.heading}</h2>
            {s.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize:15, lineHeight:1.8, color:palette.slate, marginBottom:12 }}>{p}</p>
            ))}
          </div>
        ))}
        {faqs && faqs.length > 0 && (
          <div style={{ marginTop:48 }}>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:24 }}>Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        )}
        <div style={{ marginTop:48, padding:"clamp(20px,4vw,32px)", background:`linear-gradient(135deg, ${palette.rosePale}, ${palette.creamDark})`, borderRadius:20, textAlign:"center" }}>
          <h3 style={{ fontSize:"clamp(20px,3vw,24px)", fontWeight:600, color:palette.navy, marginBottom:8 }}>{ctaText || "Book your appointment"}</h3>
          <p style={{ fontSize:15, color:palette.slate, marginBottom:20 }}>Contact me to schedule an appointment at my practice in Genoa.</p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <button className="cta-btn" onClick={()=>nav(PAGES.contact)}><Phone size={16}/> +39 351 817 1675</button>
            <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// HOME PAGE (EN)
// ══════════════════════════════════════
function HomePage({ nav }) {
  const services = [
    { icon:<Stethoscope size={22}/>, title:"Gynaecological Examination", desc:"Full check-up with ultrasound, Pap smear and personalised consultation.", page:PAGES.exam },
    { icon:<Search size={22}/>, title:"Pap Smear & HPV", desc:"Quick and painless cervical screening for cancer prevention.", page:PAGES.pap },
    { icon:<Activity size={22}/>, title:"Transvaginal Ultrasound", desc:"Precision diagnosis with transvaginal and 3D ultrasound.", page:PAGES.ultrasound },
    { icon:<Baby size={22}/>, title:"Pregnancy", desc:"I support you from the first trimester to delivery with expertise and care.", page:PAGES.pregnancy },
    { icon:<Heart size={22}/>, title:"Endometriosis", desc:"Expert ultrasound diagnosis and personalised treatment plans.", page:PAGES.endometriosis },
    { icon:<Pill size={22}/>, title:"Contraception", desc:"Dedicated consultation to find the most suitable method for you.", page:PAGES.contraception },
    { icon:<Sparkles size={22}/>, title:"Menopause", desc:"Bioidentical hormones and personalised therapy for a better quality of life.", page:PAGES.menopause },
    { icon:<Users size={22}/>, title:"Paediatric Gynaecology", desc:"Specific expertise gained at the Gaslini Institute in Genoa.", page:PAGES.gyn },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ position:"relative", minHeight:"100svh", display:"flex", alignItems:"center", overflow:"hidden", background:`linear-gradient(160deg, ${palette.cream} 0%, ${palette.rosePale} 40%, ${palette.creamDark} 100%)` }}>
        <div style={{ position:"absolute", top:0, right:0, width:"45%", height:"100%", background:`linear-gradient(180deg, transparent, ${palette.rosePale})`, opacity:0.5, borderBottomLeftRadius:"40%", zIndex:0 }} />
        <div style={{ position:"absolute", bottom:-60, left:-60, width:"clamp(100px,20vw,200px)", height:"clamp(100px,20vw,200px)", borderRadius:"50%", background:palette.gold, opacity:0.07 }} />

        <div className="section-pad" style={{ position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr", gap:40, paddingTop:"clamp(88px,14vw,120px)" }}>
          <div style={{ maxWidth:720 }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 16px", background:palette.white, borderRadius:50, border:`1px solid ${palette.border}`, marginBottom:24, fontSize:13, color:palette.slate }}>
              <MapPin size={14} color={palette.rose}/> Practice in Genoa, Carignano area
            </div>
            <h1 style={{ fontSize:"clamp(36px,6vw,56px)", fontWeight:700, color:palette.navy, lineHeight:1.1, marginBottom:20 }}>
              Dr. Valentina<br/>La Pica
            </h1>
            <p style={{ fontSize:"clamp(18px,2.5vw,22px)", fontWeight:500, color:palette.rose, fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", marginBottom:16 }}>
              Specialist in Gynaecology and Obstetrics
            </p>
            <p style={{ fontSize:16, lineHeight:1.7, color:palette.slate, maxWidth:540, marginBottom:32 }}>
              I welcome you to my practice in Genoa for a personalised care journey, built on listening, expertise and trust. Every visit begins with taking the time to get to know you.
            </p>
            <div className="btn-row" style={{ marginBottom:32 }}>
              <button className="cta-btn" onClick={()=>nav(PAGES.contact)}><CalendarDays size={16}/> Book an appointment</button>
              <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
            </div>
            <div style={{ display:"flex", gap:16, alignItems:"center", flexWrap:"wrap" }}>
              <div style={{ display:"flex", gap:3 }}>{[1,2,3,4,5].map(s=><Star key={s} size={14} fill={palette.gold} color={palette.gold}/>)}</div>
              <span style={{ fontSize:13, color:palette.mist }}>Verified reviews on MioDottore</span>
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

      {/* ABOUT */}
      <section style={{ background:palette.cream }}>
        <div className="section-pad">
          <SectionTitle label="About me" title="Training, experience, and care" subtitle="My priority is to give each patient the time she needs — to examine her carefully, explain the results and answer every question." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(300px,100%),1fr))", gap:32 }}>
            <div>
              <p style={{ fontSize:15, lineHeight:1.8, color:palette.slate, marginBottom:16 }}>
                I graduated with honours in Medicine and Surgery in 2012 at the University of Genoa. I completed my Specialisation in Gynaecology and Obstetrics at the Policlinico Universitario IRCCS San Martino — Liguria's leading hospital.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:palette.slate, marginBottom:16 }}>
                I enriched my training at the Gaslini Institute for paediatric gynaecology and at the Humanitas Research Hospital in Milan for reproductive medicine.
              </p>
              <p style={{ fontSize:15, lineHeight:1.8, color:palette.slate }}>
                I believe in medicine that puts the person at the centre. I speak plainly and directly, because understanding what is happening to your body is every patient's first right.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { label:"Menopause & bioidentical hormones", desc:"Personalised therapy with molecules identical to those of the female body" },
                { label:"Vulvodynia & chronic pelvic pain", desc:"Global and multidisciplinary approach" },
                { label:"Paediatric gynaecology", desc:"Specialist training at the Gaslini Institute" },
                { label:"Endometriosis", desc:"Expert ultrasound diagnosis and tailored treatment plans" },
              ].map((item,i) => (
                <div key={i} style={{ padding:"16px 20px", background:palette.white, borderRadius:12, borderLeft:`3px solid ${palette.gold}` }}>
                  <div style={{ fontSize:14, fontWeight:700, color:palette.navy, marginBottom:4 }}>{item.label}</div>
                  <div style={{ fontSize:13, color:palette.mist }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign:"center", marginTop:32 }}>
            <button className="cta-btn-outline" onClick={()=>nav(PAGES.gyn)}>Learn more about me <ArrowRight size={14}/></button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background:palette.white }}>
        <div className="section-pad">
          <SectionTitle label="Services" title="How I can help you" subtitle="I offer a full range of gynaecological and obstetric services at my practice in Genoa, Carignano area." center />
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
          <SectionTitle label="Reviews" title="What my patients say" subtitle="Opinions from patients who have already chosen to trust me." center />
          <Testimonials />
          <div style={{ textAlign:"center", marginTop:24 }}>
            <a href="https://www.miodottore.it/valentina-la-pica/ginecologo/genova" target="_blank" rel="noopener noreferrer" style={{ fontSize:13, color:palette.rose, display:"inline-flex", alignItems:"center", gap:4 }}>
              Read all reviews on MioDottore <ExternalLink size={12}/>
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section style={{ background:palette.cream }}>
        <div className="section-pad">
          <SectionTitle label="Location" title="My practice in Genoa" />
          <div style={{ maxWidth:560 }}>
            <div style={{ background:palette.white, borderRadius:16, padding:28, border:`2px solid ${palette.rose}` }}>
              <div style={{ fontSize:11, fontWeight:700, color:palette.rose, textTransform:"uppercase", letterSpacing:1.5, marginBottom:8 }}>Practice</div>
              <h3 style={{ fontSize:20, fontWeight:600, color:palette.navy, marginBottom:8 }}>Genoa City Centre</h3>
              <div style={{ display:"flex", alignItems:"flex-start", gap:8, marginBottom:12 }}>
                <MapPin size={14} color={palette.gold} style={{ marginTop:3, flexShrink:0 }}/>
                <span style={{ fontSize:14, color:palette.slate }}>Via Cesarea 2/20, 2nd floor, 16121 Genova</span>
              </div>
              {[
                "Via XX Settembre · Carignano · Foce · Castelletto · City Centre",
                "10 min walk from Genova Brignole station · Bus AMT 15, 17, 20",
                "By car: A12 motorway exit Genova Est",
                "Parking available in surrounding streets",
              ].map((d,i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <CheckCircle size={12} color={palette.gold} style={{ flexShrink:0 }}/>
                  <span style={{ fontSize:13, color:palette.mist }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background:palette.white }}>
        <div className="section-pad">
          <SectionTitle label="FAQ" title="Frequently Asked Questions" center />
          <div style={{ maxWidth:700, margin:"0 auto" }}>
            <FAQ items={[
              { q:"How does the first gynaecological visit work?", a:"The first visit lasts about 30–40 minutes. It starts with a discussion of your medical history, followed by the gynaecological examination and, if needed, a transvaginal ultrasound. The aim is to get to know you and set up a personalised prevention plan." },
              { q:"Do I need to prepare before the visit?", a:"No special preparation is needed. I recommend not being on your period if you need a Pap smear. Bring any previous test results and a list of medications you are taking." },
              { q:"Can I book online?", a:"Yes. You can book via WhatsApp at +39 351 817 1675, by email at segreteria@valentinalapica.it, or online through MioDottore.it." },
              { q:"Does Dr. La Pica consult in English?", a:"Yes. I consult in both Italian and English. The practice is open to international patients living in Genoa and Liguria." },
              { q:"How much does a gynaecological visit cost?", a:"The cost depends on the service (basic visit, with ultrasound, with Pap smear). Please contact the practice at +39 351 817 1675 for an up-to-date quote." },
            ]} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background:`linear-gradient(135deg, ${palette.navy}, ${palette.rose})`, padding:"clamp(48px,10vw,80px) clamp(16px,4vw,24px)", textAlign:"center" }}>
        <div style={{ maxWidth:600, margin:"0 auto" }}>
          <h2 style={{ fontSize:"clamp(26px,4vw,38px)", fontWeight:700, color:palette.white, marginBottom:16 }}>Take care of yourself.</h2>
          <p style={{ fontSize:"clamp(14px,2vw,16px)", color:"rgba(255,255,255,0.8)", lineHeight:1.6, marginBottom:32 }}>
            Book your gynaecological visit in Genoa. I will give you all the time you need to listen and take care of your health.
          </p>
          <div className="btn-row" style={{ justifyContent:"center" }}>
            <button className="cta-btn" style={{ background:palette.white, color:palette.rose }} onClick={()=>nav(PAGES.contact)}>
              <Phone size={16}/> Call +39 351 817 1675
            </button>
            <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}>
              <MessageCircle size={16}/> Write on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ══════════════════════════════════════
// GYNAECOLOGIST IN GENOA PAGE
// ══════════════════════════════════════
function GynPage({ nav }) {
  return (
    <ServicePage
      nav={nav}
      title="Gynaecologist in Genoa"
      intro="If you are looking for an experienced, attentive and approachable gynaecologist in Genoa, you are in the right place. I welcome you at my private practice in Genoa, Carignano area, with an approach based on listening and expertise."
      sections={[
        { heading:"About me: training and experience", paragraphs:[
          "I am Dr. Valentina La Pica, specialist in Gynaecology and Obstetrics. I graduated with honours in Medicine and Surgery in 2012 at the University of Genoa and completed my Specialisation at the Policlinico Universitario IRCCS San Martino — Liguria's leading hospital.",
          "My training includes experience at the Gaslini Institute for paediatric gynaecology and at the Humanitas Research Hospital in Milan for reproductive medicine. I am registered with the Medical Council of Genoa (n. 16037) and regularly attend national and international conferences.",
        ]},
        { heading:"Gynaecological services at my practice in Genoa", paragraphs:[
          "Full gynaecological examination — annual check-up with consultation, physical examination, transvaginal ultrasound and Pap smear.",
          "Transvaginal and 3D ultrasound — high-precision diagnosis of ovarian cysts, endometriosis, fibroids, polyps and uterine abnormalities.",
          "Pap smear and HPV screening — quick and painless tests for cervical cancer prevention.",
          "Pregnancy care — ultrasounds, prenatal screening (combined test, NIPT, morphology scan), management of both normal and high-risk pregnancies.",
          "Endometriosis and chronic pelvic pain — expert ultrasound diagnosis and personalised treatment plans.",
          "Vulvodynia — global and multidisciplinary approach to a still under-diagnosed condition.",
          "Menopause and bioidentical hormones — personalised hormonal therapy with molecules identical to those of the female body.",
          "Contraception — dedicated consultation for the pill, IUD, ring, or subcutaneous implant.",
          "Paediatric gynaecology — specialist expertise gained at the Gaslini Institute.",
        ]},
        { heading:"How to reach the practice in Genoa", paragraphs:[
          "My private practice is located at Via Cesarea 2/20, 2nd floor, in the city centre of Genoa. It is well connected and easily reachable from all areas of the city.",
          "The practice is a 10-minute walk from Genova Brignole station, accessible by motorway (exit Genova Est) and served by AMT bus lines 15, 17 and 20.",
        ]},
        { heading:"How to book", paragraphs:[
          "Booking is simple: call or message me on WhatsApp at +39 351 817 1675, send an email to segreteria@valentinalapica.it, or book online at MioDottore.it. I receive patients by appointment, Monday to Friday.",
        ]},
      ]}
      faqs={[
        { q:"How much does a gynaecological visit cost in Genoa?", a:"The cost varies depending on the services included (basic visit, with ultrasound, Pap smear). Please contact the practice at +39 351 817 1675 for a personalised quote." },
        { q:"Does Dr. La Pica consult in English?", a:"Yes. The practice is open to English-speaking patients living in Genoa or Liguria." },
        { q:"Can I have an ultrasound and Pap smear in the same appointment?", a:"Yes. I perform both tests in the same appointment for a complete overview." },
        { q:"How do I get to Via Cesarea?", a:"AMT bus lines 15, 17, 20. 10 min walk from Brignole station. By car: Genova Est exit. Parking available in surrounding streets." },
      ]}
      ctaText="Book your gynaecological visit in Genoa"
    />
  );
}

// ══════════════════════════════════════
// CONTACT PAGE
// ══════════════════════════════════════
function ContactPage() {
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg, ${palette.navy} 0%, ${palette.rose} 100%)`, padding:"clamp(80px,12vw,100px) clamp(16px,4vw,24px) clamp(40px,8vw,60px)", textAlign:"center" }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <h1 style={{ fontSize:"clamp(26px,5vw,44px)", fontWeight:700, color:palette.white, marginBottom:16 }}>Book Your Appointment</h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.85)", lineHeight:1.6 }}>I am here for you. Contact me to schedule an appointment or for any questions.</p>
        </div>
      </div>
      <div className="section-pad">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(300px,100%),1fr))", gap:32 }}>
          <div>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:24 }}>How to contact me</h2>
            {[
              { icon:<Phone size={20}/>, label:"Phone & WhatsApp", value:"(+39) 351 817 1675", sub:"Calls and WhatsApp messages", action:()=>window.open("tel:+393518171675") },
              { icon:<Mail size={20}/>, label:"Email", value:"segreteria@valentinalapica.it", sub:"Reply within 24 working hours" },
              { icon:<CalendarDays size={20}/>, label:"Online booking", value:"MioDottore.it", sub:"Book directly online", action:()=>window.open("https://www.miodottore.it/valentina-la-pica/ginecologo/genova","_blank") },
              { icon:<Clock size={20}/>, label:"Hours", value:"By appointment", sub:"Monday — Friday" },
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
              <button className="cta-btn" onClick={()=>window.open("tel:+393518171675")}><Phone size={16}/> Call now</button>
              <button className="wa-btn" onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
            </div>
          </div>
          <div>
            <h2 style={{ fontSize:26, fontWeight:600, color:palette.navy, marginBottom:24 }}>Practice</h2>
            <div style={{ background:palette.white, borderRadius:16, padding:24, border:`2px solid ${palette.rose}`, marginBottom:16 }}>
              <div style={{ fontSize:11, fontWeight:700, color:palette.rose, textTransform:"uppercase", letterSpacing:1.5, marginBottom:8 }}>Main practice</div>
              <h3 style={{ fontSize:18, fontWeight:600, color:palette.navy, marginBottom:4 }}>Genoa City Centre</h3>
              <p style={{ fontSize:14, color:palette.slate, marginBottom:12 }}>Via Cesarea 2/20, 2nd floor — 16121 Genova</p>
              {["Via XX Settembre · Carignano · Foce · Castelletto","10 min walk from Brignole station","Bus AMT: lines 15, 17, 20","By car: A12 exit Genova Est","Parking in surrounding streets"].map((d,j) => (
                <div key={j} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <CheckCircle size={12} color={palette.gold}/>
                  <span style={{ fontSize:13, color:palette.mist }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// BLOG PAGE
// ══════════════════════════════════════
function BlogPage() {
  const articles = [
    { title:"Pap Smear: What It Is, When to Have It and Why It Matters", cat:"Prevention", desc:"Everything about the Pap smear: what it is, how often to have it, how to prepare. A complete guide from the gynaecologist." },
    { title:"First Gynaecological Visit: A Guide to Help You Feel Ready", cat:"Guide", desc:"What happens, how to prepare and what to ask. Step by step." },
    { title:"Pregnancy: First Visit and Tests Trimester by Trimester", cat:"Pregnancy", desc:"Expecting? The complete calendar of tests and ultrasounds." },
    { title:"Endometriosis: How to Recognise It and What to Do", cat:"Conditions", desc:"The 6 main symptoms, ultrasound diagnosis and treatment options." },
    { title:"Recurrent Vaginal Infections: Causes and Treatments", cat:"Intimate health", desc:"Thrush, vaginosis, cystitis: why they return and how to treat them effectively." },
    { title:"Contraception: Which Method Is Right for You?", cat:"Contraception", desc:"Pill, IUD, ring or implant? A complete comparison of methods." },
    { title:"Menopause and Bioidentical Hormones: A Complete Guide", cat:"Menopause", desc:"Symptoms, remedies and how bioidentical hormone therapy works." },
    { title:"Chronic Pelvic Pain and Vulvodynia: It Is Not 'Normal'", cat:"Pelvic pain", desc:"Causes, diagnosis and the multidisciplinary treatment approach." },
    { title:"Gynaecological Check-ups: How Often and Why Not to Delay", cat:"Prevention", desc:"Age-based guidelines and the tests you should not skip." },
    { title:"Polycystic Ovary Syndrome (PCOS): Symptoms, Treatment and Fertility", cat:"Conditions", desc:"How to recognise and manage it, and how to conceive with PCOS." },
  ];
  return (
    <div>
      <div style={{ background:`linear-gradient(135deg, ${palette.navy} 0%, ${palette.rose} 100%)`, padding:"clamp(80px,12vw,100px) clamp(16px,4vw,24px) clamp(40px,8vw,60px)", textAlign:"center" }}>
        <div>
          <h1 style={{ fontSize:"clamp(26px,5vw,44px)", fontWeight:700, color:palette.white, marginBottom:12 }}>Blog</h1>
          <p style={{ fontSize:"clamp(15px,2vw,17px)", color:"rgba(255,255,255,0.85)" }}>In-depth articles on gynaecological health, written by Dr. La Pica</p>
        </div>
      </div>
      <div className="section-pad">
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(300px,100%),1fr))", gap:24 }}>
          {articles.map((a,i) => (
            <article key={i} style={{ background:palette.white, borderRadius:16, overflow:"hidden", border:`1px solid ${palette.border}` }}>
              <div style={{ height:8, background:`linear-gradient(90deg, ${palette.rose}, ${palette.gold})` }}/>
              <div style={{ padding:24 }}>
                <div style={{ fontSize:11, fontWeight:700, color:palette.gold, textTransform:"uppercase", letterSpacing:1.5, marginBottom:12 }}>{a.cat}</div>
                <h3 style={{ fontSize:18, fontWeight:600, color:palette.navy, lineHeight:1.3, marginBottom:12 }}>{a.title}</h3>
                <p style={{ fontSize:14, color:palette.slate, lineHeight:1.6, marginBottom:16 }}>{a.desc}</p>
                <span style={{ fontSize:13, fontWeight:600, color:palette.rose, display:"flex", alignItems:"center", gap:4, cursor:"pointer" }}>Read article <ArrowRight size={14}/></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// NAVBAR (EN)
// ══════════════════════════════════════
function Navbar({ page, nav, onLangChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const [prevPage, setPrevPage] = useState(page);
  if (prevPage !== page) { setPrevPage(page); setMobileOpen(false); setServicesOpen(false); }

  const navItem = (label, target) => (
    <button onClick={()=>nav(target)} aria-current={page===target?"page":undefined}
      style={{ background:"none", border:"none", cursor:"pointer", fontSize:14, fontWeight:page===target?700:500, color:page===target?palette.rose:palette.charcoal, fontFamily:"'DM Sans',sans-serif", padding:"8px 0", transition:"color 0.2s" }}
    >{label}</button>
  );

  const serviceItems = [
    { label:"Gynaecological Exam", page:PAGES.exam },
    { label:"Pap Smear & HPV", page:PAGES.pap },
    { label:"Ultrasound", page:PAGES.ultrasound },
    { label:"Pregnancy", page:PAGES.pregnancy },
    { label:"Endometriosis", page:PAGES.endometriosis },
    { label:"Contraception", page:PAGES.contraception },
    { label:"Menopause", page:PAGES.menopause },
  ];

  const langSwitch = (
    <div style={{ display:"flex", gap:2, padding:"3px", background:palette.creamDark, borderRadius:20 }}>
      <button onClick={()=>onLangChange("it")} style={{ padding:"4px 10px", borderRadius:16, border:"none", cursor:"pointer", fontSize:12, fontWeight:400, background:"transparent", color:palette.mist, fontFamily:"'DM Sans',sans-serif" }}>🇮🇹 IT</button>
      <button onClick={()=>onLangChange("en")} style={{ padding:"4px 10px", borderRadius:16, border:"none", cursor:"pointer", fontSize:12, fontWeight:700, background:palette.white, color:palette.navy, fontFamily:"'DM Sans',sans-serif", boxShadow:"0 1px 4px rgba(0,0,0,0.08)" }}>🇬🇧 EN</button>
    </div>
  );

  return (
    <>
      <nav aria-label="Main navigation" style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, background:scrolled?"rgba(253,248,244,0.95)":"rgba(253,248,244,0.8)", backdropFilter:"blur(12px)", borderBottom:scrolled?`1px solid ${palette.border}`:"1px solid transparent", transition:"all 0.3s" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <button onClick={()=>nav(PAGES.home)} aria-label="Back to homepage" style={{ background:"none", border:"none", cursor:"pointer", display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:"50%", background:`linear-gradient(135deg, ${palette.rose}, ${palette.gold})`, display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"white", fontFamily:"'Cormorant Garamond',serif", fontWeight:700, fontSize:18 }}>V</span>
            </div>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:palette.navy, fontFamily:"'Cormorant Garamond',serif", lineHeight:1 }}>Dr. La Pica</div>
              <div style={{ fontSize:10, color:palette.mist, letterSpacing:0.5 }}>Gynaecologist · Genoa</div>
            </div>
          </button>

          <div style={{ display:"flex", alignItems:"center", gap:24 }} className="desktop-nav">
            {navItem("Home", PAGES.home)}
            <div style={{ position:"relative" }} onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)}>
              <button aria-haspopup="true" aria-expanded={servicesOpen} style={{ background:"none", border:"none", cursor:"pointer", fontSize:14, fontWeight:500, color:palette.charcoal, fontFamily:"'DM Sans',sans-serif", display:"flex", alignItems:"center", gap:4 }}>
                Services <ChevronDown size={14} style={{ transition:"transform 0.2s", transform:servicesOpen?"rotate(180deg)":"" }}/>
              </button>
              {servicesOpen && (
                <div role="menu" style={{ position:"absolute", top:"100%", left:-20, background:palette.white, borderRadius:12, boxShadow:"0 12px 40px rgba(0,0,0,0.12)", padding:8, minWidth:220, border:`1px solid ${palette.border}` }}>
                  {serviceItems.map((s,i) => (
                    <button role="menuitem" key={i} onClick={()=>nav(s.page)} style={{ display:"block", width:"100%", textAlign:"left", padding:"10px 16px", background:"none", border:"none", cursor:"pointer", fontSize:14, color:palette.charcoal, fontFamily:"'DM Sans',sans-serif", borderRadius:8 }}
                      onMouseEnter={e=>e.target.style.background=palette.rosePale}
                      onMouseLeave={e=>e.target.style.background="transparent"}
                    >{s.label}</button>
                  ))}
                </div>
              )}
            </div>
            {navItem("Gynaecologist Genoa", PAGES.gyn)}
            {navItem("Blog", PAGES.blog)}
            {navItem("Contact", PAGES.contact)}
            {langSwitch}
            <button className="cta-btn" style={{ padding:"8px 20px", fontSize:13 }} onClick={()=>nav(PAGES.contact)}>
              <Phone size={14}/> Book
            </button>
          </div>

          <button onClick={()=>setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-menu-en" aria-label={mobileOpen?"Close menu":"Open menu"}
            style={{ display:"none", background:"none", border:"none", cursor:"pointer", color:palette.navy, padding:8, minWidth:44, minHeight:44 }} className="mobile-toggle">
            {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {mobileOpen && (
          <div id="mobile-menu-en" role="navigation" aria-label="Mobile menu" className="mobile-menu" style={{ background:palette.white, borderTop:`1px solid ${palette.border}`, padding:24, display:"flex", flexDirection:"column", gap:4 }}>
            {[
              { label:"Home", page:PAGES.home },
              ...serviceItems,
              { label:"Gynaecologist Genoa", page:PAGES.gyn },
              { label:"Blog", page:PAGES.blog },
              { label:"Contact", page:PAGES.contact },
            ].map((item,i) => (
              <button key={i} onClick={()=>nav(item.page)} aria-current={page===item.page?"page":undefined}
                style={{ display:"block", padding:"14px 16px", minHeight:48, background:"none", border:"none", cursor:"pointer", fontSize:15, fontWeight:page===item.page?700:400, color:page===item.page?palette.rose:palette.charcoal, fontFamily:"'DM Sans',sans-serif", textAlign:"left", borderRadius:8, WebkitTapHighlightColor:"transparent" }}>
                {item.label}
              </button>
            ))}
            <div style={{ padding:"12px 16px" }}>
              {langSwitch}
            </div>
            <button className="cta-btn" style={{ marginTop:4, justifyContent:"center" }} onClick={()=>nav(PAGES.contact)}>
              <Phone size={16}/> Book an appointment
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
// FOOTER (EN)
// ══════════════════════════════════════
function Footer({ nav }) {
  return (
    <footer style={{ background:palette.navy, color:"rgba(255,255,255,0.7)", padding:"clamp(40px,8vw,60px) clamp(16px,4vw,24px) 32px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(min(200px,100%),1fr))", gap:"clamp(24px,4vw,40px)", marginBottom:48 }}>
          <div>
            <div style={{ fontSize:22, fontWeight:700, color:palette.white, fontFamily:"'Cormorant Garamond',serif", marginBottom:8 }}>Dr. Valentina La Pica</div>
            <p style={{ fontSize:13, lineHeight:1.6, marginBottom:16 }}>Specialist in Gynaecology and Obstetrics. Private practice in Genoa, Carignano area. Consultations in Italian and English.</p>
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:palette.white, marginBottom:16 }}>Services</div>
            {["Gynaecological Exam","Pap Smear","Ultrasound","Pregnancy","Endometriosis","Contraception","Menopause"].map((s,i) => (
              <div key={i} style={{ fontSize:13, marginBottom:8, cursor:"pointer" }} onClick={()=>nav(Object.values(PAGES)[i+2] || PAGES.gyn)}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:palette.white, marginBottom:16 }}>Contact</div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}><Phone size={14}/><span style={{ fontSize:13 }}>+39 351 817 1675</span></div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}><Mail size={14}/><span style={{ fontSize:13 }}>segreteria@valentinalapica.it</span></div>
            <div style={{ display:"flex", alignItems:"flex-start", gap:8, marginBottom:12 }}><MapPin size={14} style={{ marginTop:2 }}/><span style={{ fontSize:13 }}>Via Cesarea 2/20<br/>16121 Genova</span></div>
          </div>
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:palette.white, marginBottom:16 }}>Book</div>
            <button className="cta-btn" style={{ width:"100%", justifyContent:"center", marginBottom:12 }} onClick={()=>window.open("tel:+393518171675")}><Phone size={16}/> Call</button>
            <button className="wa-btn" style={{ width:"100%", justifyContent:"center" }} onClick={()=>window.open("https://wa.me/393518171675","_blank")}><MessageCircle size={16}/> WhatsApp</button>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.1)", paddingTop:24, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <div style={{ fontSize:12 }}>© 2026 Dr. Valentina La Pica · VAT IT11174040961 · OMCeO GE 16037</div>
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
// SERVICE DATA (EN)
// ══════════════════════════════════════
const serviceData = {
  [PAGES.exam]: {
    title:"Gynaecological Examination in Genoa",
    intro:"A gynaecological examination is the most important step you can take for your intimate health. I welcome you at my practice in Genoa, Carignano area, in a private and comfortable setting.",
    sections:[
      { heading:"What the examination includes", paragraphs:["Every visit includes three stages: a consultation on your medical history, a gentle physical examination with explanation of each step, and a transvaginal ultrasound when indicated. If needed, a Pap smear can be performed in the same appointment."] },
      { heading:"When to have a gynaecological examination", paragraphs:["I recommend the first check-up from the age of 18–20 or from the start of sexual activity. Afterwards, an annual check-up is sufficient. Also book if you have: irregular periods, pelvic pain, abnormal discharge, burning or itching."] },
    ],
    faqs:[
      { q:"Is a gynaecological examination painful?", a:"No. The examination may cause slight discomfort, but it is not painful. I explain every step in advance and proceed gently." },
      { q:"Can I have an ultrasound and Pap smear in the same appointment?", a:"Yes. I perform both tests in the same appointment for a complete overview." },
    ],
  },
  [PAGES.pap]: {
    title:"Pap Smear and HPV Screening in Genoa",
    intro:"The Pap smear is the most effective screening test to prevent cervical cancer. I perform it quickly and painlessly.",
    sections:[
      { heading:"How the Pap smear works", paragraphs:["I gently collect a sample of cells from the cervix. The sample is analysed in a laboratory to detect abnormal cells. It is not painful — you may feel a slight pressure for a few seconds."] },
      { heading:"Pap smear vs HPV test: the difference", paragraphs:["The Pap smear analyses cells for abnormalities. The HPV test looks for the Human Papillomavirus. After the age of 30, the HPV test is recommended as the primary test, with the Pap smear as a follow-up."] },
      { heading:"How often to have a Pap smear", paragraphs:["Pap smear every 3 years from ages 25–30. HPV test every 5 years from ages 30–65. In the presence of risk factors, I may recommend more frequent testing."] },
    ],
    faqs:[{ q:"Does the Pap smear hurt?", a:"No. You may feel a slight discomfort for a few seconds. I use disposable instruments and maximum care." }],
  },
  [PAGES.ultrasound]: {
    title:"Transvaginal Ultrasound in Genoa",
    intro:"Transvaginal ultrasound is the most precise examination to visualise the uterus, ovaries and pelvic structures. I also perform 3D ultrasounds for advanced diagnosis.",
    sections:[
      { heading:"When it is indicated", paragraphs:["Transvaginal ultrasound diagnoses: ovarian cysts, endometriosis, uterine fibroids, endometrial polyps, polycystic ovary. It is also the first examination in early pregnancy."] },
      { heading:"Is the examination painful?", paragraphs:["No. The ultrasound is painless and lasts 10–15 minutes. I use a slim probe with gel and show you the images in real time."] },
    ],
    faqs:[{ q:"Do I need to prepare?", a:"No. It is advisable to have an empty bladder. You can use the bathroom just before the examination." }],
  },
  [PAGES.pregnancy]: {
    title:"Pregnancy Care in Genoa",
    intro:"Finding out you are pregnant is a life-changing moment. I support you with expertise and calm through every stage.",
    sections:[
      { heading:"The test calendar", paragraphs:[
        "First trimester: pregnancy confirmation, dating scan, combined test (nuchal translucency + blood tests), optional NIPT.",
        "Second trimester: morphology scan, blood tests, glucose tolerance test.",
        "Third trimester: growth scan, foetal monitoring, vaginal swab.",
      ]},
      { heading:"When to book the first appointment", paragraphs:["Book as soon as you find out you are pregnant, ideally within 8–10 weeks. We will confirm the pregnancy, date it, and set up your test calendar."] },
    ],
    faqs:[
      { q:"How often should I see a gynaecologist during pregnancy?", a:"About once a month in the first two trimesters, every 2 weeks in the last month. More frequently for high-risk pregnancies." },
      { q:"Do you manage high-risk pregnancies?", a:"Yes. Thanks to my training at San Martino, I manage complex pregnancies in coordination with hospital departments." },
    ],
  },
  [PAGES.endometriosis]: {
    title:"Endometriosis: Diagnosis and Treatment in Genoa",
    intro:"Endometriosis affects 10–15% of women of reproductive age. The average diagnostic delay is 7–8 years. At my practice I offer expert ultrasound diagnosis.",
    sections:[
      { heading:"Symptoms of endometriosis", paragraphs:["The most common signs: chronic pelvic pain, very painful periods, pain during intercourse, difficulty conceiving, cyclical bloating and bowel problems, chronic fatigue. If you recognise even one of these symptoms, an assessment can make a difference."] },
      { heading:"How I diagnose endometriosis", paragraphs:["Diagnosis begins with careful listening. I proceed with a targeted physical examination and specialised transvaginal ultrasound. In expert hands, ultrasound identifies the majority of endometriotic lesions."] },
      { heading:"Treatment options", paragraphs:["Treatment depends on age, symptoms, desire for pregnancy and severity. Options include: medical therapy, pain management and, when indicated, laparoscopic surgery."] },
    ],
    faqs:[
      { q:"Can endometriosis be cured?", a:"It is chronic but manageable. With a personalised plan it is possible to control symptoms and significantly improve quality of life." },
      { q:"Endometriosis and pregnancy: is it possible to conceive?", a:"Yes. Many women with endometriosis conceive naturally. For related infertility, there are effective assisted reproduction pathways." },
    ],
  },
  [PAGES.contraception]: {
    title:"Personalised Contraception in Genoa",
    intro:"There is no single method that suits everyone. The choice depends on your age, health, lifestyle and preferences.",
    sections:[
      { heading:"Available methods", paragraphs:[
        "Combined and progestogen-only pill: the most widely used method, chosen according to your medical history.",
        "Copper IUD: hormone-free, effective for 5–10 years. Ideal for those who prefer to avoid hormones.",
        "Hormonal IUS: releases progestogen. Also useful for heavy periods.",
        "Vaginal ring and patch: practical alternatives to the daily pill.",
        "Subcutaneous implant: protection for 3 years, quick procedure.",
      ]},
    ],
    faqs:[{ q:"Is IUD insertion painful?", a:"You may feel a brief cramp lasting a few seconds. A local painkiller is an option. Most patients describe it as manageable." }],
  },
  [PAGES.menopause]: {
    title:"Menopause and Bioidentical Hormones in Genoa",
    intro:"Menopause is not an illness. It is a natural phase that deserves attention and personalised care with the most modern therapies.",
    sections:[
      { heading:"Symptoms of menopause", paragraphs:["Hot flushes, night sweats, insomnia, mood swings, vaginal dryness, reduced libido, increased cardiovascular and osteoporosis risk. Every woman experiences these differently — which is why a personalised approach is essential."] },
      { heading:"What are bioidentical hormones?", paragraphs:["Bioidentical hormones are molecules chemically identical to those naturally produced by the female body (oestradiol, progesterone). Therapy is tailored to your symptoms, test results and medical history."] },
      { heading:"Benefits of hormone therapy", paragraphs:["When indicated: reduces or eliminates hot flushes and night sweats, improves sleep and mood, relieves vaginal dryness, protects bone density and reduces cardiovascular risk in women who start therapy close to menopause."] },
    ],
    faqs:[
      { q:"Are bioidentical hormones safe?", a:"Evidence indicates that bioidentical therapy, prescribed at appropriate doses and monitored, is effective and safe for most women. Indications and contraindications are assessed case by case." },
      { q:"At what age does menopause begin?", a:"The average age in Italy is 51, but it ranges between 45 and 55. Before the age of 40 it is called premature menopause and requires specialist assessment." },
    ],
  },
};

// ─── META (EN) ───
const META = {
  [PAGES.home]: { title:"Dr. Valentina La Pica — Gynaecologist in Genoa", description:"Specialist in Gynaecology and Obstetrics in Genoa. Private practice, Carignano area. Consultations in Italian and English. Book at +39 351 817 1675." },
  [PAGES.gyn]: { title:"Gynaecologist in Genoa | Dr. Valentina La Pica", description:"Looking for a gynaecologist in Genoa? Dr. La Pica's practice is in the city centre. Honours degree, specialisation at Policlinico San Martino." },
  [PAGES.exam]: { title:"Gynaecological Examination in Genoa | Dr. La Pica", description:"Full gynaecological examination with ultrasound and Pap smear. Private practice in Genoa. Book at +39 351 817 1675." },
  [PAGES.pap]: { title:"Pap Smear & HPV Screening in Genoa | Dr. La Pica", description:"Quick and painless Pap smear and HPV test in Genoa. Cervical cancer prevention. Book at +39 351 817 1675." },
  [PAGES.ultrasound]: { title:"Transvaginal Ultrasound in Genoa | Dr. La Pica", description:"Transvaginal and 3D ultrasound in Genoa for diagnosis of cysts, endometriosis, fibroids, polyps. Book at +39 351 817 1675." },
  [PAGES.pregnancy]: { title:"Pregnancy Care in Genoa | Dr. La Pica", description:"Ultrasounds, prenatal screening and pregnancy support in Genoa. From confirmation to delivery. Book at +39 351 817 1675." },
  [PAGES.endometriosis]: { title:"Endometriosis in Genoa: Diagnosis & Treatment | Dr. La Pica", description:"Expert ultrasound diagnosis of endometriosis in Genoa. Personalised treatment plans. Book at +39 351 817 1675." },
  [PAGES.contraception]: { title:"Contraception in Genoa | Personalised Consultation", description:"Pill, IUD, ring, implant: personalised contraceptive consultation in Genoa with Dr. La Pica." },
  [PAGES.menopause]: { title:"Menopause & Bioidentical Hormones in Genoa | Dr. La Pica", description:"Personalised therapy with bioidentical hormones for hot flushes, insomnia, vaginal dryness. Private practice in Genoa." },
  [PAGES.contact]: { title:"Book an Appointment | Dr. Valentina La Pica Genoa", description:"Book your gynaecological visit in Genoa. Call or WhatsApp +39 351 817 1675. Practice at Via Cesarea 2/20." },
  [PAGES.blog]: { title:"Gynaecology Blog | Dr. Valentina La Pica Genoa", description:"In-depth articles on gynaecological health: Pap smear, menopause, endometriosis, pregnancy. Written by Dr. La Pica." },
};

// ══════════════════════════════════════
// MAIN APP (EN)
// ══════════════════════════════════════
export default function AppEn({ onLangChange }) {
  const [page, setPage] = useState(PAGES.home);

  useEffect(() => {
    const m = META[page] || META[PAGES.home];
    document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", m.description);
  }, [page]);

  const nav = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    if (page === PAGES.home) return <HomePage nav={nav}/>;
    if (page === PAGES.gyn) return <GynPage nav={nav}/>;
    if (page === PAGES.contact) return <ContactPage />;
    if (page === PAGES.blog) return <BlogPage />;
    if (serviceData[page]) {
      const d = serviceData[page];
      return <ServicePage nav={nav} title={d.title} intro={d.intro} sections={d.sections} faqs={d.faqs}/>;
    }
    return <HomePage nav={nav}/>;
  };

  return (
    <>
      <Navbar page={page} nav={nav} onLangChange={onLangChange} />
      <main style={{ minHeight:"100vh" }}>
        {renderPage()}
      </main>
      <Footer nav={nav} />
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
