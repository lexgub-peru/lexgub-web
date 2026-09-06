/**
 * COMPENDIO NORMATIVO LEXGUB PERÚ
 * ------------------------------------------------------------------
 * Estructura de datos del compendio. Cada registro es una ficha normativa.
 *
 * REGLA EDITORIAL: no se publica como cierto ningún dato que no haya sido
 * contrastado con fuente oficial. Cuando un dato no está confirmado se marca
 * con `verificacion: 'por-verificar'` y la interfaz lo advierte al usuario en
 * lugar de presentarlo como definitivo.
 */

export type TipoNorma =
  | 'Constitución'
  | 'Ley'
  | 'Decreto Supremo'
  | 'Decreto de Urgencia'
  | 'Resolución de Contraloría'
  | 'Directiva'
  | 'Manual'
  | 'Resolución de Tribunal';

export type EstadoVigencia = 'vigente' | 'modificada' | 'derogada' | 'historica';

export type Verificacion = 'verificado' | 'por-verificar';

export type MateriaId =
  | 'sistema-nacional-control'
  | 'auditoria-cumplimiento'
  | 'aop'
  | 'control-simultaneo'
  | 'control-especifico'
  | 'denuncias'
  | 'control-interno'
  | 'potestad-sancionadora'
  | 'notificaciones'
  | 'contrataciones'
  | 'servir-pad'
  | 'procedimiento-administrativo';

export type Materia = {
  id: MateriaId;
  letra: string;
  nombre: string;
  descripcion: string;
};

export type Referencia = {
  /** Denominación de la norma, tal como aparece en la fuente oficial. */
  norma: string;
  /** Fecha en el formato en que fue verificada; se omite si no se confirmó. */
  fecha?: string;
  sumilla?: string;
  fuente?: string;
  verificacion: Verificacion;
};

export type Norma = {
  id: string;
  numero: string;
  titulo: string;
  tipo: TipoNorma;
  materia: MateriaId;
  /**
   * Fecha de emisión de la resolución. NO debe confundirse con la fecha de
   * publicación en el Diario Oficial: son distintas y la exigible suele ser
   * la de publicación.
   */
  fechaEmision?: string;
  /** Fecha de publicación oficial. Solo se completa si fue contrastada. */
  fechaPublicacion?: string;
  anio?: number;
  vigencia: EstadoVigencia;
  resolucionAprobatoria?: Referencia;
  modificatorias: Referencia[];
  versionIntegrada?: { disponible: boolean; url?: string; nota?: string };
  sustituyeA?: Referencia;
  fuenteOficial: string;
  pdf?: string;
  /** Para qué sirve, en lenguaje llano y técnicamente correcto. */
  resumenLexGub: string;
  puntosClave: string[];
  /** En qué tipo de caso o servicio de control suele consultarse. */
  usoPractico?: string;
  /** ids de otras fichas del compendio. */
  relacionadas: string[];
  palabrasClave: string[];
  verificacion: Verificacion;
  notaVerificacion?: string;
};

/* ------------------------------------------------------------------ */
/* Materias                                                            */
/* ------------------------------------------------------------------ */

