import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '30px',
    backdropFilter: "blur(20px)",

    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow:
      "0 20px 60px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.08)",
    borderRadius: '16px',
    textAlign: 'center',


  };

  const socialBtnStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",

    margin: "10px",
    padding: "12px 24px",

    background: "linear-gradient(135deg, #27272a, #3f3f46)",
    color: "#fff",

    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",

    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.5px",

    backdropFilter: "blur(10px)",
    boxShadow:
      "0 8px 25px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",

    transition: "all 0.35s ease",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <img
        src="/k-logo.svg"
        alt="@karanrana"
        style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #7b9669', marginBottom: '20px', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)' }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#bac8b1', marginBottom: '15px' }}>Karan Rana (@github.com/rana-ji0001)</h3>

      <p style={{ color: '#bac8b1', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        <strong>Join the community and grow together!</strong> Welcome to my platform where we build, deploy, and scale highly engineered systems.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <a href="https://karan-rana-portfolio-ai.vercel.app/" target="_blank" rel="noreferrer" style={socialBtnStyle}>🌐 Website</a>
        <a href="https://www.youtube.com/@karanrana7436" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444', color: '#ef4444' }}>📺 YouTube</a>
        <a href="https://instagram.com/k.rana.01" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(236, 72, 153, 0.2)', borderColor: '#ec4899', color: '#ec4899' }}>📸 Instagram</a>
        <a href="https://www.linkedin.com/in/karan-rana-a67b46350/" target="_blank" rel="noreferrer" style={{ ...socialBtnStyle, background: 'rgba(59, 130, 246, 0.2)', borderColor: '#3b82f6', color: '#3b82f6' }}>💼 LinkedIn</a>
        <a href="https://github.com/rana-ji0001" target="_blank" rel="noreferrer" style={socialBtnStyle}>🔗 Github</a>
      </div>
    </div>
  );
};

export default About;