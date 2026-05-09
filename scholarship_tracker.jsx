import { useState } from "react";

const scholarships = [
  {
    id: 1,
    name: "Australian Awards (Bangladesh)",
    country: "🇦🇺 Australia",
    degree: "Masters",
    funded: "Fully Funded",
    deadline: "2026-04-30",
    deadlineLabel: "TODAY — Apr 30, 2026",
    status: "urgent",
    statusLabel: "⚡ LAST DAY",
    link: "https://australiaawardsbangladesh.org/opportunities/",
    relevance: 4,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "Masters only (no PhD). CS is eligible. Junior faculty profile fits perfectly. PORTAL MAY STILL BE OPEN — check NOW.",
    khaled: "Your lecturer profile at MIST is textbook eligible. IELTS 7.5 ✓, BSc only ✓, 2+ yrs experience ✓. Only caveat: CS must fall under priority fields (check Bangladesh country profile).",
    covers: "Tuition + return airfare + living allowance + OSHC",
  },
  {
    id: 2,
    name: "MEXT Research Scholarship (Embassy Route)",
    country: "🇯🇵 Japan",
    degree: "Masters / PhD",
    funded: "Fully Funded",
    deadline: "2026-05-31",
    deadlineLabel: "~May 2026 (check BD embassy)",
    status: "open",
    statusLabel: "🟢 OPEN NOW",
    link: "https://www.studyinjapan.go.jp/en/smap-stopj-applications-research.html",
    relevance: 5,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "Embassy deadline typically Apr–May 2026 for 2027 intake. Contact Japanese Embassy in Dhaka immediately. No JLPT required for English-medium programs.",
    khaled: "CS/AI research fits perfectly — Japan is a global leader in AI. Your publications are a massive plus. Under 35 ✓, BSc ✓, IELTS not mandatory for this route. HIGH PRIORITY.",
    covers: "Full tuition + monthly stipend ¥144,000 + round-trip airfare + residence",
  },
  {
    id: 3,
    name: "Fulbright Foreign Student Program (Bangladesh)",
    country: "🇺🇸 USA",
    degree: "Masters",
    funded: "Fully Funded",
    deadline: "2026-05-17",
    deadlineLabel: "~May 2026 (2027 cycle — verify at bd.usembassy.gov)",
    status: "open",
    statusLabel: "🟡 LIKELY OPEN",
    link: "https://bd.usembassy.gov",
    relevance: 5,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "2026-27 cycle deadline was May 17, 2025. 2027-28 cycle likely opens around same time. Preferred for junior faculty at HEIs — that's you. IELTS 7.0 min. GRE encouraged.",
    khaled: "Junior faculty at MIST = preferred candidate. IELTS 7.5 ✓, BSc ✓, 2+ yrs professional experience ✓. CS/AI aligns with 'physical & biological sciences' priority. This is your #1 US option.",
    covers: "Full tuition + stipend + airfare + health insurance",
  },
  {
    id: 4,
    name: "Chevening Scholarship",
    country: "🇬🇧 UK",
    degree: "Masters (1-year)",
    funded: "Fully Funded",
    deadline: "2026-10-07",
    deadlineLabel: "Oct 7, 2026 (opens Aug 5, 2026)",
    status: "upcoming",
    statusLabel: "🔵 Opens Aug 2026",
    link: "https://www.chevening.org/apply/",
    relevance: 4,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "For 2027-28 intake. Needs 2,800+ hours (2 yrs) of work experience post-graduation. Leadership potential is key. Must apply to 3 UK universities.",
    khaled: "You have 2+ yrs teaching experience at MIST ✓, strong leadership (URC champion, club moderator) ✓, IELTS 7.5 ✓. Start identifying target UK CS/AI programs now (UCL, Edinburgh, Imperial, Warwick).",
    covers: "Full tuition (up to £22k) + monthly stipend + return airfare + visa fee",
  },
  {
    id: 5,
    name: "DAAD Study Scholarship (Masters in Germany)",
    country: "🇩🇪 Germany",
    degree: "Masters",
    funded: "Fully Funded",
    deadline: "2026-10-15",
    deadlineLabel: "Oct 15 / Nov 30, 2026 (varies by program)",
    status: "upcoming",
    statusLabel: "🔵 Opens ~Oct 2026",
    link: "https://www.daad.de/en/study-and-research-in-germany/scholarships/",
    relevance: 4,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "Multiple DAAD tracks. Study Scholarship for postgrads: Oct 30 deadline. German language not required for English-taught CS programs. 18 DAAD programs available to Bangladeshis.",
    khaled: "Germany has top CS universities (TU Munich, KIT, RWTH Aachen) with English-taught AI/ML masters. Your ML + HCI research is highly relevant. Start identifying programs now.",
    covers: "€992/month stipend + health insurance + travel subsidy",
  },
  {
    id: 6,
    name: "Global Korea Scholarship (GKS) — Graduate",
    country: "🇰🇷 South Korea",
    degree: "Masters / PhD",
    funded: "Fully Funded",
    deadline: "2027-02-25",
    deadlineLabel: "~Feb 2027 (2027-28 cycle)",
    status: "prepare",
    statusLabel: "📋 Prep Now for 2027",
    link: "https://www.studyinkorea.go.kr",
    relevance: 4,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "2026 cycle closed Feb 2026. 2027 cycle opens around Feb 2027. Korea excels in AI/CS — KAIST, SNU, POSTECH. Includes 1 year of Korean language training.",
    khaled: "BSc only ✓ (master's track), under 40 ✓. KAIST and SNU have world-class AI programs. 2200 slots. Begin contacting Korean professors now for the 2027 cycle.",
    covers: "Full tuition + KRW 1,000,000-1,500,000/month + round-trip airfare + settlement + health insurance",
  },
  {
    id: 7,
    name: "Erasmus Mundus Joint Masters (EMJM)",
    country: "🇪🇺 Europe (Multiple)",
    degree: "Masters",
    funded: "Fully Funded",
    deadline: "2027-01-15",
    deadlineLabel: "Jan 2027 (varies by program)",
    status: "prepare",
    statusLabel: "📋 Prep Now for 2027",
    link: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
    relevance: 4,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "Programs like EMAI (AI), EDISS (data science), DEAI study across multiple EU countries. Most Jan deadlines for 2027-28 intake. Very competitive.",
    khaled: "EMAI and DEAI are extremely relevant to your ML/AI profile. Study in 2-3 EU countries. Monthly stipend €1,400 + travel. Your publications will stand out. Start shortlisting programs.",
    covers: "Full tuition + €1,400/month + travel + installation costs",
  },
  {
    id: 8,
    name: "Commonwealth Scholarship (UK)",
    country: "🇬🇧 UK",
    degree: "Masters / PhD",
    funded: "Fully Funded",
    deadline: "2026-10-14",
    deadlineLabel: "~Oct 2026 (check CSC website)",
    status: "upcoming",
    statusLabel: "🔵 Opens ~Aug 2026",
    link: "https://cscuk.fcdo.gov.uk/apply/",
    relevance: 3,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "For developing country nationals. Focus on development impact. PhD: for least developed countries (Bangladesh qualifies). Masters track also available.",
    khaled: "Bangladesh qualifies. Development angle = use your mobile banking/ML work's impact on financial inclusion in BD. Strong fit thematically. 2+ publications from 2024-25 strengthen this.",
    covers: "Full tuition + airfare + living allowance + thesis grant",
  },
  {
    id: 9,
    name: "Vanier Canada Graduate Scholarship",
    country: "🇨🇦 Canada",
    degree: "PhD",
    funded: "Fully Funded",
    deadline: "2026-11-01",
    deadlineLabel: "~Nov 2026",
    status: "upcoming",
    statusLabel: "🔵 Upcoming",
    link: "https://vanier.gc.ca",
    relevance: 3,
    csRelevant: true,
    noMastersNeeded: false,
    notes: "PhD only. Extremely competitive (~166 awards). Need to be nominated by a Canadian university — so admission to a PhD program is a prerequisite.",
    khaled: "You'd need a PhD admission offer first, then the university nominates you. Very competitive but $50,000 CAD/year for 3 years. Start contacting Canadian CS profs now for 2027 entry.",
    covers: "$50,000 CAD/year for up to 3 years",
  },
  {
    id: 10,
    name: "KAIST International Student Scholarship",
    country: "🇰🇷 South Korea",
    degree: "Masters / PhD",
    funded: "Fully Funded",
    deadline: "2026-09-01",
    deadlineLabel: "Sep 2026 (for Feb 2027 entry)",
    status: "upcoming",
    statusLabel: "🔵 Upcoming",
    link: "https://admission.kaist.ac.kr",
    relevance: 5,
    csRelevant: true,
    noMastersNeeded: true,
    notes: "KAIST (world top-50 CS) provides full scholarships to admitted international students directly. No separate scholarship application — admission = scholarship. Courses in English.",
    khaled: "This is your single strongest CS-specific bet. KAIST's AI/ML programs are world-class. Your CGPA 3.83 + publications + HCI research = very competitive. Apply Sep 2026 for Feb 2027 entry.",
    covers: "Full tuition + KRW 350,000/month + research stipend from advisor",
  },
];

