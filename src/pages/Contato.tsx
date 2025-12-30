import { useState } from "react";
import { MessageCircle, Mail, MapPin, Send, CheckCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionTitle } from "@/components/SectionTitle";
import { useToast } from "@/hooks/use-toast";

const helpItems = [
  "Criar ou melhorar seu site",
  "Organizar atendimento e informações",
  "Automatizar processos simples",
  "Desenvolver sistemas web sob medida",
];

const processSteps = [
  { number: "1", title: "Entendemos sua necessidade" },
  { number: "2", title: "Analisamos a melhor solução" },
  { number: "3", title: "Enviamos uma proposta clara" },
  { number: "4", title: "Iniciamos o projeto após aprovação" },
];

const whyContact = [
  "Atendimento direto com o desenvolvedor",
  "Comunicação clara",
  "Soluções sob medida",
  "Foco na realidade do seu negócio",
];

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais rápido possível.",
    });
    
    setFormData({
      nome: "",
      empresa: "",
      whatsapp: "",
      email: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_20%_/_0.5)_0%,transparent_60%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-fade-in">
              Contato
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Vamos <span className="text-gradient">conversar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
              Se você precisa de um site profissional, um sistema web ou quer organizar processos da sua empresa, a DN4WEB está pronta para ajudar.
            </p>
          </div>
        </div>
      </section>
      
      {/* How We Help Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-xl font-display font-bold text-foreground mb-4">Como podemos ajudar?</h2>
              <p className="text-muted-foreground mb-4">Atendemos empresas que precisam:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {helpItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4">
                Se você tem uma ideia ou um problema para resolver, <span className="text-accent font-semibold">fale com a gente</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Options & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <SectionTitle
                    badge="Formas de Contato"
                    title="Entre em contato"
                    centered={false}
                  />
                </div>
                
                {/* WhatsApp */}
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground text-sm mb-3">Atendimento rápido e direto.</p>
                      <Button variant="whatsapp" size="sm" asChild>
                        <a href="https://wa.me/5585981113071?text=Ol%C3%A1%2C%20vi%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                          (85) 9 8111-3071
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground text-sm mb-2">Para orçamentos e informações detalhadas.</p>
                      <a href="mailto:leandrodev83@gmail.com" className="text-accent hover:underline">
                        leandrodev83@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">Atendimento Regional</h3>
                      <p className="text-foreground mb-2">Rua B 351, Novo Oriente</p>
                      <p className="text-muted-foreground text-sm mb-3">Maracanaú, CE</p>
                      <p className="text-muted-foreground text-sm mb-2">Atendemos empresas de:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm">Maracanaú</span>
                        <span className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm">Fortaleza</span>
                        <span className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm">Caucaia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">Formulário de Contato</h2>
                  <p className="text-muted-foreground mb-6">
                    Prefere deixar sua mensagem? Preencha o formulário abaixo.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-1.5">
                        Nome *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-secondary/50 border-border/50"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-1.5">
                        Empresa
                      </label>
                      <Input
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                        className="bg-secondary/50 border-border/50"
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-medium text-foreground mb-1.5">
                          WhatsApp *
                        </label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="(85) 99999-9999"
                          required
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-1.5">
                        Mensagem *
                      </label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Descreva o que você precisa..."
                        rows={4}
                        required
                        className="bg-secondary/50 border-border/50 resize-none"
                      />
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                  
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Entraremos em contato o mais rápido possível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Próximos Passos"
            title="O que acontece após o"
            highlight="contato?"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="glass-card p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 font-display font-bold">
                    {step.number}
                  </div>
                  <p className="text-foreground text-sm font-medium">{step.title}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-lg text-accent font-semibold mt-8">
              Tudo de forma simples e transparente.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Diferenciais"
            title="Por que falar com a"
            highlight="DN4WEB?"
          />
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {whyContact.map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3 justify-center mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <User className="w-6 h-6 text-accent" />
              <p className="text-foreground font-medium">
                Aqui você não fala com atendente, fala com quem desenvolve.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_30%_/_0.3)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Pronto para profissionalizar sua empresa com{" "}
              <span className="text-gradient">tecnologia</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Vamos transformar sua ideia em uma solução web eficiente.
            </p>
            
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5585981113071?text=Ol%C3%A1%2C%20vi%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Fale agora com a DN4WEB no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contato;
