import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { modules } from '@/data/modules'
import { assessments } from '@/data/assessments'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useStore } from '@/store/useStore'
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Assessment() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const updateProgress = useStore((state) => state.updateProgress)

  const module = modules.find((m) => m.id === moduleId)
  const assessment = assessments.find((a) => a.moduleId === moduleId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number[]>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    // Reset state when module changes
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }, [moduleId])

  if (!module || !assessment) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Assessment not found</h1>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    )
  }

  const currentQuestion = assessment.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === assessment.questions.length - 1
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== undefined

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return

    const question = assessment.questions[currentQuestionIndex]
    if (question.type === 'multi-select') {
      const current = selectedAnswers[currentQuestionIndex] || []
      const updated = current.includes(answerIndex)
        ? current.filter((i) => i !== answerIndex)
        : [...current, answerIndex]
      setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: updated })
    } else {
      setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: [answerIndex] })
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      calculateScore()
      setShowResults(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    assessment.questions.forEach((question, index) => {
      const userAnswer = selectedAnswers[index] || []
      const correctAnswer = question.correctAnswers

      // Check if arrays are equal
      if (
        userAnswer.length === correctAnswer.length &&
        userAnswer.every((a) => correctAnswer.includes(a))
      ) {
        correct++
      }
    })
    const percentage = Math.round((correct / assessment.questions.length) * 100)
    setScore(percentage)

    if (moduleId) {
      updateProgress(moduleId, percentage)
    }
  }

  const isCorrectAnswer = (questionIndex: number) => {
    const question = assessment.questions[questionIndex]
    const userAnswer = selectedAnswers[questionIndex] || []
    const correctAnswer = question.correctAnswers
    return (
      userAnswer.length === correctAnswer.length &&
      userAnswer.every((a) => correctAnswer.includes(a))
    )
  }

  if (showResults) {
    const correctCount = Object.keys(selectedAnswers).filter((key) =>
      isCorrectAnswer(parseInt(key))
    ).length

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Button asChild variant="ghost">
          <Link to={`/module/${moduleId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Module
          </Link>
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Assessment Complete!</CardTitle>
            <CardDescription>Here are your results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold">{score}%</div>
              <p className="text-muted-foreground">
                {correctCount} out of {assessment.questions.length} correct
              </p>
              <Progress value={score} className="h-3" />
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Review Your Answers</h3>
              {assessment.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index] || []
                const isCorrect = isCorrectAnswer(index)

                return (
                  <Card key={question.id} className={cn(
                    isCorrect ? 'border-green-500' : 'border-red-500'
                  )}>
                    <CardHeader>
                      <div className="flex items-start gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <CardTitle className="text-base">
                            Question {index + 1}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {question.question}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold mb-2">Your Answer:</p>
                        <ul className="space-y-1">
                          {userAnswer.map((idx) => (
                            <li key={idx} className="text-sm">
                              • {question.options[idx]}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {!isCorrect && (
                        <div>
                          <p className="text-sm font-semibold mb-2 text-green-600 dark:text-green-400">
                            Correct Answer:
                          </p>
                          <ul className="space-y-1">
                            {question.correctAnswers.map((idx) => (
                              <li key={idx} className="text-sm">
                                • {question.options[idx]}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="bg-muted p-4 rounded-md">
                        <p className="text-sm font-semibold mb-1">Rationale:</p>
                        <p className="text-sm">{question.rationale}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="flex gap-2 justify-center">
              <Button onClick={() => {
                setCurrentQuestionIndex(0)
                setSelectedAnswers({})
                setShowResults(false)
                setScore(0)
              }}>
                Retake Assessment
              </Button>
              <Button asChild variant="outline">
                <Link to={`/module/${moduleId}`}>Return to Module</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link to={`/module/${moduleId}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Module
          </Link>
        </Button>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {assessment.questions.length}
        </span>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">{assessment.title}</h1>
        <Progress
          value={((currentQuestionIndex + 1) / assessment.questions.length) * 100}
          className="h-2"
        />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
            <span className={cn(
              'text-xs px-2 py-1 rounded',
              currentQuestion.difficulty === 'easy' && 'bg-green-500/20 text-green-600 dark:text-green-400',
              currentQuestion.difficulty === 'medium' && 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
              currentQuestion.difficulty === 'hard' && 'bg-red-500/20 text-red-600 dark:text-red-400'
            )}>
              {currentQuestion.difficulty}
            </span>
          </div>
          <CardDescription className="text-base mt-4">
            {currentQuestion.question}
          </CardDescription>
          {currentQuestion.type === 'multi-select' && (
            <p className="text-xs text-muted-foreground mt-2">
              Select all that apply
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex]?.includes(index)
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={cn(
                    'w-full p-4 text-left rounded-lg border-2 transition-all',
                    'hover:border-primary hover:bg-accent',
                    isSelected
                      ? 'border-primary bg-primary/10'
                      : 'border-border'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
                      isSelected ? 'border-primary bg-primary' : 'border-muted-foreground'
                    )}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!hasAnswered}
            >
              {isLastQuestion ? 'Finish' : 'Next'}
              {!isLastQuestion && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
