import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentAnswerStyle = {
    color
  };
  return <p style={contentAnswerStyle}>{children}</p>;
};

// export default ColorfulMessage;
