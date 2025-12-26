import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-olya-blue to-olya-blue-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
            Documentação Institucional Disponível
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Acesse catálogos, fichas técnicas e documentos institucionais para processos licitatórios e avaliações técnicas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/documentacao">
                Acessar Documentação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-card text-primary hover:bg-card/90">
              <Link to="/contato">
                Contato Institucional
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
