import { useState } from "react";

export function LoginPage() {
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

  //affichage (rendre)
  return (
    <div>
      <h2>Bienvenue chez nous</h2>
      <br />
      <h3>Connectez-vous</h3>
      <form 
        action="submit"
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder="Entrez votre prénom..."
          required 
          value={inputValue}
          onChange={handleChange}
        />
          <button>Accédez à votre espace</button>
      </form>
    </div>
    
  )
}