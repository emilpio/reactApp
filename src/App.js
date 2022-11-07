import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favourite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/404/NotFound';

const App = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='favorite' element={<Favorite />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
