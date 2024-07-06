import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-green-400 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="Gaurav"post='content creator' image="https://images.pexels.com/photos/25381433/pexels-photo-25381433/free-photo-of-tree-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Card username='Json' post='Staff engg.'image="https://images.pexels.com/photos/25526387/pexels-photo-25526387/free-photo-of-autumn-trees-in-the-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Card image="https://images.pexels.com/photos/22475898/pexels-photo-22475898/free-photo-of-colonnade-of-the-mesudiye-medresesi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    </>
  )
}

export default App
