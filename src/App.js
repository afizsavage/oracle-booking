import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './pages/home';
import SignIn from './pages/login';
import MyFavourites from './pages/MyFavourites';
import SignUp from './pages/register';
import AddCars from './pages/addCars';
import CarsList from './pages/deleteCars';
import Header from './components/Utils/header';
import CarDetail from './pages/detail';

const App = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [renderAside, setRenderAside] = useState(false);
  const [renderHeader, setRenderHeader] = useState(null);
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

    if (currentRoute.includes('sign')) {
      setRenderHeader(false);
    } else {
      setRenderHeader(true);
    }
  }, [currentRoute]);

  return (
    <div className="relative">
      <main className="relative lg:flex h-screen overflow-hidden w-screen">
        <SideBar renderAside={renderAside} setRenderAside={setRenderAside} />
        <div
          className={
            renderAside
              ? 'shadow-2xl bg-side lg:shadow-none h-full ch translate-x-48 lg:transform-none lg:min-h-screen lg:w-10/12 z-50 relative'
              : 'z-50 relative min-h-screen'
          }
        >
          {renderHeader && (
            <Header renderAside={renderAside} setRenderAside={setRenderAside} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/favourites" element={<MyFavourites />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/add" element={<AddCars />} />
            <Route path="/delete" element={<CarsList />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
