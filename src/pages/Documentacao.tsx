import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/ui/PageHeader";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Download, BookOpen, FileCheck, Award, ClipboardList } from "lucide-react";

const documentos = [
  {
    category: "Catálogos Institucionais",
    icon: BookOpen,
    items: [
      { name: "Catálogo Geral OLYA 2024", type: "PDF", size: "2.4 MB" },
      { name: "Apresentação Institucional", type: "PDF", size: "1.8 MB" },
      { name: "Portfólio de Produtos", type: "PDF", size: "3.2 MB" },
    ],
  },
  {
    category: "Fichas Técnicas",
    icon: ClipboardList,
    items: [
      { name: "Braço Robótico Educacional - Especificações", type: "PDF", size: "890 KB" },
      { name: "Kit Iniciação - Ficha Técnica", type: "PDF", size: "650 KB" },
      { name: "Kit Intermediário - Ficha Técnica", type: "PDF", size: "720 KB" },
      { name: "Kit Avançado - Ficha Técnica", type: "PDF", size: "780 KB" },
    ],
  },
  {
    category: "Manuais e Guias",
    icon: FileText,
    items: [
      { name: "Manual do Braço Robótico", type: "PDF", size: "4.5 MB" },
      { name: "Guia de Instalação e Configuração", type: "PDF", size: "1.2 MB" },
      { name: "Guia Pedagógico para Educadores", type: "PDF", size: "2.8 MB" },
      { name: "Caderno de Atividades - Nível Básico", type: "PDF", size: "3.1 MB" },
    ],
  },
  {
    category: "Declarações Institucionais",
    icon: FileCheck,
    items: [
      { name: "Declaração de Capacidade Técnica", type: "PDF", size: "320 KB" },
      { name: "Declaração de Atendimento às Normas", type: "PDF", size: "280 KB" },
      { name: "Termo de Garantia Padrão", type: "PDF", size: "150 KB" },
    ],
  },
  {
    category: "Certificações e Conformidades",
    icon: Award,
    items: [
      { name: "Certificado de Conformidade INMETRO*", type: "PDF", size: "450 KB" },
      { name: "Laudos Técnicos*", type: "PDF", size: "680 KB" },
      { name: "Declaração de Responsabilidade Técnica", type: "PDF", size: "220 KB" },
    ],
  },
];

export default function Documentacao() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Layout>
      <PageHeader
        title="Documentação Institucional"
        description="Catálogos, fichas técnicas, manuais e documentos institucionais para processos licitatórios e avaliações técnicas."
        breadcrumb="Documentação"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <p className="text-muted-foreground text-lg">
              Esta seção reúne a documentação técnica e institucional da OLYA Robótica Educacional, 
              organizada para facilitar o acesso durante processos de aquisição, licitações e 
              avaliações técnicas.
            </p>
            <p className="text-sm text-muted-foreground mt-4 p-4 bg-secondary/50 rounded-lg border border-border">
              <strong>Nota:</strong> Documentos marcados com (*) estão em processo de atualização. 
              Para versões atualizadas ou documentos específicos, entre em contato pelo e-mail{" "}
              <a href="mailto:contato@olya.cc" className="text-primary hover:underline">contato@olya.cc</a>.
            </p>
          </div>

          <div className="space-y-8">
            {documentos.map((categoria, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card shadow-card overflow-hidden"
              >
                <div className="flex items-center gap-3 p-6 border-b border-border bg-secondary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <categoria.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {categoria.category}
                  </h2>
                </div>
                <div className="divide-y divide-border">
                  {categoria.items.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 hover:bg-secondary/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-foreground">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doc.type} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsDialogOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                        title="Download disponível em breve"
                      >
                        <Download className="h-4 w-4" />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Área restrita para clientes</DialogTitle>
                <DialogDescription>
                  Se já for cliente, solicite seu login com seu gerente de contas.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* Observações */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Informações Importantes
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Todos os documentos estão disponíveis em formato PDF para facilitar a impressão e citação.
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Para documentos específicos não listados, entre em contato com nossa equipe institucional.
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Documentos para processos licitatórios podem ser solicitados com carimbo e assinatura física.
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2" />
                Atualizações de catálogos e fichas técnicas são realizadas periodicamente.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
