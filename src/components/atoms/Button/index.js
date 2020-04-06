import React, { useContext } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './Text';
import { ThemeContext } from '../../theme';

const Button = ({
    onPress,
    children,
    style,
    disabled,
  }) => {
  
    const theme = useContext(ThemeContext);
    const { buttonStyle, buttonTitle } = styles;
    return (
        <TouchableOpacity
          onPress={onPress}
          style={[buttonStyle(theme, disabled), style]}
          disabled={disabled}
        >
          <Text style={buttonTitle(theme, disabled)}>
            {children}
          </Text>
        </TouchableOpacity>
      );
}

export { Button };