const statusOrder = { urgent: 0, open: 1, upcoming: 2, prepare: 3 };
const statusColors = {
  urgent: { bg: "#ff4444", text: "white", border: "#cc0000" },
  open: { bg: "#22c55e", text: "white", border: "#16a34a" },
  upcoming: { bg: "#3b82f6", text: "white", border: "#2563eb" },
  prepare: { bg: "#8b5cf6", text: "white", border: "#7c3aed" },
};

const degreeColors = {
  "Masters": "#0ea5e9",
  "Masters / PhD": "#f59e0b",
  "Masters (1-year)": "#0ea5e9",
  "PhD": "#ef4444",
};

function RelevanceDots({ score }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: i <= score ? "#f59e0b" : "#374151",
          }}
        />
      ))}
    </div>
  );
}

function Card({ s, expanded, toggle }) {
  const sc = statusColors[s.status];
  return (
    <div
      onClick={toggle}
      style={{
        background: "#111827",
        border: `1px solid ${expanded ? "#f59e0b" : "#1f2937"}`,
        borderRadius: 12,
        padding: "16px 20px",
        cursor: "pointer",
        transition: "all 0.2s",
        marginBottom: 10,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
            <span style={{
              background: sc.bg,
              color: sc.text,
              fontSize: 11,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 20,
              letterSpacing: 0.5,
            }}>{s.statusLabel}</span>
            <span style={{
              background: degreeColors[s.degree] + "22",
              color: degreeColors[s.degree],
              fontSize: 11,
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: 20,
              border: `1px solid ${degreeColors[s.degree]}44`,
            }}>{s.degree}</span>
            <span style={{ color: "#6b7280", fontSize: 12 }}>{s.funded}</span>
          </div>
          <div style={{ color: "#f9fafb", fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{s.name}</div>
          <div style={{ color: "#9ca3af", fontSize: 13 }}>{s.country}</div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ color: "#f59e0b", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>📅 {s.deadlineLabel}</div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <RelevanceDots score={s.relevance} />
          </div>
          <div style={{ color: "#4b5563", fontSize: 11, marginTop: 2 }}>relevance</div>
        </div>
      </div>

      {expanded && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #1f2937" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <div style={{ background: "#0f172a", borderRadius: 8, padding: 12 }}>
              <div style={{ color: "#6b7280", fontSize: 11, fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>💰 Coverage</div>
              <div style={{ color: "#d1d5db", fontSize: 13 }}>{s.covers}</div>
            </div>
            <div style={{ background: "#0f172a", borderRadius: 8, padding: 12 }}>
              <div style={{ color: "#6b7280", fontSize: 11, fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>📋 Notes</div>
              <div style={{ color: "#d1d5db", fontSize: 13 }}>{s.notes}</div>
            </div>
          </div>
          <div style={{ background: "#1e3a2f", border: "1px solid #16a34a44", borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <div style={{ color: "#4ade80", fontSize: 11, fontWeight: 700, marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>🎯 Khaled-Specific Analysis</div>
            <div style={{ color: "#d1fae5", fontSize: 13, lineHeight: 1.6 }}>{s.khaled}</div>
          </div>
          <a
            href={s.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "inline-block",
              background: "#f59e0b",
              color: "#000",
              fontSize: 13,
              fontWeight: 700,
              padding: "7px 16px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Apply / More Info →
          </a>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [expanded, setExpanded] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = scholarships
    .filter((s) => {
      if (filter === "open") return ["urgent", "open"].includes(s.status);
      if (filter === "upcoming") return s.status === "upcoming";
      if (filter === "prepare") return s.status === "prepare";
      return true;
    })
    .sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  const tabs = [
    { key: "all", label: "All (10)" },
    { key: "open", label: "⚡ Open Now (2)" },
    { key: "upcoming", label: "🔵 Upcoming (4)" },
    { key: "prepare", label: "📋 Prep for 2027 (2)" },
  ];

  return (
    <div style={{
      background: "#0a0f1a",
      minHeight: "100vh",
      fontFamily: "'Inter', system-ui, sans-serif",
      color: "#f9fafb",
      padding: "24px 20px",
    }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              borderRadius: 10,
              padding: "6px 12px",
              fontSize: 12,
              fontWeight: 700,
              color: "#000",
              letterSpacing: 0.5,
            }}>KHALED'S SCHOLARSHIP RADAR</div>
            <div style={{ color: "#6b7280", fontSize: 12 }}>As of April 30, 2026</div>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            CS Masters / PhD Scholarships
          </h1>
          <p style={{ color: "#9ca3af", fontSize: 14, margin: "6px 0 0" }}>
            Tailored for your profile: MIST Lecturer · CGPA 3.83 · IELTS 7.5 · 4 Publications · BSc only
          </p>
        </div>

        {/* Alert box */}
        <div style={{
          background: "#ff440011",
          border: "1px solid #ff444444",
          borderRadius: 10,
          padding: "12px 16px",
          marginBottom: 20,
          display: "flex",
          gap: 10,
          alignItems: "flex-start",
        }}>
          <span style={{ fontSize: 20 }}>🚨</span>
          <div>
            <div style={{ color: "#ff8080", fontWeight: 700, fontSize: 13 }}>ACTION NEEDED TODAY</div>
            <div style={{ color: "#fca5a5", fontSize: 13 }}>Australian Awards Bangladesh closes TODAY (Apr 30). Check OASIS portal immediately. MEXT 2027 embassy deadline also imminent — contact Japanese Embassy Dhaka now.</div>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {Object.entries(statusColors).map(([key, val]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: val.bg }} />
              <span style={{ color: "#9ca3af", fontSize: 11, textTransform: "capitalize" }}>{key}</span>
            </div>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: 8 }}>
            <RelevanceDots score={5} />
            <span style={{ color: "#9ca3af", fontSize: 11 }}>= relevance to your profile</span>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              style={{
                background: filter === t.key ? "#f59e0b" : "#1f2937",
                color: filter === t.key ? "#000" : "#9ca3af",
                border: "none",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        {filtered.map((s) => (
          <Card
            key={s.id}
            s={s}
            expanded={expanded === s.id}
            toggle={() => setExpanded(expanded === s.id ? null : s.id)}
          />
        ))}

        {/* Bottom note */}
        <div style={{
          marginTop: 20,
          padding: 16,
          background: "#111827",
          borderRadius: 10,
          border: "1px solid #1f2937",
        }}>
          <div style={{ color: "#f59e0b", fontWeight: 700, fontSize: 13, marginBottom: 8 }}>💡 Khaled's Priority Action Plan</div>
          <div style={{ color: "#9ca3af", fontSize: 13, lineHeight: 1.8 }}>
            <b style={{ color: "#d1d5db" }}>This week:</b> Check Australian Awards OASIS portal + contact Japanese Embassy Dhaka for MEXT deadline.<br />
            <b style={{ color: "#d1d5db" }}>May 2026:</b> Watch for Fulbright 2027-28 cycle announcement on bd.usembassy.gov.<br />
            <b style={{ color: "#d1d5db" }}>Jun–Jul 2026:</b> Shortlist KAIST / DAAD / Chevening target programs. Start SOP drafts.<br />
            <b style={{ color: "#d1d5db" }}>Aug–Oct 2026:</b> Apply Chevening, DAAD, Commonwealth, KAIST (Sep deadline).<br />
            <b style={{ color: "#d1d5db" }}>Jan 2027:</b> Apply Erasmus Mundus (EMAI / DEAI).<br />
            <b style={{ color: "#d1d5db" }}>Feb 2027:</b> Apply GKS Korea.<br />
          </div>
        </div>

        <div style={{ color: "#374151", fontSize: 11, textAlign: "center", marginTop: 12 }}>
          Click any card to expand · Deadlines are approximate — always verify on official websites
        </div>
      </div>
    </div>
  );
}
