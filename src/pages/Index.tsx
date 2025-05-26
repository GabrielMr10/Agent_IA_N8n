
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Features />
      
      {/* Chat Section */}
      <section id="chat-section" className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
              Converse com a IA
            </h2>
            <p className="text-purple-300 text-lg max-w-2xl mx-auto">
              Digite os ingredientes que você tem e deixe nossa IA criar receitas personalizadas para você
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ChatInterface />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-purple-300">
            © 2024 CulinaryAI - Powered by Inteligência Artificial
          </p>
          <p className="text-purple-400 text-sm mt-2">
            Evite desperdícios • Economize tempo • Cozinhe com criatividade
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
