import { BookOpen, Lightbulb, Users, Wrench } from "lucide-react";
const commitments = [{
  icon: BookOpen,
  title: "Educação de Qualidade",
  description: "Comprometidos com o desenvolvimento de competências tecnológicas essenciais para o século XXI."
}, {
  icon: Lightbulb,
  title: "Inovação Pedagógica",
  description: "Soluções alinhadas às metodologias ativas e ao ensino por competências, integrando teoria e prática."
}, {
  icon: Users,
  title: "Formação de Educadores",
  description: "Capacitação e suporte contínuo para professores, garantindo a implementação efetiva dos recursos."
}, {
  icon: Wrench,
  title: "Suporte Técnico",
  description: "Assistência técnica especializada e materiais de apoio para manutenção e atualização dos equipamentos."
}];
export function CommitmentSection() {
  return <section className="py-16 lg:py-24 bg-secondary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Compromisso com Educação e Tecnologia
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            A OLYA atua com responsabilidade e dedicação para contribuir com a transformação educacional no Brasil.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item, index) => <div key={index} className="text-center group">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}