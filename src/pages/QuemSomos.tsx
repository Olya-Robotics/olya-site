import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Target, Eye, Heart, MapPin } from "lucide-react";
const values = [{
  icon: Target,
  title: "Missão",
  description: "Contribuir para a transformação educacional no Brasil através de soluções em robótica que desenvolvam competências tecnológicas, pensamento crítico e capacidade de inovação nos estudantes."
}, {
  icon: Eye,
  title: "Visão",
  description: "Ser referência nacional em robótica educacional, reconhecida pela qualidade de seus produtos, excelência no atendimento e compromisso com a educação pública e privada brasileira."
}, {
  icon: Heart,
  title: "Valores",
  description: "Ética e transparência nas relações institucionais. Compromisso com a qualidade e inovação. Responsabilidade social e educacional. Respeito aos parceiros e clientes."
}];
export default function QuemSomos() {
  return <Layout>
      <PageHeader title="Quem Somos" description="Conheça a OLYA Robótica Educacional, nossa história, missão e compromisso com a educação tecnológica no Brasil." breadcrumb="Institucional" />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                A OLYA Robótica Educacional nasceu do compromisso de democratizar o acesso à educação tecnológica 
                de qualidade no Brasil. Fundada por profissionais com experiência nas áreas de tecnologia, 
                educação e engenharia, a empresa desenvolve soluções que integram hardware, software e 
                metodologia pedagógica.
              </p>
              <p>
                Ao longo de sua trajetória, a OLYA tem contribuído para a implementação de laboratórios de 
                robótica em escolas públicas e privadas, formando educadores e capacitando estudantes para 
                os desafios do século XXI.
              </p>
              <p>
                Nossa abordagem combina rigor técnico com sensibilidade pedagógica, garantindo que cada 
                produto e serviço atenda às necessidades reais das instituições de ensino e esteja alinhado 
                às diretrizes curriculares nacionais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="missao" className="py-16 lg:py-24 bg-primary-foreground">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center">
            Missão, Visão e Valores
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, index) => <div key={index} className="rounded-xl border border-border bg-card p-8 shadow-card">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Atuação Nacional
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A OLYA atua em todo o território nacional, atendendo instituições de ensino públicas 
                  e privadas, desde escolas municipais até universidades e institutos federais.
                </p>
                <p>
                  Nossa estrutura permite atender às demandas de diferentes regiões do país, com logística 
                  adequada para entrega de equipamentos e suporte técnico remoto e presencial quando necessário.
                </p>
                <p>
                  Trabalhamos em parceria com secretarias de educação, gestores escolares e educadores, 
                  compreendendo as particularidades de cada contexto para oferecer soluções adequadas.
                </p>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Presença Nacional
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  <span>Atendimento a todas as regiões do Brasil</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  <span>Suporte técnico remoto e presencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  <span>Logística adequada para entrega nacional</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                  <span>Parcerias com instituições em diversos estados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-destructive-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Compromisso com Educação, Inovação e Formação Tecnológica
            </h2>
            <div className="text-muted-foreground space-y-4 text-left md:text-center">
              <p>
                Acreditamos que a robótica educacional é uma ferramenta poderosa para o desenvolvimento 
                de competências essenciais como resolução de problemas, trabalho em equipe, pensamento 
                computacional e criatividade.
              </p>
              <p>
                Nosso compromisso vai além do fornecimento de equipamentos. Investimos na formação de 
                educadores, no desenvolvimento de materiais pedagógicos e no suporte contínuo às 
                instituições parceiras.
              </p>
              <p>
                A OLYA trabalha para que cada estudante tenha a oportunidade de desenvolver seu potencial 
                tecnológico, preparando-se para os desafios e oportunidades do mundo contemporâneo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}