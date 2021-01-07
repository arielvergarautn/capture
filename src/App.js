//Styles
import './styles/app.scss'

//Router
import {
  Route,
  Switch,
  useLocation
} from 'react-router-dom'

//Components
import Nav from './components/Nav'

//Pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'

//Animations
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={AboutUs} />
          <Route exact path='/work' component={OurWork} />
          <Route exact path='/work/:id' component={MovieDetail} />
          <Route exact path='/contact' component={ContactUs} />
          <Route path='*' component={NotFound} />
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
