export type OfficialPortal = {
  id: string;
  name: string;
  institution: string;
  description: string;
  url: string;
  access: 'libre' | 'mixto';
  capabilities: string[];
};

export type ResourceType =
  | 'Directiva'
  | 'Ley'
  | 'Reglamento'
  | 'Guía'
  | 'Manual'
  | 'Lineamiento'
  | 'Formato y anexos'
  | 'Resoluciones'
  | 'Precedentes'
  | 'Compendio'
  | 'Portal oficial';

export type OfficialResource = {
  id: string;
  title: string;
  subtitle: string;
  institution: 'CGR' | 'OECE' | 'SERVIR' | 'MINJUSDH' | 'EL PERUANO';
  type: ResourceType;
  matter: string;
  status: 'vigente' | 'historico' | 'consulta';
  verifyUrl: string;
  downloadUrl?: string;
  elPeruanoUrl?: string;
  spijUrl?: string;
  formats?: string[];
  tags: string[];
  note?: string;
};

export const officialPortals: OfficialPortal[] = [
  {
    id: 'el-peruano',
    name: 'Diario Oficial El Peruano',
    institution: 'Editora Perú',
    description: 'Publicación oficial de normas legales. Permite revisar la edición, descargar dispositivos y consultar normas actualizadas.',
    url: 'https://diariooficial.elperuano.pe/normas',
    access: 'libre',
    capabilities: ['Publicación oficial', 'Descarga individual', 'Normas actualizadas', 'Jurisprudencia'],
  },
  {
    id: 'spij',
    name: 'Sistema Peruano de Información Jurídica — SPIJ',
    institution: 'Ministerio de Justicia y Derechos Humanos',
    description: 'Edición oficial electrónica de legislación sistematizada, concordada y actualizada. Parte importante es de acceso libre y el servicio completo requiere suscripción.',
    url: 'https://spij.minjus.gob.pe/',
    access: 'mixto',
    capabilities: ['Texto actualizado', 'Normativa histórica', 'Concordancias', 'Jurisprudencia'],
  },
  {
    id: 'cgr-control',
    name: 'Normas de control de la Contraloría',
    institution: 'Contraloría General de la República',
    description: 'Compendio rector de normas, directivas, manuales y documentos técnicos del Sistema Nacional de Control.',
    url: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/2465590-normas-de-control-',
    access: 'libre',
    capabilities: ['Directivas', 'Manuales', 'Control previo', 'Control simultáneo', 'Control posterior'],
  },
  {
    id: 'tsra',
    name: 'Buscador de Resoluciones TSRA',
    institution: 'Contraloría General de la República',
    description: 'Consulta de resoluciones del Tribunal Superior de Responsabilidades Administrativas y criterios de decisión.',
    url: 'https://doc.contraloria.gob.pe/tsra/web/index.html',
    access: 'libre',
    capabilities: ['Resoluciones', 'Búsqueda avanzada', 'Criterios', 'Responsabilidad administrativa funcional'],
  },
  {
    id: 'oece-tcp',
    name: 'Tribunal de Contrataciones Públicas — OECE',
    institution: 'Organismo Especializado para las Contrataciones Públicas Eficientes',
    description: 'Compendio oficial de resoluciones del Tribunal de Contrataciones Públicas, filtrable por fecha y palabra clave.',
    url: 'https://www.gob.pe/institucion/oece/colecciones/68030-resoluciones-del-tribunal-de-contrataciones-publicas',
    access: 'libre',
    capabilities: ['Resoluciones', 'PDF', 'Apelaciones', 'Procedimiento sancionador'],
  },
  {
    id: 'servir-tsc',
    name: 'Tribunal del Servicio Civil — SERVIR',
    institution: 'Autoridad Nacional del Servicio Civil',
    description: 'Resoluciones, precedentes y compendios oficiales del Tribunal del Servicio Civil.',
    url: 'https://www.gob.pe/institucion/servir/tema/tribunal-del-servicio-civil',
    access: 'libre',
    capabilities: ['Precedentes', 'Resoluciones por Sala', 'PAD', 'Servicio Civil'],
  },
];

const SPIJ = 'https://spij.minjus.gob.pe/';
const EL_PERUANO = 'https://diariooficial.elperuano.pe/normas';

