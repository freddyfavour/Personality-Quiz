import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { questions, keywords, elements } from "./constants/data";
import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import Question from "./components/Question";
import fetchArtwork from "./fetchArtwork";
import { UserProvider } from "./components/UserContext";
import Results from "./components/Results";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function handleUserFormSubmit(name) {
    setUserName(name);
  }

  function determineElement(answers) {
    const counts = {};
    answers.forEach(function (answer) {
      const element = elements[answer];
      counts[element] = (counts[element] || 0) + 1;
    });
    return Object.keys(counts).reduce(function (a, b) {
      return counts[a] > counts[b] ? a : b;
    });
  }

  useEffect(
    function () {
      if (currentQuestionIndex === questions.length) {
        const selectedElement = determineElement(answers);
        setElement(selectedElement);
        setLoading(true);
        fetchArtwork(keywords[selectedElement])
          .then(data => {
            setArtwork(data);
            setLoading(false);
          });
      }
    },
    [currentQuestionIndex]
  );

  return (
    <UserProvider value={{ name: userName, setName: setUserName }}>
      <div className="bg-slate-300 font-serif flex flex-col items-center justify-center min-h-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<UserForm onSubmit={handleUserFormSubmit} />}
          />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
              ) : (
                <Results element={element} artwork={artwork} loading={loading} />
              )
            }
          />
        </Routes>
      </div>
    </UserProvider>
  );
}
