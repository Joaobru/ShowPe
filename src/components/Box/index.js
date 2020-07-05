import React from "react";

import { ContentBox } from "./styles";

function Box({ size, children, color }) {
  return (
    <ContentBox size={size} color={color}>
      {children}
    </ContentBox>
  );
}

export default Box;
