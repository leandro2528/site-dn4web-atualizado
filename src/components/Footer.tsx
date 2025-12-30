import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import logo from "../assets/imagens/logo-dn4web.png";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold">
                <img src={logo} alt="Logo da DN4WEB" style={{ width: "120px", height: "auto" }}/>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desenvolvimento de sites e sistemas web para empresas de Maracanaú, Fortaleza e Caucaia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link>
              <Link to="/servicos" className="text-muted-foreground hover:text-accent transition-colors">Serviços</Link>
              <Link to="/solucoes" className="text-muted-foreground hover:text-accent transition-colors">Soluções</Link>
              <Link to="/projetos" className="text-muted-foreground hover:text-accent transition-colors">Projetos</Link>
              <Link to="/sobre" className="text-muted-foreground hover:text-accent transition-colors">Sobre</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Serviços</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-muted-foreground">Sites Profissionais</span>
              <span className="text-muted-foreground">Sites com Área Admin</span>
              <span className="text-muted-foreground">Sistemas Web</span>
              <span className="text-muted-foreground">Soluções Personalizadas</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5585981113071?text=Ol%C3%A1%2C%20vi%20pelo%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                (85) 9 8111-3071
              </a>
              <a
                href="mailto:leandrodev83@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                leandrodev83@gmail.com
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Rua B 351, Novo Oriente - Maracanaú, CE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 DN4WEB. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Maracanaú • Fortaleza • Caucaia
          </p>
        </div>
      </div>
    </footer>
  );
}
