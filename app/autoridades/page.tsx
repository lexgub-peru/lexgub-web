import Link from 'next/link';
import {
  IconAlert,
  IconArrowRight,
  IconChecklist,
  IconClock,
  IconContract,
  IconDocument,
  IconEvidence,
  IconScale,
} from '../components/icons';

export const metadata = {
  title: 'Para autoridades y gestores públicos',
  description:
    'Orientación jurídica para responder correctamente ante requerimientos, auditorías, desviaciones e informes de control: qué significa cada actuación, qué derechos y obligaciones existen y cómo ordenar la documentación.',
};

/** Preguntas reales, en el lenguaje del problema que enfrenta el usuario. */
const preguntas = [
  {
    pregunta: 'Recibí una solicitud de información del OCI. ¿Qué debo hacer?',
    respuesta:
      'Identifique qué se pide exactamente, con qué plazo y respecto de qué periodo u operación. Reúna la documentación que ya existe en los archivos de la entidad, remítala completa y legible dentro del plazo, y deje constancia de lo entregado.',
    icon: IconDocument,
  },
  {
    pregunta: 'Me notificaron el inicio de una auditoría. ¿Cómo organizo la información?',
    respuesta:
      'Ubique el expediente por proceso y por periodo, verifique que esté completo y ordenado, e identifique quién intervino en cada acto. Un expediente ordenado es la mejor posición frente a cualquier revisión.',
    icon: IconChecklist,
  },
  {
    pregunta: 'Me comunicaron una desviación de cumplimiento.',
    respuesta:
      'La comunicación abre su derecho a formular comentarios. Lea con precisión qué hecho se describe, qué norma se invoca como criterio y qué evidencia se cita; responda punto por punto y acompañe la documentación que respalde su posición.',
    icon: IconAlert,
  },
  {
    pregunta: 'Recibí un informe de control. ¿Qué significa?',
    respuesta:
      'Un informe de control no es por sí mismo una sanción. Distinga qué es hecho descrito, qué es criterio invocado, qué recomendación se formula y qué instancia decidirá después. De esa lectura depende la respuesta que corresponde.',
    icon: IconEvidence,
  },
  {
    pregunta: 'Me atribuyen participación en determinados hechos.',
    respuesta:
      'La participación debe sustentarse en actos concretos y deberes funcionales específicos, no en el cargo ocupado. Revise qué función tenía, qué decidió efectivamente y qué documentación acredita su actuación.',
    icon: IconScale,
  },
  {
    pregunta: 'Existe un SCE o una AOP relacionada con mi gestión.',
    respuesta:
      'Cada servicio de control tiene su propia directiva, alcance y reglas de procedimiento. Identificar cuál se está aplicando permite saber qué etapa se está desarrollando y qué corresponde en cada momento.',
    icon: IconClock,
  },
  {
    pregunta: '¿Cómo verifico si la norma invocada era aplicable en la fecha de los hechos?',
    respuesta:
      'Fije la fecha del hecho, identifique la versión vigente en ese momento y revise modificatorias y disposiciones transitorias. Una modificatoria posterior no se aplica automáticamente a hechos anteriores.',
    icon: IconContract,
  },
  {
    pregunta: '¿Qué diferencia hay entre irregularidad, responsabilidad y prueba?',
    respuesta:
      'Son planos distintos. Una deficiencia no equivale a una irregularidad; una irregularidad no equivale a responsabilidad; y ninguna conclusión se sostiene sin evidencia suficiente y apropiada que la respalde.',
    icon: IconScale,
  },
];

