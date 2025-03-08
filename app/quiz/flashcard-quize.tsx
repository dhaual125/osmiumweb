"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Send, ArrowLeft, Check, X, Trophy } from "lucide-react"
import { useRouter } from 'next/navigation'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import router from "next/router"

const sampleFlashcards = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    correctAnswer: "Paris",
    explanation: "Paris is the capital and largest city of France, known for its iconic Eiffel Tower, art museums, and rich cultural heritage."
  },
  {
    id: 2,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: "Au",
    explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'. It's a precious metal known for its yellow color and resistance to corrosion."
  },
  {
    id: 3,
    question: "What planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    explanation: "Mars is called the Red Planet due to its reddish appearance, caused by iron oxide (rust) on its surface. It's the fourth planet from the Sun."
  },
  {
    id: 4,
    question: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    explanation: "The Blue Whale is the largest known animal to have ever existed on Earth, growing up to 100 feet long and weighing up to 200 tons."
  },
  {
    id: 5,
    question: "What is the main component of the Sun?",
    options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
    correctAnswer: "Hydrogen",
    explanation: "Hydrogen is the primary component of the Sun, making up about 74% of its mass. Through nuclear fusion, hydrogen atoms combine to form helium, releasing enormous amounts of energy."
  }
]

export default function GeneralKnowledgeQuiz() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [answeredCards, setAnsweredCards] = useState<Record<number, { isCorrect: boolean, userAnswer: string | null }>>({})
  const [score, setScore] = useState(0)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  const currentCard = sampleFlashcards[currentCardIndex]

  const goToNextCard = () => {
    if (currentCardIndex < sampleFlashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
    }
  }

  const goToPrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
    }
  }
  const router = useRouter();

  const handleAnswerSelect = (option: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentCardIndex]: option
    }))
  }

  const submitQuiz = () => {
    const newAnsweredCards: Record<number, { isCorrect: boolean, userAnswer: string | null }> = {}
    let newScore = 0

    sampleFlashcards.forEach((card, index) => {
      const userAnswer = selectedAnswers[index]
      const isCorrect = userAnswer === card.correctAnswer
      newAnsweredCards[card.id] = { 
        isCorrect, 
        userAnswer 
      }
      
      if (isCorrect) {
        newScore++
      }
    })

    setAnsweredCards(newAnsweredCards)
    setScore(newScore)
    setIsQuizCompleted(true)
  }

  const getResultMessage = () => {
    const percentage = (score / sampleFlashcards.length) * 100
    if (percentage === 100) return "Extraordinary Knowledge!"
    if (percentage >= 80) return "Impressive Performance!"
    if (percentage >= 60) return "Great Effort!"
    if (percentage >= 40) return "Good Start!"
    return "Keep Learning!"
  }

  if (isQuizCompleted) {
    return (
      <div className="min-h-screen bg-[#09090B] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white">
              {getResultMessage()}
            </h2>
            <p className="text-xl mb-8 text-neutral-400">
              Score: {score} / {sampleFlashcards.length}
            </p>
          </div>

          <div className="space-y-4">
            {sampleFlashcards.map((card) => {
              const result = answeredCards[card.id]
              return (
                <div 
                  key={card.id} 
                  className={`
                    p-5 rounded-lg border transition-all duration-300
                    ${result.userAnswer 
                      ? (result.isCorrect 
                        ? 'border-green-800/30' 
                        : 'border-red-800/30')
                      : 'border-neutral-800/30'}
                  `}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold flex items-center gap-3">
                      {result.userAnswer && (result.isCorrect ? (
                        <Check className="text-green-500 w-6 h-6" />
                      ) : (
                        <X className="text-red-500 w-6 h-6" />
                      ))}
                      {card.question}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <p className={`font-medium ${result.userAnswer 
                      ? (result.isCorrect 
                        ? 'text-green-400' 
                        : 'text-red-400')
                      : 'text-neutral-400'}`}>
                      Your Answer: {result.userAnswer || 'No answer'}
                    </p>
                    <p className="text-neutral-300 italic">
                      {card.explanation}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-start">
         

<Button 
  variant="outline" 
  onClick={() => router.push('/video')} // Correct way to navigate
  className="mt-4 border-neutral-700 text-white hover:bg-neutral-900 flex items-center justify-center gap-2 px-8 py-3"
>
  <ArrowLeft className="h-5 w-5 mr-2" /> Back to Courses
</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[09090B] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold text-white">General Knowledge</h1>
          <p className="mt-2 text-lg text-neutral-400">Challenge Your Mind</p>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <div className="text-sm font-medium text-neutral-500">
            Question {currentCardIndex + 1} of {sampleFlashcards.length}
          </div>
        </div>
        
        <div className="space-y-8 mt-6">
          <div>
            <p className="text-2xl font-bold">{currentCard.question}</p>
          </div>

          <div className="space-y-2">
            {currentCard.options.map((option) => (
              <label
                key={option} 
                className={`
                  block p-4 rounded-lg cursor-pointer transition-all duration-300
                  ${selectedAnswers[currentCardIndex] === option 
                    ? 'bg-neutral-800 ring-2 ring-neutral-600' 
                    : 'hover:bg-neutral-900'}
                `}
                onClick={() => handleAnswerSelect(option)}
              >
                <div className="flex items-center gap-4">
                  <div 
                    className={`
                      w-5 h-5 border-2 flex items-center rounded-sm justify-center
                      ${selectedAnswers[currentCardIndex] === option 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-neutral-600'}
                    `}
                  >
                    {selectedAnswers[currentCardIndex] === option && (
                      <div className="w-3 h-3 rounded-xs bg-white"></div>
                    )}
                  </div>
                  <span className="text-lg">{option}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="flex justify-between sm:justify-start flex-1 gap-2">
            <Button
              variant="outline"
              onClick={goToPrevCard}
              disabled={currentCardIndex === 0}
              className="flex-1 sm:flex-none bg-neutral-800 text-white hover:bg-neutral-700"
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            <Button
              variant="outline"
              onClick={goToNextCard}
              disabled={currentCardIndex === sampleFlashcards.length - 1}
              className="flex-1 sm:flex-none bg-neutral-800 text-white hover:bg-neutral-700"
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {currentCardIndex === sampleFlashcards.length - 1 && selectedAnswers[currentCardIndex] && (
            <div className="flex gap-2 flex-1 justify-end">
              <Button 
                onClick={submitQuiz} 
                className="flex-1 sm:flex-none bg-[#262626] text-white hover:bg-blue-700"
              >
                <Send className="mr-2 h-4 w-4" /> Submit
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}