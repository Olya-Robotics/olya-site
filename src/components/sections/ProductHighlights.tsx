import { Link } from "react-router-dom";
import { ArrowRight, Cog, Package, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import bracoRoboticoImg from "@/assets/braco-robotico.jpg";
import kitsImg from "@/assets/Imagem _kit.jpg";
import bracoMonitorImg from "@/assets/braco_monitor.png";

const products = [
  {
    id: "braco-robotico",
    title: "Braço Robótico Educacional",
    description: "Equipamento projetado para ambientes educacionais, permitindo o aprendizado prático de conceitos de automação, programação e mecatrônica.",
    icon: Cog,
    image: bracoRoboticoImg,
    features: ["Programação intuitiva", "Múltiplos eixos de movimento", "Material didático incluso"],
    href: "/produtos#braco-robotico",
  },
  {
    id: "kits",
    title: "Kits de Robótica Educacional",
    description: "Conjuntos completos para implementação de laboratórios de robótica, com componentes eletrônicos, estruturais e material pedagógico.",
    icon: Package,
    image: kitsImg,
    features: ["Níveis iniciante a avançado", "Compatível com STEAM", "Guias para professores"],
    href: "/produtos#kits",
  },
  {
    id: "formacao",
    title: "Robótica Educacional",
    description: "Soluções integradas que combinam hardware, software e metodologia para a implementação efetiva de robótica no currículo escolar.",
    icon: GraduationCap,
    image: bracoMonitorImg,
    features: ["Alinhado à BNCC", "Formação de educadores", "Suporte pedagógico"],
    href: "/aplicacoes",
  },
];

export function ProductHighlights() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Portfólio de Soluções
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Equipamentos e materiais desenvolvidos para atender às necessidades de instituições de ensino em todo o Brasil.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-xl border border-border bg-card overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-accent/50"
            >
              {product.image ? (
                <div className="w-full h-48 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="p-6 pb-0">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <product.icon className="h-6 w-6" />
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-accent hover:bg-transparent">
                  <Link to={product.href} className="flex items-center gap-2">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
