import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="bg-ghost-white ">
        <Outlet />
      </main>
			<Footer />
    </div>
  );
}

export default Layout;
