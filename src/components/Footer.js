import React from "react";

function Footer({ Children }) {
  return (
    <div>
      <Footer>{Children}</Footer>
    </div>
  );
}

export default Footer;
