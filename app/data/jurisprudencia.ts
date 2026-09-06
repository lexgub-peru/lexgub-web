export type FuerzaJuridica =
  | 'Sentencia fuente'
  | 'Casación'
  | 'Sentencia del Tribunal Constitucional'
  | 'Resolución relevante';

export type JurisprudenciaEntry = {
  id: string;
  organo: 'Corte Suprema' | 'Tribunal Constitucional';
  sala: string;
  tipo: FuerzaJuridica;
  numero: string;
  fecha: string;
  materia: string;
  temas: string[];
  titulo: string;
  problemaJuridico: string;
  criterio: string;
  hechosRelevantes: string[];
  normasInterpretadas: string[];
  utilidadPractica: string[];
  temporalidad: string;
  alcance: string;
  fuenteOficial: string;
  pdfOficial?: string;
  elPeruanoUrl?: string;
  spijUrl?: string;
  relacionadasNormativa?: string[];
  relacionadasCriterios?: string[];
  pildora?: {
    title: string;
    summary: string;
  };
  verificado: true;
};

const SPIJ = 'https://spij.minjus.gob.pe/';
const EL_PERUANO = 'https://diariooficial.elperuano.pe/';

/**
 * Repertorio inicial de decisiones judiciales verificadas en la fuente oficial.
 * La ficha distingue el holding real de la decisión de los hechos discutidos.
 * Nunca convertir un argumento de parte, una sentencia anulada o un antecedente
 * en “criterio de la Corte Suprema”.
 */
