import { useState } from 'react'
import './App.css'
//where we begin our showroom
import Wardrobe from "./components/Wardrobe";


function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="top-bar">
        <h1>MyWardrobe ♡</h1>

        <nav className="nav-links">
          <button onClick={() => setPage("home")}>
            Home
          </button>
          <button onClick={() => setPage("closet")}>
            Closet
          </button>
          <button onClick={() => setPage("generator")}>
            Generator
          </button>
          <button onClick={() => setPage("saved")}>
            Saved
          </button>
        </nav>

        <img
          src="/images/profile.jpg"
          alt="My profile"
          className="nav-profile"
        />
      </header>

      {page === "home" ? (
        <main className="retro-home">
          <div className="portrait-area">
            <img
              src="/images/profile.jpg"
              alt="MyWardrobe founder"
              className="hero-portrait"
            />
          </div>

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

                  <button onClick={() => setPage("closet")}>
                    ♡ My Closet
                  </button>

                  <button onClick={() => setPage("generator")}>
                    ✨ Outfit Generator
                  </button>

                  <button onClick={() => setPage("saved")}>
                    ♡ Saved Looks
                  </button>
                </div>
              </div>

              <div className="computer-logo">
                MyWardrobe ♡
              </div>
            </div>

            <div className="computer-stand"></div>
            <div className="computer-base"></div>
          </div>

          <div className="sticky-note">
            <strong>Outfit Ideas ♡</strong>
            <p>♡ Uni</p>
            <p>♡ Work</p>
            <p>♡ Going Out</p>
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

      <footer>
        Made with ♡ and a little fashion magic
      </footer>
    </div>
  );
}

export default App;
