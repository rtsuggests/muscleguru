"use client";
import { useState } from "react";
import Link from "next/link";

const topics = [
  "General question",
  "Correction / factual error",
  "Calculator issue",
  "Partnership / collaboration",
  "Something else",
];

export default function ContactClient() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgawgdkp", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName(""); setEmail(""); setMessage(""); setTopic(topics[0]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Contact
      </div>

      <div style={{ textAlign: "center", marginBottom: "3rem", marginTop: "1.5rem" }}>
        <h1 style={{ fontSize: "clamp(1.9rem, 4.5vw, 2.75rem)", marginBottom: "0.875rem" }}>Get in Touch</h1>
        <p style={{ color: "var(--color-muted)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto" }}>
          Question about a calculator? Found an error? Want to collaborate? We&apos;d genuinely love to hear from you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "2.5rem", alignItems: "start" }}>
        {/* Form */}
        <div style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.5rem, 4vw, 2.5rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-brand-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem", fontSize: "2rem" }}>✓</div>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.625rem" }}>Message sent!</h2>
              <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Thanks for reaching out — we typically respond within 3-5 business days.</p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-primary"
                style={{ width: "auto", padding: "0.7rem 1.75rem" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Your Name</label>
                  <input
                    className="calc-input"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Email Address</label>
                  <input
                    className="calc-input"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>What&apos;s this about?</label>
                <select className="calc-select" value={topic} onChange={e => setTopic(e.target.value)}>
                  {topics.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Your Message</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  style={{
                    width: "100%",
                    padding: "0.75rem 0.875rem",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: "0.5rem",
                    fontSize: "1rem",
                    fontFamily: "var(--font-sans)",
                    color: "var(--color-dark)",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {error && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>
              )}
              {status === "error" && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>
                  Something went wrong sending your message. Please try again in a moment.
                </p>
              )}

              <button type="submit" className="btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ background: "var(--color-bg)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.625rem" }}>📝</div>
            <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Corrections</div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>
              Found an error in an article or calculator? We review every report and take accuracy seriously.
            </p>
          </div>
          <div style={{ background: "var(--color-bg)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.625rem" }}>🤝</div>
            <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Partnerships</div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>
              Interested in collaborating with MuscleGuru.in? Select &quot;Partnership&quot; above and tell us more.
            </p>
          </div>
          <div style={{ background: "var(--color-bg)", borderRadius: "1rem", padding: "1.5rem" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "0.625rem" }}>⏱️</div>
            <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>Response Time</div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>
              We aim to reply within 3-5 business days.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.875rem", color: "var(--color-muted)" }}>
        Many common questions are answered in our{" "}
        <Link href="/editorial-policy" style={{ color: "var(--color-brand-darker)" }}>Editorial Policy</Link>
        {" "}and{" "}
        <Link href="/medical-disclaimer" style={{ color: "var(--color-brand-darker)" }}>Medical Disclaimer</Link>.
      </div>
    </div>
  );
}
