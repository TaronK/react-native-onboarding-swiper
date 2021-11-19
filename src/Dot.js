import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Dot = ({ isLight, selected, selectedDotColor, dotColor }) => {
  let backgroundColor;
  let defaultSelectedDotColor = selectedDotColor || '#1B5887';
  let defaultDotColor = dotColor || '#F4F4F4';
  if (isLight) {
    backgroundColor = selected ? defaultSelectedDotColor : defaultDotColor;
  } else {
    backgroundColor = selected ? defaultSelectedDotColor : defaultDotColor;
  }
  return (
    <View
      style={{
        ...styles.dot,
        backgroundColor,
      }}
    />
  );
};

Dot.propTypes = {
  isLight: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
};

const styles = {
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4
  },
};

export default Dot;
