function MyRecipesIsComponent({lable,  image, calories, ingredientLines}) {
    return<div>
            <div className="container">   
                <h2>{lable}</h2>
            </div>

            <div className="container">
                <img src={image} className="img" alt="image_item"/>
            </div>

            <div className="container">
                        <ul className="list">
                        {ingredientLines.map(ingredient => (
                        <li><img className="icon" src={"https://img.icons8.com/color/512/ok.png"} alt="icon"></img>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="container">
                <p>Calories: {calories.toFixed()}</p>
            </div>
    </div>}

export default MyRecipesIsComponent;