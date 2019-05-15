import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, photos }) {
  return (
    <section>
      <h2>{title || 'Album'}</h2>
      <Photos photos={photos || ['https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg']} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string,
  photos: PropTypes.array
};

export default PhotoAlbum;
