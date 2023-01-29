import { useEffect, useState } from 'react';
import video from './food.mp4'; 
import icons from './icons8-egg-66.png';
import './App.css';
import MyRecipesIsComponent from './MyRecipesIsComponent';

function App() {

  const [mySearch, setMySearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWoedSubmitted] = useState("")
  
  const API_ID = "2973e34a";
  const API_KEY = "c7edc9a73bcb4f8dd8e9f90c6abe729e";

  useEffect(() => {
    async function FetchData() {
      const reponse = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await reponse.json();
      setMyRecipe(data.hits);

    }
    FetchData();
  }, [wordSubmitted]);

    const myRecipeSearch = (e) => {
      setMySearch(e.target.value)
    }

  const finalSerch = (e) => {
    e.preventDefault();
    setWoedSubmitted(mySearch);
  }  

  return(
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
          <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
      <form onSubmit={finalSerch}>
        <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
      </form>
    </div>

    <div className='container'>
        <button>
          <img src={icons} alt="sherch" />
        </button>
    </div>

   {myRecipe.map(element => (
    <MyRecipesIsComponent lable={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} 
    ingredientLines={element.recipe.ingredientLines}/>
   ))}

  </div>
  )
}

export default App;
