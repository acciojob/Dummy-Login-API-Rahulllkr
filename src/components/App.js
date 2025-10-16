import React, { useState } from 'react'

const App = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [userErr,setUserErr] = useState("")
    const [userPass,setUserPass] = useState("")
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

const handleInput = () => {
    const foundItem = data.find((item) =>
        item.email == email
    )
    if(!foundItem){
        setUserErr("User not found")
        return;
    }
    if(password != foundItem.password){
        setUserPass("Password Incorrect")
        return
    }
}
  return (
    <div>
        <input onChange={(e) => setEmail(e.target.value)} id='input-email' />
        <p id='user-error'>{userErr}</p>
        <input onChange={(e) => setPassword(e.target.value)} id='input-password' />
        <p id='password-error'>{userPass}</p>
        <button onClick={handleInput} id='submit-form-btn'>Submit</button>
        
    </div>
  )
}

export default App