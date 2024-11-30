import React, { useEffect, useState } from "react";

const BlogDashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))) // Limiting to 10 posts for simplicity
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blog Dashboard</h2>
      <div style={{
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  padding: "20px",
  background: "beige",
}}>
  {posts.map((post) => (
    <div
      key={post.id}
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <h4 style={{
        fontSize: "20px",
        color: "maron",
        marginBottom: "10px",
        fontFamily: "'Poppins', sans-serif",
      }}>
        {post.title}
      </h4>
      <p style={{ fontSize: "14px", color: "green" }}>Post ID: {post.id}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default BlogDashboard;
