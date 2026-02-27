import { createContext, useContext, useState, useEffect } from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {

    const[favourites, setFavourites] = useState(() => {
        const stored = localStorage.getItem('favourites');
        return stored ? JSON.parse(stored) : {};
    })

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourite = (recipe) => {
        setFavourites(prev => ({
            ...prev,
            [recipe.idMeal]: recipe
        }))
    }

    const removeFavourite = (id) => {
        setFavourites(prev => {
            const updated = {...prev};
            delete updated[id];
            return updated;
        });
    };

    const isFavourite = (id) => {
        return !!favourites[id];
    };

    return(
        <div>
            <FavouritesContext.Provider
            value={{
                favourites,
                addFavourite,
                removeFavourite,
                isFavourite
            }}>
                {children}
            </FavouritesContext.Provider>
        </div>
    )
}

export const useFavourites = () => useContext(FavouritesContext);