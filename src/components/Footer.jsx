import React from "react";

const Footer = () => {
  return (
    // <nav className="navbar navbar-dark bg-dark">
    //   <div className="container-fluid ">
    //     <p className="navbar-brand mb-0 h1 text-center">
    //       {" "}
    //       {""}Gowther - &copy; {new Date().getFullYear()} {""}
    //     </p>
    //   </div>
    // </nav>
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Gowther - &copy; {new Date().getFullYear()}</a>
  </div>
</nav>
  );
};

export default Footer;
