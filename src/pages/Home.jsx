import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Spinner } from '../components/Spinner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigator = useNavigate()
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    
    if(spinner){
        return <Spinner/>
    }
    
    return(
        <div className='min-h-screen flex flex-col'>
            <Header/>
            <Banner/>
        </div>
    )
}