export const jurisprudencia: JurisprudenciaEntry[] = [
  {
    id: 'cas-52028-2022-junin',
    organo: 'Corte Suprema',
    sala: 'Primera Sala de Derecho Constitucional y Social Transitoria',
    tipo: 'Sentencia fuente',
    numero: 'Casación N.° 52028-2022, Junín',
    fecha: '2 de julio de 2024',
    materia: 'Responsabilidad administrativa funcional',
    temas: ['Contraloría', 'PAS', 'irretroactividad', 'artículo 46 Ley 27785', 'comité especial', 'prueba', 'motivación'],
    titulo: 'La inconstitucionalidad posterior no reemplaza el examen del fondo de una sanción ya impuesta',
    problemaJuridico:
      '¿La sentencia del Tribunal Constitucional que declaró inconstitucional el antiguo artículo 46 de la Ley N.° 27785 permite anular, por sí sola y retroactivamente, sanciones administrativas impuestas mientras esa disposición estaba vigente?',
    criterio:
      'La Sala Suprema fijó reglas para casos análogos: la declaración de inconstitucionalidad no despliega efectos retroactivos sobre hechos y sanciones producidos durante la vigencia de la norma. Si las instancias anulan la sanción únicamente por esa razón, corresponde renovar el pronunciamiento y resolver la controversia de fondo, incluida la acreditación o no de la responsabilidad administrativa funcional.',
    hechosRelevantes: [
      'El caso provino de una auditoría de cumplimiento a procesos de selección del ejercicio 2013.',
      'La sanción fue confirmada en sede administrativa por el TSRA en enero de 2019.',
      'El administrado había actuado como presidente de un Comité Especial Permanente de Adquisiciones.',
      'La imputación administrativa incluyó calificaciones de propuestas que la Contraloría consideró parcializadas o incompatibles con los requisitos del procedimiento.',
    ],
    normasInterpretadas: [
      'Constitución Política, artículos 103, 139 y 204',
      'Ley N.° 27785, antiguo artículo 46 incorporado por Ley N.° 29622',
      'Código Procesal Constitucional, reglas sobre efectos de sentencias de inconstitucionalidad',
    ],
    utilidadPractica: [
      'Obliga a separar temporalidad normativa de acreditación material de la conducta.',
      'Sirve para revisar procesos judiciales contra sanciones de la Contraloría emitidas bajo el régimen anterior.',
      'Recuerda que la nulidad por una cuestión constitucional no sustituye automáticamente el examen de hechos, prueba y participación.',
    ],
    temporalidad:
      'Se refiere al régimen sancionador anterior a la Ley N.° 31288 y a la relación temporal con la STC Exp. N.° 00020-2015-PI/TC. No debe trasladarse mecánicamente a infracciones del régimen vigente.',
    alcance:
      'Es una “sentencia fuente” para los supuestos procesales definidos por la propia Sala. No convierte en válidas todas las sanciones antiguas: exige que el órgano jurisdiccional resuelva el fondo y valore la responsabilidad en el caso concreto.',
    fuenteOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/33ed4f0044e8c72c9896d8e5406a4592/CASACI%C3%93N%2B52028-2022-JUN%C3%8DN%2B-%2BSENTENCIA%2BFUENTE%2BN.%C2%B02.pdf?CACHEID=33ed4f0044e8c72c9896d8e5406a4592&MOD=AJPERES',
    pdfOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/33ed4f0044e8c72c9896d8e5406a4592/CASACI%C3%93N%2B52028-2022-JUN%C3%8DN%2B-%2BSENTENCIA%2BFUENTE%2BN.%C2%B02.pdf?CACHEID=33ed4f0044e8c72c9896d8e5406a4592&MOD=AJPERES',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    relacionadasNormativa: ['ley-27785', 'rc-166-2021-cg-pas'],
    relacionadasCriterios: ['temporalidad', 'participacion'],
    pildora: {
      title: 'Una nulidad por inconstitucionalidad no reemplaza el análisis de la prueba.',
      summary:
        'La Casación N.° 52028-2022/Junín ordenó que, en los supuestos definidos por la sentencia fuente, el juez no se limite a invocar la inconstitucionalidad posterior del antiguo artículo 46 de la Ley 27785: debe resolver el fondo y determinar si la responsabilidad fue acreditada.',
    },
    verificado: true,
  },
  {
    id: 'cas-27667-2021-lambayeque',
    organo: 'Corte Suprema',
    sala: 'Tercera Sala de Derecho Constitucional y Social Transitoria',
    tipo: 'Sentencia fuente',
    numero: 'Casación N.° 27667-2021, Lambayeque',
    fecha: '26 de marzo de 2025',
    materia: 'Responsabilidad administrativa funcional',
    temas: ['Contraloría', 'PAS', 'control difuso', 'irretroactividad', 'tipicidad', 'motivación', 'prueba'],
    titulo: 'Control de constitucionalidad, irretroactividad y deber de resolver los hechos del caso',
    problemaJuridico:
      '¿Puede el juez anular una sanción antigua de la Contraloría tomando retroactivamente los fundamentos de la sentencia que declaró inconstitucional el anterior artículo 46 de la Ley N.° 27785, sin resolver los hechos y agravios del proceso?',
    criterio:
      'La Sala Suprema sostuvo que los efectos de la sentencia de inconstitucionalidad se producen desde el día siguiente de su publicación y no retroactivamente. También diferenció el control concentrado del Tribunal Constitucional del control difuso que corresponde al juez en un caso concreto y anuló las sentencias de mérito porque no resolvieron la controversia fáctica y probatoria planteada.',
    hechosRelevantes: [
      'El demandante había sido sancionado con inhabilitación por actos relacionados con el pago de una autoclave antes de su entrega y conformidad.',
      'La sanción y el agotamiento de la vía administrativa fueron anteriores a la publicación de la STC que declaró inconstitucional el antiguo artículo 46.',
      'Las instancias inferiores ampararon la demanda sin pronunciarse sobre los hechos y pruebas del caso concreto.',
    ],
    normasInterpretadas: [
      'Constitución Política, artículos 138, 139 y 204',
      'Ley N.° 27785, antiguo artículo 46 incorporado por Ley N.° 29622',
      'Código Procesal Constitucional, efectos de sentencias de inconstitucionalidad',
    ],
    utilidadPractica: [
      'Ayuda a separar control difuso en concreto de aplicación retroactiva de una sentencia de inconstitucionalidad.',
      'Refuerza que la decisión judicial debe responder los hechos, pruebas y agravios efectivamente planteados.',
      'Es útil para construir matrices de temporalidad en expedientes sancionadores de la Contraloría.',
    ],
    temporalidad:
      'Sentencia fuente para litigios vinculados al antiguo régimen sancionador. Debe leerse junto con la STC Exp. N.° 00020-2015-PI/TC y la evolución posterior del régimen de la Ley N.° 31288.',
    alcance:
      'No resuelve que toda sanción antigua sea correcta. La decisión invalida la aplicación retroactiva y exige un nuevo pronunciamiento conforme al caso concreto.',
    fuenteOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/a339d080470abbfb951ff7758efc2dd4/CASACION%2B27667-2021%2BLAMBAYEQUE%2B-%2BSENTENCIA%2BFUENTE%2BSOBRE%2BCONTROL%2BDE%2BCONSTITUCIONALIDAD%2BDE%2BLAS%2BLEYES.pdf?CACHEID=a339d080470abbfb951ff7758efc2dd4&MOD=AJPERES',
    pdfOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/a339d080470abbfb951ff7758efc2dd4/CASACION%2B27667-2021%2BLAMBAYEQUE%2B-%2BSENTENCIA%2BFUENTE%2BSOBRE%2BCONTROL%2BDE%2BCONSTITUCIONALIDAD%2BDE%2BLAS%2BLEYES.pdf?CACHEID=a339d080470abbfb951ff7758efc2dd4&MOD=AJPERES',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    relacionadasNormativa: ['ley-27785', 'rc-166-2021-cg-pas'],
    relacionadasCriterios: ['temporalidad'],
    verificado: true,
  },
  {
    id: 'cas-241-2019-ancash',
    organo: 'Corte Suprema',
    sala: 'Sala Penal Permanente',
    tipo: 'Casación',
    numero: 'Casación N.° 241-2019, Áncash',
    fecha: '19 de mayo de 2021',
    materia: 'Prueba y contratación pública',
    temas: ['colusión', 'prueba indiciaria', 'contrataciones', 'comité de recepción', 'obra pública', 'inferencia', 'irregularidades'],
    titulo: 'Las irregularidades administrativas pueden ser indicios, pero la conclusión exige una cadena inferencial justificada',
    problemaJuridico:
      '¿Cómo debe utilizarse la prueba por indicios en un caso de colusión vinculado con una obra pública y actuaciones de funcionarios, incluidos integrantes del comité de recepción?',
    criterio:
      'La Corte Suprema explicó que la prueba por indicios es un método de valoración, no un medio probatorio autónomo. Ante la ausencia de prueba directa del acuerdo colusorio, las vulneraciones a la normativa de contratación pueden funcionar como hechos indiciarios, pero deben estar acreditadas y conectarse mediante inferencias correctas y suficientemente motivadas con el hecho principal.',
    hechosRelevantes: [
      'La imputación comprendió a funcionarios y miembros del comité de recepción de una obra municipal.',
      'Se discutió la recepción de una obra antes del vencimiento del plazo y cuando, según la acusación, todavía no se encontraba concluida.',
      'Existían documentos, constataciones y pericia sobre avance físico y ejecución de partidas.',
      'La Corte Suprema casó la sentencia absolutoria y ordenó un nuevo juicio de apelación por deficiencias en el análisis del razonamiento indiciario.',
    ],
    normasInterpretadas: [
      'Código Procesal Penal, artículo 158 sobre prueba por indicios',
      'Código Procesal Penal, reglas de acusación y defensa procesal',
      'Código Penal, delito de colusión agravada',
    ],
    utilidadPractica: [
      'Es especialmente útil para auditores que necesitan distinguir documento, hecho base, inferencia y conclusión.',
      'Evita tratar una suma de irregularidades como prueba automática de concertación o dolo.',
      'Permite diseñar una matriz de inferencias: hecho acreditado → regla de enlace → conclusión provisional → hipótesis alternativa.',
      'En informes de control ayuda a mantener separada la irregularidad administrativa de una conclusión penal que corresponde a otra autoridad.',
    ],
    temporalidad:
      'Los hechos corresponden al régimen de contratación vigente en 2014. La utilidad probatoria de la sentencia es transversal, pero las obligaciones contractuales concretas deben reconstruirse con la norma vigente al momento del hecho.',
    alcance:
      'La casación se centra en razonamiento probatorio e imputación. No debe utilizarse como regla automática sobre responsabilidad de todo comité de recepción ni como afirmación de que cualquier irregularidad demuestra colusión.',
    fuenteOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/1eed6b0043cbbcd186d3876745cba5c4/241-2019.pdf?CACHEID=1eed6b0043cbbcd186d3876745cba5c4&MOD=AJPERES',
    pdfOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/1eed6b0043cbbcd186d3876745cba5c4/241-2019.pdf?CACHEID=1eed6b0043cbbcd186d3876745cba5c4&MOD=AJPERES',
    spijUrl: SPIJ,
    relacionadasCriterios: ['inferencia', 'participacion'],
    pildora: {
      title: 'Irregularidad no es sinónimo de concertación.',
      summary:
        'La Casación N.° 241-2019/Áncash explica que las infracciones a la normativa de contratación pueden integrar una cadena de indicios, pero la conclusión requiere hechos base acreditados e inferencias correctas. La acumulación de irregularidades no sustituye el razonamiento probatorio.',
    },
    verificado: true,
  },
  {
    id: 'cas-645-2021-apurimac',
    organo: 'Corte Suprema',
    sala: 'Sala Penal Permanente',
    tipo: 'Casación',
    numero: 'Casación N.° 645-2021, Apurímac',
    fecha: '10 de abril de 2024',
    materia: 'Proceso penal y control gubernamental',
    temas: ['Contraloría', 'procuraduría', 'comité de recepción', 'obra pública', 'legitimación', 'casación'],
    titulo: 'No atribuir a una casación un criterio de fondo que la Corte no llegó a decidir',
    problemaJuridico:
      '¿Podía la Procuraduría de la Contraloría acceder a casación contra una absolución si había consentido previamente la sentencia adversa de primera instancia?',
    criterio:
      'La Corte Suprema concluyó que la Procuraduría carecía de legitimación para acceder a casación porque no apeló la sentencia de primera instancia que luego fue confirmada. Por esa razón no emitió una decisión casatoria sobre el fondo de las imputaciones dirigidas contra miembros del comité de recepción de obra.',
    hechosRelevantes: [
      'La acusación comprendió a integrantes de un comité de recepción de obra y cuestionó la validación de partidas presuntamente no ejecutadas o ejecutadas deficientemente.',
      'La primera instancia absolvió y la Procuraduría de la Contraloría no interpuso apelación.',
      'La sentencia de vista confirmó la absolución y recién entonces la Procuraduría interpuso casación.',
    ],
    normasInterpretadas: ['Código Procesal Penal, legitimación y acceso al recurso de casación'],
    utilidadPractica: [
      'Funciona como alerta metodológica: antes de citar una sentencia por los hechos narrados, hay que identificar cuál fue realmente el holding.',
      'Permite enseñar a diferenciar antecedentes, argumentos de las partes y criterio vinculante o decisorio del órgano jurisdiccional.',
      'Es útil para el análisis procesal de la intervención de procuradurías en litigios derivados de hechos de control.',
    ],
    temporalidad:
      'La utilidad principal de la decisión es procesal. Los deberes del comité de recepción descritos en los antecedentes corresponden al régimen contractual de la época y no constituyen por sí mismos el criterio de la Corte Suprema.',
    alcance:
      'La Corte no resolvió el fondo de la responsabilidad de los miembros del comité de recepción. LexGub lo advierte expresamente para evitar una cita fuera de contexto.',
    fuenteOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/bd5fc9804f8f7ecd9df69de9e95470c5/Casaci%C3%B3n%2B645-2021.pdf?CACHEID=bd5fc9804f8f7ecd9df69de9e95470c5&MOD=AJPERES',
    pdfOficial:
      'https://www.pj.gob.pe/wps/wcm/connect/bd5fc9804f8f7ecd9df69de9e95470c5/Casaci%C3%B3n%2B645-2021.pdf?CACHEID=bd5fc9804f8f7ecd9df69de9e95470c5&MOD=AJPERES',
    spijUrl: SPIJ,
    relacionadasCriterios: ['participacion', 'inferencia'],
    verificado: true,
  },
  {
    id: 'tc-00026-2021-pi',
    organo: 'Tribunal Constitucional',
    sala: 'Pleno Jurisdiccional',
    tipo: 'Sentencia del Tribunal Constitucional',
    numero: 'Exp. N.° 00026-2021-PI/TC — Sentencia 193/2024',
    fecha: '24 de julio de 2024',
    materia: 'Potestad sancionadora de la Contraloría',
    temas: ['Ley 31288', 'Contraloría', 'tipicidad', 'grave afectación', 'SERVIR', 'responsabilidad administrativa funcional'],
    titulo: 'El TC declaró parcialmente inconstitucional la regulación de la potestad sancionadora introducida por la Ley N.° 31288',
    problemaJuridico:
      '¿La tipificación de infracciones y las reglas de la potestad sancionadora de la Contraloría introducidas por la Ley N.° 31288 respetan la Constitución?',
    criterio:
      'El Tribunal Constitucional declaró fundada en parte la demanda: expulsó determinadas infracciones y referencias normativas, interpretó otras infracciones conforme a los fundamentos de la sentencia y exhortó al Congreso a delimitar el ámbito material de competencia sancionadora de SERVIR y de la Contraloría. También precisó la ausencia de efectos retroactivos sobre procedimientos ya concluidos o con trámite ya iniciado.',
    hechosRelevantes: [
      'La demanda fue promovida por el Poder Ejecutivo contra la Ley N.° 31288.',
      'La sentencia declaró inconstitucionales totalmente las infracciones 6, 24, 25, 26 y 27 del artículo 46 modificado.',
      'También eliminó referencias al concepto “grave afectación al servicio público” en múltiples infracciones y disposiciones.',
      'El TC exhortó a delimitar legislativamente la competencia material entre SERVIR y Contraloría.',
    ],
    normasInterpretadas: ['Ley N.° 31288', 'Ley N.° 27785, artículos vinculados con potestad sancionadora', 'Constitución Política'],
    utilidadPractica: [
      'Es lectura obligatoria antes de trabajar con el catálogo actual de infracciones de responsabilidad administrativa funcional.',
      'Permite evitar citar tipos o elementos normativos que fueron expulsados o interpretados constitucionalmente.',
      'Debe conectarse con el reglamento vigente del PAS y sus modificatorias posteriores.',
    ],
    temporalidad:
      'La sentencia tiene una regla expresa sobre sus efectos temporales. Para determinar el régimen aplicable a una conducta o procedimiento debe verificarse la fecha del hecho, el inicio del PAS y las modificatorias posteriores.',
    alcance:
      'No anuló íntegramente la potestad sancionadora de la Contraloría. La decisión fue parcialmente estimatoria y contiene interpretaciones y una exhortación legislativa que deben leerse en su texto completo.',
    fuenteOficial: 'https://www.tc.gob.pe/jurisprudencia/2024/00026-2021-AI.html',
    pdfOficial: 'https://tc.gob.pe/jurisprudencia/2024/00026-2021-AI.pdf',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    relacionadasNormativa: ['ley-27785', 'rc-166-2021-cg-pas'],
    relacionadasCriterios: ['temporalidad'],
    pildora: {
      title: 'El TC no anuló toda la potestad sancionadora de la Contraloría.',
      summary:
        'En el Exp. N.° 00026-2021-PI/TC, el Tribunal Constitucional declaró inconstitucionales partes concretas de la Ley 31288, interpretó otras infracciones y mantuvo el resto. Citar la sentencia como una anulación total sería incorrecto.',
    },
    verificado: true,
  },
  {
    id: 'tc-00020-2015-pi',
    organo: 'Tribunal Constitucional',
    sala: 'Pleno Jurisdiccional',
    tipo: 'Sentencia del Tribunal Constitucional',
    numero: 'Exp. N.° 00020-2015-PI/TC',
    fecha: '25 de abril de 2018 · publicada en 2019',
    materia: 'Antiguo régimen sancionador de la Contraloría',
    temas: ['Ley 29622', 'Contraloría', 'tipicidad', 'taxatividad', 'artículo 46 Ley 27785', 'irretroactividad'],
    titulo: 'Inconstitucionalidad del antiguo artículo 46 y límites de tipicidad en responsabilidad administrativa funcional',
    problemaJuridico:
      '¿El antiguo catálogo legal y reglamentario de infracciones de responsabilidad administrativa funcional cumplía las exigencias constitucionales de legalidad y tipicidad?',
    criterio:
      'El Tribunal Constitucional declaró inconstitucional el antiguo artículo 46 de la Ley N.° 27785 incorporado por la Ley N.° 29622, en el extremo relevante, por problemas de legalidad y tipicidad. La decisión y sus aclaraciones precisaron el alcance temporal de sus efectos, cuestión que luego generó una línea de casaciones de la Corte Suprema.',
    hechosRelevantes: [
      'La demanda cuestionó la Ley N.° 29622, que había ampliado las facultades sancionadoras de la Contraloría.',
      'El proceso dio lugar a posteriores aclaraciones sobre los actos y procedimientos emitidos durante la vigencia de la norma.',
    ],
    normasInterpretadas: ['Ley N.° 29622', 'Ley N.° 27785', 'Constitución Política, principios de legalidad y tipicidad'],
    utilidadPractica: [
      'Es indispensable para comprender la transición entre el antiguo régimen sancionador y la Ley N.° 31288.',
      'Debe leerse junto con las casaciones fuente de 2024-2025 sobre irretroactividad.',
      'Sirve como referencia metodológica sobre exigencias de taxatividad en materia sancionadora.',
    ],
    temporalidad:
      'No debe aplicarse sin revisar la fecha de la sanción y las aclaraciones del propio Tribunal Constitucional. Para el régimen vigente debe revisarse además la Ley N.° 31288 y la STC Exp. N.° 00026-2021-PI/TC.',
    alcance:
      'Es una sentencia de inconstitucionalidad del régimen anterior. No equivale a afirmar que actualmente la Contraloría carece de potestad sancionadora.',
    fuenteOficial: 'https://tc.gob.pe/jurisprudencia/2019/00020-2015-AI.pdf',
    pdfOficial: 'https://tc.gob.pe/jurisprudencia/2019/00020-2015-AI.pdf',
    elPeruanoUrl: EL_PERUANO,
    spijUrl: SPIJ,
    relacionadasNormativa: ['ley-27785'],
    relacionadasCriterios: ['temporalidad'],
    verificado: true,
  },
];

export function getJurisprudencia(id: string) {
  return jurisprudencia.find((item) => item.id === id);
}

export function textoJurisprudencia(item: JurisprudenciaEntry) {
  return [
    item.numero,
    item.organo,
    item.sala,
    item.tipo,
    item.materia,
    item.titulo,
    item.problemaJuridico,
    item.criterio,
    ...item.temas,
    ...item.normasInterpretadas,
    ...item.utilidadPractica,
  ].join(' ').toLocaleLowerCase('es');
}
