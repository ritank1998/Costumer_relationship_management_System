import './App.css';
import Slider from './Components/Carousel';
import Details from './Components/Detail';
import Footer from './Components/Footer';
import IndexPage from './Components/indexpage';
import Introduction from './Components/introduction';

function App() {
  return (
    <div className="App">
      <IndexPage />
      <br>
      </br>
      <Introduction />   
      <br></br>
      <Slider />
      <br></br>
      <Details /> 
      <br></br>
      <Footer />
      
    </div>
  );
}

export default App;
