import React, { useState } from 'react'

const App = () => {

    const [email,setPassword] = useState("")
    const [password,setPassword] = useState("")
    const data = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]
  return (
    <div>
        <input id='input-email' />
        <input id='input-password' />
        <button onClick={handleInput} id='submit-form-btn'>Submit</button>
    </div>
  )
}

export default App