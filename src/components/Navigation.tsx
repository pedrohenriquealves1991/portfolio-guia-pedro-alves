import { Link } from "react-router-dom";

interface NavigationProps {
  currentPage?: string;
}

const Navigation = ({ currentPage }: NavigationProps) => {
  return (
    <nav className="nav-bar fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display font-bold text-lg tracking-wide text-foreground hover:opacity-70 transition-opacity"
        >
          MAYA CHEN
          {currentPage && (
            <>
              <span className="mx-2 text-foreground/50">/</span>
              <span className="font-medium text-foreground/70">{currentPage}</span>
            </>
          )}
        </Link>
        
        <div className="flex items-center gap-8">
          <a 
            href="mailto:hello@mayachen.design" 
            className="font-display font-semibold text-sm tracking-wide text-foreground hover:opacity-70 transition-opacity"
          >
            EMAIL
          </a>
          <Link 
            to="/resume" 
            className="font-display font-semibold text-sm tracking-wide text-foreground hover:opacity-70 transition-opacity"
          >
            RÉSUMÉ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