export const materias: Materia[] = [
  {
    id: 'sistema-nacional-control',
    letra: 'A',
    nombre: 'Sistema Nacional de Control',
    descripcion: 'Base constitucional y legal del control gubernamental, y normas generales aplicables a todos los servicios de control.',
  },
  {
    id: 'auditoria-cumplimiento',
    letra: 'B',
    nombre: 'Auditoría de Cumplimiento',
    descripcion: 'Directiva y manual del servicio de control posterior orientado a verificar el cumplimiento de la normativa aplicable.',
  },
  {
    id: 'aop',
    letra: 'C',
    nombre: 'Acción de Oficio Posterior',
    descripcion: 'Modalidad de control posterior de alcance puntual para hechos con indicios de irregularidad advertibles con información disponible.',
  },
  {
    id: 'control-simultaneo',
    letra: 'D',
    nombre: 'Control Simultáneo',
    descripcion: 'Control concurrente, visita de control y orientación de oficio sobre procesos en curso.',
  },
  {
    id: 'control-especifico',
    letra: 'E',
    nombre: 'Servicio de Control Específico',
    descripcion: 'Examen de hechos específicos con evidencia de presunta irregularidad, con metodología y fases propias.',
  },
  {
    id: 'denuncias',
    letra: 'F',
    nombre: 'Gestión de Denuncias',
    descripcion: 'Recepción, evaluación y atención de denuncias, y participación ciudadana en el control social.',
  },
  {
    id: 'control-interno',
    letra: 'G',
    nombre: 'Control Interno',
    descripcion: 'Sistema de Control Interno en las entidades: implementación, seguimiento y normativa aplicable.',
  },
  {
    id: 'potestad-sancionadora',
    letra: 'H',
    nombre: 'Potestad sancionadora y responsabilidad administrativa funcional',
    descripcion: 'Procedimiento administrativo sancionador por responsabilidad administrativa funcional a cargo de la Contraloría.',
  },
  {
    id: 'notificaciones',
    letra: 'I',
    nombre: 'Notificaciones en el Sistema Nacional de Control',
    descripcion: 'Notificaciones electrónicas y casilla electrónica en el ámbito de los servicios de control.',
  },
  {
    id: 'contrataciones',
    letra: 'J',
    nombre: 'Contrataciones Públicas',
    descripcion: 'Régimen general de contrataciones del Estado. Los regímenes se presentan separados por temporalidad normativa.',
  },
  {
    id: 'servir-pad',
    letra: 'K',
    nombre: 'Servicio Civil y régimen disciplinario',
    descripcion: 'Servicio Civil, régimen disciplinario y procedimiento administrativo disciplinario.',
  },
  {
    id: 'procedimiento-administrativo',
    letra: 'L',
    nombre: 'Procedimiento Administrativo General',
    descripcion: 'Debido procedimiento, motivación, nulidad y potestad sancionadora en sede administrativa.',
  },
];

/* ------------------------------------------------------------------ */
/* Fichas normativas                                                   */
/* ------------------------------------------------------------------ */

