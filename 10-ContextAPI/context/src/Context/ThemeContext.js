import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext();

// Burada ThemeProvider içinde children etiketiyle içindeki propları alıyoruz
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");     // localstorage'dan temamızı çektik, tanımlı değilse default değer light

    useEffect(() => {
        localStorage.setItem('theme', theme);   // localstorage'a tema her değiştiğinde gönderiyioruz
    }, [theme])

    const values = {
        theme,          // Burada values adlı objenin içine yerleştirdik
        setTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext); // useTheme adında hook hazırladık ve bunu kullanacağız