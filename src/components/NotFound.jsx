import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      {/* Animated SVG Illustratin */}
      <svg style={styles.svg} viewBox="0 0 600 400" xmlns="http://w3.org">
        <defs>
          <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <style>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.8; }
            }
            .floating-astronaut { animation: float 4s ease-in-out infinite; }
            .glowing-stars { animation: pulse 3s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Background Decorative Stars */}
        <g className="glowing-stars" fill="#ffffff">
          <circle cx="100" cy="80" r="2" />
          <circle cx="450" cy="60" r="3" />
          <circle cx="520" cy="180" r="1.5" />
          <circle cx="80" cy="280" r="2.5" />
        </g>

        {/* Big 404 Glowing Text */}
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          fill="url(#glow)"
          style={styles.svgText}
        >
          404
        </text>

        {/* Floating Astronaut Character Graphic */}
        <g className="floating-astronaut" transform="translate(230, 180)">
          {/* Backpack */}
          <rect x="35" y="45" width="70" height="70" rx="15" fill="#4b5563" />
          {/* Body Suit */}
          <rect x="45" y="35" width="50" height="70" rx="20" fill="#e5e7eb" />
          {/* Helmet Visor */}
          <rect x="53" y="43" width="34" height="24" rx="8" fill="#1f2937" />
          <rect
            x="57"
            y="47"
            width="10"
            height="6"
            rx="3"
            fill="#9ca3af"
            opacity="0.5"
          />
          {/* Boots */}
          <rect x="48" y="103" width="16" height="12" rx="4" fill="#9ca3af" />
          <rect x="76" y="103" width="16" height="12" rx="4" fill="#9ca3af" />
        </g>
      </svg>

      {/* Text Message Context */}
      <h1 style={styles.heading}>Lost in Space</h1>
      <p style={styles.subtext}>
        The page you are looking for has drifted out of orbit.
      </p>

      {/* Action Navigation Button */}
      <Link to="/" style={styles.button}>
        Return to Home Base
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
    color: "#f8fafc",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden",
  },
  svg: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
  },
  svgText: {
    fontWeight: "900",
    fontSize: "120px",
    letterSpacing: "4px",
  },
  heading: {
    fontSize: "2rem",
    margin: "10px 0",
    color: "#f1f5f9",
  },
  subtext: {
    fontSize: "1rem",
    color: "#94a3b8",
    marginBottom: "30px",
    maxWidth: "400px",
  },
  button: {
    display: "inline-block",
    padding: "12px 24px",
    background: "rgba(99, 102, 241, 0.85)",
    backdropFilter: "blur(8px)",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "12px",
    fontWeight: "600",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "background-color 0.2s",
  },
};