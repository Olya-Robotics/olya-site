import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, BookOpen, RefreshCw, Users, Mail, Phone, FileText, Video } from "lucide-react";
const suporteItems = [{
  icon: Headphones,
  title: "Suporte Técnico Educacional",
  description: "Assistência especializada para questões técnicas relacionadas aos equipamentos e kits de robótica.",
  features: ["Atendimento por e-mail e telefone", "Diagnóstico e orientação técnica", "Suporte remoto para configuração", "Encaminhamento para manutenção quando necessário"]
}, {
  icon: BookOpen,
  title: "Materiais de Apoio ao Professor",
  description: "Recursos pedagógicos desenvolvidos para auxiliar educadores na implementação de atividades de robótica.",
  features: ["Guias pedagógicos detalhados", "Planos de aula estruturados", "Cadernos de atividades por nível", "Sugestões de projetos interdisciplinares"]
}, {
  icon: RefreshCw,
  title: "Atualizações e Manutenção",
  description: "Serviços de atualização de software, reposição de peças e manutenção preventiva e corretiva.",
  features: ["Atualizações de firmware e software", "Reposição de componentes", "Manutenção preventiva programada", "Manutenção corretiva com peças originais"]
}, {
  icon: Users,
  title: "Atendimento Institucional",
  description: "Canal dedicado para gestores, coordenadores e responsáveis por processos de aquisição.",
  features: ["Orientação para processos licitatórios", "Esclarecimento de especificações técnicas", "Acompanhamento de pedidos institucionais", "Suporte para implantação de laboratórios"]
}];
const materiais = [{
  icon: FileText,
  title: "Manual do Professor",
  description: "Guia completo para educadores"
}, {
  icon: Video,
  title: "Videoaulas",
  description: "Tutoriais em vídeo para capacitação"
}, {
  icon: BookOpen,
  title: "Caderno de Projetos",
  description: "Atividades práticas estruturadas"
}, {
  icon: FileText,
  title: "FAQ Técnico",
  description: "Perguntas frequentes e soluções"
}];
export default function Suporte() {
  return <Layout>
      <PageHeader title="Suporte e Pós-Venda" description="Assistência técnica, materiais pedagógicos e atendimento institucional para garantir o melhor aproveitamento das soluções OLYA." breadcrumb="Suporte" />

      {/* Serviços de Suporte */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {suporteItems.map((item, index) => <div key={index} className="rounded-xl border border-border p-6 shadow-card transition-all duration-300 hover:shadow-card-hover bg-primary-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" />
                      {feature}
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </section>

      {/* Materiais de Apoio */}
      <section id="materiais" className="py-16 lg:py-24 bg-secondary/50 scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Materiais de Apoio
            </h2>
            <p className="text-muted-foreground text-lg">
              Recursos desenvolvidos para auxiliar educadores e instituições na implementação 
              efetiva das soluções de robótica educacional.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {materiais.map((material, index) => <div key={index} className="rounded-xl border border-border bg-card p-6 shadow-card text-center transition-all duration-300 hover:shadow-card-hover hover:border-accent/30">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <material.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {material.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {material.description}
                </p>
              </div>)}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="institutional" size="lg">
              <Link to="/documentacao">
                Acessar Documentação Completa
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Canais de Atendimento
            </h2>
            <p className="text-muted-foreground mb-8">
              Entre em contato com nossa equipe para suporte técnico, dúvidas ou informações institucionais.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-sm text-muted-foreground">suporte@olya.cc</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atendimento em até 24 horas úteis
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-sm text-muted-foreground">(11) 0000-0000</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Segunda a sexta, 9h às 18h
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild variant="outline-primary" size="lg">
                <Link to="/contato">
                  Formulário de Contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}