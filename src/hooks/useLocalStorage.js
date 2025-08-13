import { useState, useEffect } from "react"


export default function useLocalStorage(key, initialVal) {
    const [savedValue, setSavedValue] = useState(() => {
        try {
            const savedItem = localStorage.getItem(key)
            return savedItem ? JSON.parse(savedItem) : initialVal
        }
        catch {
            console.error(`Error parsing ${key}: ${initialVal}`)
            return initialVal
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(savedValue))
        }
        catch {
            console.error(`Error setting ${key}: ${initialVal}`)
        }
    }, [key, savedValue, initialVal])

    return [savedValue, setSavedValue]
}