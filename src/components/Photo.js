import React from 'react';
import PropTypes from 'prop-types'

function Photo({ photoUrl }) {
  return <img src={photoUrl} />;
}

Photo.propTypes = {
  photoUrl: PropTypes.string.isRequired
};

export default Photo;