export const officialResources: OfficialResource[] = [
  {
    id: 'cgr-normas-control',
    title: 'Normas de control de la Contraloría',
    subtitle: 'Compendio oficial organizado por Sistema Nacional de Control, normas profesionales, control previo, simultáneo, posterior y servicios relacionados.',
    institution: 'CGR',
    type: 'Compendio',
    matter: 'Control gubernamental',
    status: 'consulta',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/2465590-normas-de-control-',
    spijUrl: SPIJ,
    elPeruanoUrl: EL_PERUANO,
    tags: ['contraloría', 'control gubernamental', 'directivas', 'manuales', 'normas de control'],
  },
  {
    id: 'cgr-tecnicas-auditoria',
    title: 'Guía Técnicas de Auditoría',
    subtitle: 'Marco de referencia para uniformizar conceptos, criterios y terminología en la aplicación de técnicas de auditoría.',
    institution: 'CGR',
    type: 'Guía',
    matter: 'Auditoría',
    status: 'consulta',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/1956797-1-guia-tecnicas-de-auditoria',
    downloadUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/1956797-1-guia-tecnicas-de-auditoria',
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['técnicas de auditoría', 'evidencia', 'inspección', 'observación', 'indagación', 'confirmación'],
  },
  {
    id: 'cgr-auditoria-cumplimiento',
    title: 'Directiva y Manual de Auditoría de Cumplimiento',
    subtitle: 'Directiva N.° 001-2022-CG/NORM, Manual y versión integrada publicados por la Contraloría.',
    institution: 'CGR',
    type: 'Manual',
    matter: 'Auditoría de cumplimiento',
    status: 'vigente',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    downloadUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['auditoría de cumplimiento', 'manual', 'desviación', 'evidencia', 'comentarios'],
  },
  {
    id: 'cgr-denuncias',
    title: 'Servicio de Gestión de Denuncias',
    subtitle: 'Directiva N.° 020-2022-CG/GCSD: recepción, evaluación y gestión de denuncias en la Contraloría y los OCI.',
    institution: 'CGR',
    type: 'Directiva',
    matter: 'Denuncias',
    status: 'vigente',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/3464328-020-2022-cg-gcsd',
    downloadUrl: 'https://sisco-info.contraloria.gob.pe/assets/normativa/ANEXO%202_VERSION_INTEGRADA_DIRECTIVA_SERVICIO_DE_GESTION_DE_DENUNCIAS_ACTUALIZADA.pdf',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['denuncias', 'evaluación de denuncias', 'sinad', 'recepción', 'oci'],
  },
  {
    id: 'cgr-control-preventivo-2025',
    title: 'Control Preventivo a las Obras Públicas Paralizadas',
    subtitle: 'Directiva N.° 004-2025-CG/VCST y anexos operativos: estudio preliminar, plan, matriz de riesgos, cédula, informe y formatos.',
    institution: 'CGR',
    type: 'Formato y anexos',
    matter: 'Control preventivo',
    status: 'vigente',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/6839748-220-2025-cg',
    downloadUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/6839748-220-2025-cg',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    formats: ['PDF', 'DOCX', 'XLSX'],
    tags: ['control preventivo', 'obras paralizadas', 'formatos', 'matriz de riesgos', 'plan de acción', 'cédula de trabajo'],
    note: 'La ficha oficial contiene quince anexos descargables en formatos editables.',
  },
  {
    id: 'cgr-control-simultaneo',
    title: 'Servicio de Control Simultáneo',
    subtitle: 'Directiva N.° 013-2022-CG/NORM y versiones integradas para control concurrente, visita y orientación de oficio.',
    institution: 'CGR',
    type: 'Directiva',
    matter: 'Control simultáneo',
    status: 'vigente',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/3656507-013-2022-cg-norm',
    downloadUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/3656507-013-2022-cg-norm',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['control simultáneo', 'control concurrente', 'visita de control', 'orientación de oficio', 'situación adversa'],
  },
  {
    id: 'cgr-aop',
    title: 'Acción de Oficio Posterior',
    subtitle: 'Directiva N.° 007-2023-CG/VCIC y normativa aprobatoria para hechos ya ocurridos de alcance puntual.',
    institution: 'CGR',
    type: 'Directiva',
    matter: 'Control posterior',
    status: 'vigente',
    verifyUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    downloadUrl: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['aop', 'acción de oficio posterior', 'control posterior', 'indicios de irregularidad'],
  },
  {
    id: 'cgr-tsra-resoluciones',
    title: 'Resoluciones del Tribunal Superior de Responsabilidades Administrativas',
    subtitle: 'Buscador oficial por número, categoría, período, sala y entidad.',
    institution: 'CGR',
    type: 'Resoluciones',
    matter: 'Responsabilidad administrativa funcional',
    status: 'consulta',
    verifyUrl: 'https://doc.contraloria.gob.pe/tsra/web/index.html',
    downloadUrl: 'https://doc.contraloria.gob.pe/tsra/web/index.html',
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['tsra', 'tribunal superior', 'responsabilidad administrativa funcional', 'pas', 'resoluciones'],
  },
  {
    id: 'cgr-tsra-precedentes',
    title: 'Precedentes administrativos del TSRA',
    subtitle: 'Acuerdos plenarios de observancia obligatoria y criterios sobre potestad sancionadora de la Contraloría.',
    institution: 'CGR',
    type: 'Precedentes',
    matter: 'Responsabilidad administrativa funcional',
    status: 'consulta',
    verifyUrl: 'https://doc.contraloria.gob.pe/tsra/web/index.html',
    spijUrl: SPIJ,
    elPeruanoUrl: EL_PERUANO,
    formats: ['PDF'],
    tags: ['precedentes', 'acuerdos plenarios', 'tsra', 'perjuicio', 'principio de confianza', 'intencionalidad'],
  },
  {
    id: 'oece-directivas',
    title: 'Directivas vigentes — Ley N.° 32069',
    subtitle: 'Compendio oficial del OECE por materias, lineamientos, bases estándar y reglas vinculadas al régimen vigente.',
    institution: 'OECE',
    type: 'Compendio',
    matter: 'Contrataciones públicas',
    status: 'vigente',
    verifyUrl: 'https://www.gob.pe/institucion/oece/colecciones/66212-directivas-vigentes-ley-n-32069',
    downloadUrl: 'https://www.gob.pe/institucion/oece/informes-publicaciones/6736681-indice-de-directivas-vigentes-ley-n-32069',
    spijUrl: SPIJ,
    formats: ['PDF', 'XLSX', 'DOCX'],
    tags: ['oece', 'directivas', 'ley 32069', 'bases estándar', 'seace', 'lineamientos'],
  },
  {
    id: 'oece-tcp',
    title: 'Resoluciones del Tribunal de Contrataciones Públicas',
    subtitle: 'Compendio oficial de resoluciones del TCP sobre apelaciones y procedimientos administrativos sancionadores.',
    institution: 'OECE',
    type: 'Resoluciones',
    matter: 'Contrataciones públicas',
    status: 'consulta',
    verifyUrl: 'https://www.gob.pe/institucion/oece/colecciones/68030-resoluciones-del-tribunal-de-contrataciones-publicas',
    downloadUrl: 'https://www.gob.pe/institucion/oece/colecciones/68030-resoluciones-del-tribunal-de-contrataciones-publicas',
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['tcp', 'oece', 'osce', 'tribunal de contrataciones', 'apelación', 'sancionador'],
  },
  {
    id: 'servir-precedentes',
    title: 'Precedentes del Tribunal del Servicio Civil',
    subtitle: 'Compendio oficial de precedentes del TSC aplicables a servicio civil y régimen disciplinario.',
    institution: 'SERVIR',
    type: 'Precedentes',
    matter: 'SERVIR / PAD',
    status: 'consulta',
    verifyUrl: 'https://www.gob.pe/institucion/servir/colecciones/5759-precedentes-del-tribunal-del-servicio-civil',
    downloadUrl: 'https://www.gob.pe/institucion/servir/colecciones/5759-precedentes-del-tribunal-del-servicio-civil',
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['servir', 'tsc', 'precedentes', 'pad', 'procedimiento disciplinario'],
  },
  {
    id: 'servir-resoluciones',
    title: 'Resoluciones del Tribunal del Servicio Civil',
    subtitle: 'Acceso a compendios por Sala y año, con resoluciones descargables.',
    institution: 'SERVIR',
    type: 'Resoluciones',
    matter: 'SERVIR / PAD',
    status: 'consulta',
    verifyUrl: 'https://www.gob.pe/institucion/servir/tema/tribunal-del-servicio-civil/normas-legales',
    downloadUrl: 'https://www.gob.pe/institucion/servir/tema/tribunal-del-servicio-civil/normas-legales',
    spijUrl: SPIJ,
    formats: ['PDF'],
    tags: ['servir', 'tsc', 'resoluciones', 'sala 1', 'sala 2', 'pad'],
  },
  {
    id: 'spij-portal',
    title: 'SPIJ — legislación sistematizada y actualizada',
    subtitle: 'Consulta normativa de acceso libre y, para suscriptores, contenido completo de normas y jurisprudencia.',
    institution: 'MINJUSDH',
    type: 'Portal oficial',
    matter: 'Legislación nacional',
    status: 'consulta',
    verifyUrl: 'https://www.gob.pe/748-acceder-al-sistema-peruano-de-informacion-juridica-spij',
    downloadUrl: SPIJ,
    spijUrl: SPIJ,
    formats: ['PDF', 'Word'],
    tags: ['spij', 'minjus', 'legislación', 'concordancias', 'vigencia', 'jurisprudencia'],
  },
  {
    id: 'el-peruano-normas',
    title: 'El Peruano — Normas Legales y Normas Actualizadas',
    subtitle: 'Publicación oficial, descarga individual de dispositivos y textos actualizados con modificaciones insertadas.',
    institution: 'EL PERUANO',
    type: 'Portal oficial',
    matter: 'Publicación oficial',
    status: 'consulta',
    verifyUrl: 'https://diariooficial.elperuano.pe/normas',
    downloadUrl: 'https://diariooficial.elperuano.pe/normas/normasactualizadas',
    elPeruanoUrl: EL_PERUANO,
    formats: ['PDF'],
    tags: ['el peruano', 'normas legales', 'publicación', 'vigencia', 'normas actualizadas'],
  },
];
