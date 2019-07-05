import React, { useState } from "react";

// - local imports
import experience from "./data/experience";
import Timeline from "./Timeline";

function Experience() {
  const [selectedRole, selectRole] = useState(
    experience[experience.length - 1]
  );

  function calculateDateRange() {
    const start = new Date(selectedRole.startDate);
    const end =
      "endDate" in selectedRole ? new Date(selectedRole.endDate) : new Date();

    // format as "Sep 1999"
    const bY = d =>
      `${d.toLocaleDateString("en-US", { year: "numeric", month: "short" })}`;

    return `${bY(start)} — ${"endDate" in selectedRole ? bY(end) : "Present"}`;
  }

  return (
    <section className="experience">
      <Timeline
        timelineData={experience}
        selectBreakpoint={selectRole}
        selectedBp={selectedRole}
      />
      <div className="experience__description u-fade-in-element">
        {/* Job title/description */}
        <div className="text-box experience__role">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {selectedRole.title} @{selectedRole.company}
            <span className="heading-tertiary--sub">
              {calculateDateRange()}
            </span>
          </h3>

          <p className="paragraph">{selectedRole.description}</p>
          <ul className="list">
            {selectedRole.keyItems.map(item => (
              <li key={item} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>

        {/* List of technologies */}
        <div className="text-box experience__stack">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Software Stack
          </h3>
          <ul className="list">
            {selectedRole.technologies.map(tool => (
              <li key={`${selectedRole.company}${tool}`}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
