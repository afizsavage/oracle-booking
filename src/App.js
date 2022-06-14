import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './components/Sidebar';
import Home from './pages/home';

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
          {/* <Route path="/bikes/:bikeId" element={<BikeDetails />} />
          <Route path="/reserve/:id" element={<Reserve />} />
          <Route path="/reservations" element={<MyReservations />} />
          <Route path="/manage-page" element={<ManageBikes />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/reservations" element={<MyReservations />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
