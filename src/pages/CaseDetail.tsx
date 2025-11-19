import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { cases } from '@/data/cases'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, CheckCircle2, XCircle, BookOpen, Lightbulb } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CaseDetail() {
  const { caseId } = useParams<{ caseId: string }>()
  const clinicalCase = cases.find((c) => c.id === caseId)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({})
  const [showFeedback, setShowFeedback] = useState<Record<number, boolean>>({})
  const [caseCompleted, setCaseCompleted] = useState(false)

  if (!clinicalCase) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Case not found</h1>
        <Button asChild>
          <Link to="/cases">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Link>
        </Button>
      </div>
    )
  }

  const currentQuestion = clinicalCase.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === clinicalCase.questions.length - 1
  const hasAnswered = selectedAnswers[currentQuestionIndex] !== undefined
  const isCorrect = selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
  const showCurrentFeedback = showFeedback[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex: number) => {
    if (showCurrentFeedback) return // Don't allow changing answer after seeing feedback
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answerIndex })
  }

  const handleCheckAnswer = () => {
    setShowFeedback({ ...showFeedback, [currentQuestionIndex]: true })
  }

  const handleNext = () => {
    if (isLastQuestion) {
      setCaseCompleted(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const correctCount = Object.keys(selectedAnswers).filter(
    (key) => selectedAnswers[parseInt(key)] === clinicalCase.questions[parseInt(key)].correctAnswer
  ).length

  const progressPercent = ((currentQuestionIndex + 1) / clinicalCase.questions.length) * 100

  if (caseCompleted) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Button asChild variant="ghost">
          <Link to="/cases">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Link>
        </Button>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Case Complete!</CardTitle>
            <CardDescription>Review your performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className="text-6xl font-bold">
                {Math.round((correctCount / clinicalCase.questions.length) * 100)}%
              </div>
              <p className="text-muted-foreground">
                {correctCount} out of {clinicalCase.questions.length} correct
              </p>
              <Progress
                value={(correctCount / clinicalCase.questions.length) * 100}
                className="h-3"
              />
            </div>

            {/* Learning Points */}
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Key Learning Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {clinicalCase.learningPoints.map((point, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-2 justify-center">
              <Button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setSelectedAnswers({})
                  setShowFeedback({})
                  setCaseCompleted(false)
                }}
              >
                Restart Case
              </Button>
              <Button asChild variant="outline">
                <Link to="/cases">Browse More Cases</Link>
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
          <Link to="/cases">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cases
          </Link>
        </Button>
        <span className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {clinicalCase.questions.length}
        </span>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">{clinicalCase.title}</h1>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Case Scenario */}
      {currentQuestionIndex === 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Clinical Scenario
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{clinicalCase.scenario}</p>
          </CardContent>
        </Card>
      )}

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
          <CardDescription className="text-base mt-4">
            {currentQuestion.question}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index
              const isCorrectAnswer = index === currentQuestion.correctAnswer
              const showStatus = showCurrentFeedback

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showCurrentFeedback}
                  className={cn(
                    'w-full p-4 text-left rounded-lg border-2 transition-all',
                    'hover:border-primary hover:bg-accent',
                    isSelected && !showStatus && 'border-primary bg-primary/10',
                    showStatus && isCorrectAnswer && 'border-green-500 bg-green-500/10',
                    showStatus && isSelected && !isCorrectAnswer && 'border-red-500 bg-red-500/10',
                    !isSelected && !showStatus && 'border-border',
                    showCurrentFeedback && 'cursor-not-allowed'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-2 flex-1">
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
                          isSelected && !showStatus && 'border-primary bg-primary',
                          showStatus && isCorrectAnswer && 'border-green-500 bg-green-500',
                          showStatus && isSelected && !isCorrectAnswer && 'border-red-500 bg-red-500',
                          !isSelected && !showStatus && 'border-muted-foreground'
                        )}
                      >
                        {showStatus && isCorrectAnswer && (
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        )}
                        {showStatus && isSelected && !isCorrectAnswer && (
                          <XCircle className="h-4 w-4 text-white" />
                        )}
                        {!showStatus && isSelected && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-sm flex-1">{option}</span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {showCurrentFeedback && (
            <Card
              className={cn(
                'border-2',
                isCorrect ? 'border-green-500 bg-green-500/5' : 'border-red-500 bg-red-500/5'
              )}
            >
              <CardHeader>
                <CardTitle
                  className={cn(
                    'text-base flex items-center gap-2',
                    isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  )}
                >
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Correct!
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5" />
                      Incorrect
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-1">Rationale:</p>
                  <p className="text-sm">{currentQuestion.rationale}</p>
                </div>
                {currentQuestion.references && currentQuestion.references.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-1">References:</p>
                    <ul className="text-sm space-y-1">
                      {currentQuestion.references.map((ref, idx) => (
                        <li key={idx}>• {ref}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            <div className="flex gap-2">
              {!showCurrentFeedback && hasAnswered && (
                <Button onClick={handleCheckAnswer}>Check Answer</Button>
              )}
              {showCurrentFeedback && (
                <Button onClick={handleNext}>
                  {isLastQuestion ? 'Finish Case' : 'Next Question'}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
