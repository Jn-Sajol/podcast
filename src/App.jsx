
import './App.css'
import FeatureOne from './components/featureOne/featureOne'
import FeatureThree from './components/featureThree/featureThree'
import FeatureTwo from './components/featureTwo/featureTwo'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import NewsLatter from './components/newsLatter/newsLatter'
import Testimonial from './components/testimonial/testimonial'
// import Hero from './section/hero/Hero'
function App() {
  return (
    <div className="root">
     <Header/>
     {/* <Hero/> */}
     <FeatureOne/>
     <FeatureTwo/>
     <FeatureThree/>
     <Testimonial/>
     <NewsLatter/>
     <Footer/>
     </div>
  )
}

export default App
