
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import MovieCarousel from './Components/MovieCarousel.js';
import MovieSection from './Components/MovieSection.js';
import MovieCard from "./Components/MovieCard.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import OtherCards from "./Components/OtherCards.js";



function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <MovieCarousel></MovieCarousel>
      <MovieSection></MovieSection>
      <Banner></Banner>
      <MovieCard></MovieCard>
      <OtherCards></OtherCards>
      <Footer></Footer>
    </div>
  );
}

export default App;
