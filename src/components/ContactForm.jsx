import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:info@flamingopublishers.com?subject=Contact%20Form%20Submission&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "1px 15px 25px 15px",
        height: "auto",
        minHeight: "60vh",
        fontFamily: 'Delius, sans-serif',
      }}
    >
      {/* Left column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0px", 
        }}
      >
        <div>
          <h2 style={{ marginBottom: "10px", fontWeight: "600", fontSize: "2rem" }}>
            Contact Us
          </h2>
          <p style={{ color: "#555", fontSize: "1.1rem" }}>
            We'd love to hear from you! Please fill out the form and we'll get back to you soon.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "12px", color: "#333", fontSize: "1.25rem" , fontWeight: "bold"}}>
            Our Mission
          </h3>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Our mission is to craft impactful stories that reflect the experiences of immigrants and their descendants in America, fostering a deep sense of belonging. We champion loving, supportive family dynamics, while promoting constructive growth. We strive to inspire imagination, curiosity, and lifelong learning, celebrating cultural fusion and the creation of unique cultural identities.
            </p>
        </div>
      </div>

      {/* Right column: form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontFamily: 'Delius, sans-serif',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            fontFamily: 'Delius, sans-serif',
          }}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="8"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            resize: "vertical",
            fontFamily: 'Delius, sans-serif',
          }}
        />
        <button
          type="submit"
          style={{
            padding: "14px 0",
            fontSize: "1.1rem",
            backgroundColor: "#f56876",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontWeight: "bold",
            fontFamily: 'Delius, sans-serif',
          }}
          onClick={e => e.currentTarget.style.backgroundColor = "#f89ba6"}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