const momentos = [
  {
    etapa: 'Antes del control',
    texto: 'Orden documental, trazabilidad de decisiones y motivación de los actos administrativos.',
  },
  {
    etapa: 'Durante el control',
    texto: 'Atención de requerimientos, coordinación interna y conservación de la evidencia existente.',
  },
  {
    etapa: 'Al recibir un requerimiento',
    texto: 'Delimitar qué se pide, en qué plazo y con qué alcance, y responder de forma completa y verificable.',
  },
  {
    etapa: 'Al recibir una desviación',
    texto: 'Ejercicio del derecho a formular comentarios, argumento por argumento y con respaldo documental.',
  },
  {
    etapa: 'Al recibir un informe',
    texto: 'Lectura técnica del hecho, el criterio y la recomendación, y determinación de la vía que corresponde.',
  },
  {
    etapa: 'Responsabilidad administrativa',
    texto: 'Marco aplicable, debido procedimiento, plazos y derecho de defensa.',
  },
  {
    etapa: 'Contrataciones',
    texto: 'Revisión por etapas y bajo el régimen vigente en la fecha del procedimiento examinado.',
  },
  {
    etapa: 'Plan de acción',
    texto: 'Qué es, cuándo corresponde y cómo se organiza su seguimiento conforme a la normativa aplicable.',
  },
];

export default function AutoridadesPage() {
  return (
    <div className="audiencePage audiencePage--autoridades">
      <section className="audienceHero audienceHero--autoridades">
        <div className="audienceHeroInner">
          <span className="audienceKicker">PARA AUTORIDADES Y GESTORES PÚBLICOS</span>
          <h1>Asesoría, conocimiento y guía para una respuesta técnica, oportuna y segura.</h1>
          <p>
            Entender qué está ocurriendo es el primer paso para responder correctamente. Aquí encontrará qué significa
            cada actuación de control, qué derechos y obligaciones tiene y cómo ordenar su documentación.
          </p>
          <div className="audienceHeroLinks">
            <Link className="wineButton" href="/contacto">Solicitar asesoría especializada</Link>
            <Link className="secondaryButton" href="/servicios">Ver servicios</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeading">
          <span>SITUACIONES FRECUENTES</span>
          <h2>Empiece por la situación que está enfrentando</h2>
        </div>
        <ul className="preguntaList">
          {preguntas.map((p) => (
            <li className="preguntaCard" key={p.pregunta}>
              <span className="preguntaIcon"><p.icon /></span>
              <div>
                <h3>{p.pregunta}</h3>
                <p>{p.respuesta}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section softSection">
        <div className="sectionHeading">
          <span>MOMENTOS DEL CONTROL</span>
          <h2>Cada etapa exige algo distinto</h2>
        </div>
        <ol className="momentoList">
          {momentos.map((m, i) => (
            <li key={m.etapa}>
              <span className="momentoNumero">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <strong>{m.etapa}</strong>
                <span>{m.texto}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="legalNotice wineNotice wideNotice">
          <strong>Criterio de LexGub</strong>
          <p>
            Toda la orientación de esta sección se dirige a responder correctamente, conservar la evidencia existente,
            ordenar la documentación, comprender el procedimiento y conocer derechos y obligaciones. LexGub no orienta
            ni asiste a ocultar información, alterar documentos, retrasar actuaciones ni obstruir el control: hacerlo
            sería contrario a derecho y agravaría la situación de quien lo intentara.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wineBand">
          <div>
            <span className="audienceKicker">ASESORÍA ESPECIALIZADA</span>
            <h2>Cuando el caso exige acompañamiento jurídico</h2>
            <p>
              Revisión jurídica de informes y documentación, análisis de expedientes de contratación, evaluación de
              argumentos y sustento técnico para procedimientos ante el Sistema Nacional de Control.
            </p>
          </div>
          <div className="wineBandActions">
            <Link className="wineButton" href="/contacto">Solicitar asesoría</Link>
            <Link className="ghostButton" href="/servicios">Ver todos los servicios</Link>
          </div>
        </div>
        <p className="conceptNote">
          LexGub Perú es una iniciativa privada e independiente. No representa a la Contraloría General de la República
          ni a ninguna otra entidad pública, y no garantiza resultados en procedimientos de control.
        </p>
      </section>
    </div>
  );
}
