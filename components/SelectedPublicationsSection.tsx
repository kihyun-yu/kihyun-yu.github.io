import React from "react";
import Publications from "./Publications";

interface SelectedPublicationsSectionProps {
  bibtex: string;
}

export default function SelectedPublicationsSection({ bibtex }: SelectedPublicationsSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Publications</h1>
      <Publications bibtex={bibtex} />
    </section>
  );
}
