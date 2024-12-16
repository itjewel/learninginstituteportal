'use client';

import { useState } from 'react';

type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const ExamPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState<boolean>(false);

  const questions: Question[] = [
    {
      question: 'What is the capital of Japan?',
      options: ['Tokyo', 'Osaka', 'Kyoto', 'Hokkaido'],
      correctAnswer: 'Tokyo',
    },
    {
      question: 'What is the official language of South Korea?',
      options: ['Korean', 'Japanese', 'Mandarin', 'English'],
      correctAnswer: 'Korean',
    },
    {
      question: 'Which language uses Hangul as its script?',
      options: ['Chinese', 'Korean', 'Japanese', 'Thai'],
      correctAnswer: 'Korean',
    },
  ];

  const handleAnswer = (selectedOption: string): void => {
    setAnswers({ ...answers, [currentQuestion]: selectedOption });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartExam = (): void => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateScore = (): number => {
    return Object.keys(answers).reduce((score, key) => {
      const questionIndex = parseInt(key, 10);
      if (answers[questionIndex] === questions[questionIndex].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Exam Page</h1>

        {!showResult ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="text-gray-700 mb-6">{questions[currentQuestion].question}</p>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">Exam Completed</h2>
            <p className="text-gray-700 mb-6">
              Your score: <span className="text-blue-600 font-bold">{calculateScore()}</span> out of{' '}
              {questions.length}
            </p>
            <button
              onClick={restartExam}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Retake Exam
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamPage;
