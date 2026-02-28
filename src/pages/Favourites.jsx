import { useFavourites } from "../context/FavouritesContext";
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';

export const Favourites = () => {
    
    const { favourites, removeFavourite} = useFavourites();
    const favouriteList = Object.values(favourites);
    const navigator = useNavigate();

    const handleClick = (itemId) => {
        navigator(`/recipes/${itemId}`)
    }

    return(

    <div className="min-h-screen flex flex-col">
        <Header/>
        <div className="flex-1 px-4 sm:px-6 lg:px-10 py-8">

            {favouriteList.length === 0 ? (
                <p className="text-center text-gray-500
                              text-lg mt-10">
                    No favourite recipes.
                </p>
            ) : (

                <div className="grid grid-cols-1 sm:grid-cols-2
                                md:grid-cols-3 lg:grid-cols-4
                                xl:grid-cols-5 gap-6">

                    {favouriteList.map(recipe => (
                        
                        <div key={recipe.idMeal}
                            className="bg-white p-5 rounded-2xl 
                                        shadow-sm hover:shadow-xl
                                        transition-all duration-300
                                        hover:translate-y-2 overflow-hidden
                                        flex flex-col justify-center">

                            <img src={recipe.strMealThumb} 
                                 alt={recipe.strMeal} 
                                 className="h-48 sm:h-52 md:h-56
                                            w-full object-cover"/>

                            <h2 className="font-semibold text-center
                                          text-sm mt-2 sm:text-base
                                          line-clamp-2">

                                    {recipe.strMeal}
                            </h2>

                            <div className="flex gap-2">

                                <button className="mt-3 p-2 bg-amber-100 
                                                   border-amber-300 border-2
                                                   rounded text-black flex-1"
                                        onClick={() => handleClick(recipe.idMeal)}>
                                    View
                                </button>
                                
                                <button className="mt-3 p-2 bg-amber-300
                                               rounded text-black flex-1"
                                    onClick={() => removeFavourite(recipe.idMeal)}>                                    
                                    Remove
                                </button>

                                

                            </div>

                        </div>
                    
                    ))}

                </div>
            )}
        </div>
    </div>   
)}