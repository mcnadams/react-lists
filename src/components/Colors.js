import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

function Colors({ colors }) {

  const colorList = colors.map(color => {
    return (
      <li key={color.hex}>
        <Color name={color.name} hex={color.hex} rgb={color.rgb} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};

export default Colors;
