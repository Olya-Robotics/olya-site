interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-olya-blue to-olya-blue-dark py-12 lg:py-16">
      <div className="container">
        {breadcrumb && (
          <p className="text-sm text-primary-foreground/70 mb-2">{breadcrumb}</p>
        )}
        <h1 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
