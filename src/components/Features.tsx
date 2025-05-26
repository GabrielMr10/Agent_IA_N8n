
import { Brain, Clock, Heart, Lightbulb, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Avançada',
      description: 'Algoritmos inteligentes que criam receitas únicas baseadas nos seus ingredientes',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Receitas rápidas e práticas para o seu dia a dia corrido',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Zero Desperdício',
      description: 'Aproveite todos os ingredientes da geladeira sem desperdiçar nada',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Receitas Criativas',
      description: 'Descobra combinações únicas que você nunca imaginou',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Para Toda Família',
      description: 'Receitas adaptáveis para diferentes tamanhos de família',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Respostas Instantâneas',
      description: 'Receitas geradas em segundos, quando você mais precisa',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
            Por que CulinaryAI?
          </h2>
          <p className="text-purple-300 text-lg max-w-3xl mx-auto">
            Transforme ingredientes simples em receitas extraordinárias com o poder da inteligência artificial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl glass-effect border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-purple-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
