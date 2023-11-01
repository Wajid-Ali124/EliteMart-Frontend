import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = ({ title, titleTemplate, description }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {title} | {titleTemplate}
        </title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
};

SEO.defaultProps = {
  title: "EliteMart",
  titleTemplate: "Product Page",
  description: "Elevate Your Shopping Experience with Exclusive Brand",
};

export default SEO;
