import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🤖 FRAMAR AI</h1>
        <p>Your Smart AI Assistant</p>
      </header>

      <main className="main">
        <div className="chat-box">
          <div className="message ai">
            👋 Welcome to FRAMAR AI! I'm ready to help you.
          </div>

          <div className="message user">
            This is the beginning of our AI app.
          </div>
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
          />
          <button>Send</button>
        </div>
      </main>
    </div>
  );
}
