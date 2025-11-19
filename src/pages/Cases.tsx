import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

export default function Cases() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Clinical Cases</h1>
        <p className="text-muted-foreground">
          Practice with synthetic clinical scenarios covering common OB/GYN presentations
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            <CardTitle>Interactive Case Studies</CardTitle>
          </div>
          <CardDescription>
            Coming soon: Interactive clinical cases with decision points and feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This feature will include:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary">•</span>
              <span>Step-by-step case presentations with branching scenarios</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary">•</span>
              <span>Realistic patient presentations based on module content</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary">•</span>
              <span>Immediate feedback on clinical decision-making</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary">•</span>
              <span>Learning points and guideline references</span>
            </li>
            <li className="flex items-start gap-2 text-sm">
              <span className="text-primary">•</span>
              <span>Cases covering prenatal, intrapartum, postpartum, and gynecologic scenarios</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Case Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Prenatal Complications</li>
              <li>• Labor Management</li>
              <li>• Fetal Monitoring Scenarios</li>
              <li>• Postpartum Emergencies</li>
              <li>• Gynecologic Emergencies</li>
              <li>• Infection Management</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Learning Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Difficulty levels (MS3, Resident, Attending)</li>
              <li>• Time-based challenges</li>
              <li>• Evidence-based rationales</li>
              <li>• Performance tracking</li>
              <li>• Bookmarking and review</li>
              <li>• Offline access</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
