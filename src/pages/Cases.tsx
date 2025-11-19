import { Link } from 'react-router-dom'
import { cases } from '@/data/cases'
import { modules } from '@/data/modules'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function Cases() {
  // Group cases by module
  const casesByModule = modules.map(module => ({
    module,
    cases: cases.filter(c => c.moduleId === module.id)
  })).filter(group => group.cases.length > 0)

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Clinical Cases</h1>
        <p className="text-muted-foreground">
          Practice with interactive clinical scenarios based on real OB/GYN presentations
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Cases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{cases.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Modules Covered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{casesByModule.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {cases.reduce((sum, c) => sum + c.questions.length, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="all">All</TabsTrigger>
          {modules.slice(0, 7).map(module => (
            <TabsTrigger key={module.id} value={module.id} className="text-xs">
              {module.title.split(' ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="space-y-6 mt-6">
          {casesByModule.map(({ module, cases: moduleCases }) => (
            <div key={module.id}>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${module.color}`} />
                {module.title}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {moduleCases.map(clinicalCase => (
                  <Card key={clinicalCase.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg">{clinicalCase.title}</CardTitle>
                          <CardDescription className="mt-2 line-clamp-2">
                            {clinicalCase.scenario}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{clinicalCase.questions.length} questions</span>
                        <span>•</span>
                        <span>{clinicalCase.learningPoints.length} learning points</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link to={`/case/${clinicalCase.id}`}>
                          Start Case
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {modules.map(module => (
          <TabsContent key={module.id} value={module.id} className="space-y-4 mt-6">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full ${module.color}`} />
                  {module.title}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              {cases
                .filter(c => c.moduleId === module.id)
                .map(clinicalCase => (
                  <Card key={clinicalCase.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{clinicalCase.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {clinicalCase.scenario}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{clinicalCase.questions.length} questions</span>
                        <span>•</span>
                        <span>{clinicalCase.learningPoints.length} learning points</span>
                      </div>
                      <Button asChild className="w-full">
                        <Link to={`/case/${clinicalCase.id}`}>
                          Start Case
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Info Card */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            How Clinical Cases Work
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-2">
            <p>
              <strong>Interactive Learning:</strong> Each case presents a realistic clinical scenario
              with decision points that test your clinical reasoning.
            </p>
            <p>
              <strong>Immediate Feedback:</strong> After selecting your answer, see detailed rationales
              explaining why each option is correct or incorrect.
            </p>
            <p>
              <strong>Evidence-Based:</strong> All cases are based on current ACOG, SMFM, and CDC
              guidelines with references provided.
            </p>
            <p>
              <strong>Learning Points:</strong> Complete each case to unlock key takeaways that reinforce
              essential concepts.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
