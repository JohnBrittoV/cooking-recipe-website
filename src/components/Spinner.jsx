import spinnerImg from '../../public/spinner-loader.svg';

export const Spinner = () => {
    return(
        <div className="min-h-screen flex justify-center 
                        items-center h-20">
            <img src={spinnerImg} alt="spinner-loading"/>
        </div>
    )
}