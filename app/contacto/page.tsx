import { IconMail } from '../components/icons';

export const metadata = {
  title: 'Contacto | Asesoría y consultoría',
  description:
    'Contacto de LexGub Perú para consultas sobre control gubernamental, auditoría, contrataciones públicas, derecho administrativo y capacitación especializada.',
};

export default function ContactoPage() {
  return (
    <section className="contentPage">
      <div className="eyebrow">CONTACTO · ASESORÍA Y CONSULTORÍA</div>
      <h1>Conversemos sobre el problema que necesita resolver.</h1>
      <p>
        LexGub Perú es una empresa privada e independiente de asesoría, consultoría y conocimiento jurídico especializado.
        Atendemos consultas profesionales vinculadas con control gubernamental, auditoría, contrataciones públicas, derecho
        administrativo, revisión de documentos y capacitación.
      </p>

      <div className="resourceList">
        <a className="resourceCard" href="mailto:lexgub.peru@gmail.com?subject=Consulta%20profesional%20LexGub">
          <span className="cardIcon" style={{ marginBottom: 0 }}><IconMail /></span>
          <div>
            <strong>Correo de contacto</strong>
            <span>lexgub.peru@gmail.com</span>
          </div>
        </a>
      </div>

      <div className="legalNotice wideNotice" style={{ marginTop: '28px' }}>
        <strong>Para una primera consulta</strong>
        <p>
          Describa de forma general la materia, el tipo de actuación o documento recibido y la necesidad concreta. No envíe por
          este canal información reservada, confidencial, datos personales sensibles ni documentos cuya divulgación esté restringida.
          La aceptación de un encargo está sujeta a la revisión de incompatibilidades, impedimentos y conflictos de interés aplicables.
        </p>
      </div>
    </section>
  );
}
