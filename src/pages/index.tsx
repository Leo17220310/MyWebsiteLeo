import React, { useRef, useState, useEffect } from "react";
import DesktopHome from "./dektop";
import MobileHome from "./mobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Beispiel für eine Bildschirmbreite für mobile Geräte
    };

    // Beim Laden der Seite und bei Änderungen der Bildschirmgröße prüfen
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileHome /> : <DesktopHome />;
}
