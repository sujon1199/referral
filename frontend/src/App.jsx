import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {!user ? (
        <>
          <Login onLogin={setUser} />
          <Register />
        </>
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
}

export default App;
