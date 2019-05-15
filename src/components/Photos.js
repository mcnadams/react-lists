import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function Photos({ photos }) {
  const photoList = photos.map(photo => {
    console.log(photo);
    return (
      <li key={photo} style={{ 'list-style': 'none', display: 'inline-block', margin: '10px' }}>
        <Photo photoUrl={photo} />
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
