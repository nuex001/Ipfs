import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UploadComponent from './UploadComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <UploadComponent/>
    </>
  )
}

export default App

