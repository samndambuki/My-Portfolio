import './App.css';
import Navigation from './screens/navigationbar/NavigationBar'
import Particles from './Particles';
import Header from './screens/header/Header.js'
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio'



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <Particles/>
      <AboutMe/>
      <Technologies/>
      <Portfolio/>
     
     
    </div>
  );
}

export default App;
