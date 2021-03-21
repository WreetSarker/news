
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SlideShowCarousel from './components/SlideShowCarousel/SlideShowCarousel';
import MiddleContainer from './components/MiddleContainer/MiddleContainer';




function App() {
  return (
    <Router>
      <Header></Header>
      <SlideShowCarousel ></SlideShowCarousel>
      <MiddleContainer></MiddleContainer>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
