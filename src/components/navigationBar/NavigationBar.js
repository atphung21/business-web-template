import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRefs = useRef({});

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  // Update screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(dropdownRefs.current).some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "black" : "black",
    textDecoration: isActive ? "none" : "none",
  });

  const dropDownStyle = (menu) => ({
    position: "absolute",
    top: "110%",
    left: 0,
    backgroundColor: "white",
    boxShadow: "1px 0px 2px 2px rgba(0, 0, 0, 0.2)",
    padding: openDropdown === menu ? "0.5rem" : "0.5rem",
    opacity: openDropdown === menu ? 1 : 0,
    transform: openDropdown === menu ? "translateY(5%)" : "translateY(-20%)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
    pointerEvents: openDropdown === menu ? "auto" : "none",
    zIndex: 1,
    fontSize: "0.9rem",
    letterSpacing: "0.5px",
  });

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    textWrap: isMobile ? "wrap" : "nowrap", // Allow wrapping on mobile
    flexWrap: isMobile ? "wrap" : "nowrap", // Allow wrapping on mobile
    gap: "1.5rem",
    backgroundColor: "white",
    position: "relative",
    width: "100%",
    letterSpacing: "0.2rem",
    fontFamily: '"Open Sans", arial, sans-serif',
    fontWeight: 200,
    padding: isMobile ? "1rem 4rem" : "0rem 2rem 0rem 0rem",
    justifyContent: "center",
    textAlign: isMobile ? "left" : "center", // Align text to the left on mobile for better readability
  };

  return (
    <>
      {/* Hamburger Toggle Button */}
      {isMobile && (
        <div
          style={{
            padding: "1rem 4rem",
            backgroundColor: "white",
            textAlign: "left",
          }}
        >
          <span onClick={toggleMenu} style={{ fontSize: "1.75rem" }}>
            ☰
          </span>
        </div>
      )}

      <nav style={navStyle}>
        <div style={{ position: "relative" }}>
          <NavLink style={navLinkStyle} to="/">
            HOME
          </NavLink>
        </div>
        <div
          ariaExpanded={openDropdown === "Meet the Team" ? "true" : "false"}
          style={{ position: "relative" }}
          ref={(el) => (dropdownRefs.current["Meet the Team"] = el)}
        >
          <span
            onClick={() => toggleDropdown("Meet the Team")}
            style={{ cursor: "pointer" }}
          >
            MEET THE TEAM {openDropdown ? "▾" : "<"}
          </span>
          <div style={dropDownStyle("Meet the Team")}>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink style={navLinkStyle} to="/meet-the-founder">
                Meet the Founder
              </NavLink>
            </div>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/meet-the-agents"
              >
                Meet the Agents
              </NavLink>
            </div>
          </div>
        </div>
        <div
          ariaExpanded={openDropdown === "Product" ? "true" : "false"}
          style={{ position: "relative" }}
          ref={(el) => (dropdownRefs.current["Product"] = el)}
        >
          <span
            onClick={() => toggleDropdown("Product")}
            style={{ cursor: "pointer" }}
          >
            PRODUCTS & SERVICES {openDropdown ? "▾" : "<"}
          </span>

          <div style={dropDownStyle("Product")}>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/health-insurance-101"
              >
                Health Insurance 101
              </NavLink>
            </div>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/individual-family-plans"
              >
                Individual & Family Plans
              </NavLink>
            </div>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/medicare-plans"
              >
                Medicare Plans
              </NavLink>
            </div>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/employer-sponsored-plans"
              >
                Employer - Sponsored Plans
              </NavLink>
            </div>
            <div style={{ padding: "0.5rem 0.5rem" }}>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/final-expense-plans"
              >
                Final Expense Plans
              </NavLink>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/testimonials"
          >
            TESTIMONIALS
          </NavLink>
        </div>
        <div style={{ position: "relative" }}>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/faq">
            FAQ
          </NavLink>
        </div>
        <div style={{ position: "relative" }}>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/become-an-agent"
          >
            BECOME AN AGENT
          </NavLink>
        </div>
        <div style={{ position: "relative" }}>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/contact-us"
          >
            CONTACT US
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
