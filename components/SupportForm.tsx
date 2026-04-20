"use client";

import { useState, type FormEvent } from "react";

// Replace with your Formspree form ID (e.g. https://formspree.io/f/xyzabcde)
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/REPLACE_ME";

export function SupportForm() {
  const [state, setState] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setState("ok");
      return;
    }

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("ok");
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        setErrorMsg(payload?.error || "Something went wrong. Try emailing contact@regularguylabs.com.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Try emailing contact@regularguylabs.com.");
      setState("error");
    }
  }

  return (
    <form id="support-form" className="support-form" onSubmit={onSubmit}>
      <h2>Or send us a note right here.</h2>
      <p>We&apos;ll get back to you at the email you provide.</p>

      {state === "ok" ? (
        <div className="ow-banner ow-banner--positive" style={{ textAlign: "center" }}>
          <strong>Thanks — we got it.</strong>
          <br />
          <span style={{ color: "var(--fg-2)", fontSize: 14 }}>
            We&apos;ll reply to you soon. Usually same-day during the week.
          </span>
        </div>
      ) : (
        <>
          <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} aria-hidden="true" />
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required placeholder="How should we address you?" />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="topic">Topic</label>
            <select id="topic" name="topic" defaultValue="General question">
              <option>General question</option>
              <option>Bug report</option>
              <option>Pricing or purchase</option>
              <option>Feature request</option>
              <option>Security</option>
              <option>Press or partnerships</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" name="message" required placeholder="As much or as little detail as you like." />
          </div>
          {state === "error" && (
            <p style={{ color: "var(--negative)", fontSize: 14, marginBottom: 12 }}>{errorMsg}</p>
          )}
          <button className="ow-btn ow-btn--prominent" type="submit" disabled={state === "submitting"}>
            {state === "submitting" ? "Sending…" : "Send message"}
          </button>
        </>
      )}
    </form>
  );
}
