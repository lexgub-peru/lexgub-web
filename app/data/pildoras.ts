/**
 * Píldoras LexGub — explicaciones breves con fuente oficial.
 *
 * Cada píldora declara su audiencia para que la portada, la sección de
 * auditores y la de autoridades puedan reutilizar el mismo contenido sin
 * mezclar registros que no corresponden.
 */

import { IconBook, IconClock, IconDocument, IconLandmark, IconScale } from '../components/icons';
import { jurisprudencia } from './jurisprudencia';

export type Audiencia = 'auditores' | 'autoridades' | 'ambos';

export type Pildora = {
  category: string;
  title: string;
  summary: string;
  source: string;
  href: string;
  icon: typeof IconBook;
  audience: Audiencia;
};

const basePills: Pildora[] = [
  {
    category: 'Sabías que · Control gubernamental',
    title: 'El control gubernamental es un proceso integral y permanente.',
    summary:
      'La Contraloría describe el control gubernamental como la supervisión, vigilancia y verificación de los actos y resultados de la gestión pública, y precisa que comprende control interno y externo.',
    source: 'Contraloría — Normas de control',
    href: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/2465590-normas-de-control-',
    icon: IconLandmark,
    audience: 'ambos',
  },
  {
    category: 'Norma clave',
    title: 'Las NGCG cuentan con un Texto Integrado publicado en abril de 2026.',
    summary:
      'La Contraloría publicó el 15 de abril de 2026 el Texto Integrado de las Normas Generales de Control Gubernamental. Para un caso actual conviene partir de esa versión y verificar cualquier modificación posterior.',
    source: 'Texto Integrado — NGCG',
    href: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental',
    icon: IconBook,
    audience: 'ambos',
  },
  {
    category: 'Actualización normativa',
    title: 'La RC N.° 219-2025-CG modificó la Directiva de Control Simultáneo.',
    summary:
      'La Resolución modificó diversos numerales de la Directiva N.° 013-2022-CG/NORM e incorporó el numeral 7.5. Antes de usar plazos, formatos o reglas del servicio, debe revisarse siempre la versión vigente.',
    source: 'Resolución de Contraloría N.° 219-2025-CG',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/6831451-219-2025-cg',
    icon: IconClock,
    audience: 'auditores',
  },
  {
    category: 'Actualidad · Obras por Impuestos',
    title: 'El DU N.° 010-2026 exceptúa temporalmente el informe previo para determinadas intervenciones ante El Niño.',
    summary:
      'El artículo 12 dispone que, durante la vigencia del decreto, las entidades comprendidas no requieren solicitar informe previo de la Contraloría para las intervenciones ejecutadas a su amparo. La norma mantiene expresamente el control simultáneo y posterior.',
    source: 'Diario Oficial El Peruano — DU N.° 010-2026',
    href: 'https://busquedas.elperuano.pe/dispositivo/EX/2550403-1',
    icon: IconDocument,
    audience: 'ambos',
  },
  {
    category: 'AOP',
    title: 'La Acción de Oficio Posterior tiene una directiva específica.',
    summary:
      'La Directiva N.° 007-2023-CG/VCIC regula la Acción de Oficio Posterior. LexGub la trata como una ruta propia porque no todo hecho concluido exige el mismo servicio de control posterior.',
    source: 'Directiva N.° 007-2023-CG/VCIC',
    href: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    icon: IconDocument,
    audience: 'auditores',
  },
  {
    category: 'Jurisprudencia · Contrataciones',
    title: 'El OECE mantiene un compendio oficial de resoluciones del TCP.',
    summary:
      'El repositorio permite revisar decisiones sobre apelaciones, procedimientos sancionadores y reconsideraciones. LexGub irá convirtiendo resoluciones relevantes en fichas de criterio, sin sustituir la lectura de la decisión completa.',
    source: 'OECE — Resoluciones del Tribunal de Contrataciones Públicas',
    href: 'https://www.gob.pe/institucion/oece/colecciones/68030-resoluciones-del-tribunal-de-contrataciones-publicas',
    icon: IconScale,
    audience: 'ambos',
  },
];

const jurisprudencePills: Pildora[] = jurisprudencia.flatMap((entry) => {
  if (!entry.pildora) return [];
  return [
    {
      category: `Jurisprudencia · ${entry.organo}`,
      title: entry.pildora.title,
      summary: entry.pildora.summary,
      source: entry.numero,
      href: `/jurisprudencia/${entry.id}`,
      icon: IconScale,
      audience: 'ambos' as Audiencia,
    },
  ];
});

export const pildoras: Pildora[] = [...basePills, ...jurisprudencePills];

export function pildorasPara(audiencia: Audiencia): Pildora[] {
  if (audiencia === 'ambos') return pildoras;
  return pildoras.filter((p) => p.audience === audiencia || p.audience === 'ambos');
}
