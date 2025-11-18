import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserProgress {
  completedModules: string[]
  assessmentScores: Record<string, number>
  currentModule: string | null
}

interface AppState {
  darkMode: boolean
  toggleDarkMode: () => void
  userProgress: UserProgress
  updateProgress: (moduleId: string, score?: number) => void
  isOffline: boolean
  setOfflineStatus: (status: boolean) => void
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      darkMode: true, // Default to dark mode
      toggleDarkMode: () =>
        set((state) => {
          const newDarkMode = !state.darkMode
          // Update DOM class
          if (newDarkMode) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          return { darkMode: newDarkMode }
        }),
      userProgress: {
        completedModules: [],
        assessmentScores: {},
        currentModule: null,
      },
      updateProgress: (moduleId: string, score?: number) =>
        set((state) => {
          const updatedProgress = { ...state.userProgress }
          if (!updatedProgress.completedModules.includes(moduleId)) {
            updatedProgress.completedModules.push(moduleId)
          }
          if (score !== undefined) {
            updatedProgress.assessmentScores[moduleId] = score
          }
          updatedProgress.currentModule = moduleId
          return { userProgress: updatedProgress }
        }),
      isOffline: !navigator.onLine,
      setOfflineStatus: (status: boolean) => set({ isOffline: status }),
    }),
    {
      name: 'obgyn-master-storage',
    }
  )
)

// Initialize dark mode on app load
if (useStore.getState().darkMode) {
  document.documentElement.classList.add('dark')
}
