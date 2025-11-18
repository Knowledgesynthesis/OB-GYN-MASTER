import { useStore } from '@/store/useStore'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Trash2, Download, Info } from 'lucide-react'

export default function Settings() {
  const { darkMode, toggleDarkMode, userProgress } = useStore()

  const handleClearProgress = () => {
    if (
      confirm(
        'Are you sure you want to clear all progress? This action cannot be undone.'
      )
    ) {
      // Clear local storage
      localStorage.removeItem('obgyn-master-storage')
      // Reload page to reset state
      window.location.reload()
    }
  }

  const handleExportProgress = () => {
    const data = JSON.stringify(userProgress, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `obgyn-master-progress-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your preferences and application data
        </p>
      </div>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel of the app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="font-medium">Dark Mode</div>
              <div className="text-sm text-muted-foreground">
                Toggle between light and dark themes
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>View and manage your learning progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Modules completed:</span>
              <span className="font-medium">
                {userProgress.completedModules.length}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Assessments taken:</span>
              <span className="font-medium">
                {Object.keys(userProgress.assessmentScores).length}
              </span>
            </div>
            {Object.keys(userProgress.assessmentScores).length > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Average score:</span>
                <span className="font-medium">
                  {Math.round(
                    Object.values(userProgress.assessmentScores).reduce(
                      (a, b) => a + b,
                      0
                    ) / Object.values(userProgress.assessmentScores).length
                  )}
                  %
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={handleExportProgress}>
              <Download className="mr-2 h-4 w-4" />
              Export Progress
            </Button>
            <Button variant="destructive" onClick={handleClearProgress}>
              <Trash2 className="mr-2 h-4 w-4" />
              Clear All Progress
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Storage */}
      <Card>
        <CardHeader>
          <CardTitle>Offline Storage</CardTitle>
          <CardDescription>App data and offline capabilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 text-sm">
            <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div className="space-y-2 text-muted-foreground">
              <p>
                This app uses local storage and IndexedDB to store your progress and
                enable offline functionality.
              </p>
              <p>
                All module content and assessments are available offline once loaded.
                Your progress is automatically saved to your device.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription>Information about OB/GYN Master</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">OB/GYN Master</strong> is an
              interactive, evidence-based learning platform for obstetrics and
              gynecology.
            </p>
            <p>
              The content is designed for medical students, residents, and early
              attendings, following ACOG, SMFM, and other evidence-based guidelines.
            </p>
            <p className="text-xs italic mt-4">
              Disclaimer: This application is for educational purposes only and is not
              a substitute for professional medical advice, diagnosis, or treatment.
              Always seek the advice of qualified health providers with questions
              regarding medical conditions.
            </p>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Version 0.0.1 • Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
