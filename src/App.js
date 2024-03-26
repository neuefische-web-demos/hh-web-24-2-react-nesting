import React from "react";
import "./styles.css";

function Animal({ emoji, name, description }) {
  return (
    <section className="card">
      <h2>
        {emoji} {name}
      </h2>
      {description}
    </section>
  );
}

function NestedComponent({ test }) {
  return <h1>{test}</h1>;
}

export default function App() {
  return (
    <>
      <h1>Animal Shelter</h1>
      <p>Please adopt our lovely pets!</p>
      <Animal emoji="🐕" name="Lucky" description={"very cute dog"} />
      <Animal
        emoji="🐈"
        name="Mittens"
        description={
          <ul>
            <li>first</li>
            <li>second</li>
            <li>third</li>
          </ul>
        }
      />
      <Animal
        emoji="🐢"
        name="Archibald"
        description={
          <>
            <p>Super relaxed turtle</p>
            <ul>
              <li>Eats lettuce all the time</li>
              <li>Can sleep in your fridge</li>
            </ul>
          </>
        }
      />
      <Animal
        emoji="🐣"
        name="Chick Norris"
        description={<NestedComponent test="1234" />}
      />
      {Animal({ emoji: "✨", name: "Sparkles" })}
    </>
  );
}
