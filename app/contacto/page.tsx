import { IconMail } from '../components/icons';

export default function ContactoPage() {
  return (
    <section className="contentPage">
      <div className="eyebrow">CONTACTO</div>
      <h1>LEXGUB PERÚ</h1>
      <p>Proyecto independiente en desarrollo, especializado en derecho público, control gubernamental y gestión pública peruana.</p>
      <div className="resourceList">
        <a className="resourceCard" href="mailto:lexgubperu@gmail.com">
          <span className="cardIcon" style={{ marginBottom: 0 }}><IconMail /></span>
          <div>
            <strong>Correo</strong>
            <span>lexgubperu@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  );
}
