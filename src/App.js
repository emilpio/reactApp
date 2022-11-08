import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favourite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/404/NotFound';
import List from './components/List/List';

const App = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/list' element={<List />} />
        <Route path='/list/:listId' element={<List />} />
      </Routes>
    </Container>
  );
};

export default App;
