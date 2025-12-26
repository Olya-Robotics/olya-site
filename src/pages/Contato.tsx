import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Mail, Phone, MapPin, Clock, Building } from "lucide-react";
export default function Contato() {
  return <Layout>
      <PageHeader title="Contato Institucional" description="Canais de comunicação para informações institucionais, processos licitatórios e atendimento a órgãos públicos." breadcrumb="Contato" />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h2>
              <p className="text-muted-foreground mb-8">
                A OLYA Tecnologia mantém canais de atendimento dedicados para 
                instituições de ensino, órgãos públicos e gestores educacionais interessados 
                em nossas soluções.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">E-mail Institucional</h3>
                    <p className="text-muted-foreground mt-1">contato@olya.cc</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Para informações gerais e processos institucionais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Telefone / WhatsApp</h3>
                    <p className="text-muted-foreground mt-1">(48) 93618-0086
                  </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Atendimento institucional e comercial
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground mt-1">
                      Av. Pequeno Príncipe, 3030, Bloco A 108
                    </p>
                    <p className="text-muted-foreground">
                      Campeche, Florianópolis - SC
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      CEP: 88063-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Horário de Atendimento</h3>
                    <p className="text-muted-foreground mt-1">
                      Segunda a Sexta: 9h às 18h
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Horário de Brasília
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações para Licitações */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-8 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Building className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Processos Licitatórios
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Para processos de licitação, pregões e compras públicas, nossa equipe 
                  institucional está preparada para fornecer:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    Documentação técnica e institucional completa
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    Especificações para termos de referência
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    Propostas técnicas e comerciais
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                    Esclarecimentos técnicos para comissões
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-secondary/50 p-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Dados Institucionais
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Razão Social:</span>
                    <span className="font-medium text-foreground">OLYA Tecnologia LTDA</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>CNPJ:</span>
                    <span className="font-medium text-foreground">62.578.525/0001-66</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Domínio:</span>
                    <span className="font-medium text-foreground">olya.cc</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sede:</span>
                    <span className="font-medium text-foreground">Florianópolis, SC</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Nota:</strong> Para atendimento a processos 
                  institucionais e licitatórios, recomendamos o contato por e-mail, incluindo 
                  informações sobre o órgão solicitante e a natureza do processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}