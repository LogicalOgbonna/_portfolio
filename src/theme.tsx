import React,{ createContext, useCallback, useContext, useMemo, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
  setTheme: (theme: string) => {},
  toggleTheme: () => {},
})

export const ThemeProvider = ({ initialTheme = 'dark', children }: { initialTheme: string, children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(initialTheme)

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      setTheme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)