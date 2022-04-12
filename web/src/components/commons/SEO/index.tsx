import PropTypes from 'prop-types';

export function SEO({ headerTitle }) {
  const hasHeaderTitle = Boolean(headerTitle);
  const baseTitle = 'React Sidemenu';
  const title = hasHeaderTitle
    ? `${headerTitle} | ${baseTitle}`
    : baseTitle;
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content={urlBase} /> */}
      <meta property="og:title" content={title} />
      {/* <meta property="og:description" content={description} />
      <meta property="og:image" content={image} /> */}

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content={urlBase} /> */}
      <meta property="twitter:title" content={title} />
      {/* <meta property="twitter:description" content={description} /> */}
      {/* <meta property="twitter:image" content={image} /> */}
    </>
  );
}

SEO.propTypes = {
  headerTitle: PropTypes.string,
};

SEO.defaultProps = {
  headerTitle: '',
};
