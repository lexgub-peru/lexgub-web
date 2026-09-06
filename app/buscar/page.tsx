import type { Metadata } from 'next';
import { SearchPageExperience } from '../components/GlobalSearch';

export const metadata: Metadata = {
  title: 'Buscar',
  description: 'Buscador transversal de LEXGUB PERÚ para normativa, guías, herramientas, glosario y análisis jurídico.',
  robots: {
    index: false,
    follow: true,
  },
};

export default async function BuscarPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  return <SearchPageExperience initialQuery={q} />;
}
