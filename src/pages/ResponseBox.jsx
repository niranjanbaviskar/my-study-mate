import { useState, useEffect } from "react"
import React from "react"


const ResponseBox = ({ response }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTyping, setStartTyping] = useState(false)

  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
    setStartTyping(false)

    if (response) {
      // Add a 2-second delay
      const delayTimer = setTimeout(() => {
        setStartTyping(true)
      }, 2000)

      return () => clearTimeout(delayTimer)
    }
  }, [response]) // Removed unnecessary dependency: response

  useEffect(() => {
    if (startTyping && currentIndex < response.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + response[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50) // Adjust the speed typing

      return () => clearTimeout(timer)
    }
  }, [currentIndex, response, startTyping])
  
  if (!response) return null
  
  return (
    <div className="fixed bottom-35 left-0 right-0 bg-opacity-100 backdrop-blur-md p-4 pb-15 rounded-t-lg">
      <div className="max-w-7xl mx-auto text-white font-mono">{displayedText}</div>
    </div>
  )
}

export default ResponseBox
