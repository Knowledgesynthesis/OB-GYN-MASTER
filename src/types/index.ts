// Core data models for OB/GYN Master

export interface Module {
  id: string
  title: string
  description: string
  icon: string
  color: string
  sections: Section[]
}

export interface Section {
  id: string
  title: string
  content: string
  keyPoints?: string[]
  redFlags?: string[]
  guidelines?: Guideline[]
}

export interface Guideline {
  organization: string
  recommendation: string
  year?: string
}

export interface Case {
  id: string
  moduleId: string
  title: string
  scenario: string
  questions: CaseQuestion[]
  learningPoints: string[]
}

export interface CaseQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  rationale: string
  references?: string[]
}

export interface Assessment {
  id: string
  moduleId: string
  title: string
  questions: AssessmentQuestion[]
}

export interface AssessmentQuestion {
  id: string
  type: 'mcq' | 'multi-select' | 'true-false' | 'drag-drop'
  question: string
  options: string[]
  correctAnswers: number[]
  rationale: string
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
}

export interface UserAnswer {
  questionId: string
  selectedAnswers: number[]
  isCorrect: boolean
  timeSpent: number
}

export interface Condition {
  id: string
  name: string
  diagnosticCriteria: string[]
  management: string[]
  labs: string[]
  fetal?: string[]
  pitfalls: string[]
}

// Fetal monitoring types
export interface FHRTracing {
  id: string
  baseline: number
  variability: 'absent' | 'minimal' | 'moderate' | 'marked'
  accelerations: boolean
  decelerations: {
    type: 'early' | 'late' | 'variable' | 'prolonged' | 'none'
    severity?: 'mild' | 'moderate' | 'severe'
  }
  category: 'I' | 'II' | 'III'
  management: string[]
}

// Prenatal timeline types
export interface PrenatalVisit {
  week: number
  gestationalAge: string
  tasks: string[]
  labs?: string[]
  imaging?: string[]
  counseling?: string[]
  highRiskOnly?: boolean
}

// Labor progression types
export interface LaborData {
  time: number
  dilation: number
  effacement: number
  station: number
  contractionFrequency: number
}

export interface LaborStage {
  stage: '1-latent' | '1-active' | '2' | '3'
  description: string
  normalDuration: string
  managementPoints: string[]
}
