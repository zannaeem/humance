import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto container-padding">
        <div className="space-y-6 animate-fade-up">
          <div className="w-24 h-24 mx-auto bg-primary/10 rounded-3xl flex items-center justify-center mb-8">
            <span className="text-4xl">🔍</span>
          </div>
          
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            404
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="btn-ghost"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = "/"}
              className="btn-primary"
            >
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
