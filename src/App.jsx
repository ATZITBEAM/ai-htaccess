import React, { useState } from "react";
import Data from "./Pages/Data";
import { FaLock } from "react-icons/fa";

const App = () => {
  const [authorized, setAuthorized] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const validUsername = "admin";
    const validPassword = "123";

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    if (username === validUsername && password === validPassword) {
      setAuthorized(true);
      setError("");
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <FaLock className="text-4xl text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Restricted Access
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Please enter your credentials to continue.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            />

            {error && (
              <p className="text-xs text-red-500 text-center transition-all duration-200">
                {error}
              </p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition-all duration-200"
            >
              Access Site
            </button>

            <p className="text-[11px] text-gray-500 dark:text-gray-400 text-center mt-2">
              Unauthorized access is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <Data />;
};

export default App;
