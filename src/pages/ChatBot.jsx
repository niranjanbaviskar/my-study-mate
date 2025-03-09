import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Mic, MicOff } from "lucide-react";
import BubbleEffect from "./BubbleEffect";
import Groq from "groq-sdk";
import ResponseBox from "./ResponseBox";
import React from "react";

function StudentCareerBot() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const audioRef = useRef(null);
  const springRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");

  const get_completion = async (prompt) => {
    try {
      const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });
      const systemPrompt = `You are a helpful and knowledgeable AI mentor for students. Your goal is to provide career guidance, preparation strategies, and clarify doubts related to job roles, exams, and skills. You should:
- Give clear and practical advice for career paths.
- Provide useful resources, study plans, and preparation strategies.
- Avoid giving personal opinions but instead offer well-researched insights.
- Encourage students to explore diverse opportunities.
- Use an engaging and motivating tone.
- If a student is feeling overwhelmed, offer strategies for time management and stress reduction.`;

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        model: "llama3-70b-8192",
        temperature: 0.5,
      });

      const response = completion.choices[0].message.content;
      console.log(response);
      generateSpeech(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const student_chatbot = async (user_message, chat_history) => {
    const prompt = `
        Student Career Guidance:
        Provide structured and relevant advice to students based on their concerns.
        Give practical suggestions for exam preparation, internships, and job applications.
        Encourage skill development and provide guidance for selecting the right courses.
        Previous conversation context: ${chat_history}
        Student's query: ${user_message}
        
        Generate a concise and informative response (2-3 lines) with helpful insights.
    `;
    const bot_reply = await get_completion(prompt);
    setCurrentResponse(bot_reply);
    chat_history.push({ role: "assistant", content: bot_reply });
    return [bot_reply, chat_history];
  };

  const generateSpeech = async (input) => {
    setLoading(true);
    setError(null);

    const apiKey = "sk_c69e3534727a8f687048b8c1b420d883002cb714272c3396"; // Replace manually
    const voiceId = "LwYdKEzudGYdbAMZqkez";

    try {
      if (springRef.current?.startSpeaking) {
        springRef.current.startSpeaking();
      }

      const response = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        { text: input },
        {
          headers: {
            "Content-Type": "application/json",
            "xi-api-key": apiKey,
          },
          responseType: "blob",
        }
      );

      const audioUrl = URL.createObjectURL(response.data);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        if (springRef.current?.stopSpeaking) {
          springRef.current.stopSpeaking();
        }
        setLoading(false);
      };

      await audio.play().catch((err) => {
        console.error("Playback failed:", err);
        setError("Playback error. Click the button again.");
        setLoading(false);
      });
    } catch (error) {
      setError("");
      console.error("Error generating speech:", error);
      if (springRef.current?.stopSpeaking) {
        springRef.current.stopSpeaking();
      }
      setLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      setCurrentResponse("");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });

      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        await sendAudioToAPI(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      setError("Failed to access microphone. Please ensure you have granted permission.");
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    try {
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
        clearInterval(timerRef.current);
        setRecordingTime(0);
      }
    } catch (err) {
      console.error("Error stopping recording:", err);
    }
  };

  const sendAudioToAPI = async (audioBlob) => {
    setLoading(true);
    setError(null);

    try {
      const groq = new Groq({ apiKey: import.meta.env.VITE_GROQ_API_KEY, dangerouslyAllowBrowser: true });
      const transcription = await groq.audio.transcriptions.create({
        file: new File([audioBlob], "recording.webm", { type: "audio/webm" }),
        model: "whisper-large-v3-turbo",
        prompt: "Career Guidance", 
        response_format: "json",
        language: "en",
        temperature: 0.0,
      });

      console.log("Transcription:", transcription);
      const [bot_reply, chat_history] = await student_chatbot(transcription.text, chatHistory);
      console.log(bot_reply);
      setChatHistory(chat_history);
    } catch (err) {
      setError("Failed to upload audio. Please try again.");
      console.error("Error uploading audio:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isRecording]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      <BubbleEffect ref={springRef} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-4">CAREER MENTOR</h1>
        <p className="text-blue-200 max-w-md mx-auto">
          {loading ? "Processing audio transcription..." : "Click to record and get career guidance."}
        </p>

        {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

        <button
          className={`px-6 py-3 rounded-lg flex items-center gap-2 ${isRecording ? "bg-red-600" : "bg-green-600"} text-white`}
          onClick={isRecording ? stopRecording : startRecording}
          disabled={loading}
        >
          {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          {isRecording ? `Stop Recording (${formatTime(recordingTime)})` : "Start Recording"}
        </button>

        <ResponseBox response={currentResponse} />
      </div>
    </div>
  );
}

export default StudentCareerBot;
