import { Header } from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../components/Footer';
import axios from 'axios';

export const RecipeDetails = () => {
    
    const {id} = useParams();
    let ingredients  = [];
    
    const [products, setProducts] = useState([])
      
    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                return setProducts(res.data.meals[0])
            })
            .catch((err) => {console.log(err.message)})
    },[id]) 

    {for(let i = 1; i < 20; i++){
        
        let foodIngredients = products[`strIngredient${i}`]
        let ingredientsMeasure = products[`strMeasure${i}`]
        
        if(foodIngredients !== ""){
            ingredients.push(`${foodIngredients} - ${ingredientsMeasure}`)
        }
    }}
    
    return(
        <div className='min-h-screen flex flex-col'>
            <Header/>
            
            <main className='flex-1'>

                <div className='flex-1 py-8 px-4 sm:px-6 lg:px-10 justify-between'>

                    <div className='max-w-6xl mx-auto flex flex-col justify-between 
                                    bg-white p-4 sm:p-5 rounded-2xl 
                                    shadow-sm hover:shadow-2xl
                                    hover:-translate-y-2 transition-all
                                    duration-200 m-3'>
                        
                        <img className='rounded border 
                                        h-64 sm:h-72 md:h-80 object-cover' 
                            src={products.strMealThumb} alt={products.strMeal} />

                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='font-semibold text-lg 
                                    sm:text-base line-clamp-2
                                    mt-5'>
                                Recipe Name: {products.strMeal}</h2>

                                <p className='text-md bg-amber-300 
                                            px-3 py-2 mt-2 rounded w-fit'>
                                    Category : {products.strCategory}</p>
                            </div>

                    </div>

                    <div className='flex flex-col justify-between 
                                    bg-gray-50 p-4 sm:p-5 rounded-2xl 
                                    shadow-sm hover:shadow-2xl
                                    hover:-translate-y-2 transition-all
                                    duration-200 m-3'>
                        
                        <p className='font-semibold text-lg mb-3'>
                            Ingredients :</p>
                        
                        {ingredients.map((item, index) => {
                            return <p key={index}>{index+1}. {item}</p>
                        })}

                    </div>

                    <p className='font-semibold text-lg ml-3 mb-2'>
                            Cooking Instructions :</p>             
                    <p className='text-justify m-3'>{products.strInstructions}</p>
                
                </div>

            </main>

            <Footer/>

        </div>
    )
}