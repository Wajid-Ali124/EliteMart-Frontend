import PropTypes from "prop-types";

const GoogleMap = ({ lat, lng, zoom, options }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.8243098124412!2d68.71440455044325!3d27.536916877059692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935db830dbf812f%3A0xde986efa65a41f76!2sKhairpur%20mirs!5e0!3m2!1sen!2s!4v1696073561589!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Khairpur Location Map" // Place the title attribute here
      ></iframe>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
  options: PropTypes.shape({}),
};

GoogleMap.defaultProps = {
  lat: -3.745,
  lng: -38.523,
  zoom: 12,
};

export default GoogleMap;
