import './App.css';
import RandomQuote from './views/randomQuote';
import WeatherApp from './views/weatherApp';
import Introduction from './views/introduction';
import ContactMe from './views/contact';
import Menu from './views/menu';

function App() {
  return (
    <div className="App ">
    {/* Introduction */}
    <div>
      <Menu  />
    </div>
    <div id='intro-container' className='container flex'>
    <Introduction />
    </div>
    <hr className='dividor'></hr>
    {/* My Work */}
    <h1 id='projects'>My Work</h1>
    <hr className='dividor'></hr>
    <div className='project-section flex'>
    <WeatherApp  className='align'/>
    <RandomQuote  className='align'/>
      <br></br>
    </div>
    <div className='contact-section'>
      <ContactMe />
    </div>
    </div>
  );
};




export default App;
