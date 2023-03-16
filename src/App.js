
import { Blog, Feature, Testimonials,  Navbar, CTA } from './components';
import './App.css';
const App = () => {

    return(
        <div className="App">
            <div className="">
                <Navbar />
            </div>
            <Feature />
            <Blog />
            <Testimonials />
            <CTA />
            

        </div>
    )
}

export default App;