import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div style={{ position: "relative" }}>
      <footer>
        <p>institut national des postes et télécommunications </p>
        <p>© {year} | E-Notes.com </p>
      </footer>
    </div>
  );
}

export default Footer;
