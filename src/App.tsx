import { useState, useEffect } from 'react'
import './App.css'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-14T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setIsExpired(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="app">
      <div className="countdown-container">
        {!isExpired ? (
          <>
            <h1 className="countdown-title">14/02/2026</h1>
            
            <div className="countdown-grid">
              <div className="time-unit">
                <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="time-label">Days</div>
              </div>
              
              <div className="time-separator">:</div>
              
              <div className="time-unit">
                <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="time-label">Hours</div>
              </div>
              
              <div className="time-separator">:</div>
              
              <div className="time-unit">
                <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="time-label">Minutes</div>
              </div>
              
              <div className="time-separator">:</div>
              
              <div className="time-unit">
                <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="time-label">Seconds</div>
              </div>
            </div>
          </>
        ) : (
          <div className="expired-message">
            <h1>Time's Up!</h1>
            <p>The countdown has ended.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
