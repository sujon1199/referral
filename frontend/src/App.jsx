import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token
    setUser(null); // clear user from state
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {user ? (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
          <Dashboard user={user} />
        </>
      ) : (
        <>
          <Login onLogin={setUser} />
          <Register />
        </>
      )}
    </div>
  );
}

export default App;
