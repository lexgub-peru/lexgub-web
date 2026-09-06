import CompendioNormativo from '../components/CompendioNormativo';
import { normas } from '../data/normativa-v2';

export const metadata = {
  title: 'Compendio Normativo',
  description:
    'Compendio normativo de control gubernamental peruano: fichas por materia con resolución aprobatoria, modificatorias, versión integrada, estado de vigencia y fuente oficial.',
};

const external = [
  ['Contraloría General de la República', 'Normas, directivas, resoluciones, informes, anexos y documentos técnicos.', 'https://www.gob.pe/contraloria'],
  ['Buscador de informes de control', 'Consulta pública de informes emitidos por el Sistema Nacional de Control.', 'https://buscador-informes.contraloria.gob.pe/BuscadorCGR/Informes/Avanzado.html'],
  ['OECE', 'Ley General de Contrataciones Públicas, reglamento, directivas, interpretación normativa y Tribunal.', 'https://www.gob.pe/oece'],
  ['SERVIR', 'Normativa del Sistema Administrativo de Gestión de Recursos Humanos y Tribunal del Servicio Civil.', 'https://www.gob.pe/servir'],
  ['Diario Oficial El Peruano', 'Publicación oficial de normas legales y disposiciones del ordenamiento peruano.', 'https://elperuano.pe/'],
  ['Congreso — Archivo Digital de la Legislación', 'Textos legales publicados por el Congreso de la República.', 'https://www.leyes.congreso.gob.pe/'],
];

export default function NormativaPage() {
  const porVerificar = normas.filter((n) => n.verificacion === 'por-verificar').length;

  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">COMPENDIO NORMATIVO</div>
        <h1>La norma, su versión y la fecha en que regía</h1>
        <p>
          Fichas de normativa de control gubernamental organizadas por materia. Cada una identifica la resolución que
          la aprueba, sus modificatorias, si existe versión integrada y su estado de vigencia, con enlace a fuente oficial.
        </p>
      </section>

      <section className="verificationBar">
        <strong>Regla de uso: verifique qué versión regía en la fecha del hecho analizado.</strong>
        <span>
          Una modificatoria posterior no se aplica automáticamente a hechos anteriores. Antes de citar una norma en un
          informe, oficio o decisión, contraste la versión vigente en la fuente oficial.
        </span>
      </section>

      <section className="section compendioSection">
        <CompendioNormativo />
      </section>

      {porVerificar > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="legalNotice wideNotice">
            <strong>Criterio editorial del compendio</strong>
            <p>
              {porVerificar} {porVerificar === 1 ? 'ficha contiene un dato' : 'fichas contienen datos'} pendientes de
              confirmación en fuente oficial. LexGub prefiere advertirlo antes que presentar como cierto un dato no
              contrastado: esas fichas aparecen marcadas como «Por verificar» y detallan exactamente qué falta confirmar.
            </p>
          </div>
        </section>
      )}

      <section className="section softSection">
        <div className="sectionHeading"><span>FUENTES INSTITUCIONALES</span><h2>Dónde continuar la investigación jurídica</h2></div>
        <div className="sourceDirectory">
          {external.map(([name, description, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer">
              <div><strong>{name}</strong><p>{description}</p></div><span>↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section temporalRule">
        <div>
          <span className="sectionKicker">CONTROL DE VIGENCIA</span>
          <h2>Una norma actual no siempre gobierna un hecho antiguo</h2>
        </div>
        <ol>
          <li>Fija la fecha exacta o periodo de la conducta examinada.</li>
          <li>Identifica la versión de la ley, reglamento, directiva o bases vigente en ese momento.</li>
          <li>Revisa modificatorias, disposiciones transitorias y reglas de entrada en vigencia.</li>
          <li>Distingue normas sustantivas de reglas procedimentales aplicables al servicio de control actual.</li>
          <li>Guarda la fuente oficial que respalda la versión utilizada.</li>
        </ol>
      </section>
    </>
  );
}
