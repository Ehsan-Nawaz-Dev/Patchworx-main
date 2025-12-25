import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-heading text-8xl md:text-9xl font-bold text-primary mb-4">
          404
        </div>
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Road Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Looks like this route hit a pothole. Let's get you back on smooth
          pavement.
        </p>
        <Button onClick={() => navigate("/")} variant="hero" size="lg">
          <Home className="w-4 h-4" />
          Back to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
