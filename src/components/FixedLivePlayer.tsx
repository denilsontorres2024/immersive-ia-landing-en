
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Youtube, Play, X, Maximize2, Minimize2 } from "lucide-react";

const FixedLivePlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOpenYouTube = () => {
    window.open('https://www.youtube.com/@deniaitorres', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed z-40 transition-all duration-300 ${
        isExpanded 
          ? 'bottom-20 right-4 w-80 h-56' 
          : 'bottom-20 left-6 w-16 h-16'
      }`}
    >
      {isExpanded ? (
        // Expanded Player
        <div className="bg-background/95 backdrop-blur-sm border border-primary/30 rounded-xl shadow-epic overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-gradient-primary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">Live - Denilson Torres</span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleToggleExpanded}
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                <Minimize2 className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleClose}
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-sm mb-1">Live às 19h</h3>
              <p className="text-xs text-muted-foreground">Agentes de IA que geram receita</p>
            </div>
            
            <div className="space-y-2">
              <Button
                onClick={handleOpenYouTube}
                className="w-full bg-red-600 hover:bg-red-700 text-white text-xs py-2"
              >
                <Play className="w-3 h-3 mr-2" />
                Assistir no YouTube
              </Button>
              
              <div className="text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Ao vivo agora
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Minimized Button
        <Button
          onClick={handleToggleExpanded}
          className="w-16 h-16 rounded-full bg-gradient-primary hover:scale-110 transition-all duration-300 shadow-epic group relative overflow-hidden"
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-red-500/30 rounded-full animate-ping"></div>
          
          {/* Live Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-pulse"></div>
          
          {/* Icon */}
          <Youtube className="w-8 h-8 text-white relative z-10" />
          
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </Button>
      )}
    </div>
  );
};

export default FixedLivePlayer;
