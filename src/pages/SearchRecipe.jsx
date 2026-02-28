import { Header } from '../components/Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavourites } from '../context/FavouritesContext';
import { Footer } from '../components/Footer';
import { Spinner } from '../components/Spinner';
import heartFill from '../assets/heart.png';
import heartOutline from '../assets/heart-black.png';
import axios from 'axios';

export const SearchRecipe = () => {

    const navigator = useNavigate();
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [products, setProducts] = useState([]);
    const [searched, setSearched] = useState('');
    const {addFavourite, removeFavourite, isFavourite} = useFavourites();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searched}`)
            .then((res) => {
                setTimeout(() => {
                    setProducts(res.data.meals || [])
                    setLoading(false);
                }, 500)
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
            })
        }, [searched])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        setSearched(input)
    }

    const handleClick = (id) => {
        navigator(`/recipes/${id}`)
    }

    if(loading){
        return <Spinner/>
    }

    const handleFavouite = (recipe) => {

        const stored = localStorage.getItem('favorites');
        const favorites = stored ? JSON.parse(stored) : {};

        if(favorites[recipe.idMeal]){
            delete favorites[recipe.idMeal];
            localStorage.setItem('favorites', JSON.stringify(favorites))

            setFavIcon((prev) => prev.filter(id => id !== recipe.idMeal));
        }
        else {
            favorites[recipe.idMeal] = {
                id: recipe.idMeal,
                title: recipe.strMeal,
                category: recipe.strCategory,
                image: recipe.strMealThumb,
                instructions: recipe.strInstructions,
                ingredients: extractIngredients(recipe)
            };

            localStorage.setItem('favorites', JSON.stringify(favorites));
            setFavIcon((prev) => [...prev, recipe.idMeal]);
        }
    }

     const extractIngredients = (recipe) => {
        const ingredients = [];

        for (let i = 1; i <= 20; i++){
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];

            if(ingredient && ingredient.trim() !== ''){
                ingredients.push(`${measure || ''} ${ingredient}`.trim());
            }
        }

        return ingredients;
    }

    return(
        <div className='min-h-screen flex flex-col'>
            <Header/>

            <main className='flex-1'>

                {/* search input */}
                <div className='m-10 flex justify-center'>

                    <input className='p-3 border-amber-200 
                                    rounded-2xl bg-white 
                                    text-md w-full h-12 lg:w-1/2' 
                            type="text" placeholder='Search Recipes' 
                            onChange={(event) => handleChange(event)} id='searchInput'/>

                    <button className='ml-5 bg-amber-300 py-3 px-5
                                    rounded-2xl text-sm 
                                    cursor-pointer shadow-2xs'
                            
                            onClick={(event) => handleSubmit(event)}>
                        
                        Search</button>
                </div>

                {searched && products.length === 0 && (<p className='flex justify-center'>No products found</p>)}

                {/* Product Grid */}

                <div className='grid grid-cols-1 sm:grid-cols-2 
                            md:grid-cols-3 lg:grid-cols-4
                            xl:grid-cols-5 gap-6 mx-5 mb-5'>

                    {products.map((items)=>{
                        return (
                        
                        <div
                            className='flex flex-col justify-between 
                                    bg-white p-4 sm:p-5 rounded-2xl 
                                    shadow-sm hover:shadow-2xl
                                    hover:-translate-y-2 transition-all
                                    duration-200 m-3'
                                    key={items.idMeal}>
                                    
                            <div className='mb-5'  >
                                <img src={items.strMealThumb} 
                                    alt={items.strMeal} 
                                    className='rounded border w-full 
                                            h-48 sm:h-56 object-cover'/>
                            </div>

                            <div className='flex flex-col sm:flex-row 
                                            sm:justify-between 
                                            sm:item-center gap-2 
                                            items-center w-full'>

                                <h2 className='font-semibold text-sm 
                                            sm:text-base line-clamp-2'>{items.strMeal}</h2>

                                <p className='text-xs ml-5 bg-amber-300 
                                            px-1 py-1 rounded w-fit'>{items.strCategory}</p>                               
                            </div>

                            <div className='flex flex-row items-center 
                                            justify-center gap-2'>
                                
                                <button className='text-sm bg-amber-400
                                            p-3 rounded mt-3 cursor-pointer
                                            flex-4' 
                                    onClick={()=> handleClick(items.idMeal)}>
                                    View recipe
                                </button>

                                <button className='text-sm bg-amber-100 flex
                                            p-3 rounded mt-3 cursor-pointer
                                            flex-1 justify-center items-center'
                                        onClick={() =>{

                                                if(isFavourite(items.idMeal)){
                                                    removeFavourite(items.idMeal);
                                                }
                                                else{
                                                    addFavourite(items);
                                                }
                                        }}>

                                        
                                    <img className='h-5 ' 
                                        src={isFavourite(items.idMeal) ? heartFill : heartOutline}  alt="fav-icon" />
            
                                </button>

                            </div>
                            
                        </div>
                            
                    )})}
                </div>
            </main>

            <Footer/>
        </div>
    )
}