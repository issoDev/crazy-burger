import { useState } from "react";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("")

  //comportements
  const handleSubmit = (e) => { 
    e.preventDefault();
    alert(`Bonjour ${inputValue}`)
    setInputValue("")
  }

  const handleChange = (e) => { 
    const value = e.target.value
    setInputValue(value.trim())
  }

  return (
    <form 
      action="submit"
      onSubmit={handleSubmit}
    >
      <h2>Bienvenue chez nous</h2>
      <br />
      <h3>Connectez-vous</h3>
      <input 
        type="text" 
        placeholder="Entrez votre prénom..."
        required 
        value={inputValue}
        onChange={handleChange}
      />
        <button>Accédez à votre espace</button>
    </form>
  )
}
