import NavLogo from "../assets/V8.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{
                backgroundColor: "white",
                position: "fixed",
                width: "100%",
                zIndex: 20,
                top: 0,
                left: 0,
                borderBottom: "1px solid #e5e7eb",
                borderColor: "#4B5563",
            }}>
      <div  style={{
                    maxWidth: "1280px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "1rem",
                }}>
        {/* Logo */}
        <a href="/" style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.50rem",
                            direction: "rtl",
                            textDecoration: "none",
                        }}>
          <span style={{
                        alignSelf: "center",
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        color: "black",
                    }}>
            ElecMan
            
          </span><img src={NavLogo} alt="Logo" className="h-12" style={{ height: "40px", width: "40px", borderRadius: "40%" }} />
        </a>

        {/* Boutons */}
        <div style={{
                    display: "flex",
                    order: 2,
                    gap: "max(1vw, 12px)",
                }}>
          <Link to="/adminLogin">
            <button
              type="button"
              style={{
                fontWeight: "bold",
                color: "black",
                border: "2px solid white",
                backgroundColor: "#FFA500",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                padding: "0.5rem 1rem",
                textAlign: "center",
                outline: "none",
                transition: "background-color 0.3s ease",
                cursor: "pointer",
              }}
              //onMouseOver={(e) => e.target.style.backgroundColor = "#e59400"}
              onFocus={(e) => e.target.style.boxShadow = "0 0 0 4px #FFA500"}
              onBlur={(e) => e.target.style.boxShadow = "none"}
            
            >
              Admin Login
            </button>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}
