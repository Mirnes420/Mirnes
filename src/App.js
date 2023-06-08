import './App.css';
import RandomQuote from './randomQuote';
import Introduction from './introduction';
import ContactMe from './contact';
import Menu from './menu';

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
    <RandomQuote  className='align'/>
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
