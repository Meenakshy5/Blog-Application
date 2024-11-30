import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
        padding: "15px 30px",
        background: "linear-gradient(90deg, #6a11cb, #2575fc)",
        display: "flex",
        justifyContent:"space-evenly",
        alignItems: "center",
        color: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px", fontWeight: "bold", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/add-blog" style={{ color: "white", textDecoration: "none", fontSize: "18px", fontWeight: "bold" }}>
          Add Blog
        </Link>
      </nav>
  );
};

export default Navbar;
