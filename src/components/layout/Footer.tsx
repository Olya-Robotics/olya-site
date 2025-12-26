import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import olyaLogo from "@/assets/olya-logo.png";
const footerLinks = {
  institucional: [{
    name: "Quem Somos",
    href: "/quem-somos"
  }, {
    name: "Missão e Valores",
    href: "/quem-somos#missao"
  }, {
    name: "Contato",
    href: "/contato"
  }],
  produtos: [{
    name: "Braço Robótico",
    href: "/produtos#braco-robotico"
  }, {
    name: "Kits de Robótica",
    href: "/produtos#kits"
  }, {
    name: "Aplicações",
    href: "/aplicacoes"
  }],
  suporte: [{
    name: "Documentação",
    href: "/documentacao"
  }, {
    name: "Suporte Técnico",
    href: "/suporte"
  }, {
    name: "Materiais de Apoio",
    href: "/suporte#materiais"
  }]
};
export function Footer() {
  return <footer className="border-t border-border bg-card">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={olyaLogo} alt="OLYA Tecnologia" className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Soluções em robótica educacional para formação tecnológica e inovação no ensino brasileiro.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@olya.cc</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(48) 93618-0086</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Florianópolis, SC - Brasil</span>
              </div>
            </div>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Institucional
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.institucional.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Produtos
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.produtos.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Suporte
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.suporte.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2026 OLYA Tecnologia LTDA. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">olya.cc</p>
          </div>
        </div>
      </div>
    </footer>;
}
