import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './pages/home';
import MyFavourites from './pages/MyFavourites';
import AddCars from './pages/addCars';
import CarsList from './pages/deleteCars';

const App = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [renderAside, setRenderAside] = useState(false);
  const { innerWidth } = window;

  useEffect(() => {
    if (
      innerWidth >= 1024
      && currentRoute !== '/sign-up'
      && currentRoute !== '/login'
    ) {
      setRenderAside(true);
    } else {
      setRenderAside(false);
    }
  }, [currentRoute]);

  return (
    <div className="relative">
      <main className="flex h-screen">
        <SideBar renderAside={renderAside} setRenderAside={setRenderAside} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<MyFavourites />} />
          <Route path="/add" element={<AddCars />} />
          <Route path="/delete" element={<CarsList />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
