
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16 max-w-md mx-auto">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-white/70 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white transition-all"
          >
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
