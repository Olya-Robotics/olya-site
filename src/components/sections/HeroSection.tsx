import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Cpu, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import roboticaEducacionalImg from "@/assets/robotica-educacional.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-olya-blue via-olya-blue-dark to-olya-blue-deep py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
            <Award className="h-4 w-4" />
            <span>Soluções para Educação Pública e Privada</span>
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Soluções em Robótica Educacional para{" "}
            <span className="text-primary-foreground/90">Ensino e Formação Tecnológica</span>
          </h1>
          
          <p className="mt-6 text-lg text-primary-foreground/80 md:text-xl max-w-3xl mx-auto">
            A OLYA desenvolve e fornece equipamentos e kits de robótica educacional para instituições de ensino, 
            contribuindo para a formação de competências tecnológicas e o desenvolvimento de metodologias ativas de aprendizagem.
          </p>

          <div className="mt-10">
            <img
              src={roboticaEducacionalImg}
              alt="Robotica educacional"
              className="mx-auto w-full max-w-3xl rounded-2xl shadow-2xl"
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="xl" className="bg-card text-primary hover:bg-card/90 shadow-lg">
              <Link to="/produtos">
                Conheça Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-card text-primary hover:bg-card/90 shadow-lg">
              <Link to="/documentacao">
                Documentação Institucional
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mt-3 text-2xl font-bold text-primary-foreground">STEAM</p>
              <p className="text-sm text-primary-foreground/70">Metodologia</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mt-3 text-2xl font-bold text-primary-foreground">100%</p>
              <p className="text-sm text-primary-foreground/70">Suporte Nacional</p>
            </div>
            <div className="flex flex-col items-center col-span-2 sm:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/10">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <p className="mt-3 text-2xl font-bold text-primary-foreground">Brasil</p>
              <p className="text-sm text-primary-foreground/70">Atuação Nacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
