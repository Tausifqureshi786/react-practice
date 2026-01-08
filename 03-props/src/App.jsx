import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      
      <Card user="Tausif Qureshi" age={19} img="https://plus.unsplash.com/premium_photo-1754067866992-d5bff3ae4036?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <Card user="Amin Qureshi" age={59} img="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      
    </div>
  )
}

export default App