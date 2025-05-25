
import { Link } from "react-router-dom";
import { Heart, Gift, Star, Sparkles, Music } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);

  useEffect(() => {
    // Create and play birthday song
    const audio = new Audio();
    audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmUdBz2S3PLHOBQNl9tnFuKe8DmV0fLIfCgGJHfJ8N2SQwoVYLXr7KpXFgtKeePeu2EeCz+T2/LHOB0Xm9xcFuKe8TmV0fLIfCYGJXjK8dyRQwoVYLTp66pXFgtJeePfvGEeDD+T3PLIESwNG5rUcA7EfiwNG6fZ9dmWQgoYebHl8bNqFgtJeODfumEdBj6P1vLNdSQHJ33Y8d6TQwwYlclwfFWWTgwdddL45ZRGHRSnzf7KdisHJH7W8d6SRAqIjO7NdSQJKn7W8t2QQgkWEIqOkK/ZhHlNGSBhKLN7OiqLg7t5HU6LPDcCmXEZGKNebYZmGZNZG5NbGZVeGZVeGZNbGpJbGpJcGZNbGptfGphfGplaGZpcGphfG5thGZpcGZlEHTBYZvJa";
    audio.loop = true;
    audio.volume = 0.3;
    
    const playAudio = () => {
      audio.play().catch(e => console.log("Audio autoplay prevented"));
    };
    
    // Try to play immediately, fallback to user interaction
    playAudio();
    
    // Cleanup
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const handleImageClick = () => {
    setShowSurprise(true);
    setClickCount(prev => prev + 1);
    
    if (clickCount >= 2) {
      setShowSpecialMessage(true);
    }
    
    setTimeout(() => setShowSurprise(false), 3000);
  };

  const handleHeartClick = () => {
    setShowFloatingHearts(true);
    setTimeout(() => setShowFloatingHearts(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-green-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-red-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-5 h-5 bg-yellow-300 rounded-full animate-bounce"></div>
        
        {/* Additional magical elements */}
        <div className="absolute top-24 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-spin"></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-rose-300 rounded-full animate-pulse"></div>
      </div>

      {/* Floating hearts animation */}
      {showFloatingHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main content container with enhanced effects */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
          
          {/* Music indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 text-yellow-400">
            <Music className="animate-pulse" size={20} />
            <span className="text-sm animate-pulse">♪ Happy Birthday Song ♪</span>
          </div>

          {/* Profile image with click interaction */}
          <div className="mb-8 flex justify-center">
            <div className="relative cursor-pointer transform transition-all duration-300 hover:scale-110" onClick={handleImageClick}>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl hover:border-pink-400 transition-colors duration-300 hover:shadow-pink-500/50">
                <img 
                  src="/lovable-uploads/e898f8c9-fa2e-4f7c-afdd-702bdef003c6.png" 
                  alt="Akshay"
                  className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              {/* Animated decorations around image */}
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎉</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">🎂</div>
              <div className="absolute top-1/2 -left-6 text-xl animate-spin">⭐</div>
              <div className="absolute top-1/2 -right-6 text-xl animate-spin">✨</div>
              
              {/* Click instruction */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-yellow-300 animate-pulse">
                Click me! 🎁
              </div>
            </div>
          </div>

          {/* Surprise animation */}
          {showSurprise && (
            <div className="absolute inset-0 flex items-center justify-center bg-purple-900/80 backdrop-blur-sm rounded-3xl animate-fade-in">
              <div className="text-center animate-scale-in">
                <div className="text-6xl mb-4 animate-bounce">🎊🎉🎊</div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2 animate-pulse">
                  Surprise! 
                </h3>
                <p className="text-xl text-white animate-fade-in">
                  You're amazing, Akshay! 🌟
                </p>
                <div className="flex justify-center gap-2 mt-4 text-2xl">
                  <span className="animate-bounce">🎈</span>
                  <span className="animate-bounce" style={{animationDelay: '0.1s'}}>🎁</span>
                  <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🍰</span>
                  <span className="animate-bounce" style={{animationDelay: '0.3s'}}>🎊</span>
                </div>
              </div>
            </div>
          )}

          {/* Main birthday message with enhanced animations */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
              Happy Birthday
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in hover:text-yellow-300 transition-colors duration-300">
              AKSHAY <Heart className="inline-block text-red-400 ml-2 animate-pulse cursor-pointer hover:scale-125 transition-transform" size={32} onClick={handleHeartClick} />
            </h2>
            <div className="flex justify-center items-center gap-2 mb-6">
              <Star className="text-yellow-400 animate-spin" size={24} />
              <p className="text-xl md:text-2xl text-gray-200 font-semibold animate-pulse">
                Another year of amazing adventures!
              </p>
              <Star className="text-yellow-400 animate-spin" size={24} />
            </div>
          </div>

          {/* Enhanced personal message */}
          <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
              "Wishing you a day filled with happiness, laughter, and all your favorite things! 
              May this new year of your life bring you endless joy, success, and beautiful memories. 
              You're not just getting older, you're getting more awesome!"
            </p>
            <div className="flex justify-center gap-4 text-2xl">
              <span className="hover:scale-125 transition-transform cursor-pointer animate-bounce">🎈</span>
              <span className="hover:scale-125 transition-transform cursor-pointer animate-bounce" style={{animationDelay: '0.1s'}}>🎊</span>
              <span className="hover:scale-125 transition-transform cursor-pointer animate-bounce" style={{animationDelay: '0.2s'}}>🎁</span>
              <span className="hover:scale-125 transition-transform cursor-pointer animate-bounce" style={{animationDelay: '0.3s'}}>🍰</span>
              <span className="hover:scale-125 transition-transform cursor-pointer animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
            </div>
          </div>

          {/* Special message after multiple clicks */}
          {showSpecialMessage && (
            <div className="bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-2xl p-6 mb-8 border border-pink-400/50 animate-fade-in">
              <Sparkles className="mx-auto text-yellow-400 mb-2 animate-spin" size={32} />
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">🎉 Secret Unlocked! 🎉</h3>
              <p className="text-lg text-white">
                "Akshay, you discovered the hidden surprise! You're not just a year older, you're a year more legendary! 🌟"
              </p>
            </div>
          )}

          {/* Enhanced navigation to quotes page */}
          <div className="space-y-4">
            <Link 
              to="/wishes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 animate-pulse"
            >
              <Gift size={20} className="animate-bounce" />
              More Birthday Wishes & Quotes
              <Sparkles size={16} className="animate-spin" />
            </Link>
          </div>
        </div>

        {/* Enhanced footer credit */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-sm hover:text-yellow-300 transition-colors duration-300">
            Built with ❤️ by{" "}
            <span className="font-semibold text-yellow-400 animate-pulse">@hiden_25</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
