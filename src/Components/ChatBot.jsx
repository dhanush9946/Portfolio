import { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";
import Orb from './Orb';

// System instruction to give the bot context about you
const SYSTEM_INSTRUCTION = `
You are an AI Assistant for Dhanush V's portfolio. 
Your goal is to answer questions about Dhanush in a professional, friendly, and engaging way.

Context about Dhanush:
- Name: Dhanush V
- Role: Software Developer
- Email: dhanushpoothanganam5@gmail.com
- Phone: 9846388075
- Top Skills: ASP.NET Core, React, SQL Server, Dapper, EF Core, Redis, Docker, Azure, AWS.
- Key Projects:
  1. CRM SaaS: AI-powered multi-tenant platform with Clean Architecture and CQRS.
  2. SPL (Football Management System): SaaS platform for auctions, matches, and predictions.
  3. ZYRA: Production-ready E-Commerce web app.
- Education: He is a Software Developer with a strong focus on scalable backends and microservices.
- Personality: Professional, innovative, and eager to collaborate on high-scale systems.

Instructions:
1. Keep responses concise and focused on the portfolio.
2. If someone asks for contact info, provide his email and suggest the contact form.
3. If asked about experience, highlight his work with .NET and React.
4. Be polite and helpful. If you don't know something specific, suggest they reach out to Dhanush directly.
`;

const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Dhanush's AI assistant. Ask me anything about his experience or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize AI Providers
  const [modelName, setModelName] = useState("gemini-1.5-flash");
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const groqKey = import.meta.env.VITE_GROQ_API_KEY;
  
  const genAI = new GoogleGenerativeAI(geminiKey || "");
  const groq = groqKey ? new Groq({ apiKey: groqKey, dangerouslyAllowBrowser: true }) : null;
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (customInput = null) => {
    const textToSend = customInput || input;
    if (!textToSend.trim()) return;

    const userMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // 1. TRY GROQ (Fastest & most stable)
    if (groq) {
      try {
        const chatCompletion = await groq.chat.completions.create({
          messages: [
            { role: "system", content: SYSTEM_INSTRUCTION },
            ...messages.map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text })),
            { role: "user", content: textToSend }
          ],
          model: "llama-3.3-70b-versatile", // Updated to the latest stable model
        });

        const botResponse = chatCompletion.choices[0].message.content;
        setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        setIsTyping(false);
        return;
      } catch (e) {
        console.warn("Groq failed, trying Gemini...", e);
      }
    }

    // 2. TRY GEMINI (Fallback)
    try {
      if (!geminiKey || geminiKey === 'your_api_key_here') throw new Error("No Gemini Key");
      
      const modelOptions = ["gemini-1.5-flash", "gemini-pro", "gemini-1.5-pro"];
      
      const tryGemini = async (mName) => {
        const currentModel = genAI.getGenerativeModel({ model: mName });
        const context = messages.slice(-4).map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`).join('\n');
        const prompt = `${SYSTEM_INSTRUCTION}\n\nRecent History:\n${context}\n\nUser: ${textToSend}\nAssistant:`;
        const result = await currentModel.generateContent(prompt);
        return result.response.text();
      };

      let botResponse = "";
      try {
        botResponse = await tryGemini(modelName);
      } catch (err) {
        for (const opt of modelOptions) {
          if (opt === modelName) continue;
          try {
            botResponse = await tryGemini(opt);
            setModelName(opt);
            break;
          } catch (e) { continue; }
        }
        if (!botResponse) throw err;
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
      return;
    } catch (error) {
      console.warn("AI Providers failed. Using smart logic fallback.", error);
      
      // 3. SMART LOGIC (Last Resort)
      setTimeout(() => {
        let botResponse = "";
        const lowerInput = textToSend.toLowerCase();
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
          botResponse = "Hello! I'm Dhanush's AI assistant. Ask me about his projects, skills, or contact info!";
        } else if (lowerInput.includes('project') || lowerInput.includes('work')) {
          botResponse = "Dhanush has worked on a CRM SaaS and a Football System (SPL). Check the Projects section!";
        } else if (lowerInput.includes('skills')) {
          botResponse = "He's an expert in ASP.NET Core, React, and SQL Server.";
        } else if (lowerInput.includes('contact')) {
          botResponse = "You can reach him at dhanushpoothanganam5@gmail.com.";
        } else {
          botResponse = "I'm Dhanush's assistant! Ask me about his software development projects or technical skills!";
        }
        setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  if (!isOpen) return null;
 
  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center md:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      {/* Outer Glow Container - Bottom Sheet on Mobile, Modal on Desktop */}
      <div className="relative bg-[#020617] border border-blue-500/20 w-full md:max-w-lg rounded-t-[2rem] md:rounded-[2rem] shadow-[0_0_80px_-20px_rgba(59,130,246,0.3)] flex flex-col overflow-hidden animate-scale-in h-[90vh] md:max-h-[85vh]">
        
        {/* Decorative Top Glow Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-white/5 to-transparent">
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center bg-black border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] group-hover:border-blue-400/50 transition-all duration-500 rotate-3 group-hover:rotate-0">
                <Orb hoverIntensity={0.8} rotateOnHover={true} hue={190} forceHoverState={true} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 border-[3px] border-[#020617] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
            </div>
            <div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300 font-black text-lg tracking-tight uppercase">
                Dhanush <span className="text-blue-500 text-xs align-top">AI</span>
              </h3>
              <div className="flex items-center space-x-2 mt-0.5">
                <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                   {groqKey ? "Groq Llama 3.3" : "Quantum Engine"} • Core Active
                </p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="group p-2.5 bg-white/5 hover:bg-red-500/10 rounded-xl transition-all duration-300 border border-white/5 hover:border-red-500/30"
          >
            <X size={20} className="text-white/40 group-hover:text-red-400 transition-colors" />
          </button>
        </div>
 
        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-3`}>
              {m.role === 'bot' && (
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 flex-shrink-0 mb-1 shadow-inner">
                  <Bot size={18} className="text-blue-400" />
                </div>
              )}
              <div className={`max-w-[85%] p-4 rounded-2xl shadow-xl leading-relaxed text-[13px] md:text-sm relative overflow-hidden group ${
                m.role === 'user' 
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-none border border-blue-400/30' 
                  : 'bg-white/[0.03] text-blue-50/90 border border-white/10 rounded-bl-none backdrop-blur-md'
              }`}>
                {/* Subtle sheen for bot messages */}
                {m.role === 'bot' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                )}
                {m.text}
              </div>
              {m.role === 'user' && (
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0 mb-1">
                  <User size={18} className="text-white/40" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Bot size={18} className="text-blue-400" />
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-4 px-6 rounded-2xl rounded-bl-none">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-bounce [animation-duration:1s]"></div>
                  <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-bounce [animation-duration:1s] [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
 
        {/* Quick Replies - Neon Pills */}
        <div className="px-6 py-3 flex space-x-3 overflow-x-auto no-scrollbar bg-black/20 border-t border-white/5">
          {[
            { label: 'Projects', icon: '🚀' },
            { label: 'Skills', icon: '🛠️' },
            { label: 'Contact', icon: '📧' },
            { label: 'Experience', icon: '🎓' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => handleSend(item.label)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-blue-500/5 border border-blue-500/10 text-blue-100/70 text-xs hover:bg-blue-500/20 hover:text-white hover:border-blue-400/40 transition-all duration-300 whitespace-nowrap active:scale-95 shadow-sm"
            >
              <span>{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
 
        {/* Input - High Tech Field */}
        <div className="p-6 bg-black/40 border-t border-white/5">
          <div className="relative flex items-center group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-within:opacity-20 blur-md transition-opacity duration-500"></div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the system..."
              className="relative w-full bg-[#030712] border border-white/10 rounded-2xl p-5 pr-16 text-white placeholder-white/10 focus:outline-none focus:border-blue-500/50 transition-all text-sm shadow-inner"
            />
            <button 
              onClick={() => handleSend()}
              className="absolute right-2.5 p-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all active:scale-90 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4">
             <div className="flex space-x-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-blue-500/20 rounded-full"></div>)}
             </div>
             <p className="text-[9px] text-blue-400/20 font-black uppercase tracking-[0.3em]">
               System v2.5 // Neural Interface
             </p>
             <div className="flex space-x-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-blue-500/20 rounded-full"></div>)}
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.3);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
};

export default ChatBot;
