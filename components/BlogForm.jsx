import React, { useState } from "react";

const BlogForm = () => {
  const [blog, setBlog] = useState({
    name: "",
    description: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", blog);
    alert("Blog Submitted! (Check console for data)");
  };

  return (
    <div style={{
        padding: "40px",
        background: "#f1f1f1",
        borderRadius: "10px",
        width: "50%",
        margin: "20px auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}>
        <h2 style={{
          color: "#4a90e2",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "20px",
        }}>
          Add Blog
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <label style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#333",
          }}>
            Blog Name:
            <input
              type="text"
              name="name"
              value={blog.name}
              onChange={handleChange}
              required
              style={{
                marginTop: "5px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
                width: "100%",
              }}
            />
          </label>
          <label style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#333",
          }}>
            Description:
            <textarea
              name="description"
              value={blog.description}
              onChange={handleChange}
              required
              style={{
                marginTop: "5px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
                width: "100%",
                minHeight: "100px",
              }}
            ></textarea>
          </label>
          <label style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#333",
          }}>
            Author Name:
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
              required
              style={{
                marginTop: "5px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                fontSize: "16px",
                width: "100%",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              color: "#fff",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(90deg, #2575fc, #6a11cb)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(90deg, #6a11cb, #2575fc)";
            }}
          >
            Submit
          </button>
        </form>
      </div>
  );
};

export default BlogForm;
