import anisha from '../../assets/avatar-anisha.png';
import ali from '../../assets/avatar-ali.png';
import richard from '../../assets/avatar-richard.png'
const Testimonials = () => {

    return(

        <div className="testimonial-section p-6">
            <div class="container mx-auto">
                <h1 className="text-4xl text-center font-bold mb-5">What's Different About Manage</h1>
                 <div className="testimonies flex justify-between flex-col md:flex-row space-y-4 md:space-y-0">
                    <div className="test text-center flex flex-col items-center space-y-4">
                        <img src={anisha} alt="anisha" width={50}/>
                        <h2 className="test-content">Anisha Li</h2>
                        <p className="md:max-w-sm">"Manage has supercharged our team's workflow. 
                           The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
                    </div>
                    <div className="test text-center flex flex-col items-center space-y-4">
                        <img src={ali} alt="ali" width={50}/>
                        <h2 className="test-content">Anisha Li</h2>
                        <p className="md:max-w-sm">"Manage has supercharged our team's workflow. 
                           The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
                    </div>
                    <div className="test text-center flex flex-col items-center space-y-4">
                        <img src={richard} alt="richard" width={50}/>
                        <h2 className="test-content">Anisha Li</h2>
                        <p className="md:max-w-sm">"Manage has supercharged our team's workflow. 
                           The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
                    </div>
                 </div>
                 <div className="flex justify-center">
                 <a href="#home" className="bg-brightRed py-3 px-8 mt-10 rounded-full text-white text-center md:text-left">Get started</a>
                 </div>
            </div>
        </div>
    )
}

export default Testimonials;