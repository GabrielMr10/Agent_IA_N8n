
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Olá! Sou a CulinaryAI 🤖✨ Digite os ingredientes que você tem em casa e eu vou criar receitas incríveis para você!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToN8n = async (userMessage: string): Promise<string> => {
    console.log('Enviando mensagem para N8n:', userMessage);
    
    try {
      const response = await fetch('https://gabriel1232.app.n8n.cloud/webhook-test/4a8cb245-a0de-4e6f-a32f-eea945ee327c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
          user_id: 'web_user'
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('Resposta do N8n:', data);
      
      // Usar especificamente o campo 'output' da resposta do webhook
      return data.output || 'Receita gerada com sucesso!';
      
    } catch (error) {
      console.error('Erro ao comunicar com N8n:', error);
      throw new Error('Não foi possível gerar a receita. Tente novamente.');
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const recipe = await sendToN8n(inputValue);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: recipe,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      
      toast({
        title: "Receita criada! 🎉",
        description: "Sua receita personalizada está pronta!",
      });
    } catch (error) {
      console.error('Erro ao gerar receita:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Desculpe, ocorreu um erro ao gerar sua receita. Por favor, tente novamente em alguns instantes.',
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Erro ao gerar receita",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-br from-slate-900/50 to-purple-900/30 rounded-2xl glass-effect border border-purple-500/20 overflow-hidden">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 animate-slide-in ${
              message.isUser ? 'justify-end' : 'justify-start'
            }`}
          >
            {!message.isUser && (
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-neon rounded-full flex items-center justify-center animate-pulse-glow">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.isUser
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'glass-effect text-white border border-cyan-500/30'
              }`}
            >
              <div className="whitespace-pre-wrap break-words text-sm md:text-base">
                {message.content}
              </div>
              <div className="text-xs opacity-70 mt-2">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>

            {message.isUser && (
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-start space-x-3 animate-slide-in">
            <div className="flex-shrink-0 w-8 h-8 bg-gradient-neon rounded-full flex items-center justify-center animate-pulse">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="glass-effect text-white border border-cyan-500/30 rounded-2xl px-4 py-3">
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                <span className="text-sm">Criando sua receita...</span>
                <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-purple-500/20 bg-black/20">
        <div className="flex space-x-3">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite os ingredientes que você tem (ex: tomate, cebola, frango)..."
            className="flex-1 bg-black/30 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 px-6 transition-all duration-300 hover:scale-105"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