export const normas: Norma[] = [
  /* --- A. Sistema Nacional de Control ------------------------------ */
  {
    id: 'ley-27785',
    numero: 'Ley N.° 27785',
    titulo: 'Ley Orgánica del Sistema Nacional de Control y de la Contraloría General de la República',
    tipo: 'Ley',
    materia: 'sistema-nacional-control',
    anio: 2002,
    vigencia: 'modificada',
    modificatorias: [],
    fuenteOficial: 'https://www.leyes.congreso.gob.pe/Documentos/Leyes/27785.pdf',
    pdf: 'https://www.leyes.congreso.gob.pe/Documentos/Leyes/27785.pdf',
    resumenLexGub:
      'Es la norma base del control gubernamental peruano. Define qué es el control gubernamental, quiénes integran el Sistema Nacional de Control, cuáles son las atribuciones de la Contraloría y qué papel cumplen los Órganos de Control Institucional.',
    puntosClave: [
      'Define el control gubernamental como supervisión, vigilancia y verificación de los actos y resultados de la gestión pública.',
      'Estructura el Sistema Nacional de Control y ubica a la Contraloría como ente técnico rector.',
      'Establece las modalidades de control: previo, simultáneo y posterior.',
      'Fija principios que ordenan toda actuación de control.',
    ],
    usoPractico:
      'Es la primera fuente que debe abrirse para discutir competencia, alcance de un servicio de control o naturaleza de una actuación.',
    relacionadas: ['ngcg-texto-integrado', 'rc-295-2021-cg'],
    palabrasClave: ['sistema nacional de control', 'contraloría', 'oci', 'control gubernamental', 'ley orgánica'],
    verificacion: 'verificado',
    notaVerificacion: 'Texto publicado por el Archivo Digital de la Legislación del Congreso de la República.',
  },
  {
    id: 'ngcg-texto-integrado',
    numero: 'Normas Generales de Control Gubernamental',
    titulo: 'Texto Integrado de las Normas Generales de Control Gubernamental',
    tipo: 'Directiva',
    materia: 'sistema-nacional-control',
    vigencia: 'vigente',
    modificatorias: [],
    versionIntegrada: { disponible: true, nota: 'La Contraloría publica una versión integrada de las NGCG.' },
    fuenteOficial:
      'https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental',
    resumenLexGub:
      'Reúne en un solo documento las Normas Generales de Control Gubernamental con sus modificaciones. Es la fuente central para principios, clasificación de servicios de control y reglas comunes a todos ellos.',
    puntosClave: [
      'Ordena principios y reglas comunes a los servicios de control.',
      'Clasifica los servicios de control previo, simultáneo y posterior.',
      'Sirve de marco a las directivas específicas de cada servicio.',
    ],
    usoPractico:
      'Se consulta al inicio de cualquier servicio de control y para resolver dudas sobre reglas comunes que las directivas específicas no desarrollan.',
    relacionadas: ['ley-27785', 'rc-295-2021-cg'],
    palabrasClave: ['ngcg', 'normas generales', 'texto integrado', 'principios de control'],
    verificacion: 'por-verificar',
    notaVerificacion:
      'La página oficial está confirmada. La fecha exacta de la última versión integrada no ha sido contrastada en esta revisión: verifíquela en la fuente antes de citarla.',
  },
  {
    id: 'rc-295-2021-cg',
    numero: 'Resolución de Contraloría N.° 295-2021-CG',
    titulo: 'Resolución que aprueba las Normas Generales de Control Gubernamental',
    tipo: 'Resolución de Contraloría',
    materia: 'sistema-nacional-control',
    anio: 2021,
    vigencia: 'modificada',
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/2593584-295-2021-cg',
    resumenLexGub:
      'Resolución que aprobó las Normas Generales de Control Gubernamental actualmente aplicables. Su página oficial permite revisar normativa relacionada y modificatorias posteriores.',
    puntosClave: [
      'Aprueba el cuerpo de Normas Generales de Control Gubernamental.',
      'Sirve de referencia para identificar la versión de las NGCG aplicable a una fecha determinada.',
    ],
    usoPractico: 'Se cita cuando es necesario acreditar qué versión de las NGCG regía en la fecha del hecho examinado.',
    relacionadas: ['ngcg-texto-integrado', 'ley-27785'],
    palabrasClave: ['ngcg', 'resolución de contraloría', '295-2021'],
    verificacion: 'por-verificar',
    notaVerificacion: 'Página oficial confirmada. Las modificatorias posteriores no han sido inventariadas en esta revisión.',
  },

  /* --- B. Auditoría de Cumplimiento -------------------------------- */
  {
    id: 'directiva-001-2022-cg-norm',
    numero: 'Directiva N.° 001-2022-CG/NORM',
    titulo: 'Auditoría de Cumplimiento',
    tipo: 'Directiva',
    materia: 'auditoria-cumplimiento',
    anio: 2022,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 001-2022-CG',
      sumilla: 'Aprueba la Directiva N.° 001-2022-CG/NORM «Auditoría de Cumplimiento» y el «Manual de Auditoría de Cumplimiento».',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 157-2023-CG',
        sumilla: 'Modifica la Directiva N.° 001-2022-CG/NORM «Auditoría de Cumplimiento» y el «Manual de Auditoría de Cumplimiento».',
        fuente: 'https://busquedas.elperuano.pe/dispositivo/NL/2176330-1',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://cdn.www.gob.pe/uploads/document/file/4669001/Texto%20Integrado%20Directiva%20Auditor%C3%ADa%20Cumplimiento%20-Junio%202023.pdf',
      nota: 'Texto integrado de la Directiva publicado por la Contraloría (junio de 2023).',
    },
    sustituyeA: {
      norma: 'Resolución de Contraloría N.° 473-2014-CG',
      sumilla: 'Había aprobado la Directiva N.° 007-2014-CG/GCSII «Auditoría de Cumplimiento» y su Manual, con sus modificatorias.',
      verificacion: 'verificado',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    resumenLexGub:
      'Regula la auditoría de cumplimiento: el servicio de control posterior que determina en qué medida la materia examinada cumple la normativa aplicable, las disposiciones internas y las estipulaciones contractuales pertinentes.',
    puntosClave: [
      'Se aprueba junto con el Manual de Auditoría de Cumplimiento, que desarrolla la metodología.',
      'Ordena el servicio en etapas de planificación, ejecución y elaboración del informe.',
      'Estructura la desviación de cumplimiento en condición, criterio y demás elementos exigidos.',
      'Regula la comunicación de desviaciones y la evaluación de comentarios.',
      'Derogó el marco anterior aprobado por la Resolución de Contraloría N.° 473-2014-CG.',
    ],
    usoPractico:
      'Es la norma de cabecera de toda auditoría de cumplimiento: se consulta al planificar, al construir desviaciones, al comunicar hechos y al evaluar comentarios.',
    relacionadas: ['manual-auditoria-cumplimiento', 'ngcg-texto-integrado'],
    palabrasClave: ['auditoría de cumplimiento', 'desviación', 'criterio', 'condición', 'comentarios', 'informe de auditoría'],
    verificacion: 'verificado',
  },
  {
    id: 'manual-auditoria-cumplimiento',
    numero: 'Manual de Auditoría de Cumplimiento',
    titulo: 'Manual de Auditoría de Cumplimiento',
    tipo: 'Manual',
    materia: 'auditoria-cumplimiento',
    anio: 2022,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 001-2022-CG',
      sumilla: 'Aprueba la Directiva y el Manual como anexos que forman parte integrante de la resolución.',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 157-2023-CG',
        sumilla: 'Modifica la Directiva y el Manual de Auditoría de Cumplimiento.',
        fuente: 'https://busquedas.elperuano.pe/dispositivo/NL/2176330-1',
        verificacion: 'verificado',
      },
    ],
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/2652514-001-2022-cg',
    resumenLexGub:
      'Desarrolla la metodología operativa de la auditoría de cumplimiento: carpeta de servicio, plan, cédulas, matriz de desviaciones y formatos oficiales de trabajo.',
    puntosClave: [
      'Contiene los formatos y anexos de trabajo del servicio.',
      'Detalla la documentación de la evidencia y su vínculo con cada desviación.',
      'Se modifica junto con la Directiva, por lo que ambas versiones deben revisarse en conjunto.',
    ],
    usoPractico: 'Se usa durante la ejecución del servicio, al armar papeles de trabajo y la matriz de desviaciones.',
    relacionadas: ['directiva-001-2022-cg-norm'],
    palabrasClave: ['manual', 'matriz de desviaciones', 'cédulas', 'papeles de trabajo', 'formatos'],
    verificacion: 'verificado',
  },

  /* --- C. Acción de Oficio Posterior -------------------------------- */
  {
    id: 'directiva-007-2023-cg-vcic',
    numero: 'Directiva N.° 007-2023-CG/VCIC',
    titulo: 'Acción de Oficio Posterior',
    tipo: 'Directiva',
    materia: 'aop',
    fechaEmision: '27 de junio de 2023',
    fechaPublicacion: '29 de junio de 2023',
    anio: 2023,
    vigencia: 'vigente',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 253-2023-CG',
      fecha: 'Emitida el 27 de junio de 2023; publicada el 29 de junio de 2023',
      sumilla: 'Aprueba la Directiva N.° 007-2023-CG/VCIC «Acción de Oficio Posterior».',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383470-253-2023-cg',
      verificacion: 'verificado',
    },
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/4383474-007-2023-cg-vcic',
    pdf: 'https://cdn.www.gob.pe/uploads/document/file/4792293/Directiva%20%20007-2023-CG/VCIC.pdf',
    resumenLexGub:
      'Regula la Acción de Oficio Posterior: la modalidad de control posterior mediante la cual se comunica la existencia de hechos con indicios de irregularidad, a fin de que se adopten las acciones que correspondan.',
    puntosClave: [
      'Se aplica a hechos ya ocurridos que pueden advertirse con información disponible o razonablemente obtenible.',
      'Es de alcance puntual: no sustituye a una auditoría ni a un servicio de control específico de mayor alcance.',
      'Exige delimitar el hecho: qué ocurrió, cuándo, en qué operación y qué entidad intervino.',
      'Contempla el seguimiento de las acciones comunicadas.',
    ],
    usoPractico:
      'Se consulta cuando un hecho concreto ya concluyó, hay información suficiente para advertirlo y no se justifica un servicio de mayor alcance.',
    relacionadas: ['directiva-020-2022-cg-gcsd', 'directiva-007-2021-cg-norm'],
    palabrasClave: ['aop', 'acción de oficio posterior', 'control posterior', 'indicios', 'seguimiento'],
    verificacion: 'verificado',
  },

  /* --- D. Control Simultáneo ---------------------------------------- */
  {
    id: 'directiva-013-2022-cg-norm',
    numero: 'Directiva N.° 013-2022-CG/NORM',
    titulo: 'Servicio de Control Simultáneo',
    tipo: 'Directiva',
    materia: 'control-simultaneo',
    fechaEmision: '30 de mayo de 2022',
    anio: 2022,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 218-2022-CG',
      fecha: 'Emitida el 30 de mayo de 2022',
      sumilla: 'Aprueba la Directiva N.° 013-2022-CG/NORM «Servicio de Control Simultáneo».',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3042483-218-2022-cg',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 270-2022-CG',
        fecha: '10 de agosto de 2022',
        sumilla: 'Modifica la Directiva N.° 013-2022-CG/NORM.',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 062-2023-CG',
        fecha: 'Publicada el 13 de febrero de 2023',
        sumilla:
          'Incorpora la Quinta Disposición Complementaria Final a la Directiva, sobre control concurrente a cargo de sociedades de auditoría durante 2023.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3905681-062-2023-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 429-2023-CG',
        fecha: 'Publicada el 20 de diciembre de 2023',
        sumilla:
          'Modifica el subnumeral 6.1.8.2 del numeral 6.1.8, la Quinta Disposición Complementaria Final y la Única Disposición Complementaria Transitoria.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4963856-429-2023-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 714-2024-CG',
        fecha: 'Publicada el 5 de diciembre de 2024',
        sumilla: 'Modifica el numeral 7.3 y el Formato N.° 1B del Anexo N.° 2 de la Directiva.',
        fuente: 'https://busquedas.elperuano.pe/dispositivo/NL/2351008-1',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 219-2025-CG',
        fecha: '31 de mayo de 2025',
        sumilla: 'Modifica diversos numerales de la Directiva N.° 013-2022-CG/NORM.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/6831451-219-2025-cg',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://cdn.www.gob.pe/uploads/document/file/3839885/3656507-directiva-n-013-2022-cg-norm-directiva-de-servicio-de-control-simultaneo.pdf',
      nota: 'Versión integrada publicada por la Contraloría. Confirme que incorpore la última modificatoria antes de usar plazos o formatos.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/3656507-013-2022-cg-norm',
    resumenLexGub:
      'Regula el servicio de control simultáneo, que se realiza sobre procesos en curso para identificar y comunicar oportunamente situaciones adversas que puedan afectar su continuidad, resultado o el logro de sus objetivos.',
    puntosClave: [
      'Comprende tres modalidades: control concurrente, visita de control y orientación de oficio.',
      'Su finalidad no es determinar responsabilidad, sino advertir situaciones adversas de manera oportuna.',
      'Exige que el proceso o actividad se encuentre efectivamente en curso.',
      'Distingue acciones preventivas de acciones correctivas para el seguimiento.',
      'Acumula cinco modificatorias entre 2022 y 2025: no use un formato ni un plazo sin comprobar la versión vigente.',
    ],
    usoPractico:
      'Se consulta al decidir si corresponde intervenir sobre un proceso en ejecución y al redactar una situación adversa con evidencia verificable.',
    relacionadas: ['ngcg-texto-integrado', 'directiva-007-2023-cg-vcic'],
    palabrasClave: [
      'control simultáneo',
      'control concurrente',
      'visita de control',
      'orientación de oficio',
      'situación adversa',
      '219-2025',
    ],
    verificacion: 'verificado',
  },

  /* --- E. Servicio de Control Específico ---------------------------- */
  {
    id: 'directiva-007-2021-cg-norm',
    numero: 'Directiva N.° 007-2021-CG/NORM',
    titulo: 'Servicio de Control Específico a Hechos con Presunta Irregularidad',
    tipo: 'Directiva',
    materia: 'control-especifico',
    anio: 2021,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 134-2021-CG',
      sumilla: 'Aprueba la Directiva N.° 007-2021-CG/NORM «Servicio de Control Específico a Hechos con Presunta Irregularidad».',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/1965249-134-2021-cg',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 140-2021-CG',
        fecha: 'Publicada el 26 de junio de 2021',
        sumilla: 'Modifica la Directiva N.° 007-2021-CG/NORM.',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 043-2022-CG',
        fecha: 'Publicada el 26 de febrero de 2022',
        sumilla: 'Modifica diversos numerales de la Directiva N.° 007-2021-CG/NORM.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/2774350-043-2022-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 159-2023-CG',
        fecha: 'Publicada el 12 de mayo de 2023',
        sumilla: 'Modifica la Directiva N.° 007-2021-CG/NORM.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4222591-159-2023-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 239-2023-CG',
        fecha: 'Publicada el 18 de junio de 2023',
        sumilla: 'Modifica la Directiva N.° 007-2021-CG/NORM.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4364999-239-2023-cg',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://cdn.www.gob.pe/uploads/document/file/4803743/Versi%C3%B3n%20Integrada%20Directiva%20N%C2%B0%20007-2021-CG/NORM.PDF',
      nota: 'Versión integrada publicada por la Contraloría.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/3723463-007-2021-cg-norm',
    resumenLexGub:
      'Regula el servicio de control posterior dirigido al examen de hechos específicos respecto de los cuales existe evidencia de presunta irregularidad, con metodología, fases y requisitos propios.',
    puntosClave: [
      'Exige hechos delimitados y evidencia que justifique la actuación, no sospechas generales.',
      'Garantiza el debido proceso de control, incluido el derecho de defensa mediante comentarios o aclaraciones.',
      'Requiere mantener trazabilidad entre evidencia, hecho, criterio y participación.',
      'Ha sido modificada en varias oportunidades: revise la versión integrada.',
    ],
    usoPractico:
      'Se consulta cuando existen hechos concretos con evidencia de presunta irregularidad y se evalúa qué servicio de control posterior corresponde.',
    relacionadas: ['directiva-007-2023-cg-vcic', 'directiva-001-2022-cg-norm'],
    palabrasClave: ['control específico', 'presunta irregularidad', 'debido proceso de control', 'comentarios'],
    verificacion: 'verificado',
  },

  /* --- F. Gestión de Denuncias -------------------------------------- */
  {
    id: 'directiva-020-2022-cg-gcsd',
    numero: 'Directiva N.° 020-2022-CG/GCSD',
    titulo: 'Servicio de Gestión de Denuncias',
    tipo: 'Directiva',
    materia: 'denuncias',
    fechaPublicacion: '9 de septiembre de 2022',
    anio: 2022,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 292-2022-CG',
      fecha: '9 de septiembre de 2022',
      sumilla: 'Aprueba la Directiva N.° 020-2022-CG/GCSD «Servicio de Gestión de Denuncias».',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3464319-292-2022-cg',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 264-2023-CG',
        fecha: '14 de julio de 2023',
        sumilla: 'Modifica la Directiva N.° 020-2022-CG/GCSD y dicta diversas disposiciones.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4422132-264-2023-cg',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://cdn.www.gob.pe/uploads/document/file/4976023/Versi%C3%B3n%20integrada%20Directiva%20N%C2%BA%20020-2022-CG/GCSD%20%E2%80%9CServicio%20de%20Gesti%C3%B3n%20de%20Denuncias%E2%80%9D.pdf',
      nota: 'Versión integrada publicada por la Contraloría.',
    },
    sustituyeA: {
      norma: 'Directiva N.° 009-2020-CG/GCSD, aprobada por Resolución de Contraloría N.° 206-2020-CG',
      sumilla: '«Recepción, Evaluación y Atención de Denuncias». Marco anterior de la materia.',
      verificacion: 'verificado',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/3464328-020-2022-cg-gcsd',
    resumenLexGub:
      'Regula el servicio de gestión de denuncias: promueve la participación ciudadana en el control social y ordena la evaluación de las situaciones comunicadas sobre presuntos hechos irregulares en entidades sujetas a control.',
    puntosClave: [
      'Sustituyó a la Directiva N.° 009-2020-CG/GCSD, que ya no constituye el marco vigente de la materia.',
      'Incorpora la denuncia autogenerada, originada de oficio a partir de análisis de datos, medios de comunicación u otros mecanismos.',
      'Establece disposiciones sobre comunicación electrónica en el servicio.',
      'Recibir información no equivale a tener un hecho probado: primero se evalúa competencia, concreción y verificabilidad.',
    ],
    usoPractico:
      'Se consulta al recibir y evaluar una denuncia, al decidir la actuación de control pertinente y al comunicar al denunciante conforme a las reglas de reserva.',
    relacionadas: ['directiva-009-2020-cg-gcsd', 'directiva-007-2023-cg-vcic'],
    palabrasClave: ['denuncias', 'denuncia autogenerada', 'control social', 'participación ciudadana', 'gcsd'],
    verificacion: 'verificado',
  },
  {
    id: 'directiva-009-2020-cg-gcsd',
    numero: 'Directiva N.° 009-2020-CG/GCSD',
    titulo: 'Recepción, Evaluación y Atención de Denuncias',
    tipo: 'Directiva',
    materia: 'denuncias',
    anio: 2020,
    vigencia: 'historica',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 206-2020-CG',
      verificacion: 'verificado',
    },
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/3659545-009-2020-cg-gcsd',
    resumenLexGub:
      'Marco anterior de la gestión de denuncias, sustituido por la Directiva N.° 020-2022-CG/GCSD. Se conserva en el compendio porque puede ser la norma aplicable a hechos ocurridos durante su vigencia.',
    puntosClave: [
      'Fue sustituida por la Directiva N.° 020-2022-CG/GCSD, aprobada por Resolución de Contraloría N.° 292-2022-CG.',
      'Su consulta solo procede respecto de hechos regidos por ella en razón de la fecha.',
    ],
    usoPractico:
      'Se revisa cuando el hecho analizado ocurrió bajo su vigencia y debe determinarse la regla exigible en ese momento.',
    relacionadas: ['directiva-020-2022-cg-gcsd'],
    palabrasClave: ['denuncias', 'histórica', 'marco anterior', '009-2020'],
    verificacion: 'verificado',
  },

  /* --- I. Notificaciones -------------------------------------------- */
  {
    id: 'directiva-007-2022-cg-doc',
    numero: 'Directiva N.° 007-2022-CG/DOC',
    titulo: 'Notificaciones Electrónicas en el Sistema Nacional de Control',
    tipo: 'Directiva',
    materia: 'notificaciones',
    anio: 2022,
    vigencia: 'derogada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 102-2022-CG',
      sumilla: 'Aprobó la Directiva N.° 007-2022-CG/DOC «Notificaciones Electrónicas en el Sistema Nacional de Control».',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/2815017-102-2022-cg',
      verificacion: 'verificado',
    },
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/3651824-007-2022-cg-doc',
    resumenLexGub:
      'Marco anterior de las notificaciones electrónicas en el Sistema Nacional de Control. Fue dejado sin efecto, junto con la Resolución de Contraloría N.° 102-2022-CG que lo aprobó, por la Resolución de Contraloría N.° 479-2025-CG. Se conserva porque puede ser la norma aplicable a notificaciones practicadas durante su vigencia.',
    puntosClave: [
      'Dejada sin efecto por la Resolución de Contraloría N.° 479-2025-CG, que aprobó la Directiva N.° 007-2025-CG/DOC.',
      'Habilitó la notificación electrónica de actos y actuaciones en el Sistema Nacional de Control.',
      'Se apoyaba en el sistema eCasilla-CGR como canal de comunicación.',
      'Su consulta procede respecto de notificaciones practicadas bajo su vigencia.',
    ],
    usoPractico:
      'Se revisa cuando se discute la validez o la fecha de una notificación practicada mientras esta directiva regía.',
    relacionadas: ['directiva-007-2025-cg-doc'],
    palabrasClave: ['notificaciones electrónicas', 'ecasilla', 'casilla electrónica', 'plazos', 'histórica'],
    verificacion: 'verificado',
  },
  {
    id: 'directiva-007-2025-cg-doc',
    numero: 'Directiva N.° 007-2025-CG/DOC',
    titulo: 'Notificaciones Electrónicas en el Sistema Nacional de Control',
    tipo: 'Directiva',
    materia: 'notificaciones',
    anio: 2025,
    vigencia: 'vigente',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 479-2025-CG',
      sumilla:
        'Aprueba la Directiva N.° 007-2025-CG/DOC «Notificaciones Electrónicas en el Sistema Nacional de Control» y deja sin efecto la Resolución de Contraloría N.° 102-2022-CG y la Directiva N.° 007-2022-CG/DOC.',
      verificacion: 'verificado',
    },
    modificatorias: [],
    sustituyeA: {
      norma: 'Directiva N.° 007-2022-CG/DOC, aprobada por Resolución de Contraloría N.° 102-2022-CG',
      sumilla: 'Marco anterior de notificaciones electrónicas, dejado sin efecto por la Resolución de Contraloría N.° 479-2025-CG.',
      verificacion: 'verificado',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales',
    resumenLexGub:
      'Marco vigente de las notificaciones electrónicas en el Sistema Nacional de Control. Sustituye a la Directiva N.° 007-2022-CG/DOC y ordena la comunicación de actos y actuaciones de control a través del sistema de casilla electrónica.',
    puntosClave: [
      'Dejó sin efecto la Resolución de Contraloría N.° 102-2022-CG y la Directiva N.° 007-2022-CG/DOC.',
      'Es el marco aplicable a las notificaciones electrónicas practicadas bajo su vigencia.',
      'Incide en el cómputo de plazos y en la acreditación de la comunicación.',
      'Para notificaciones anteriores, revise qué directiva regía en la fecha del acto.',
    ],
    usoPractico:
      'Se consulta al discutir la validez, el canal o la fecha de una notificación dentro de un servicio de control.',
    relacionadas: ['directiva-007-2022-cg-doc'],
    palabrasClave: ['notificaciones electrónicas', '2025', 'ecasilla', 'casilla electrónica', 'plazos'],
    verificacion: 'verificado',
  },

  /* --- J. Contrataciones Públicas ------------------------------------ */
  {
    id: 'ley-32069',
    numero: 'Ley N.° 32069',
    titulo: 'Ley General de Contrataciones Públicas',
    tipo: 'Ley',
    materia: 'contrataciones',
    vigencia: 'vigente',
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/institucion/oece/informes-publicaciones/6444155-ley-',
    resumenLexGub:
      'Régimen general vigente de contrataciones públicas. Debe distinguirse del régimen anterior: los hechos se analizan conforme a la norma que regía en la fecha del procedimiento examinado.',
    puntosClave: [
      'No debe mezclarse automáticamente con la Ley N.° 30225.',
      'Antes de aplicarla, fije la fecha y el régimen del procedimiento examinado.',
    ],
    usoPractico:
      'Se consulta al revisar procedimientos de selección y ejecución contractual regidos por el régimen vigente.',
    relacionadas: ['ley-30225'],
    palabrasClave: ['contrataciones', '32069', 'oece', 'régimen vigente'],
    verificacion: 'por-verificar',
    notaVerificacion:
      'Enlace institucional del OECE confirmado. La fecha de publicación, el reglamento y las modificatorias no fueron contrastados en esta revisión.',
  },
  {
    id: 'ley-30225',
    numero: 'Ley N.° 30225',
    titulo: 'Ley de Contrataciones del Estado (régimen anterior)',
    tipo: 'Ley',
    materia: 'contrataciones',
    vigencia: 'historica',
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/oece',
    resumenLexGub:
      'Régimen anterior de contrataciones del Estado. Se conserva en el compendio porque numerosos contratos, procedimientos y hechos siguen analizándose conforme a él en razón de la fecha en que ocurrieron.',
    puntosClave: [
      'Aplicable a hechos y procedimientos regidos por ella en razón de su temporalidad.',
      'Nunca debe mezclarse con el régimen vigente sin precisar qué norma regía en la fecha del hecho.',
    ],
    usoPractico:
      'Se consulta al examinar contrataciones anteriores al cambio de régimen.',
    relacionadas: ['ley-32069'],
    palabrasClave: ['contrataciones', '30225', 'régimen anterior', 'histórica', 'temporalidad'],
    verificacion: 'por-verificar',
    notaVerificacion:
      'Ficha en preparación. Las fechas de vigencia y el detalle del reglamento aplicable no han sido contrastados en esta revisión.',
  },
];

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

