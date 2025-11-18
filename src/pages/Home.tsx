import { Link } from 'react-router-dom'
import { modules } from '@/data/modules'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useStore } from '@/store/useStore'
import {
  Calendar,
  Activity,
  Timer,
  Heart,
  AlertCircle,
  Zap,
  Shield,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap: Record<string, any> = {
  Calendar,
  Activity,
  Timer,
  Heart,
  AlertCircle,
  Zap,
  Shield,
}

export default function Home() {
  const userProgress = useStore((state) => state.userProgress)

  const getModuleProgress = (moduleId: string) => {
    return userProgress.completedModules.includes(moduleId) ? 100 : 0
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          OB/GYN Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive, evidence-based learning platform for obstetrics and gynecology.
          From prenatal care to emergency management.
        </p>
      </div>

      {/* Progress Overview */}
      {userProgress.completedModules.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Your Progress</CardTitle>
            <CardDescription>
              {userProgress.completedModules.length} of {modules.length} modules completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress
              value={(userProgress.completedModules.length / modules.length) * 100}
            />
          </CardContent>
        </Card>
      )}

      {/* Modules Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = iconMap[module.icon]
            const progress = getModuleProgress(module.id)

            return (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={cn('p-2 rounded-lg', module.color)}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {progress > 0 && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Completed
                      </span>
                    )}
                  </div>
                  <CardTitle className="mt-4">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    {module.sections.length} sections
                  </div>
                  {progress > 0 && <Progress value={progress} />}
                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link to={`/module/${module.id}`}>
                        Learn
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to={`/assessment/${module.id}`}>Quiz</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Clinical Cases</CardTitle>
            <CardDescription>
              Practice with synthetic cases covering common OB/GYN scenarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/cases">Browse Cases</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Glossary</CardTitle>
            <CardDescription>
              Quick reference for terms, abbreviations, and guidelines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/glossary">View Glossary</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
