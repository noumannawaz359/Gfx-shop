import React, { useState, useEffect, useRef } from "react";
import Navbar from "../navbar/navbar";
import style from "../layout/layout.module.css";
const Layout = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(20);

  const navbarRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      if (parseInt(currentScrollPos) < 500) {
        const span = navbarRef.current;

        span.className = style?.visible;
      } else {
        const span = navbarRef.current;

        span.className = style?.hidden;
      }
    } else if (currentScrollPos < prevScrollPos) {
      const span = navbarRef.current;

      span.className = style?.visible;
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className={style.layoutWrapper}>
        <main>
          <div
            ref={navbarRef}
            style={{
              position: "fixed",
              top: "0px",

              backgroundColor:
                // pathname === "/contact" ? "transparent" : "black",
                "red",

              zIndex: 100,

              width: "100%",
            }}
          >
            <Navbar />
          </div>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
