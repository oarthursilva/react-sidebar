import PropTypes from 'prop-types';
import { SEO } from "src/components/commons/SEO";

export default function AppPageWrapper({ children, seoProps }) {
  return (
    <>
      <SEO
        {...seoProps}
      />
      {children}
    </>
  );
}

AppPageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headerTitle: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
}

AppPageWrapper.defaultProps = {
  seoProps: {
    headerTitle: '',
  },
};

