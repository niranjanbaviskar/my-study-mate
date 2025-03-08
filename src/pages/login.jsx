import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isRegister ? "User Registered!" : "User Logged In!");

    // Show success popup
    setShowSuccess(true);

    // Hide popup after 2 seconds and redirect
    setTimeout(() => {
      setShowSuccess(false);
      if (!isRegister) navigate("/"); // Redirect only after login
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-700 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-white/10 dark:bg-gray-800/20 p-6 rounded-2xl shadow-lg w-full max-w-md border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-white">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="px-4 py-2 border rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-indigo-300"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            required
            className="px-4 py-2 border rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-indigo-300"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="px-4 py-2 border rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring focus:ring-indigo-300"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            {isRegister ? "Sign Up" : "Login"}
          </motion.button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-200">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-yellow-300 hover:underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3"
          >
            ✅ <span>{isRegister ? "Successfully Registered!" : "Login Successful!"}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