export const tiposNorma: TipoNorma[] = [
  'Constitución',
  'Ley',
  'Decreto Supremo',
  'Decreto de Urgencia',
  'Resolución de Contraloría',
  'Directiva',
  'Manual',
  'Resolución de Tribunal',
];

export const etiquetaVigencia: Record<EstadoVigencia, string> = {
  vigente: 'Vigente',
  modificada: 'Vigente con modificaciones',
  derogada: 'Derogada',
  historica: 'Histórica',
};

export function getNorma(id: string): Norma | undefined {
  return normas.find((n) => n.id === id);
}

export function getMateria(id: MateriaId): Materia | undefined {
  return materias.find((m) => m.id === id);
}

export function normasPorMateria(id: MateriaId): Norma[] {
  return normas.filter((n) => n.materia === id);
}

/** Texto plano de una ficha, para la búsqueda instantánea. */
export function textoBusqueda(n: Norma): string {
  return [
    n.numero,
    n.titulo,
    n.tipo,
    n.resumenLexGub,
    n.resolucionAprobatoria?.norma ?? '',
    ...n.modificatorias.map((m) => m.norma),
    ...n.palabrasClave,
    getMateria(n.materia)?.nombre ?? '',
  ]
    .join(' ')
    .toLocaleLowerCase('es');
}
