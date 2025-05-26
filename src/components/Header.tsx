
import { ChefHat, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/20">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="relative container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="relative">
            <ChefHat className="w-10 h-10 text-cyan-400 animate-float" />
            <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              CulinaryAI
            </h1>
            <p className="text-purple-300 text-sm md:text-base font-medium">
              Receitas inteligentes com seus ingredientes
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
