import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex h-[100dvh] flex-col">
      <Navbar />
      <main className="bg-ghost-white flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
