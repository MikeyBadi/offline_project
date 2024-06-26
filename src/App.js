// import './App.css';
import Homepage from './pages/Homepage'
import Detail from './pages/Detail'
import Favorites from './pages/FavoritesImages'
import Layout from './layouts/Layout';
import './App.css'
import 'flowbite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/detail/:slug" Component={Detail} />
            <Route path="/favorites/" Component={Favorites} />
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* <Homepage></Homepage> */}
    </div>
  );
}

export default App;
