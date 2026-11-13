interface CaseStudyCardProps {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  impact: string;
}

export default function CaseStudyCard({ client, industry, challenge, solution, result, impact }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col border border-border bg-white">
      <div className="bg-footer px-6 py-6 text-white">
        <p className="font-[family-name:var(--font-oswald)] text-3xl font-semibold leading-tight">{result}</p>
        <p className="mt-2 text-sm text-white/70">{impact}</p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{client}</h3>
          <p className="text-sm text-slate-500">{industry}</p>
        </div>
        <div>
          <h4 className="mb-1 text-sm font-semibold text-foreground">Challenge</h4>
          <p className="text-sm leading-relaxed text-slate-600">{challenge}</p>
        </div>
        <div>
          <h4 className="mb-1 text-sm font-semibold text-foreground">Solution</h4>
          <p className="text-sm leading-relaxed text-slate-600">{solution}</p>
        </div>
      </div>
    </article>
  );
}
