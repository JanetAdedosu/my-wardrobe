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
        <span>Your digital closet</span>
      </header>

      <main className="computer-area">
        <div className="computer">
          <div className="computer-screen">

            {page === "home" && (
              <div className="screen-content">
                <h2>MyWardrobe ♡</h2>
                <p>Your digital closet & outfit planner</p>

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
            )}

            
                 {page === "closet" && (
                  <div className="screen-content">
                    <Wardrobe />

                    <button onClick={() => setPage("home")}>
                  ← Back Home
                 </button>
                </div>
              )}


            {page === "generator" && (
              <div className="screen-content">
                <h2>Outfit Generator ✨</h2>
                <p>Let's create your perfect outfit!</p>
                <button onClick={() => setPage("home")}>
                  ← Back Home
                </button>
              </div>
            )}

            {page === "saved" && (
              <div className="screen-content">
                <h2>Saved Looks ♡</h2>
                <p>Your favorite outfits will appear here.</p>
                <button onClick={() => setPage("home")}>
                  ← Back Home
                </button>
              </div>
            )}

          </div>

          <div className="computer-logo">MyWardrobe ♡</div>
        </div>

        <div className="computer-stand"></div>
        <div className="computer-base"></div>
      </main>

      <footer>Made with ♡ and a little bit of fashion magic</footer>
    </div>
  );
}

export default App;



