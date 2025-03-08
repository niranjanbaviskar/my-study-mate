import React, { useState } from "react";
import { Home, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const sampleData = {
  queries: {
    "machine learning": [
        {
                  title: "Machine Learning for Beginners",
                  platform: "Udemy",
                  url: "https://www.udemy.com/course/machine-learning/",
                  rating: 4.7,
                  enrolled: 12000,
                  price: "₹499",
                  image: "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg"
                },
                {
                    title: "Complete Data Science,Machine Learning,DL,NLP Bootcamp",
                    platform: "Udemy",
                    url: "https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/?couponCode=IND21PM",
                    rating: 4.6,
                    enrolled: 63000,
                    price: "₹499",
                    image: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=490"
                  },
                {
                  title: "Machine Learning by Stanford",
                  platform: "Coursera",
                  url: "https://www.coursera.org/learn/machine-learning",
                  rating: 4.9,
                  enrolled: "N/A",
                  price: "₹5000",
                  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWgZ0nKup4hOPH6hyP9-NqKK9Dy3r9E5M8w&s"
                },
                {
                  title: "Machine Learning with Python: from Linear Models to Deep Learning",
                  platform: "EdX",
                  url: "https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning?index=product&queryId=96afa040c9b12a64a0447da16249f5ab&position=1",
                  rating: "4.6",
                  enrolled: "400",
                  price: "₹20000",
                  image: "https://www.edx.org/_next/image?url=https%3A%2F%2Fprod-discovery.edx-cdn.org%2Fcdn-cgi%2Fimage%2Fwidth%3Dauto%2Cheight%3Dauto%2Cquality%3D75%2Cformat%3Dwebp%2Fmedia%2Fcourse%2Fimage%2F4c70ad9b-9602-49af-bf00-83fa4bf47708-dc4566d15250.jpg&w=828&q=75"
                },
                {
                    title: "Machine Learning For Everybody",
                    platform: "Free code Camp",
                    url: "https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning?index=product&queryId=96afa040c9b12a64a0447da16249f5ab&position=1",
                    rating: "4.5",
                    enrolled: "N/A",
                    price: "Free",
                    image: "https://i.ytimg.com/vi/i_LwzRVP7bg/maxresdefault.jpg"
                  },
                  {
                    title: "Data Science & Machine Learning Program With Generative AI",
                    platform: "PW skills",
                    url: "https://lp.pwskills.com/Master-Generative-AI-Data-Science-Course-Version2?utm_source=google&utm_medium=cpc&utm_campaign=HR-Skills-Data-Science-India-Google-Lead-Search-CPL-Keyword-09-Sep-2024&utm_keyword=machine%20learning%20course&utm_adgroupid={adgroupname}&utm_matchtype=e&device=c&gad_source=1&gclid=CjwKCAiAiaC-BhBEEiwAjY99qOYKk9443IiVELnPhjVlTpkZzj6K8z8uSGcn79OdfAVc79wBAZRy2RoChOsQAvD_BwE",
                    rating: 4.9,
                    enrolled: "1987",
                    price: "₹20000",
                    image: "https://cdn.lugc.link/ab516113-a613-4083-8266-9f9ff69aea6a/-/crop/826x731/0,0/-/preview/351x351/-/format/auto/"
                  },
                  {
                    title: "Data Science: Machine Learning",
                    platform: "Hardvard",
                    url: "https://pll.harvard.edu/course/data-science-machine-learning",
                    rating: 4.9,
                    enrolled: "N/A",
                    price: "₹12000",
                    image: "https://pll.harvard.edu/sites/default/files/styles/16_9_large/public/course/building-1989816.jpg?itok=TBxeVqKN"
                  },
                  {
                    title: "Understanding Machine Learning",
                    platform: "Datacamp",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi86tRgjbJPMbPe9SYbvulGaCwXi4iLptGA&s",
                    rating: 4.6,
                    enrolled: "181",
                    price: "Free",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi86tRgjbJPMbPe9SYbvulGaCwXi4iLptGA&s"
                  }
            
    ],
    "web development": [
      {
        title: "The Complete Web Developer Course 2024",
        platform: "Udemy",
        url: "https://www.udemy.com/course/the-complete-web-developer-course-2/",
        rating: 4.8,
        enrolled: 50000,
        price: "₹599",
        image: "https://jaro-website.s3.ap-south-1.amazonaws.com/2024/07/full-stack-web-developer.png"
      },
      {
        title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
        platform: "Coursera",
        url: "https://www.coursera.org/specializations/web-design",
        rating: 4.8,
        enrolled: "335,609",
        price: "₹17000",
        image: "https://infidata.in/assets/img/courses/web-development-training-in-bangalore.jpg"
      },
      {
        title: "WEB DEVELOPMENT",
        platform: "Free code camp",
        url: "https://www.freecodecamp.org/news/how-to-build-a-social-learning-platform-using-nextjs-stream-and-supabase/",
        rating: 4.2,
        enrolled: "2342",
        price: "Free",
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1741009946459/dba65929-1b65-4278-9601-4d047042753a.png"
      },
      {
        title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
        platform: "Coursera",
        url: "https://pwskills.com/course/full-stack-web-development-course/",
        rating: 4.9,
        enrolled: "19,609",
        price: "₹15999",
        image: "https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/1d94e970-ebb5-4051-bc40-bf9625b08c8a.png"
      }
    ],
    "data science": [
      {
        title: "DATA SCIENCE",
        platform: "Free code Camp",
        url: "https://www.freecodecamp.org/news/tag/data-science/",
        rating: 4.7,
        enrolled: 2341,
        price: "Free",
        image: "https://media.assettype.com/analyticsinsight%2F2024-07%2Fafccd6ac-6bc3-4872-954a-82710c8b0ca3%2FTop_10_Best_and_Free_Data_Science_Certification_Courses_2019_2.png"
      },
      {
        title: "Data Science",
        platform: "PW Skills",
        url: "https://pwskills.com/blog/data-science/",
        rating: 4.7,
        enrolled: "N/A",
        price: "₹10000",
        image: "https://blog.pwskills.com/wp-content/uploads/2024/05/Data-Science-Courses-How-Do-I-Choose-A-Best-Data-Science-Course.jpg"
      },
      {
        title: "Data Science and Machine Learning Bootcamp",
        platform: "Udemy",
        url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
        rating: 4.8,
        enrolled: 35000,
        price: "₹799",
        image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df.jpg"
      },
      {
        title: "Data Science Professional Certificate",
        platform: "IBM - Coursera",
        url: "https://www.coursera.org/professional-certificates/ibm-data-science",
        rating: 4.7,
        enrolled: "N/A",
        price: "₹10000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KygQeEdGeaUHwH6uyWy3g3JthT9vYpyvyw&s"
      }
    ],
    "cyber security": [
      {
        title: "Cyber Security Fundamentals",
        platform: "Udemy",
        url: "https://www.udemy.com/course/cybersecurity-fundamentals/",
        rating: 4.2,
        enrolled: 25000,
        price: "₹599",
        image: "https://img-c.udemycdn.com/course/750x422/3654420_6ef3_8.jpg"
      },
      {
        title: "Cyber Security Expert",
        platform: "Simplilearn",
        url: "https://www.simplilearn.com/executive-certificate-program-in-cybersecurity?utm_source=google&utm_medium=cpc&utm_term=cyber%20security%20courses&utm_content=18600238990-157666970588-730244681514&utm_device=c&utm_campaign=Search-TechCluster-ECPCyber-PG-IITK-IN-Main-AllDevice-adgroup-CCyber-IITK-Cyber-Security-Kw&gad_source=1&gclid=Cj0KCQiAz6q-BhCfARIsAOezPxn7x0h9t08eesloerI3-Qb2s8ElMyxwNIY7qLGxOAw09uUEBqb6_E8aAkV9EALw_wcB",
        rating: 4.5,
        enrolled: 249000,
        price: "₹14299",
        image: "data:image/jpeg;base64,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"
      },
      {
        title: "Certified Ethical Hacker (CEH) Course",
        platform: "EC-Council",
        url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
        rating: 4.7,
        enrolled: "N/A",
        price: "₹15000",
        image: "data:image/jpeg;base64,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"
      }
    ]
  }
};

const StudyPlan = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const searchCourses = () => {
    if (!searchQuery.trim()) return;

    const lowerQuery = searchQuery.toLowerCase();
    const matchedCourses = sampleData.queries[lowerQuery] || [];

    setCourses(matchedCourses);
  };

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

      <h1 className="text-4xl font-bold text-center mb-6">📚 Find Courses Matching Your Interests! 🎯</h1>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex gap-4 mb-6">
        <input 
          type="text" 
          placeholder="Enter course topic..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          className="border p-3 rounded w-full bg-gray-700 text-white text-lg" 
        />
        <button 
          onClick={searchCourses} 
          className="flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition text-lg"
        >
          <Search /> Search
        </button>
      </div>

      {courses.length === 0 && searchQuery && (
        <p className="text-center text-lg text-gray-400">No courses found. Try a different keyword.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="p-6 shadow-lg bg-gray-800 text-white border rounded-lg">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold">{course.title}</h2>
            <p className="text-gray-400">Platform: {course.platform}</p>
            <p className="text-gray-300">Rating: ⭐{course.rating}</p>
            <p className="text-gray-200">Enrolled: {course.enrolled}</p>
            <p className="text-gray-200">Price: {course.price}</p>
            <a 
              href={course.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 inline-block px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition text-lg"
            >
              Enroll Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyPlan;
