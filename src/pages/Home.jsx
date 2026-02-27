import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((res) => setProducts(res.data.categories))
            .catch((err) => console.log(err.message))
    },[])
    
    return(
        <div>
            <Header/>
            <Banner/>

            {/* Product Grid view */}
            <div className='grid grid-cols-1 sm:grid-cols-2 
                            md:grid-cols-3 lg:grid-cols-4
                            xl:grid-cols-5 gap-6 px-6 py-10'>

                {products.map((items) => {
                    return (
                        
                        <div key={items.idCategory} 
                             className='flex flex-col items-center 
                                        justify-center rounded-2xl
                                        shadow-md hover:shadow2xl 0.3s
                                        hover:-translate-y-2 transition-all duration-300
                                        p-6 bg-white m-5 text-center'>

                                <img src={items.strCategoryThumb} 
                                     alt="category-image" 
                                     className='w-full h-48 object-cover rounded-lg'/>

                                <p className='mt-4 text-lg font-semibold'>
                                    {items.strCategory}</p>

                        </div>
                    )
                })}

            </div>

            <Footer/>

        </div>
    )
}