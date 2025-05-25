
import { Link } from "react-router-dom";
import { ArrowLeft, Quote, Sparkles, Heart, Gift, Star } from "lucide-react";
import { useState } from "react";

const Wishes = () => {
  const [revealedWishes, setRevealedWishes] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const quotes = [
    {
      text: "Age is merely the number of years the world has been enjoying you.",
      author: "Unknown"
    },
    {
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey"
    },
    {
      text: "Growing old is mandatory, but growing up is optional.",
      author: "Walt Disney"
    },
    {
      text: "Your birthday is a special time to celebrate the gift of 'you' to the world.",
      author: "Unknown"
    },
    {
      text: "Life is a journey, and your birthday is a beautiful milestone.",
      author: "Unknown"
    }
  ];

  const wishes = [
    "May your birthday be the start of a year filled with good luck, good health, and much happiness! 🌟",
    "Wishing you a wonderful year ahead full of laughter, love, and adventure! 🎈",
    "Another adventure-filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor! 🎊",
    "May this special day bring you endless joy and tons of precious memories! 🎁",
    "Hope your birthday is absolutely fantastic - just like you! 🎂",
    "Cheers to another year of being awesome! Happy Birthday! 🥳"
  ];

  const handleWishClick = (index: number) => {
    if (!revealedWishes.includes(index)) {
      setRevealedWishes(prev => [...prev, index]);
      if (revealedWishes.length === wishes.length - 1) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8 px-4 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-24 w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-28 w-4 h-4 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-blue-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-3 h-3 bg-green-300 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-8 w-4 h-4 bg-red-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-12 w-3 h-3 bg-yellow-300 rounded-full animate-bounce"></div>
        
        {/* More magical elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Confetti celebration */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-3xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🎊', '🎈', '⭐', '✨', '🎁'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-all duration-300 mb-6 hover:scale-105 transform"
          >
            <ArrowLeft size={20} className="animate-bounce" />
            Back to Birthday Page
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mb-4 hover:scale-105 transition-transform duration-300">
            Birthday Wishes & Quotes
          </h1>
          <div className="flex justify-center items-center gap-2">
            <Sparkles className="text-yellow-400 animate-spin" size={24} />
            <p className="text-xl text-gray-200 animate-pulse">For our amazing friend Akshay</p>
            <Sparkles className="text-yellow-400 animate-spin" size={24} />
          </div>
        </div>

        {/* Interactive Birthday Wishes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Heart className="text-pink-400 animate-pulse" />
            Special Birthday Wishes
            <Heart className="text-pink-400 animate-pulse" />
          </h2>
          
          <p className="text-center text-yellow-300 mb-6 animate-bounce">
            Click on each wish to reveal something special! ✨
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {wishes.map((wish, index) => (
              <div 
                key={index}
                onClick={() => handleWishClick(index)}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:rotate-1 ${
                  revealedWishes.includes(index) 
                    ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-yellow-400/50 shadow-lg shadow-yellow-400/20' 
                    : 'hover:bg-white/15'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Gift className={`${revealedWishes.includes(index) ? 'text-yellow-400 animate-spin' : 'text-gray-400'} transition-all duration-300`} size={20} />
                  {revealedWishes.includes(index) && <Star className="text-yellow-400 animate-pulse" size={20} />}
                </div>
                <p className="text-gray-200 leading-relaxed text-center">{wish}</p>
                {revealedWishes.includes(index) && (
                  <div className="mt-4 text-center animate-fade-in">
                    <div className="text-yellow-400 font-semibold animate-pulse">
                      🌟 Wish Unlocked! 🌟
                    </div>
                    <div className="text-sm text-pink-300 mt-1">
                      Another step closer to the surprise! 🎁
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {revealedWishes.length === wishes.length && (
            <div className="mt-8 text-center bg-gradient-to-r from-yellow-400/20 to-pink-500/20 rounded-2xl p-6 border border-yellow-400/50 animate-fade-in">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2 animate-bounce">🎉 All Wishes Unlocked! 🎉</h3>
              <p className="text-lg text-white">
                Congratulations! You've discovered all the special birthday wishes, Akshay! 🎊
              </p>
            </div>
          )}
        </div>

        {/* Enhanced Inspirational Quotes Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Quote className="text-blue-400 animate-pulse" />
            Inspirational Birthday Quotes
            <Quote className="text-blue-400 animate-pulse" />
          </h2>
          
          <div className="space-y-6">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <Quote className="text-yellow-400 mb-4 group-hover:animate-spin transition-all duration-300" size={32} />
                <p className="text-lg text-gray-200 leading-relaxed mb-4 italic group-hover:text-white transition-colors duration-300">
                  "{quote.text}"
                </p>
                <p className="text-yellow-300 font-semibold text-right group-hover:text-yellow-200 transition-colors duration-300">
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Special Birthday Message */}
        <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center mb-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400 animate-pulse" size={24} style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 animate-pulse">🎉 One More Thing... 🎉</h3>
          <p className="text-xl text-gray-200 leading-relaxed hover:text-white transition-colors duration-300">
            "Life is not measured by the number of breaths we take, but by the moments that take our breath away. 
            Here's to another year of breathtaking moments, Akshay! Keep shining and being the amazing person you are!"
          </p>
          <div className="mt-4 text-3xl">
            <span className="inline-block animate-bounce">🎂</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>🎈</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>🎊</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>🌟</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>✨</span>
          </div>
        </div>

        {/* Enhanced footer credits */}
        <div className="text-center space-y-2">
          <p className="text-gray-300 hover:text-yellow-300 transition-colors duration-300">
            Built with ❤️ by{" "}
            <span className="font-semibold text-yellow-400 animate-pulse">@hiden_25</span>
          </p>
          <p className="text-gray-300 hover:text-pink-300 transition-colors duration-300">
            Wishes by{" "}
            <span className="font-semibold text-pink-400 animate-pulse">dəˈv֟፝͝eləpər (@hiden_25)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wishes;
