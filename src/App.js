// import './App.css';
import Homepage from './pages/Homepage'
import Detail from './pages/Detail'
import Layout from './layouts/Layout';
import 'flowbite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/detail/:id" Component={Detail} />
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* <Homepage></Homepage> */}
    </div>
  );
}

export default App;
