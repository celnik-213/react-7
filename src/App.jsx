import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserProfile from './components/UserProfile'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile 
        name="Jan Kowalski" 
        email="jan.kowalski@example.com" 
        bio="Lubie programowanie" 
        website="https://jan-kowalski.example.com" 
        isPremium={true} 
        followerCount={1000} 
      />
      <WeatherCard 
        city="Warszawa" 
        temperature={25} 
        conditions="sunny" 
        warning="Uwaga! Możliwe burze w godzinach popołudniowych." 
      />
    </>
  )
}

export default App
