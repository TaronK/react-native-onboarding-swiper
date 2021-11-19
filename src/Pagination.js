import { View, StatusBar, I18nManager, Platform } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Dots from './Dots';

const Pagination = ({
  numPages,
  currentPage,
  isLight,
  bottomBarHeight,
  bottomBarColor,
  controlStatusBar,
  showSkip,
  showNext,
  showDone,
  onNext,
  onSkip,
  onDone,
  skipLabel,
  nextLabel,
  allowFontScaling,
  SkipButtonComponent,
  NextButtonComponent,
  DoneButtonComponent,
  DotComponent,
  selectedDotColor,
  dotColor
}) => {
  const isLastPage =
    I18nManager.isRTL && Platform.OS == 'ios'
      ? currentPage === 0
      : currentPage + 1 === numPages;

  const SkipButtonFinal = showSkip  && (
    <SkipButtonComponent
      isLight={isLight}
      skipLabel={skipLabel}
      allowFontScaling={allowFontScaling}
      onPress={() => {
        if (typeof onSkip === 'function') {
          if (controlStatusBar) {
            StatusBar.setBarStyle('default', true);
          }
          onSkip();
        }
      }}
    />
  );

  const NextButtonFinal = showNext && (
    <NextButtonComponent
      nextLabel={nextLabel}
      allowFontScaling={allowFontScaling}
      isLight={isLight}
      onPress={onNext}
    />
  );

  const DoneButtonFinal = showDone && (
    <DoneButtonComponent
      isLight={isLight}
      allowFontScaling={allowFontScaling}
      onPress={() => {
        if (typeof onDone === 'function') {
          if (controlStatusBar) {
            StatusBar.setBarStyle('default', true);
          }
          onDone();
        }
      }}
    />
  );
  return (
    <View
      style={{
        height: bottomBarHeight,
        backgroundColor: bottomBarColor,
        ...styles.container,
      }}
    >
      <Dots
        isLight={isLight}
        numPages={numPages}
        currentPage={currentPage}
        Dot={DotComponent}
        style={styles.dots}
        selectedDotColor={selectedDotColor}
        dotColor={dotColor}
      />
      <View style={styles.buttonTop}>{SkipButtonFinal}</View>
      <View style={styles.buttonBottom}>
        {NextButtonFinal}
      </View>
    </View>
  );
};

Pagination.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  isLight: PropTypes.bool.isRequired,
  bottomBarHeight: PropTypes.number.isRequired,
  bottomBarColor: PropTypes.string.isRequired,
  showNext: PropTypes.bool.isRequired,
  showSkip: PropTypes.bool.isRequired,
  showDone: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  onSkip: PropTypes.func,
  onDone: PropTypes.func,
  allowFontScaling: PropTypes.bool,
  skipLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  nextLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  SkipButtonComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  DoneButtonComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  NextButtonComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  DotComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
    selectedDotColor: PropTypes.string,
    dotColor: PropTypes.string
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTop: {
    marginTop: 24,
    width: '100%'
  },
  buttonBottom: {
    width: '100%'
  },
  dots: {
    width: '100%'
  },
};

export default Pagination;
