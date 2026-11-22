interface PageBannerProps {
  title: string;
}

function PageBanner({ title }: PageBannerProps) {
  return (
    <section className="m-6 flex h-50 flex-col justify-center gap-3 bg-(image:--color-brand-gradient) p-6 md:p-8">
      <h1>{title}</h1>
    </section>
  );
}

export default PageBanner;
