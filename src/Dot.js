import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Dot = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? '#1B5887' : '#F4F4F4';
  } else {
    backgroundColor = selected ? '#1B5887' : '#F4F4F4';
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
