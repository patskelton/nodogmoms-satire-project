import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-government-navy opacity-20 mb-4">
            404
          </h1>
          <div className="flex items-center justify-center gap-2 text-alert-red mb-4">
            <AlertTriangle className="h-8 w-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Classification Error
            </span>
          </div>
        </div>

        {/* Main Message */}
        <div className="clinical-card bg-government-navy text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Wrong Species. Wrong Page.
          </h2>
          <p className="text-xl mb-6 opacity-90">
            The page you're looking for doesn't exist in our database. 
            Much like human puppies, this URL is biologically impossible.
          </p>
          <div className="text-sm opacity-75">
            <strong>Requested URL:</strong> {location.pathname}
          </div>
        </div>

        {/* Error Analysis */}
        <div className="clinical-card mb-8 text-left">
          <h3 className="text-xl font-semibold text-government-navy mb-4 flex items-center gap-2">
            <Search className="h-5 w-5" />
            Error Analysis
          </h3>
          <div className="space-y-3 text-sm text-government-gray-dark">
            <div className="flex justify-between border-b border-border pb-2">
              <span>Status Code:</span>
              <span className="font-mono">404 - Not Found</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span>Species Classification:</span>
              <span className="text-alert-red">Invalid</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span>Biological Plausibility:</span>
              <span className="text-alert-red">0%</span>
            </div>
            <div className="flex justify-between">
              <span>Recommended Action:</span>
              <span className="text-alert-green">Return to valid pages</span>
            </div>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
          
          <div className="text-sm text-government-gray">
            Or try one of these verified pages:
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild variant="outline" size="sm">
              <a href="/quiz">Take CMDD Quiz</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/about-cmdd">About CMDD</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="/resources">Get Help</a>
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-xs text-government-gray">
          If you believe this page should exist, please contact our technical support team 
          at <strong>webmaster@imcs.gov</strong> (fictional email for this satirical website).
        </div>
      </div>
    </div>
  );
};

export default NotFound;
