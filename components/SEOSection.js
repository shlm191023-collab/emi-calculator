"use client";

import { useState } from "react";

export default function SEOSection({ data }) {
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!data) return null;

  return (
    <div className="seo-wrapper">
      {data.map((section, index) => {
        switch (section.type) {
          case "intro":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>
                {(section.content || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            );

          case "definition":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>

                <div>
                  {(section.list || section.items || []).map((item, i) => (
                    <div key={i}>✅ {item}</div>
                  ))}
                </div>

                {section.note && <p>{section.note}</p>}
              </div>
            );

          case "formula":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>
                <div className="formula-box">{section.formula}</div>
                {(section.extra || []).map((e, i) => (
                  <p key={i}>{e}</p>
                ))}
              </div>
            );

          case "cta":
            return (
              <div key={index} className="seo-cta-box">
                <h3>{section.title}</h3>
                <a
                  href="https://mdeal.in/c_vTUCk022"
                  target="_blank"
                  className="seo-cta-btn"                  
                >
                  {section.button}
                </a>
              </div>
            );

          case "benefits":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>
                <div className="benefits-grid">
                  {(section.items || []).map((item, i) => (
                    <div key={i}>✅ {item}</div>
                  ))}
                </div>
              </div>
            );

          case "example":
            return (
              <div key={index} className="seo-card example-box">
                <h2 className="seo-title">{section.title}</h2>
                <div className="formula-box">
                  {(section.items || []).map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
              </div>
            );

          case "faq":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>

                {(section.items || []).map((faq, i) => (
                  <div key={i} className="faq-item">
                    <div
                      className="faq-q"
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    >
                      {faq.q}
                    </div>

                    {openFAQ === i && <div className="faq-a">{faq.a}</div>}
                  </div>
                ))}
              </div>
            );

          case "final":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>
                {(section.content || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            );

          case "compare":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>

                <div className="compare-grid">
                  {/* LEFT */}
                  <div className="compare-box">
                    <h3>{section.left.title}</h3>
                    <ul>
                      {section.left.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT */}
                  <div className="compare-box">
                    <h3>{section.right.title}</h3>
                    <ul>
                      {section.right.points.map((p, i) => (
                        <li key={i}>• {p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="compare-note">{section.note}</p>
              </div>
            );

          case "list":
          case "factors":
          case "tips":
          case "documentsrequired":
          case "eligibility":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>

                {(section.content || []) &&
                  (section.content || []).map((p, i) => <p key={i}>{p}</p>)}

                <div>
                  {(section.items || section.list || []).map((item, i) => (
                    <div key={i}>✅ {item} </div>
                  ))}
                </div>
              </div>
            );

          case "useCalc":
            return (
              <div key={index} className="seo-card">
                <h2 className="seo-title">{section.title}</h2>

                <div>
                  {(section.content || []).map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
