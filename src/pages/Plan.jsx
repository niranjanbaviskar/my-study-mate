import React, { useState } from "react";
import { Plus, X, Trophy, Book, CalendarDays, CheckCircle, Home } from "lucide-react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const StudyPlan = () => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState("");
  const [studyHours, setStudyHours] = useState("");
  const [deadline, setDeadline] = useState("");
  const [topic, setTopic] = useState("");
  const [progress, setProgress] = useState({});
  const [coins, setCoins] = useState(0);
  const [quiz, setQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizReport, setQuizReport] = useState(null);
  const navigate = useNavigate(); 

  const addSubject = () => {
    if (newSubject && studyHours && deadline && topic) {
      setSubjects([...subjects, { name: newSubject, hours: studyHours, deadline, topic, completed: 0 }]);
      setNewSubject("");
      setStudyHours("");
      setDeadline("");
      setTopic("");
    }
  };


  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const completeStudySession = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].completed += 1;
    setSubjects(updatedSubjects);

    const totalHours = parseInt(updatedSubjects[index].hours);
    const completedHours = updatedSubjects[index].completed;
    setProgress((prev) => ({ ...prev, [index]: Math.min((completedHours / totalHours) * 100, 100) }));

    if (completedHours >= totalHours) {
      setShowQuiz(true);
      generateQuiz(updatedSubjects[index].topic);
    }
  };

  const generateQuiz = async (topic) => {
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=6&category=18&type=multiple`);
      const data = await response.json();
      setQuiz(data.results);
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer === quiz[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowQuiz(false);
      setCoins((prev) => prev + score * 5);

      const report = quiz.map((q, i) => ({
        question: q.question,
        correct: q.correct_answer,
        status: selectedAnswer === q.correct_answer ? "✅ Correct" : "❌ Incorrect",
      }));

      setQuizReport({ score, total: quiz.length, report });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Go to Dashboard Button */}
      {/* <button onClick={() => window.location.href = "/"} className="fixed top-6 left-6 bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
        <Home /> Go 
      </button> */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")} // <-- Now navigate is defined
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/20 
                  text-purple-600 dark:text-purple-300 font-medium hover:shadow-md transition-shadow"
      >
        <Home className="w-5 h-5" />
        <span>Go to Dashboard</span>
      </motion.button>

      <h1 className="text-4xl font-bold text-center mb-6">📚 Smart Study Dashboard – Track Progress, Take Quizzes, and Earn Rewards! 🎯</h1>
      <div className="text-right text-xl font-semibold">🏆 Coins: {coins}</div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex gap-4 mb-6">
        <Input type="text" placeholder="Subject" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
        <Input type="number" placeholder="Study Hours" value={studyHours} onChange={(e) => setStudyHours(e.target.value)} />
        <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <Input type="text" placeholder="Topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
        <Button onClick={addSubject}><Plus /> Add</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">{subject.name}</h2>
                <button onClick={() => removeSubject(index)} className="text-red-500 hover:text-red-700 transition">
                  <X />
                </button>
              </div>
              <p className="text-gray-400 flex items-center gap-2"><CalendarDays /> Deadline: {subject.deadline}</p>
              <p className="text-gray-300 flex items-center gap-2"><Book /> Topic: {subject.topic}</p>
              <p className="mt-2 text-gray-200">Total Hours: {subject.hours} hrs</p>
              <div className="mt-3">
                <p className="text-gray-300">Progress:</p>
                <Progress value={progress[index] || 0} />
                <p className="text-gray-400 mt-1">{progress[index] || 0}% Completed</p>
              </div>
              <Button className="mt-4" onClick={() => completeStudySession(index)}>
                <CheckCircle /> Mark 1 Hour as Done
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {showQuiz && quiz && (
  <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500">
    <h2 className="text-3xl font-bold text-blue-400">🧠 Quiz Time !</h2>
    <p className="text-gray-300 text-lg mt-2">Answer the following questions:</p>

    <div className="mt-6">
      <p className="text-xl font-semibold">{quiz[currentQuestion].question}</p>
      <div className="mt-3 space-y-2">
        {[...quiz[currentQuestion].incorrect_answers, quiz[currentQuestion].correct_answer]
          .sort(() => Math.random() - 0.5)
          .map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedAnswer(option)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-200"
              } hover:bg-blue-400 transition`}
            >
              {option}
            </button>
          ))}
      </div>
    </div>

    <button
      onClick={handleAnswerSubmit}
      className="mt-4 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition text-lg"
    >
      Submit Answer
    </button>
  </div>
)}


      {quizReport && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-green-500">
          <h2 className="text-3xl font-bold text-green-400">📜 Quiz Report</h2>
          <p className="text-gray-300 text-lg mt-2">Score: {quizReport.score} / {quizReport.total}</p>
          <p className="text-xl font-semibold mt-2 text-yellow-400">
            {quizReport.score / quizReport.total === 1
              ? "🌟 Excellent! You nailed it!"
              : quizReport.score / quizReport.total >= 0.7
              ? "✅ Good Job! Keep it up!"
              : quizReport.score / quizReport.total >= 0.5
              ? "⚡ Keep Practicing! You're improving!"
              : "❌ Don't worry! Try again and you'll get better!"}
          </p>
          <p className="text-green-400 text-lg mt-2">🎉 Coins Earned: {quizReport.score * 5} 🏆</p>
          <ul className="mt-4 space-y-3">
            {quizReport.report.map((item, idx) => (
              <li key={idx} className="bg-gray-700 p-3 rounded-lg">
                <p className="text-lg font-semibold">{item.question}</p>
                <p className="text-gray-400">Correct Answer: {item.correct}</p>
                <p>{item.status}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Card = ({ children }) => <div className="relative p-6 shadow-lg bg-gray-800 text-white border rounded-lg">{children}</div>;
const CardContent = ({ children }) => <div className="p-4">{children}</div>;
const Input = ({ type, placeholder, value, onChange }) => <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="border p-3 rounded w-full bg-gray-700 text-white text-lg" />;
const Button = ({ children, onClick }) => <button onClick={onClick} className="flex items-center gap-2 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition text-lg">{children}</button>;
const Progress = ({ value }) => <div className="w-full bg-gray-600 rounded h-5 mt-1"><div className="bg-green-400 h-5 rounded transition-all" style={{ width: `${value}%` }}></div></div>;

export default StudyPlan;
