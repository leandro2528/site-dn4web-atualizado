import { GraduationCap, Building, Users, Lightbulb, MessageCircle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionTitle } from "@/components/SectionTitle";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Sistema de Gestão Escolar",
    type: "Sistema web demonstrativo",
    description: "Sistema web desenvolvido como projeto demonstrativo, com foco em organização de informações escolares e facilidade de navegação.",
    features: [
      "Painel administrativo",
      "Interface organizada",
      "Navegação intuitiva",
      "Estrutura preparada para expansão",
    ],
    objective: "Demonstrar a estrutura e funcionamento de um sistema de gestão educacional.",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Site Institucional para Empresa de Serviços",
    type: "Site institucional",
    description: "Modelo de site institucional desenvolvido para empresas que desejam presença digital profissional e mais credibilidade no mercado.",
    features: [
      "Layout profissional",
      "Site responsivo (desktop e mobile)",
      "Estrutura clara de páginas",
      "Botão de contato via WhatsApp",
    ],
    objective: "Apresentar como um site bem estruturado melhora a comunicação com clientes.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Sistema de Controle de Clientes",
    type: "Sistema web demonstrativo",
    description: "Sistema web demonstrativo criado para apresentar uma solução simples de organização de clientes e informações de atendimento.",
    features: [
      "Cadastro de clientes",
      "Organização centralizada",
      "Facilidade de consulta",
      "Interface simples",
    ],
    objective: "Mostrar como a organização de dados melhora o atendimento ao cliente.",
  },
];

const customOptions = [
  "Um sistema específico",
  "Um site sob medida",
  "Automação de processos",
  "Organização de dados",
];

const Projetos = () => {
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
              Nossos Projetos
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Projetos <span className="text-gradient">demonstrativos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
              Nesta página você encontra projetos demonstrativos e soluções desenvolvidas para apresentar como a DN4WEB cria sites e sistemas web funcionais.
            </p>
          </div>
        </div>
      </section>
      
      {/* Info Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-primary/10 border border-primary/20">
              <Info className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-2">Como usar esta página</h3>
                <p className="text-muted-foreground">
                  Os projetos apresentados servem para mostrar organização de sistemas, interface e usabilidade, estrutura técnica e possibilidades de automação. Eles ajudam você a visualizar como a tecnologia pode ser aplicada ao seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-8 md:p-10 hover-lift animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                        {project.icon}
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">
                          {project.type}
                        </span>
                        <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>
                    
                    <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Funcionalidades demonstradas:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Objetivo:</span>
                      <span>{project.objective}</span>
                    </div>
                  </div>
                  
                  {/* Right Content - CTA */}
                  <div className="lg:w-64 flex-shrink-0 flex flex-col justify-end">
                    <Button variant="accent" className="w-full" asChild>
                      <Link to="/contato">Quero uma solução parecida</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Projects Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Projetos Personalizados</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Além dos projetos apresentados, a DN4WEB desenvolve projetos personalizados, de acordo com a necessidade de cada empresa.
            </p>
            
            <p className="text-foreground mb-4">Se você precisa:</p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {customOptions.map((option, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-primary/20 text-foreground">
                  {option}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-accent font-semibold">
              Nós desenvolvemos a solução ideal para você.
            </p>
          </div>
        </div>
      </section>
      
      {/* Transparency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Transparência e Compromisso</h2>
              <p className="text-muted-foreground mb-4">
                A DN4WEB preza pela transparência. Por isso, deixamos claro que alguns projetos são demonstrativos, criados para apresentar possibilidades técnicas e visuais.
              </p>
              <p className="text-foreground">
                Cada projeto contratado é desenvolvido com foco na real necessidade do cliente, respeitando prazos, escopo e orçamento.
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
              Gostou de algum projeto ou quer uma solução parecida para sua empresa?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Vamos conversar e criar a solução ideal para o seu negócio.
            </p>
            
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5585981113071?text=Ol%C3%A1%2C%20vi%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                Entre em contato com a DN4WEB pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projetos;
