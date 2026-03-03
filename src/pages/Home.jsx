import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { Spinner } from '../components/Spinner';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
    const navigator = useNavigate()
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    
    useEffect(() => {
        setSpinner(true);
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then((res) =>{
                setTimeout(() => {
                    setProducts(res.data.categories)
                    setSpinner(false)
                },1000)
                
            })
            .catch((err) => {
                console.log(err.message);
                setSpinner(false);
            })
    },[])

    if(spinner){
        return <Spinner/>
    }

    const handleClick = (category) => {
        navigator(`/category/${category}`)
    }
    
    return(
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <Banner/>

            <main className='flex-1'>

                {/* Product Grid view */}
                <div className='grid grid-cols-1 sm:grid-cols-2 
                                md:grid-cols-3 lg:grid-cols-4
                                xl:grid-cols-5 gap-6 px-6 py-10'>

                    {products.map((items) => {
                        return (
                            
                            <div key={items.idCategory} 
                                className='flex flex-col items-center 
                                            justify-center rounded-2xl
                                            shadow-sm hover:shadow2xl 0.3s
                                            hover:-translate-y-2 transition-all 
                                            duration-300 cursor-pointer
                                            p-6 bg-white m-5 text-center'
                                onClick={() => handleClick(items.strCategory)}>

                                    <img src={items.strCategoryThumb} 
                                        alt="category-image" 
                                        className='w-full h-48 object-cover 
                                                   rounded-lg'/>

                                    <p className='mt-4 text-lg font-semibold'>
                                        {items.strCategory}</p>

                            </div>
                        )
                    })}

                </div>
            </main>

            <Footer/>

        </div>
    )
}