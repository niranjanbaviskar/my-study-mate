import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, Newspaper } from "lucide-react";

const EducationNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=education&apiKey=d1d76628090f44caac49652923298fcc"
        );
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                  text-purple-600 dark:text-purple-300 font-medium hover:shadow-md transition-shadow"
      >
        <Home className="w-5 h-5" />
        <span>Go to Dashboard</span>
      </motion.button>
      
      <h1 className="text-4xl font-bold text-center mb-6 flex justify-center items-center gap-2">
        <Newspaper /> Daily Educational Updates
      </h1>
      
      {loading ? (
        <p className="text-center text-xl">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
              <img
                src={article.urlToImage || "https://via.placeholder.com/400"}
                alt={article.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-400 mt-2">{article.description || "No description available."}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationNews;
