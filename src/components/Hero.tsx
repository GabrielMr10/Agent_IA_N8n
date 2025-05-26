
import { ArrowDown, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-1/4 animate-float">
        <Sparkles className="w-8 h-8 text-yellow-400 opacity-60" />
      </div>
      <div className="absolute top-48 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="w-6 h-6 text-cyan-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-10 h-10 text-purple-400 opacity-60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Cozinha do
            </span>
            <br />
            <span className="text-white">
              Futuro
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforme ingredientes simples em receitas extraordinárias com 
            <span className="text-cyan-400 font-semibold"> inteligência artificial</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="glass-effect px-4 py-2 rounded-full border border-purple-500/30">
              <span className="text-cyan-400 font-medium">🥕 Ingredientes</span>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full border border-purple-500/30">
              <span className="text-purple-400 font-medium">🤖 IA</span>
            </div>
            <div className="glass-effect px-4 py-2 rounded-full border border-purple-500/30">
              <span className="text-green-400 font-medium">🍽️ Receita</span>
            </div>
          </div>

          <Button
            onClick={scrollToChat}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl neon-border animate-pulse-glow"
          >
            Começar a Cozinhar
            <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
