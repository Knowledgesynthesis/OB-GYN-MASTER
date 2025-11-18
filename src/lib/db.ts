import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface OBGYNMasterDB extends DBSchema {
  modules: {
    key: string
    value: {
      id: string
      title: string
      description: string
      content: any
      lastUpdated: number
    }
  }
  cases: {
    key: string
    value: {
      id: string
      moduleId: string
      title: string
      content: any
      lastUpdated: number
    }
  }
  assessments: {
    key: string
    value: {
      id: string
      moduleId: string
      questions: any[]
      lastUpdated: number
    }
  }
  userAnswers: {
    key: string
    value: {
      id: string
      assessmentId: string
      answers: Record<string, any>
      score: number
      timestamp: number
    }
  }
}

let dbInstance: IDBPDatabase<OBGYNMasterDB> | null = null

export async function getDB() {
  if (dbInstance) return dbInstance

  dbInstance = await openDB<OBGYNMasterDB>('obgyn-master-db', 1, {
    upgrade(db) {
      // Create object stores
      if (!db.objectStoreNames.contains('modules')) {
        db.createObjectStore('modules', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('cases')) {
        db.createObjectStore('cases', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('assessments')) {
        db.createObjectStore('assessments', { keyPath: 'id' })
      }
      if (!db.objectStoreNames.contains('userAnswers')) {
        db.createObjectStore('userAnswers', { keyPath: 'id' })
      }
    },
  })

  return dbInstance
}

// Module operations
export async function saveModule(module: any) {
  const db = await getDB()
  await db.put('modules', {
    ...module,
    lastUpdated: Date.now(),
  })
}

export async function getModule(id: string) {
  const db = await getDB()
  return await db.get('modules', id)
}

export async function getAllModules() {
  const db = await getDB()
  return await db.getAll('modules')
}

// Case operations
export async function saveCase(caseData: any) {
  const db = await getDB()
  await db.put('cases', {
    ...caseData,
    lastUpdated: Date.now(),
  })
}

export async function getCasesByModule(moduleId: string) {
  const db = await getDB()
  const allCases = await db.getAll('cases')
  return allCases.filter((c) => c.moduleId === moduleId)
}

// Assessment operations
export async function saveAssessment(assessment: any) {
  const db = await getDB()
  await db.put('assessments', {
    ...assessment,
    lastUpdated: Date.now(),
  })
}

export async function getAssessmentByModule(moduleId: string) {
  const db = await getDB()
  const allAssessments = await db.getAll('assessments')
  return allAssessments.find((a) => a.moduleId === moduleId)
}

// User answer operations
export async function saveUserAnswer(answer: any) {
  const db = await getDB()
  await db.put('userAnswers', {
    ...answer,
    timestamp: Date.now(),
  })
}

export async function getUserAnswers(assessmentId: string) {
  const db = await getDB()
  const allAnswers = await db.getAll('userAnswers')
  return allAnswers.filter((a) => a.assessmentId === assessmentId)
}
