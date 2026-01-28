import React from "react";
import "./App.css";

import realm1 from "./assets/r1.jpg";
import realm2 from "./assets/r2.jpg";
import realm3 from "./assets/r3.jpg";

const realmImages = [realm1, realm2, realm3];

export default function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Fantasical Eternal Realms</h1>

        <nav className="nav-buttons">
          <button onClick={() => scrollToSection("realms")}>New Realms</button>
          <button onClick={() => scrollToSection("guilds")}>Guild Wars</button>
          <button onClick={() => scrollToSection("tournament")}>Tournament</button>
          <button onClick={() => scrollToSection("heroes")}>Top Heroes</button>
        </nav>
      </header>
      <section id="realms" className="section">
        <h2>New Realms Released</h2>

        <div className="realm-grid">
          <div className="realm-card">
            <img src={realmImages[0]} alt="Dragonspire Peaks" />
            <h3>Dragonspire Peaks</h3>
            <p>Ancient dragons dominate the skies.</p>
          </div>

          <div className="realm-card">
            <img src={realmImages[1]} alt="Celestial Glade" />
            <h3>Celestial Glade</h3>
            <p>Floating islands powered by arcane light.</p>
          </div>

          <div className="realm-card">
            <img src={realmImages[2]} alt="Shadowveil Forest" />
            <h3>Shadowveil Forest</h3>
            <p>Dark magic whispers between twisted trees.</p>
          </div>
        </div>
      </section>
      <section id="guilds" className="section">
        <h2>Weekly Guild War Results</h2>

        <table>
          <thead>
            <tr>
              <th>Guild</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Honor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stormfang Sentinels</td>
              <td>6</td>
              <td>0</td>
              <td>180</td>
            </tr>
            <tr>
              <td>Shadowmoon Order</td>
              <td>4</td>
              <td>2</td>
              <td>140</td>
            </tr>
            <tr>
              <td>Frostspire Rangers</td>
              <td>2</td>
              <td>4</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="tournament" className="section">
        <h2> Eternal Tournament Rewards</h2>

        <div className="reward-grid">
          <div className="reward-card">
            <h3>1st Place</h3>
            <p>Dragonbone Blade + 10,000 Gold</p>
          </div>

          <div className="reward-card">
            <h3>2nd Place</h3>
            <p>Phoenix Armor + 5,000 Gold</p>
          </div>

          <div className="reward-card">
            <h3>3rd Place</h3>
            <p>Arcane Staff + 2,000 Gold</p>
          </div>
        </div>
      </section>

      <section id="heroes" className="section">
        <h2>Top Heroes of the Realm</h2>

        <div className="heroes-grid">
          <div className="hero-card">
            <h3>Aerion Skyblade</h3>
            <p>18,250 Power</p>
          </div>
          <div className="hero-card">
            <h3>Lyra Moonshadow</h3>
            <p>17,800 Power</p>
          </div>
          <div className="hero-card">
            <h3>Thorne Blackfang</h3>
            <p>16,900 Power</p>
          </div>
        </div>
      </section>
    </div>
  );
}
