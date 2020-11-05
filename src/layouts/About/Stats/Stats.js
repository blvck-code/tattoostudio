import React from "react";
import "./style.css";

function Stats() {
  const stats = [
    {
      percentage: "28%",
      category: "Small Tattoos",
    },
    {
      percentage: "54%",
      category: "Body Piercing",
    },
    {
      percentage: "98%",
      category: "Intimate Piercing",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-inner">
        {stats?.map(({ percentage, category }, idx) => (
          <div className="stats__item" key={idx}>
            <h1>{percentage}</h1>
            <span>{category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
