import React from "react";
import "../public/style.css";
import Footer from "./footer.js";

export default function (props) {
  return (
    <div className="MainFooter">
      <Footer heading="Company" links={["About", "Jobs", "For the Record"]} />
      <Footer
        heading="Company"
        links={[
          "For Artists",
          "Developers",
          "Advertising",
          "Investors",
          "Vendors",
          "Spotify for Work"
        ]}
      />
      <Footer heading="Company" links={["Support", "Free Mobile App"]} />
      <div></div>
    </div>
  );
}
