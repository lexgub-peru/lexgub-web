import CompendioNormativo from '../components/CompendioNormativo';
import { normas } from '../data/normativa-v2';

export const metadata = {
  title: 'Biblioteca Jurídica | Compendio Normativo',
  description:
    'Biblioteca jurídica de control gubernamental y derecho público peruano: fichas por materia con resolución aprobatoria, modificatorias, versión integrada, vigencia y fuente oficial.',
};

const external = [
  ['Fuentes Oficiales LexGub', 'Centro de verificación: El Peruano, SPIJ, Contraloría, TSRA, OECE y SERVIR.', '/fuentes'],
  ['Diario Oficial El Peruano', 'Publicación oficial, descarga individual y consulta de normas legales actualizadas.', 'https://diariooficial.elperuano.pe/normas'],
  ['SPIJ — MINJUSDH', 'Legislación sistematizada, concordada, actualizada e histórica; parte del contenido es de acceso libre.', 'https://spij.minjus.gob.pe/'],
  ['Contraloría — Normas de control', 'Directivas, manuales, resoluciones, anexos y documentos técnicos del Sistema Nacional de Control.', 'https://www.gob.pe/institucion/contraloria/informes-publicaciones/2465590-normas-de-control-'],
  ['OECE', 'Ley General de Contrataciones Públicas, directivas, herramientas y Tribunal de Contrataciones Públicas.', 'https://www.gob.pe/institucion/oece/tema/legislacion-y-herramientas-para-las-contrataciones'],
  ['SERVIR — Tribunal del Servicio Civil', 'Precedentes, resoluciones por Sala y documentación del régimen disciplinario.', 'https://www.gob.pe/institucion/servir/tema/tribunal-del-servicio-civil'],
];

export default function NormativaPage() {
  const porVerificar = normas.filter((n) => n.verificacion === 'por-verificar').length;

  return (
    <>
      <section className="pageHero compactHero">
        <div className="eyebrow">BIBLIOTECA JURÍDICA · COMPENDIO NORMATIVO</div>
        <h1>La norma, su versión y la fecha en que regía</h1>
        <p>
          Fichas jurídicas organizadas por materia. Cada una identifica la norma, su fuente oficial, modificatorias,
          versión integrada cuando existe y estado de vigencia, con énfasis en la temporalidad aplicable al caso.
        </p>
      </section>

      <section className="verificationBar">
        <strong>Verificación cruzada: publicación + texto vigente + fuente especializada.</strong>
        <span>
          Contrasta la publicación en El Peruano cuando corresponda, revisa SPIJ o la versión integrada para la vigencia,
          y vuelve a la entidad emisora para anexos, formatos, resoluciones y precedentes. <a href="/fuentes">Abrir Fuentes Oficiales LexGub →</a>
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
            <a key={name} href={href} target={href.startsWith('/') ? undefined : '_blank'} rel={href.startsWith('/') ? undefined : 'noreferrer'}>
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
