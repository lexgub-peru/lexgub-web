import {
  etiquetaVigencia,
  materias,
  normas as normasBase,
  tiposNorma,
  type EstadoVigencia,
  type Materia,
  type MateriaId,
  type Norma,
  type Referencia,
  type TipoNorma,
  type Verificacion,
} from './normativa';

/**
 * Segunda capa editorial del Compendio Normativo.
 *
 * Esta capa permite corregir, ampliar y relacionar fichas verificadas sin
 * reescribir el archivo histórico original. La regla sigue siendo la misma:
 * un dato solo se marca como `verificado` cuando existe una fuente oficial
 * identificada. La vigencia debe contrastarse siempre con la fecha del hecho.
 */

const ngcgModificatorias: Referencia[] = [
  {
    norma: 'Resolución de Contraloría N.° 158-2023-CG',
    fecha: '12 de mayo de 2023',
    sumilla: 'Modifica el numeral 7.29 de las Normas Generales de Control Gubernamental.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4222585-158-2023-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 223-2023-CG',
    fecha: '17 de junio de 2023',
    sumilla: 'Incorpora un párrafo final al numeral 4.27 de las Normas Generales de Control Gubernamental.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4328180-223-2023-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 245-2023-CG',
    fecha: '27 de junio de 2023',
    sumilla: 'Modifica los numerales 1.19 y 1.20 de las Normas Generales de Control Gubernamental.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/4374231-245-2023-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 062-2024-CG',
    fecha: '7 de febrero de 2024',
    sumilla: 'Modifica el numeral 4.3 de las Normas Generales de Control Gubernamental.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/5182942-062-2024-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 247-2024-CG',
    fecha: '13 de mayo de 2024',
    sumilla: 'Modifica disposiciones sobre publicidad de resultados. Su eficacia fue objeto de reglas posteriores; verifique la cadena RC 281-2024-CG, RC 711-2024-CG y RC 210-2025-CG antes de aplicarla temporalmente.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/5577344-247-2024-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 253-2024-CG',
    fecha: '14 de mayo de 2024',
    sumilla: 'Modifica diversos numerales de las Normas Generales de Control Gubernamental e incorpora el numeral 7.6-A.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/5586573-253-2024-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 324-2024-CG',
    fecha: '17 de julio de 2024',
    sumilla: 'Modifica los numerales 1.15 y 1.19 de las Normas Generales de Control Gubernamental.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/5798478-324-2024-cg',
    verificacion: 'verificado',
  },
  {
    norma: 'Resolución de Contraloría N.° 218-2025-CG',
    fecha: '2 de junio de 2025',
    sumilla: 'Modifica diversos numerales y el glosario de las Normas Generales de Control Gubernamental e incorpora el numeral 6.4.4.',
    fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/6831378-218-2025-cg',
    verificacion: 'verificado',
  },
];

const contratacionesModificatorias: Referencia[] = [
  {
    norma: 'Ley N.° 32103',
    fecha: '26 de julio de 2024',
    sumilla: 'Modifica disposiciones de la Ley N.° 32069. La vigencia de cada cambio debe revisarse según sus disposiciones finales.',
    fuente: 'https://www.gob.pe/institucion/oece/colecciones/45029-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento',
    verificacion: 'verificado',
  },
  {
    norma: 'Ley N.° 32187',
    fecha: '11 de diciembre de 2024',
    sumilla: 'Modifica la Ley N.° 32069 con reglas específicas de entrada en vigencia.',
    fuente: 'https://www.gob.pe/institucion/oece/colecciones/45029-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento',
    verificacion: 'verificado',
  },
  {
    norma: 'Ley N.° 32515',
    fecha: '4 de diciembre de 2025',
    sumilla: 'Modifica la Ley N.° 32069. Su vigencia no es uniforme para todas sus disposiciones; el compendio oficial del OECE detalla las reglas temporales.',
    fuente: 'https://www.gob.pe/institucion/oece/colecciones/45029-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento',
    verificacion: 'verificado',
  },
  {
    norma: 'Decreto Legislativo N.° 1715',
    fecha: '4 de febrero de 2026',
    sumilla: 'Modifica el literal e) del numeral 85.1 de la Ley N.° 32069; entró en vigencia el 5 de febrero de 2026.',
    fuente: 'https://www.gob.pe/institucion/oece/colecciones/45029-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento',
    verificacion: 'verificado',
  },
  {
    norma: 'Ley N.° 32732',
    fecha: '19 de julio de 2026',
    sumilla: 'Contiene una modificación a la Ley N.° 32069 cuya entrada en vigor está condicionada a la publicación de la modificación correspondiente del Reglamento. Antes de aplicarla, verifique si dicho hito ya ocurrió.',
    fuente: 'https://www.gob.pe/institucion/oece/colecciones/45029-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento',
    verificacion: 'verificado',
  },
];

