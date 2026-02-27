import logo from '../assets/chef-hat.png';
import menu from '../assets/menu-icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return(
        <div className='w-full overflow-x-hidden'>

            <nav className='flex items-center 
                            justify-between p-4'>
                
                <div className='flex items-center 
                                gap-5 mx-5'>

                    <img src={logo} alt="logo" 
                         className='h-12 sm:h-14 
                                    lg:h-16 w-auto'/>

                    <h3 className='text-lg sm:text-xl 
                                   md:text-2xl font-semibold'>Easy Cook</h3>
                </div>
                
                <div className='hidden md:flex gap-15 
                                text-sm lg:text-base 
                                font-medium mx-5'>

                    <Link to={'/'} onClick={handleClose}>Home</Link>
                    <Link to={'/search'} onClick={handleClose}>Search</Link>
                    <Link to={'/favourites'} onClick={handleClose}>Favourites</Link>

                </div>

                <button className='md:hidden w-6' onClick={() => setOpen(!open)}>
                    <img src={menu} alt="menu-icon" />
                </button>

                <div className={`${open ? 'block' : 'hidden'} 
                            md:hidden flex flex-col justify-center
                            items-center gap-10 text-xl font-semibold
                            bg-[#fac400] py-15 rounded-2xl text-black
                            absolute top-20 left-0 right-0 w-full z-20`}>

                    <Link to={'/'} onClick={handleClose}>Home</Link>
                    <Link to={'/search'} onClick={handleClose}>Search</Link>
                    <Link to={'/favourites'} onClick={handleClose}>Favourites</Link>

                </div>

            </nav>    
        </div>
    )
}