import { useState } from 'react'
import './App.css'
//where we begin our showroom
import Wardrobe from "./components/Wardrobe";




function App() {
  const [page, setPage] = useState("home");

  const menuItems = [
    { id: "closet", label: "My Closet", icon: "♧" },
    { id: "generator", label: "Outfit Generator", icon: "✨" },
    { id: "saved", label: "Saved Looks", icon: "♡" }
  ];

  return (
    <div className="app">
      <header className="top-bar">
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <h1>MyWardrobe ♡</h1>

        <nav className="nav-links">
          {["home", "closet", "generator", "saved"].map(
            (item) => (
              <button
                key={item}
                className={page === item ? "selected" : ""}
                onClick={() => setPage(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </nav>

        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="nav-profile"
        />
      </header>

      {page === "home" ? (
        <main className="retro-home">
          <div className="retro-scene">
            <span className="decoration star">☆</span>
            <span className="decoration heart">♡</span>

            <img
              src="/images/portrait-cutout.png"
              alt="MyWardrobe portrait"
              className="hero-portrait"
            />

            <div className="retro-computer-area">
              <div className="computer">
                <div className="computer-screen">
                  <div className="screen-content">
                    <h2>MyWardrobe ♡</h2>
                    <p>
                      Your digital closet
                      <br />
                      & outfit planner
                    </p>

                    <div className="computer-menu">
                      {menuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setPage(item.id)}
                        >
                          <span>{item.icon}</span>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="computer-chin"></div>
              </div>

              <div className="computer-stand"></div>
              <div className="computer-base"></div>
            </div>

            <div className="lava-lamp">
              <div className="lava-top"></div>
              <div className="lava-glass">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="lava-bottom"></div>
            </div>

            <div className="sticky-note">
              <strong>Outfit Ideas ♡</strong>
              <p>♡ Uni</p>
              <p>♡ Work</p>
              <p>♡ Going Out</p>
            </div>
          </div>
        </main>
      ) : (
        <main className="page-area">
          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← Back Home
          </button>

          {page === "closet" && <Wardrobe />}

          {page === "generator" && (
            <h2>Outfit Generator — Coming Soon ✨</h2>
          )}

          {page === "saved" && (
            <h2>Saved Looks — Coming Soon ♡</h2>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
