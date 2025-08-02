import { useState } from "react"

function App() {
  // state(état, données)
  //un state provoque une réactualisation automatique de l'affichage
  const [inputValue, setInputValue] = useState("");
  

  // comportements
  const inputValueUpdated= (e) => {
    const valueAfterChange = e.target.value;
    setInputValue(valueAfterChange.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      alert(`Bonjour ${inputValue}`)
    }
    setInputValue("")
  }

  // affichage(une fois le state modifié, l'actualisation de l'affichage se automatiquement)
  return (
    <div>
      <h2>Bienvenue chez nous</h2>
      <div>
        <h3>Connectez-vous</h3>
          <form action="submit" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Entrez votre prénom..."
            value={inputValue}
            onChange={inputValueUpdated}
            required
          />
          <button type="submit">Accédez à votre espace</button>
        </form>
      </div>
      
    </div>
  ) 
}



export default App
