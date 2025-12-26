import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cog, Settings, Zap, Users, GraduationCap, Layers, Package, Puzzle, Trophy } from "lucide-react";
const bracoFeatures = [{
  icon: Cog,
  text: "Múltiplos graus de liberdade para movimentos precisos"
}, {
  icon: Settings,
  text: "Interface de programação intuitiva e acessível"
}, {
  icon: Zap,
  text: "Compatível com diferentes níveis de ensino"
}, {
  icon: Users,
  text: "Estrutura robusta para uso em ambiente escolar"
}];
const bracoAplicacoes = ["Ensino de conceitos de automação e robótica", "Introdução à programação e lógica computacional", "Projetos interdisciplinares STEAM", "Simulação de processos industriais", "Competições e feiras de ciências"];
const kitsTypes = [{
  title: "Kit Iniciação",
  description: "Ideal para primeiros contatos com robótica, voltado para estudantes do ensino fundamental.",
  features: ["Componentes básicos de eletrônica", "Montagens simplificadas", "Guia ilustrado para professores"],
  icon: Puzzle
}, {
  title: "Kit Intermediário",
  description: "Para aprofundamento em conceitos de programação e mecânica, adequado ao ensino fundamental II e médio.",
  features: ["Sensores e atuadores diversos", "Microcontrolador programável", "Projetos estruturados"],
  icon: Layers
}, {
  title: "Kit Avançado / Competição",
  description: "Recursos completos para projetos complexos e participação em competições de robótica.",
  features: ["Componentes de alta performance", "Materiais para construção livre", "Suporte para competições"],
  icon: Trophy
}];
export default function Produtos() {
  return <Layout>
      <PageHeader title="Portfólio de Produtos" description="Equipamentos e kits de robótica educacional desenvolvidos para atender às necessidades de instituições de ensino." breadcrumb="Produtos" />

      {/* Braço Robótico */}
      <section id="braco-robotico" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Cog className="h-4 w-4" />
                Produto 1
              </div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
                Braço Robótico Educacional
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Equipamento projetado especificamente para ambientes educacionais, o Braço Robótico 
                Educacional OLYA permite o aprendizado prático de conceitos fundamentais de automação, 
                programação e mecatrônica.
              </p>
              <p className="text-muted-foreground mb-8">
                Desenvolvido com foco na segurança e durabilidade para uso em salas de aula e 
                laboratórios, o equipamento oferece uma experiência de aprendizado que aproxima 
                os estudantes da realidade da indústria 4.0.
              </p>

              <h3 className="text-lg font-semibold text-foreground mb-4">
                Principais Características
              </h3>
              <ul className="space-y-3 mb-8">
                {bracoFeatures.map((feature, index) => <li key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <span className="text-muted-foreground">{feature.text}</span>
                  </li>)}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  Público Atendido
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ensino Fundamental (anos finais)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ensino Médio
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Ensino Técnico e Profissionalizante
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Cursos de Graduação em Engenharia
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Aplicações Educacionais
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {bracoAplicacoes.map((app, index) => <li key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      {app}
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kits de Robótica */}
      <section id="kits" className="py-16 lg:py-24 scroll-mt-20 bg-destructive-foreground">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <Package className="h-4 w-4" />
              Produto 2
            </div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Kits de Robótica Educacional
            </h2>
            <p className="text-muted-foreground text-lg">
              Conjuntos completos para implementação de laboratórios e atividades de robótica, 
              desenvolvidos para diferentes níveis de ensino e objetivos pedagógicos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {kitsTypes.map((kit, index) => <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <kit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {kit.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {kit.description}
                </p>
                <ul className="space-y-2">
                  {kit.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" />
                      {feature}
                    </li>)}
                </ul>
              </div>)}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Aplicações Pedagógicas
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  Desenvolvimento do pensamento computacional
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  Integração de conceitos de matemática, física e tecnologia
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  Trabalho colaborativo e resolução de problemas
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  Projetos interdisciplinares e feiras de ciências
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Compatibilidade STEAM
              </h3>
              <p className="text-muted-foreground mb-4">
                Todos os kits são desenvolvidos seguindo a metodologia STEAM 
                (Science, Technology, Engineering, Arts, Mathematics), promovendo 
                a integração de diferentes áreas do conhecimento.
              </p>
              <p className="text-muted-foreground">
                Os materiais pedagógicos incluem orientações para conexão com 
                componentes curriculares e sugestões de projetos interdisciplinares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl border border-border bg-card p-8 shadow-card">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Documentação Técnica Completa
              </h3>
              <p className="text-muted-foreground mt-1">
                Acesse fichas técnicas, catálogos e especificações detalhadas dos produtos.
              </p>
            </div>
            <Button asChild variant="institutional" size="lg">
              <Link to="/documentacao">
                Acessar Documentação
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
}