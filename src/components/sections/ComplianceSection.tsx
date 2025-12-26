import { Shield, FileCheck, Headphones, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Conformidade",
    description: "Produtos e processos em conformidade com as exigências legais e normativas para aquisições públicas.",
  },
  {
    icon: FileCheck,
    title: "Documentação Completa",
    description: "Catálogos, fichas técnicas e documentos institucionais disponíveis para processos licitatórios.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Equipe especializada para atendimento a órgãos públicos e instituições de ensino.",
  },
  {
    icon: RefreshCw,
    title: "Garantia e Manutenção",
    description: "Política de garantia clara e serviços de manutenção para continuidade das operações.",
  },
];

export function ComplianceSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Conformidade, Qualidade e Suporte
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              A OLYA mantém padrões rigorosos de qualidade e documentação, garantindo transparência e 
              confiabilidade em processos de aquisição institucional e licitatória.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Nossa estrutura está preparada para atender às demandas de órgãos públicos, 
              com documentação técnica completa e suporte especializado para cada etapa do processo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="institutional" size="lg">
                <Link to="/documentacao">
                  Acessar Documentação
                </Link>
              </Button>
              <Button asChild variant="outline-primary" size="lg">
                <Link to="/contato">
                  Fale Conosco
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-accent/30"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
