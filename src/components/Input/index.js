import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import PropTypes from "prop-types";

import { Container, TInput } from "./styles";

function Input({ style, icon, color, size, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && (
        <Icon
          name={icon}
          size={size ? size : 20}
          color={color ? color : "rgba(0,0,0,0.3)"}
        />
      )}
      <TInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default Input;
