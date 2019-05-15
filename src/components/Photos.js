import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function Photos({ photos }) {
  const photoList = photos.map(photo => {
    return (
      <li key={photo}>
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
