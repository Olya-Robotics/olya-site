import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookOpen, FlaskConical, Lightbulb, Users, Target, Puzzle } from "lucide-react";
const aplicacoes = [{
  icon: BookOpen,
  title: "Uso em Salas de Aula",
  description: "Integração da robótica ao currículo regular, permitindo abordagens práticas em disciplinas como matemática, física, ciências e tecnologia.",
  items: ["Atividades práticas para fixação de conceitos teóricos", "Projetos de curta duração integrados ao planejamento", "Demonstrações interativas para engajamento dos estudantes", "Avaliações baseadas em competências práticas"]
}, {
  icon: FlaskConical,
  title: "Laboratórios e Espaços Maker",
  description: "Implementação de ambientes dedicados ao aprendizado prático, experimentação e desenvolvimento de projetos de robótica.",
  items: ["Estruturação de laboratórios de robótica educacional", "Espaços para prototipagem e experimentação livre", "Ambiente para desenvolvimento de projetos de longo prazo", "Integração com outras áreas tecnológicas"]
}, {
  icon: Lightbulb,
  title: "Projetos Pedagógicos e Competições",
  description: "Desenvolvimento de projetos especiais e preparação para competições de robótica em diferentes níveis.",
  items: ["Feiras de ciências e mostras tecnológicas", "Olimpíadas e torneios de robótica", "Projetos de iniciação científica", "Trabalhos de conclusão e projetos integradores"]
}];
const metodologias = [{
  icon: Target,
  title: "Aprendizagem Baseada em Projetos",
  description: "Os estudantes desenvolvem projetos completos, desde a concepção até a implementação, desenvolvendo autonomia e responsabilidade."
}, {
  icon: Puzzle,
  title: "Resolução de Problemas",
  description: "Desafios práticos que estimulam o pensamento crítico e a busca por soluções criativas e funcionais."
}, {
  icon: Users,
  title: "Trabalho Colaborativo",
  description: "Atividades em grupo que desenvolvem habilidades de comunicação, liderança e cooperação entre os estudantes."
}];
export default function Aplicacoes() {
  return <Layout>
      <PageHeader title="Aplicações Educacionais" description="Como a robótica educacional pode ser integrada ao ambiente escolar, alinhada às metodologias ativas e às diretrizes curriculares." breadcrumb="Aplicações" />

      {/* Contextos de Aplicação */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Contextos de Aplicação
            </h2>
            <p className="text-muted-foreground text-lg">
              As soluções OLYA podem ser aplicadas em diferentes contextos educacionais, 
              adaptando-se às necessidades e objetivos de cada instituição.
            </p>
          </div>

          <div className="space-y-8">
            {aplicacoes.map((app, index) => <div key={index} className="rounded-xl border border-border bg-card p-8 shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <app.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {app.description}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {app.items.map((item, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {item}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Metodologias */}
      <section className="py-16 lg:py-24 bg-destructive-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Alinhamento com Metodologias Ativas
            </h2>
            <p className="text-muted-foreground text-lg">
              A robótica educacional é uma ferramenta natural para implementação de metodologias 
              que colocam o estudante como protagonista do processo de aprendizagem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {metodologias.map((item, index) => <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-card text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* STEAM e BNCC */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Metodologia STEAM
              </h3>
              <p className="text-muted-foreground mb-6">
                As soluções OLYA são desenvolvidas seguindo os princípios da metodologia STEAM, 
                promovendo a integração entre:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold text-foreground">Science</p>
                  <p className="text-sm text-muted-foreground">Ciências</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold text-foreground">Technology</p>
                  <p className="text-sm text-muted-foreground">Tecnologia</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold text-foreground">Engineering</p>
                  <p className="text-sm text-muted-foreground">Engenharia</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center">
                  <p className="font-semibold text-foreground">Arts</p>
                  <p className="text-sm text-muted-foreground">Artes</p>
                </div>
                <div className="rounded-lg bg-secondary/50 p-4 text-center col-span-2">
                  <p className="font-semibold text-foreground">Mathematics</p>
                  <p className="text-sm text-muted-foreground">Matemática</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Alinhamento Curricular
              </h3>
              <p className="text-muted-foreground mb-6">
                Os materiais pedagógicos e atividades propostas são desenvolvidos considerando 
                as competências e habilidades previstas nas diretrizes curriculares nacionais.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Desenvolvimento de competências digitais
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Pensamento científico, crítico e criativo
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Cultura digital e uso ético da tecnologia
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Trabalho e projeto de vida
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  Repertório cultural e artístico
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}