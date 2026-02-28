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

                <div className='py-8 px-4 sm:px-6 lg:px-10'>

                    <div className='max-w-7xl mx-auto grid grid-cols-1
                                    lg:grid-cols-3 p-3
                                    rounded-xl shadow-sm m-3 gap-3'>

                        {/* left section */}
                        
                        <div className='bg-white p-6 rounded-2xl
                                       shadow-md lg:col-span-1'>
                        
                            <img className='rounded-xl w-full h-64 sm:h-72 
                                        md:h-80 object-cover ' 
                                    src={products.strMealThumb} 
                                    alt={products.strMeal} />

                            <div className='flex flex-col mt-5
                                            lg:text-left text-center'>
                                <h2 className='font-semibold text-xl 
                                               line-clamp-2 m-3'>
                                Recipe Name: {products.strMeal}</h2>

                                <p className='inline-block text-sm
                                            bg-amber-300 font-medium
                                            px-4 py-2 mt-2 rounded-lg
                                            cursor-pointer'>
                                    Category : {products.strCategory}</p>
                            </div>
                        </div>

                        {/* right section */}

                        <div className='lg:col-span-2
                                        span-y-8'> 

                            <div className='bg-gray-50 p-6 rounded-2xl 
                                    shadow-md m-3'>
                        
                                <p className='font-semibold text-xl
                                            mb-4 border-b pb-2'>
                                    Ingredients :</p>

                                <div className='grid grid-cols-1 sm:grid-cols-2
                                                gap-3'>
                                    {ingredients.map((item, index) => {
                                        return <p className='text-sm md:text-base' 
                                                key={index}>{index+1}. {item}</p>
                                    })}
                                </div>
                            </div> 

                            <div className='bg-white rounded-2xl
                                        shadow-md p-6 m-3'>
                                <h3 className='font-semibold border-b
                                            text-xl mb-4 pb-2'>
                                    Cooking Instructions :</h3>    

                                <p className='text-justify leading-relaxed
                                              text-sm md:text-base'>
                                    {products.strInstructions}</p>
                            </div>

                        </div>

                    </div>

                </div>

            </main>

        <Footer/>

    </div>
    )
}