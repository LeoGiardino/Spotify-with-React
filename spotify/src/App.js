import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AlbumPage from './pages/AlbumPage';
import ArtistPage from './pages/ArtistPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/albumPage/:id" element={<AlbumPage />} />
          <Route path="/artistPage/" element={<ArtistPage />} />
          <Route path="*" element={<Body />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
