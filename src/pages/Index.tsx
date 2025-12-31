import { MessageCircle, Globe, Settings, Code, ArrowRight, CheckCircle, Users, Zap, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { ProblemCard } from "@/components/ProblemCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import imgCard1 from "../assets/imagens/imagem-01.webp";
import imgCard2 from "../assets/imagens/imagem-02.webp";
import imgCard3 from "../assets/imagens/imagem-03.webp";

const problems = [
  "Atendimento desorganizado no WhatsApp",
  "Falta de controle sobre clientes e serviços",
  "Informações espalhadas em papel ou planilhas",
  "Empresa sem site profissional",
  "Processos manuais que tomam tempo",
];

const services = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Sites Profissionais",
    description: "Sites modernos, rápidos e responsivos, pensados para gerar credibilidade e facilitar o contato com seus clientes.",
    features: ["Design profissional", "Integração com WhatsApp", "Cadastro de serviços", "SEO local básico"],
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Sites com Área Administrativa",
    description: "Além do site, sua empresa passa a ter um painel interno para organizar informações importantes.",
    features: ["Cadastro de clientes", "Cadastro de serviços", "Área restrita", "Relatórios simples"],
    featured: true,
  },
  {
    icon: <Code className="w-7 h-7" />,
    title: "Sistemas Web Sob Medida",
    description: "Desenvolvemos sistemas personalizados para empresas que precisam automatizar e organizar processos internos.",
    features: ["Sistema exclusivo", "Login por nível de usuário", "Controle completo de dados", "Dashboard funcional"],
  },
];

const differentials = [
  { icon: <Users className="w-6 h-6" />, title: "Atendimento Direto", description: "Fale diretamente com o desenvolvedor do seu projeto" },
  { icon: <Target className="w-6 h-6" />, title: "Soluções Locais", description: "Pensadas especialmente para empresas da região" },
  { icon: <Zap className="w-6 h-6" />, title: "Simples e Funcionais", description: "Nada de complicação ou soluções engessadas" },
  { icon: <Shield className="w-6 h-6" />, title: "Foco em Resultado", description: "Cada projeto visa organização e crescimento" },
];

const projects = [
  {
    image: imgCard1,
    title: "Sistema de Gestão Escolar",
    type: "Sistema Web",
    description: "Sistema demonstrativo para organização de informações escolares.",
    features: ["Painel administrativo", "Navegação intuitiva", "Estrutura escalável"],
  },
  {
    image: imgCard2,
    title: "Sistema de Controle de Clientes",
    type: "Sistema Web",
    description: "Solução para cadastro e organização de clientes.",
    features: ["Cadastro centralizado", "Facilidade de consulta", "Mais controle"],
  },
  {
    image: imgCard3,
    title: "Site Institucional",
    type: "Site Profissional",
    description: "Modelo de site para empresas de serviços locais.",
    features: ["Layout responsivo", "Integração WhatsApp", "SEO otimizado"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_70%_20%_/_0.5)_0%,transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float delay-300" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 animate-fade-in">
            • pequenas e médias empresas em todo o Brasil.
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-6 leading-tight animate-slide-up">
              Sites e sistemas web para empresas{" "}
              <span className="text-gradient">organizarem processos</span> e{" "}
              <span className="text-gradient">venderem mais</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
              A DN4WEB desenvolve soluções digitais simples e eficientes para pequenas e médias empresas que precisam de presença profissional, organização interna e mais resultados no dia a dia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
              <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5585981113071?text=Ol%C3%A1%2C%20vi%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/servicos">
                  Ver Serviços
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="O Problema"
            title="Sua empresa enfrenta algum desses"
            highlight="desafios?"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProblemCard text={problem} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-foreground font-display font-semibold mb-6">
              Se a resposta for sim, a <span className="text-gradient">DN4WEB</span> pode ajudar.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How We Help Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              badge="Nossa Abordagem"
              title="Como a DN4WEB"
              highlight="ajuda?"
            />
            
            <div className="glass-card p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                Criamos <span className="text-accent font-semibold">sites e sistemas web sob medida</span>, focados na realidade da sua empresa, sem complicação e sem soluções genéricas.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nosso objetivo é usar a tecnologia para <span className="text-foreground">organizar processos</span>, <span className="text-foreground">facilitar o atendimento</span> e <span className="text-foreground">ajudar você a vender mais</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Nossas Soluções"
            title="O que"
            highlight="oferecemos"
            description="Soluções pensadas para a realidade do seu negócio"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Differentials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Diferenciais"
            title="Por que escolher a"
            highlight="DN4WEB?"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard {...item} />
              </div>
            ))}
          </div>
          
          <div className="max-w-2xl mx-auto text-center mt-12">
            <p className="text-lg text-muted-foreground">
              Cada projeto é desenvolvido de acordo com a <span className="text-foreground font-semibold">real necessidade do cliente</span>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Projetos e Soluções"
            title="Conheça alguns exemplos de"
            highlight="soluções web"
            description="Desenvolvidas para demonstrar como a DN4WEB organiza sistemas e sites para empresas"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-4 mt-12">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sistemas de gestão
              </span>
              <span className="flex items-center gap-2 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-accent" />
                Painéis administrativos
              </span>
              <span className="flex items-center gap-2 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-accent" />
                Sites institucionais
              </span>
            </div>
            <Button variant="outline" size="lg" className="mt-4" asChild>
              <Link to="/projetos">
                Ver projetos e soluções
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="Sobre a DN4WEB"
              title="Quem somos"
              highlight="nós"
            />
            
            <div className="glass-card p-8 md:p-12 text-center">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                A DN4WEB é uma agência de desenvolvimento web focada em criar sites e sistemas <span className="text-accent font-semibold">simples, práticos e eficientes</span> para pequenas e médias empresas em todo o Brasil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Trabalhamos com foco em organização, clareza e resultado, ajudando empresas a utilizarem a tecnologia como aliada no crescimento do negócio.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/sobre">
                  Saiba mais sobre a DN4WEB
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(270_70%_30%_/_0.3)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Quer organizar o atendimento da sua empresa e{" "}
              <span className="text-gradient">melhorar seus resultados</span> com tecnologia?
            </h2>
            
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

export default Index;
