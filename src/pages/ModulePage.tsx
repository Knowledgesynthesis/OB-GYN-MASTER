import { useParams, Link } from 'react-router-dom'
import { modules } from '@/data/modules'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useStore } from '@/store/useStore'
import { CheckCircle2, AlertTriangle, BookOpen, ArrowLeft, ClipboardCheck } from 'lucide-react'
import { useEffect } from 'react'

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const updateProgress = useStore((state) => state.updateProgress)
  const userProgress = useStore((state) => state.userProgress)

  const module = modules.find((m) => m.id === moduleId)

  useEffect(() => {
    if (moduleId) {
      updateProgress(moduleId)
    }
  }, [moduleId, updateProgress])

  if (!module) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Module not found</h1>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    )
  }

  const isCompleted = userProgress.completedModules.includes(module.id)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Modules
          </Link>
        </Button>
        {isCompleted && (
          <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Completed
          </div>
        )}
      </div>

      {/* Module Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{module.title}</h1>
        <p className="text-lg text-muted-foreground">{module.description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button asChild>
          <Link to={`/assessment/${module.id}`}>
            <ClipboardCheck className="mr-2 h-4 w-4" />
            Take Assessment
          </Link>
        </Button>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {module.sections.map((section, index) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{index + 1}.</span>
                    <span>{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    {/* Content */}
                    <p className="text-muted-foreground">{section.content}</p>

                    {/* Key Points */}
                    {section.keyPoints && section.keyPoints.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Key Points
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {section.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {/* Red Flags */}
                    {section.redFlags && section.redFlags.length > 0 && (
                      <Card className="border-destructive">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center gap-2 text-destructive">
                            <AlertTriangle className="h-4 w-4" />
                            Red Flags
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {section.redFlags.map((flag, idx) => (
                              <li key={idx} className="flex gap-2">
                                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                                <span className="text-sm">{flag}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {/* Guidelines */}
                    {section.guidelines && section.guidelines.length > 0 && (
                      <Card className="bg-muted">
                        <CardHeader>
                          <CardTitle className="text-base">Guidelines</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {section.guidelines.map((guideline, idx) => (
                              <li key={idx} className="text-sm">
                                <span className="font-semibold">{guideline.organization}:</span>{' '}
                                {guideline.recommendation}
                                {guideline.year && ` (${guideline.year})`}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Module Overview</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Sections Covered</h3>
                <ul className="space-y-1">
                  {module.sections.map((section, idx) => (
                    <li key={section.id} className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">{idx + 1}.</span>
                      <span>{section.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Learning Objectives</h3>
                <p className="text-sm text-muted-foreground">
                  After completing this module, you will be able to:
                </p>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm">• Understand key concepts in {module.title.toLowerCase()}</li>
                  <li className="text-sm">• Apply guideline-based management principles</li>
                  <li className="text-sm">• Recognize red flags and emergency situations</li>
                  <li className="text-sm">• Make evidence-based clinical decisions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
