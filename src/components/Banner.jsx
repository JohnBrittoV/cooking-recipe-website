import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/image.png'

export const Banner = () => {

    const navigator = useNavigate();

    return(
        <div className='flex flex-col md:flex-row
                        justify-center items-center
                        xs:flex-row-reverse
                        gap-8 px-6 py-10 text-center'>
            
            <div className='text-center md:text-left'>
                
                <h2 className='text-2xl sm:text-3xl 
                               lg:text-4xl font-bold'>
                    Cook like a pro</h2>

                <p className='mt-3 text-gray-600 
                              text-sm sm:text-base'>
                    Explore our easy and Tasty Recipes.</p>

            </div>

            <div>
                <img src={bannerImg} alt="banner" 
                     className='w-64 sm:w-80 md:w-96 lg:w-150 h-auto'/>

                <button className='bg-[#fac400] py-3 px-5
                                    rounded-2xl mt-10'
                        onClick={() => navigator('/search')}>Search Recipes</button>
            </div>
            
        </div>
    )
}