const overrides: Record<string, Norma> = {
  'ngcg-texto-integrado': {
    ...normasBase.find((n) => n.id === 'ngcg-texto-integrado')!,
    fechaPublicacion: '15 de abril de 2026',
    anio: 2026,
    vigencia: 'vigente',
    modificatorias: ngcgModificatorias,
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental',
      nota: 'Texto integrado publicado por la Contraloría General de la República el 15 de abril de 2026. Para hechos anteriores, reconstruya la versión vigente en la fecha examinada.',
    },
    verificacion: 'verificado',
    notaVerificacion: 'Texto integrado y cadena principal de modificatorias contrastados con fuentes oficiales de la Contraloría.',
  },
  'rc-295-2021-cg': {
    ...normasBase.find((n) => n.id === 'rc-295-2021-cg')!,
    fechaPublicacion: '24 de diciembre de 2021',
    anio: 2021,
    vigencia: 'modificada',
    modificatorias: ngcgModificatorias,
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/4301933-texto-integrado-normas-generales-de-control-gubernamental',
      nota: 'La Contraloría mantiene un texto integrado de las NGCG. La resolución aprobatoria debe leerse junto con sus modificatorias y sus reglas de vigencia.',
    },
    verificacion: 'verificado',
    notaVerificacion: 'Resolución aprobatoria, fecha de publicación y modificatorias principales contrastadas con fuentes oficiales.',
  },
  'ley-32069': {
    ...normasBase.find((n) => n.id === 'ley-32069')!,
    fechaPublicacion: '24 de junio de 2024',
    anio: 2024,
    vigencia: 'modificada',
    modificatorias: contratacionesModificatorias,
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/oece/informes-publicaciones/6444155-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento-actualizados',
      nota: 'El OECE publica textos actualizados de la Ley y su Reglamento. Verifique siempre la fecha de corte de la versión antes de citarla.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/oece/colecciones/45029-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento',
    resumenLexGub:
      'Régimen general vigente de contrataciones públicas. La Ley N.° 32069 fue publicada el 24 de junio de 2024 y su vigencia general se inició el 22 de abril de 2025, sin perjuicio de disposiciones con reglas especiales de entrada en vigor. Debe distinguirse estrictamente del régimen anterior.',
    puntosClave: [
      'La vigencia general del nuevo régimen se inició el 22 de abril de 2025.',
      'La Ley ha recibido modificaciones con reglas temporales distintas: no basta mirar el número de la norma, hay que fijar la fecha del procedimiento o hecho.',
      'La Ley N.° 32732 contiene una modificación cuya entrada en vigor está condicionada a una modificación reglamentaria; ese hito debe verificarse antes de aplicarla.',
      'El Reglamento fue aprobado por Decreto Supremo N.° 009-2025-EF y también ha sido modificado.',
      'Los procedimientos y contratos sometidos al régimen anterior deben analizarse con la Ley N.° 30225 y su normativa correspondiente.',
    ],
    relacionadas: ['ds-009-2025-ef', 'ley-30225'],
    palabrasClave: ['contrataciones', '32069', 'oece', 'régimen vigente', '22 abril 2025', 'ley general de contrataciones públicas'],
    verificacion: 'verificado',
    notaVerificacion: 'Publicación, vigencia general y cadena de modificaciones contrastadas en el compendio oficial del OECE.',
  },
  'ley-30225': {
    ...normasBase.find((n) => n.id === 'ley-30225')!,
    numero: 'D.S. N.° 082-2019-EF / Ley N.° 30225',
    titulo: 'Texto Único Ordenado de la Ley de Contrataciones del Estado — régimen anterior',
    tipo: 'Decreto Supremo',
    fechaPublicacion: '13 de marzo de 2019',
    anio: 2019,
    vigencia: 'historica',
    fuenteOficial: 'https://www.gob.pe/institucion/oece/normas-legales',
    resumenLexGub:
      'Texto Único Ordenado del régimen anterior de contrataciones del Estado, aprobado por Decreto Supremo N.° 082-2019-EF. Se conserva porque procedimientos, contratos y hechos iniciados bajo ese marco pueden seguir exigiendo su aplicación por temporalidad.',
    puntosClave: [
      'El Decreto Supremo N.° 082-2019-EF publicó el TUO de la Ley N.° 30225 el 13 de marzo de 2019.',
      'El cambio a la Ley N.° 32069 no borra el régimen anterior para procedimientos o hechos gobernados por él.',
      'Antes de aplicar una regla, identifique la fecha del procedimiento, del contrato y del hecho específico examinado.',
      'Las opiniones, directivas y precedentes del régimen anterior deben distinguirse de los emitidos bajo la Ley N.° 32069.',
    ],
    usoPractico: 'Se consulta en auditorías, controles y controversias referidas a contrataciones sujetas al régimen anterior.',
    relacionadas: ['ley-32069'],
    palabrasClave: ['contrataciones', '30225', '082-2019-EF', 'régimen anterior', 'histórica', 'temporalidad'],
    verificacion: 'verificado',
    notaVerificacion: 'El OECE mantiene el D.S. N.° 082-2019-EF como norma destacada del régimen anterior y recursos interpretativos diferenciados de la Ley N.° 32069.',
  },
  'directiva-007-2025-cg-doc': {
    ...normasBase.find((n) => n.id === 'directiva-007-2025-cg-doc')!,
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/7352781-479-2025-cg',
    resolucionAprobatoria: {
      ...normasBase.find((n) => n.id === 'directiva-007-2025-cg-doc')!.resolucionAprobatoria!,
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/7352781-479-2025-cg',
    },
  },
};

