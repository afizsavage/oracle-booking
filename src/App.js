import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './pages/home';
import SignIn from './pages/login';
import MyFavourites from './pages/MyFavourites';
import SignUp from './pages/register';
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
      && currentRoute !== '/sign-in'
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
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/add" element={<AddCars />} />
          <Route path="/delete" element={<CarsList />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
