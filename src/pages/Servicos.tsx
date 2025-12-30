import { Globe, Settings, Code, MessageCircle, ArrowRight, Users, Target, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionTitle } from "@/components/SectionTitle";
import { ProcessStep } from "@/components/ProcessStep";
import { Link } from "react-router-dom";

const services = [
  {
    id: "sites-profissionais",
    icon: <Globe className="w-8 h-8" />,
    title: "Criação de Sites Profissionais",
    targetAudience: "Empresas que precisam de um site profissional, moderno e confiável para apresentar seus serviços, gerar contato pelo WhatsApp e passar mais credibilidade.",
    problem: "Muitas empresas ainda não têm site ou utilizam páginas desatualizadas, que não geram confiança nem facilitam o contato com o cliente.",
    solution: "Criamos sites profissionais, rápidos e responsivos, pensados para facilitar o contato e melhorar a presença digital da sua empresa.",
    features: [
      "Design profissional e responsivo",
      "Páginas institucionais essenciais",
      "Cadastro de serviços",
      "Integração com WhatsApp",
      "Otimização básica para Google (SEO local)",
      "Site fácil de atualizar",
    ],
  },
  {
    id: "sites-admin",
    icon: <Settings className="w-8 h-8" />,
    title: "Site com Área Administrativa",
    targetAudience: "Empresas que, além do site, precisam organizar informações internas, como clientes, serviços, solicitações e dados importantes do negócio.",
    problem: "Atendimento desorganizado, informações espalhadas em WhatsApp, papel ou planilhas, dificultando o controle e a tomada de decisões.",
    solution: "Desenvolvemos sites com área administrativa, permitindo que sua empresa tenha controle interno de forma simples e prática.",
    features: [
      "Tudo do site profissional",
      "Área administrativa restrita",
      "Cadastro de clientes",
      "Cadastro de serviços ou pedidos",
      "Relatórios simples",
      "Interface fácil de usar",
    ],
    featured: true,
  },
  {
    id: "sistemas-web",
    icon: <Code className="w-8 h-8" />,
    title: "Sistemas Web Sob Medida",
    targetAudience: "Empresas que precisam de um sistema exclusivo, desenvolvido de acordo com seus processos internos. Ideal para negócios que desejam automatizar tarefas, organizar grandes volumes de dados e ter mais controle e agilidade.",
    problem: "Processos manuais, retrabalho, falta de controle e sistemas engessados que não atendem à realidade da empresa.",
    solution: "Criamos sistemas web personalizados, desenvolvidos sob medida para atender exatamente às necessidades do seu negócio.",
    features: [
      "Sistema desenvolvido sob medida",
      "Login com níveis de acesso",
      "Cadastro completo de dados (CRUD)",
      "Painel administrativo (dashboard)",
      "Solução escalável",
    ],
  },
];

const processSteps = [
  { number: "1", title: "Conversa inicial", description: "Entendemos sua necessidade" },
  { number: "2", title: "Definição da solução", description: "Escolhemos a melhor abordagem" },
  { number: "3", title: "Desenvolvimento", description: "Criamos o projeto" },
  { number: "4", title: "Testes e ajustes", description: "Garantimos a qualidade" },
  { number: "5", title: "Entrega e suporte", description: "Acompanhamos o início" },
];

const differentials = [
  "Atendimento direto com o desenvolvedor",
  "Soluções pensadas para empresas locais",
  "Nada de soluções prontas que não funcionam",
  "Foco em organização e resultado",
  "Comunicação clara durante todo o projeto",
];

const Servicos = () => {
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
              Nossos Serviços
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Soluções em <span className="text-gradient">desenvolvimento web</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up delay-100">
              A DN4WEB oferece soluções pensadas para a realidade de pequenas e médias empresas que precisam de presença digital, organização interna e processos mais eficientes.
            </p>
            
            <p className="text-lg text-foreground/80 animate-slide-up delay-200">
              Aqui, você não encontra soluções genéricas. Cada projeto é desenvolvido para resolver um <span className="text-accent font-semibold">problema real</span> do seu negócio.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20 md:space-y-32">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`glass-card p-8 md:p-12 ${service.featured ? "border-accent/50 glow-accent" : ""}`}>
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Content */}
                    <div className="flex-1">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.featured ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"}`}>
                        {service.icon}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Para quem é este serviço?</h3>
                          <p className="text-foreground/80">{service.targetAudience}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-destructive uppercase tracking-wide mb-2">O problema</h3>
                          <p className="text-muted-foreground">{service.problem}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-2">A solução DN4WEB</h3>
                          <p className="text-foreground/80">{service.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Content - Features */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="bg-secondary/50 rounded-xl p-6">
                        <h3 className="font-display font-semibold text-foreground mb-4">O que está incluso:</h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button variant={service.featured ? "hero" : "accent"} className="w-full mt-6" asChild>
                          <Link to="/contato">
                            Solicitar Orçamento
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Nosso Processo"
            title="Como funciona o"
            highlight="desenvolvimento"
            description="Nosso processo é simples e transparente"
          />
          
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProcessStep {...step} />
                </div>
              ))}
            </div>
            
            <p className="text-center text-lg text-accent font-semibold mt-8">
              Sem complicação e sem surpresas.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Diferenciais"
            title="Por que escolher a"
            highlight="DN4WEB?"
          />
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_30%_/_0.3)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Se sua empresa precisa de um site profissional ou de um sistema para organizar processos, a{" "}
              <span className="text-gradient">DN4WEB</span> pode ajudar.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Atendimento para Maracanaú, Fortaleza e Caucaia.
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

export default Servicos;
