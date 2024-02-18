import "./style.scss";
function Map() {
  return (
    <section id="map">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4007135794345!2d49.839571199999995!3d40.3778107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1227607ab7%3A0x9a57b16206776b50!2zRVhQQVJHTyB8IDI4IE1heSAtIFHEscWfIFBhcmvEsSAoS2FyZ28p!5e0!3m2!1sen!2saz!4v1708254442128!5m2!1sen!2saz"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
