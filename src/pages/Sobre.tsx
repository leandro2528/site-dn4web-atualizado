import { Target, Eye, Cog, User, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionTitle } from "@/components/SectionTitle";

const workProcess = [
  "Como sua empresa funciona",
  "Quais são os principais desafios",
  "Onde a tecnologia pode ajudar",
];

const whyChoose = [
  "Atendimento direto com o desenvolvedor",
  "Soluções pensadas para empresas locais",
  "Nada de soluções genéricas",
  "Foco em organização e eficiência",
  "Compromisso com qualidade e resultado",
];

const locations = ["Maracanaú", "Fortaleza", "Caucaia"];

const Sobre = () => {
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
              Sobre a DN4WEB
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Quem <span className="text-gradient">somos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
              A DN4WEB é uma agência de desenvolvimento web focada em criar sites e sistemas simples, funcionais e eficientes para pequenas e médias empresas.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Nosso trabalho é ajudar empresas a <span className="text-accent font-semibold">organizar processos</span>, <span className="text-accent font-semibold">melhorar o atendimento</span> e utilizar a tecnologia de forma prática, sem complicação e sem soluções engessadas.
              </p>
            </div>
            
            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A missão da DN4WEB é simplificar o uso da tecnologia para empresas que precisam de soluções digitais eficientes, mas não querem sistemas complexos ou difíceis de usar.
                </p>
                <p className="text-foreground mt-4 font-medium">
                  Acreditamos que a tecnologia deve ajudar no dia a dia do negócio, e não atrapalhar.
                </p>
              </div>
              
              <div className="glass-card p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                  <Cog className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Como Trabalhamos</h2>
                <p className="text-muted-foreground mb-4">
                  Cada projeto da DN4WEB começa com uma conversa para entender:
                </p>
                <ul className="space-y-2">
                  {workProcess.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-4">
                  A partir disso, desenvolvemos soluções sob medida, com foco em organização, clareza e resultado.
                </p>
              </div>
            </div>
            
            {/* Founder Section */}
            <div className="glass-card p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <User className="w-16 h-16 text-foreground" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-4">Quem está por trás da DN4WEB</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A DN4WEB foi fundada por <span className="text-foreground font-semibold">Leandro Carvalho</span>, desenvolvedor web com experiência em criação de sites profissionais e desenvolvimento de sistemas web personalizados.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Com conhecimento em WordPress e desenvolvimento de sistemas sob medida, Leandro atua diretamente em cada projeto, garantindo atendimento próximo, comunicação clara e soluções bem estruturadas.
                  </p>
                  <p className="text-accent font-semibold">
                    Na DN4WEB, você fala diretamente com quem desenvolve o projeto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Diferenciais"
            title="Por que escolher a"
            highlight="DN4WEB?"
          />
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {whyChoose.map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-center text-muted-foreground mt-8">
              Cada projeto é tratado com atenção e responsabilidade, do início à entrega.
            </p>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Nossa Atuação</h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              A DN4WEB atende empresas de:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {locations.map((location, index) => (
                <span key={index} className="px-6 py-3 rounded-full bg-primary/20 text-foreground font-semibold text-lg">
                  {location}
                </span>
              ))}
            </div>
            
            <p className="text-muted-foreground">
              Com foco em negócios locais que precisam de presença digital profissional e organização interna.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_30%_/_0.3)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Se você procura uma agência que entenda a realidade da sua empresa, a{" "}
              <span className="text-gradient">DN4WEB</span> pode ajudar.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Vamos conversar sobre a melhor solução para o seu negócio.
            </p>
            
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5585981113071?text=Ol%C3%A1%2C%20vi%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Entre em contato agora pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sobre;
