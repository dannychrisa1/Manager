import banner from '../../assets/illustration-intro.svg';
const Feature = () => {

    return(
        <div className="feature-section p-6">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="feature-content flex flex-col space-y-6  md:w-1/2">
                    <h1 className="text-4xl md:max-w-md font-bold text-center md:text-left">Bring everyone together to build better products</h1>
                    <p className="text-center md:text-left md:max-w-md">Manage makes it easy for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                     <div className="flex justify-center md:justify-start">
                        <a href="#home" className="bg-brightRed py-3 px-6 rounded-full text-white text-center md:text-left">Get started</a>
                     </div>
                   
                </div>
                <div className="feature-img md:w-1/2">
                    <img src={banner} alt="banner" />

                </div>
            </div>
        </div>
    )
}


export default Feature;