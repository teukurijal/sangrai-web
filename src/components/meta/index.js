import PropTypes from 'prop-types';

createMeta.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default function createMeta(props) {
  return (
    <>
      <meta name="author" content="Valutrades Limited" />
      <meta name="description" content={props.description} />
      <title>{props.title}</title>
      <link rel="shortcut icon" href="/logo-karan.png" />

      <meta property="og:description" content={props.description} />
      <meta property="og:title" content={props.description} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:title" content={props.description} />
    </>
  );
}


