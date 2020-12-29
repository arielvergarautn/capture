//Import pages
import AboutUs from './pages/AboutUs'

//Styles
import './styles/app.scss'

//Router
import {
  Route,
  Switch
} from 'react-router-dom'

//Pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={AboutUs} />
        <Route exact path='/work' component={OurWork} />
        <Route exact path='/contact' component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