const nuevasFichas: Norma[] = [
  {
    id: 'directiva-006-2019-cg-integ',
    numero: 'Directiva N.° 006-2019-CG/INTEG',
    titulo: 'Implementación del Sistema de Control Interno en las Entidades del Estado',
    tipo: 'Directiva',
    materia: 'control-interno',
    fechaPublicacion: '17 de mayo de 2019',
    anio: 2019,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Contraloría N.° 146-2019-CG',
      fecha: '17 de mayo de 2019',
      sumilla: 'Aprueba la Directiva N.° 006-2019-CG/INTEG.',
      fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/345861-146-2019-cg',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 130-2020-CG',
        fecha: '7 de mayo de 2020',
        sumilla: 'Modifica disposiciones transitorias de la Directiva N.° 006-2019-CG/INTEG.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/594193-130-2020-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 093-2021-CG',
        fecha: '31 de marzo de 2021',
        sumilla: 'Modifica la Directiva N.° 006-2019-CG/INTEG.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/1782104-093-2021-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 073-2023-CG',
        fecha: '25 de febrero de 2023',
        sumilla: 'Modifica diversos numerales, disposiciones y anexos de la Directiva N.° 006-2019-CG/INTEG.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3957775-073-2023-cg',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/contraloria/normas-legales/2614036-006-2019-cginteg',
      nota: 'La página oficial de la Directiva publica una versión integrada.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/2614036-006-2019-cginteg',
    resumenLexGub:
      'Regula la implementación, seguimiento y evaluación del Sistema de Control Interno en las entidades del Estado como herramienta permanente de gestión orientada al cumplimiento de objetivos institucionales.',
    puntosClave: [
      'El Sistema de Control Interno es una herramienta de gestión permanente y no un trámite aislado.',
      'La Directiva distribuye responsabilidades y etapas de implementación dentro de la entidad.',
      'Regula el seguimiento y la evaluación de la implementación del SCI.',
      'Cuenta con versión integrada; para periodos anteriores debe reconstruirse la versión aplicable.',
    ],
    usoPractico: 'Se consulta para evaluar implementación, seguimiento, productos y responsabilidades vinculadas al Sistema de Control Interno.',
    relacionadas: ['ley-27785', 'ngcg-texto-integrado'],
    palabrasClave: ['control interno', 'sci', 'implementación', 'seguimiento', 'evaluación', '006-2019'],
    verificacion: 'verificado',
  },
  {
    id: 'rc-166-2021-cg-pas',
    numero: 'Resolución de Contraloría N.° 166-2021-CG',
    titulo: 'Reglamento del Procedimiento Administrativo Sancionador por Responsabilidad Administrativa Funcional',
    tipo: 'Resolución de Contraloría',
    materia: 'potestad-sancionadora',
    fechaPublicacion: '21 de agosto de 2021',
    anio: 2021,
    vigencia: 'modificada',
    modificatorias: [
      {
        norma: 'Resolución de Contraloría N.° 305-2022-CG',
        fecha: '15 de septiembre de 2022',
        sumilla: 'Modifica el Reglamento del PAS y aprueba disposiciones complementarias de conducta y desempeño del personal del procedimiento.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3482932-305-2022-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 307-2022-CG',
        fecha: '20 de septiembre de 2022',
        sumilla: 'Modifica disposiciones del Reglamento del PAS.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3491974-307-2022-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 407-2022-CG',
        fecha: '26 de diciembre de 2022',
        sumilla: 'Modifica diversos artículos del Reglamento del PAS.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/3797007-407-2022-cg',
        verificacion: 'verificado',
      },
      {
        norma: 'Resolución de Contraloría N.° 478-2025-CG',
        fecha: '28 de octubre de 2025',
        sumilla: 'Modifica el Reglamento del PAS por responsabilidad administrativa funcional.',
        fuente: 'https://www.gob.pe/institucion/contraloria/normas-legales/7336375-478-2025-cg',
        verificacion: 'verificado',
      },
    ],
    fuenteOficial: 'https://www.gob.pe/institucion/contraloria/normas-legales/2093915-166-2021-cg',
    resumenLexGub:
      'Regula el procedimiento administrativo sancionador mediante el cual la Contraloría ejerce su potestad sancionadora por responsabilidad administrativa funcional, dentro del marco legal y constitucional aplicable.',
    puntosClave: [
      'La responsabilidad administrativa funcional exige identificar la infracción, la conducta atribuida y la participación individual.',
      'El procedimiento debe respetar legalidad, tipicidad, debido procedimiento, defensa y motivación.',
      'La resolución aprobatoria ha sido modificada en varias oportunidades; la fecha de la conducta y la del procedimiento importan.',
      'La propia página oficial vincula el Reglamento con el pronunciamiento del Tribunal Constitucional en el Exp. N.° 00026-2021-PI/TC.',
    ],
    usoPractico: 'Se consulta al analizar imputaciones, trámite, defensa y sanciones por responsabilidad administrativa funcional.',
    relacionadas: ['ley-27785', 'ds-006-2026-jus'],
    palabrasClave: ['pas', 'responsabilidad administrativa funcional', 'potestad sancionadora', '166-2021', 'inhabilitación'],
    verificacion: 'verificado',
  },
  {
    id: 'directiva-02-2015-servir-gpgsc',
    numero: 'Directiva N.° 02-2015-SERVIR/GPGSC',
    titulo: 'Régimen Disciplinario y Procedimiento Sancionador de la Ley N.° 30057, Ley del Servicio Civil',
    tipo: 'Directiva',
    materia: 'servir-pad',
    fechaPublicacion: '20 de marzo de 2015',
    anio: 2015,
    vigencia: 'modificada',
    resolucionAprobatoria: {
      norma: 'Resolución de Presidencia Ejecutiva N.° 101-2015-SERVIR-PE',
      fecha: '20 de marzo de 2015',
      sumilla: 'Aprueba la Directiva N.° 02-2015-SERVIR/GPGSC y sus anexos y gráficos.',
      fuente: 'https://www.gob.pe/institucion/servir/normas-legales/1322283-101-2015-servir-pe',
      verificacion: 'verificado',
    },
    modificatorias: [
      {
        norma: 'Resolución de Presidencia Ejecutiva N.° 092-2016-SERVIR-PE',
        fecha: '21 de junio de 2016',
        sumilla: 'Formaliza la modificación y versión actualizada de la Directiva N.° 02-2015-SERVIR/GPGSC.',
        fuente: 'https://www.gob.pe/institucion/servir/normas-legales/1322574-092-2016-servir-pe',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/servir/normas-legales/1322574-092-2016-servir-pe',
      nota: 'La RPE N.° 092-2016-SERVIR-PE formaliza la versión actualizada de la Directiva.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/servir/normas-legales/1322283-101-2015-servir-pe',
    resumenLexGub:
      'Desarrolla las reglas del régimen disciplinario y del procedimiento administrativo disciplinario de la Ley del Servicio Civil, incluyendo autoridades, fases, prescripción y actuación de la Secretaría Técnica.',
    puntosClave: [
      'Debe distinguirse la fecha de la conducta de la fecha de inicio del procedimiento para resolver temporalidad y prescripción.',
      'La Secretaría Técnica apoya a las autoridades del PAD, pero no sustituye la competencia decisoria de estas.',
      'La tipificación y la imputación deben respetar legalidad, debido procedimiento y motivación.',
      'La versión actualizada fue formalizada por la RPE N.° 092-2016-SERVIR-PE.',
    ],
    usoPractico: 'Se consulta al calificar hechos disciplinarios, determinar autoridades, controlar prescripción y estructurar imputación, descargos y decisión.',
    relacionadas: ['ds-006-2026-jus'],
    palabrasClave: ['servir', 'pad', 'procedimiento administrativo disciplinario', 'secretaría técnica', 'prescripción', '30057'],
    verificacion: 'verificado',
  },
  {
    id: 'ds-006-2026-jus',
    numero: 'Decreto Supremo N.° 006-2026-JUS',
    titulo: 'Texto Único Ordenado de la Ley N.° 27444, Ley del Procedimiento Administrativo General',
    tipo: 'Decreto Supremo',
    materia: 'procedimiento-administrativo',
    fechaEmision: '28 de abril de 2026',
    fechaPublicacion: '30 de abril de 2026',
    anio: 2026,
    vigencia: 'vigente',
    modificatorias: [],
    sustituyeA: {
      norma: 'Decreto Supremo N.° 004-2019-JUS',
      sumilla: 'TUO anterior de la Ley N.° 27444, sustituido por el nuevo texto aprobado en 2026.',
      fuente: 'https://www.gob.pe/institucion/minjus/normas-legales',
      verificacion: 'verificado',
    },
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/minjus/informes-publicaciones/8441836-primera-edicion-oficial-del-texto-unico-ordenado-de-la-ley-n-27444-ley-del-procedimiento-administrativo-general-aprobado-por-el-decreto-supremo-n-006-2026-jus-actualizada-al-8-07-2026',
      nota: 'Primera Edición Oficial del TUO, actualizada por el MINJUSDH al 8 de julio de 2026.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/minjus/informes-publicaciones/8441836-primera-edicion-oficial-del-texto-unico-ordenado-de-la-ley-n-27444-ley-del-procedimiento-administrativo-general-aprobado-por-el-decreto-supremo-n-006-2026-jus-actualizada-al-8-07-2026',
    resumenLexGub:
      'Es el TUO vigente de la Ley del Procedimiento Administrativo General. Ordena las reglas generales sobre acto administrativo, procedimiento, nulidad, notificación, recursos, potestad sancionadora, responsabilidad y debido procedimiento administrativo.',
    puntosClave: [
      'El nuevo TUO sustituyó al aprobado por Decreto Supremo N.° 004-2019-JUS.',
      'Entró en vigor el 1 de mayo de 2026; para actuaciones anteriores debe verificarse el texto aplicable en su fecha.',
      'Es norma transversal para motivación, validez del acto, debido procedimiento, nulidad y potestad sancionadora.',
      'El MINJUSDH publicó una primera edición oficial actualizada al 8 de julio de 2026.',
    ],
    usoPractico: 'Se consulta de forma transversal en control, PAD, PAS, contratación y cualquier actuación administrativa en que se discuta validez, motivación, plazo, notificación o debido procedimiento.',
    relacionadas: ['ds-004-2019-jus', 'directiva-02-2015-servir-gpgsc', 'rc-166-2021-cg-pas'],
    palabrasClave: ['27444', 'lpag', 'procedimiento administrativo', 'debido procedimiento', 'motivación', 'nulidad', '006-2026-JUS'],
    verificacion: 'verificado',
  },
  {
    id: 'ds-004-2019-jus',
    numero: 'Decreto Supremo N.° 004-2019-JUS',
    titulo: 'Texto Único Ordenado de la Ley N.° 27444 — versión anterior',
    tipo: 'Decreto Supremo',
    materia: 'procedimiento-administrativo',
    fechaPublicacion: '25 de enero de 2019',
    anio: 2019,
    vigencia: 'historica',
    modificatorias: [],
    fuenteOficial: 'https://www.gob.pe/institucion/minjus/normas-legales',
    resumenLexGub:
      'TUO anterior de la Ley N.° 27444. Se conserva como ficha histórica porque sigue siendo necesario para reconstruir el marco jurídico aplicable a actuaciones administrativas realizadas mientras estuvo vigente.',
    puntosClave: [
      'Fue el TUO de referencia desde 2019 hasta su sustitución por el Decreto Supremo N.° 006-2026-JUS.',
      'No debe citarse como TUO vigente para actuaciones posteriores al cambio de 2026.',
      'Puede seguir siendo determinante para evaluar actuaciones y decisiones emitidas durante su periodo de vigencia.',
    ],
    usoPractico: 'Se revisa cuando un expediente o hecho administrativo corresponde al periodo en que este TUO regía.',
    relacionadas: ['ds-006-2026-jus'],
    palabrasClave: ['27444', '004-2019-JUS', 'lpag', 'histórica', 'temporalidad'],
    verificacion: 'verificado',
  },
  {
    id: 'ds-009-2025-ef',
    numero: 'Decreto Supremo N.° 009-2025-EF',
    titulo: 'Reglamento de la Ley N.° 32069, Ley General de Contrataciones Públicas',
    tipo: 'Decreto Supremo',
    materia: 'contrataciones',
    fechaPublicacion: '22 de enero de 2025',
    anio: 2025,
    vigencia: 'modificada',
    modificatorias: [
      {
        norma: 'Decreto Supremo N.° 001-2026-EF',
        fecha: '8 de enero de 2026',
        sumilla: 'Modifica el Reglamento de la Ley N.° 32069. Su vigencia efectiva se produjo el 14 de enero de 2026 conforme a la condición prevista en su disposición final.',
        fuente: 'https://www.gob.pe/institucion/mef/normas-legales/7601483-001-2026-ef',
        verificacion: 'verificado',
      },
    ],
    versionIntegrada: {
      disponible: true,
      url: 'https://www.gob.pe/institucion/oece/informes-publicaciones/6444155-ley-n-32069-ley-general-de-contrataciones-publicas-y-su-reglamento-actualizados',
      nota: 'El OECE mantiene textos actualizados de la Ley y del Reglamento; revise siempre la fecha de corte.',
    },
    fuenteOficial: 'https://www.gob.pe/institucion/mef/normas-legales/6401561-009-2025-ef',
    resumenLexGub:
      'Desarrolla la Ley N.° 32069 y regula la programación, actuaciones preparatorias, procedimientos de selección, ejecución contractual y demás instituciones del régimen general vigente de contratación pública.',
    puntosClave: [
      'Fue publicado el 22 de enero de 2025 y su vigencia general comenzó el 22 de abril de 2025.',
      'Fue modificado por el Decreto Supremo N.° 001-2026-EF, cuya vigencia efectiva se produjo el 14 de enero de 2026.',
      'La Ley y el Reglamento deben leerse conjuntamente y con atención a las disposiciones transitorias.',
      'Para hechos del régimen anterior corresponde revisar la normativa de la Ley N.° 30225.',
    ],
    usoPractico: 'Es la fuente reglamentaria central para examinar procedimientos y ejecución contractual sometidos a la Ley N.° 32069.',
    relacionadas: ['ley-32069', 'ley-30225'],
    palabrasClave: ['reglamento', '32069', '009-2025-EF', 'contrataciones públicas', 'procedimientos de selección', 'ejecución contractual'],
    verificacion: 'verificado',
  },
];

export const normas: Norma[] = [
  ...normasBase.map((norma) => overrides[norma.id] ?? norma),
  ...nuevasFichas,
];

export { etiquetaVigencia, materias, tiposNorma };
export type { EstadoVigencia, Materia, MateriaId, Norma, Referencia, TipoNorma, Verificacion };

export function getNorma(id: string): Norma | undefined {
  return normas.find((n) => n.id === id);
}

export function getMateria(id: MateriaId): Materia | undefined {
  return materias.find((m) => m.id === id);
}

export function normasPorMateria(id: MateriaId): Norma[] {
  return normas.filter((n) => n.materia === id);
}

export function textoBusqueda(n: Norma): string {
  return [
    n.numero,
    n.titulo,
    n.tipo,
    n.resumenLexGub,
    n.resolucionAprobatoria?.norma ?? '',
    ...n.modificatorias.map((m) => `${m.norma} ${m.sumilla ?? ''}`),
    ...n.palabrasClave,
    getMateria(n.materia)?.nombre ?? '',
  ]
    .join(' ')
    .toLocaleLowerCase('es');
}
