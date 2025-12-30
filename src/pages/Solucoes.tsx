import { GraduationCap, Users, FileText, Building, Wrench, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SectionTitle } from "@/components/SectionTitle";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Sistema de Gestão Escolar",
    problem: "Escolas e cursos costumam enfrentar dificuldades para organizar alunos, turmas, informações acadêmicas e processos administrativos.",
    solution: "Um sistema de gestão escolar que centraliza informações em um único painel, facilitando o controle e a visualização dos dados.",
    features: [
      "Painel administrativo simples",
      "Organização de dados acadêmicos",
      "Navegação clara e intuitiva",
      "Estrutura preparada para expansão",
    ],
    note: "Projeto demonstrativo desenvolvido para apresentar a estrutura e o funcionamento de um sistema educacional.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Sistema de Controle de Clientes",
    problem: "Empresas perdem informações importantes ao anotar dados de clientes em WhatsApp, papel ou planilhas soltas.",
    solution: "Um sistema de controle de clientes que permite cadastrar, organizar e consultar informações de forma rápida e segura.",
    features: [
      "Cadastro de clientes",
      "Organização centralizada",
      "Facilidade de consulta",
      "Mais controle no atendimento",
    ],
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Sistema de Orçamentos e Serviços",
    problem: "Orçamentos feitos manualmente geram erros, retrabalho e falta de histórico.",
    solution: "Um sistema de orçamentos e serviços que organiza propostas, valores e histórico de atendimento.",
    features: [
      "Cadastro de serviços",
      "Registro de orçamentos",
      "Histórico de atendimentos",
      "Relatórios simples",
    ],
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Site para Empresas de Serviços",
    problem: "Empresas sem site profissional passam menos confiança e perdem oportunidades de negócio.",
    solution: "Sites desenvolvidos especialmente para empresas de serviços, com foco em clareza, credibilidade e facilidade de contato.",
    features: [
      "Site profissional e responsivo",
      "Páginas claras e objetivas",
      "Botão de contato via WhatsApp",
      "Estrutura otimizada para Google local",
    ],
  },
];

const workItems = [
  "Como sua empresa funciona hoje",
  "Onde estão os gargalos",
  "O que pode ser automatizado ou organizado",
];

const customNeeds = [
  "Organizar processos internos",
  "Automatizar tarefas",
  "Centralizar informações",
  "Criar um sistema específico",
];

const whyChoose = [
  "Soluções simples e funcionais",
  "Nada de sistemas engessados",
  "Desenvolvido sob medida",
  "Atendimento direto com o desenvolvedor",
  "Foco na realidade da sua empresa",
];

const Solucoes = () => {
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
              Nossas Soluções
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-slide-up">
              Soluções web <span className="text-gradient">práticas e funcionais</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-100">
              A DN4WEB desenvolve soluções web práticas e funcionais para empresas que precisam organizar processos internos, melhorar o atendimento e utilizar a tecnologia de forma simples.
            </p>
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              badge="Metodologia"
              title="Como trabalhamos com"
              highlight="soluções"
            />
            
            <div className="glass-card p-8">
              <p className="text-lg text-foreground/90 mb-6">
                Antes de desenvolver qualquer projeto, a DN4WEB entende:
              </p>
              
              <ul className="space-y-3 mb-6">
                {workItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-muted-foreground">
                A partir disso, criamos uma <span className="text-accent font-semibold">solução sob medida</span>, sem complicação e sem recursos desnecessários.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solutions Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Exemplos"
            title="Conheça algumas de nossas"
            highlight="soluções"
            description="Cada solução pode ser adaptada de acordo com a necessidade do seu negócio"
          />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-card p-8 hover-lift animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-6">
                  {solution.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-destructive uppercase tracking-wide mb-1">O problema</h4>
                    <p className="text-muted-foreground text-sm">{solution.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-1">A solução</h4>
                    <p className="text-foreground/80 text-sm">{solution.solution}</p>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">O que a solução oferece:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {solution.note && (
                  <p className="text-xs text-muted-foreground italic mb-4">{solution.note}</p>
                )}
                
                <Button variant="accent" className="w-full" asChild>
                  <Link to="/contato">Quero uma solução parecida</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Solutions Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              badge="Personalização"
              title="Soluções"
              highlight="personalizadas"
            />
            
            <div className="glass-card p-8 text-center">
              <div className="w-16 h-16 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8" />
              </div>
              
              <p className="text-lg text-foreground/90 mb-6">
                Além dos exemplos acima, a DN4WEB desenvolve soluções personalizadas, de acordo com a necessidade de cada empresa.
              </p>
              
              <p className="text-muted-foreground mb-6">Se sua empresa precisa:</p>
              
              <ul className="inline-flex flex-wrap justify-center gap-3 mb-8">
                {customNeeds.map((need, index) => (
                  <li key={index} className="px-4 py-2 rounded-full bg-primary/20 text-foreground text-sm">
                    {need}
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-accent font-semibold">
                Nós desenvolvemos a solução ideal para você.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Diferenciais"
            title="Por que usar soluções"
            highlight="DN4WEB?"
          />
          
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {whyChoose.map((item, index) => (
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
              Se você precisa de uma solução web para organizar processos, a{" "}
              <span className="text-gradient">DN4WEB</span> pode ajudar.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10">
              Atendimento para Maracanaú, Fortaleza e Caucaia.
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

export default Solucoes;
