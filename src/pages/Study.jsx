// import React, { useState } from "react";
// import { Home, Search } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const sampleData = {
    
//   query: "machine learning",
//   courses: [
//     {
//       title: "Machine Learning for Beginners",
//       platform: "Udemy",
//       url: "https://www.udemy.com/course/machine-learning/",
//       rating: 4.7,
//       enrolled: 12000,
//       price: "₹499",
//       image: "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg"
//     },
//     {
//         title: "Complete Data Science,Machine Learning,DL,NLP Bootcamp",
//         platform: "Udemy",
//         url: "https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/?couponCode=IND21PM",
//         rating: 4.6,
//         enrolled: 63000,
//         price: "₹499",
//         image: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=490"
//       },
//     {
//       title: "Machine Learning by Stanford",
//       platform: "Coursera",
//       url: "https://www.coursera.org/learn/machine-learning",
//       rating: 4.9,
//       enrolled: "N/A",
//       price: "₹5000",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWgZ0nKup4hOPH6hyP9-NqKK9Dy3r9E5M8w&s"
//     },
//     {
//       title: "Machine Learning with Python: from Linear Models to Deep Learning",
//       platform: "EdX",
//       url: "https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning?index=product&queryId=96afa040c9b12a64a0447da16249f5ab&position=1",
//       rating: "4.6",
//       enrolled: "400",
//       price: "₹20000",
//       image: "https://www.edx.org/_next/image?url=https%3A%2F%2Fprod-discovery.edx-cdn.org%2Fcdn-cgi%2Fimage%2Fwidth%3Dauto%2Cheight%3Dauto%2Cquality%3D75%2Cformat%3Dwebp%2Fmedia%2Fcourse%2Fimage%2F4c70ad9b-9602-49af-bf00-83fa4bf47708-dc4566d15250.jpg&w=828&q=75"
//     },
//     {
//         title: "Machine Learning For Everybody",
//         platform: "Free code Camp",
//         url: "https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning?index=product&queryId=96afa040c9b12a64a0447da16249f5ab&position=1",
//         rating: "4.5",
//         enrolled: "N/A",
//         price: "Free",
//         image: "https://i.ytimg.com/vi/i_LwzRVP7bg/maxresdefault.jpg"
//       },
//       {
//         title: "Data Science & Machine Learning Program With Generative AI",
//         platform: "PW skills",
//         url: "https://lp.pwskills.com/Master-Generative-AI-Data-Science-Course-Version2?utm_source=google&utm_medium=cpc&utm_campaign=HR-Skills-Data-Science-India-Google-Lead-Search-CPL-Keyword-09-Sep-2024&utm_keyword=machine%20learning%20course&utm_adgroupid={adgroupname}&utm_matchtype=e&device=c&gad_source=1&gclid=CjwKCAiAiaC-BhBEEiwAjY99qOYKk9443IiVELnPhjVlTpkZzj6K8z8uSGcn79OdfAVc79wBAZRy2RoChOsQAvD_BwE",
//         rating: 4.9,
//         enrolled: "1987",
//         price: "₹20000",
//         image: "https://cdn.lugc.link/ab516113-a613-4083-8266-9f9ff69aea6a/-/crop/826x731/0,0/-/preview/351x351/-/format/auto/"
//       },
//       {
//         title: "Data Science: Machine Learning",
//         platform: "Hardvard",
//         url: "https://pll.harvard.edu/course/data-science-machine-learning",
//         rating: 4.9,
//         enrolled: "N/A",
//         price: "₹12000",
//         image: "https://pll.harvard.edu/sites/default/files/styles/16_9_large/public/course/building-1989816.jpg?itok=TBxeVqKN"
//       },
//       {
//         title: "Understanding Machine Learning",
//         platform: "Datacamp",
//         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi86tRgjbJPMbPe9SYbvulGaCwXi4iLptGA&s",
//         rating: 4.6,
//         enrolled: "181",
//         price: "Free",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi86tRgjbJPMbPe9SYbvulGaCwXi4iLptGA&s"
//       }

//   ]
  
// };


// const StudyPlan = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [courses, setCourses] = useState([]);
//   const navigate = useNavigate();

//   const searchCourses = () => {
//     if (!searchQuery.trim()) return;

//     const filteredCourses = sampleData.courses.filter(course =>
//       course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       course.platform.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setCourses(filteredCourses);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => navigate("/")}
//         className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/20 
//                   text-purple-600 dark:text-purple-300 font-medium hover:shadow-md transition-shadow"
//       >
//         <Home className="w-5 h-5" />
//         <span>Go to Dashboard</span>
//       </motion.button>

//       <h1 className="text-4xl font-bold text-center mb-6">📚 Find Courses Matching Your Interests! 🎯</h1>

//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex gap-4 mb-6">
//         <input 
//           type="text" 
//           placeholder="Enter course topic..." 
//           value={searchQuery} 
//           onChange={(e) => setSearchQuery(e.target.value)} 
//           className="border p-3 rounded w-full bg-gray-700 text-white text-lg" 
//         />
//         <button 
//           onClick={searchCourses} 
//           className="flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition text-lg"
//         >
//           <Search /> Search
//         </button>
//       </div>

//       {courses.length === 0 && searchQuery && (
//         <p className="text-center text-lg text-gray-400">No courses found. Try a different keyword.</p>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {courses.map((course, index) => (
//           <div key={index} className="p-6 shadow-lg bg-gray-800 text-white border rounded-lg">
//             <img 
//               src={course.image} 
//               alt={course.title} 
//               className="w-full h-48 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-2xl font-semibold">{course.title}</h2>
//             <p className="text-gray-400">Platform: {course.platform}</p>
//             <p className="text-gray-300">Rating: ⭐{course.rating}</p>
//             <p className="text-gray-200">Enrolled: {course.enrolled}</p>
//             <p className="text-gray-200">Price: {course.price}</p>
//             <a 
//               href={course.url} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="mt-4 inline-block px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition text-lg"
//             >
//               Enroll Now
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudyPlan;
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
        title: "DATA SCIENC",
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
        rating: 4.5,
        enrolled: 25000,
        price: "₹599",
        image: "https://img-c.udemycdn.com/course/750x422/1515180_d4c1_3.jpg"
      },
      {
        title: "Certified Ethical Hacker (CEH) Course",
        platform: "EC-Council",
        url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
        rating: 4.7,
        enrolled: "N/A",
        price: "₹15000",
        image: "https://www.eccouncil.org/wp-content/uploads/2021/04/CEH-v11-Banner.jpg"
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
