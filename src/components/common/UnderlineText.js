import React, { Component } from "react";
import { Typography, useTheme } from "@material-ui/core";
import styled from "styled-components";

export const UnderlineTypography = styled(Typography)`
  text-decoration: none;
  position: relative;
  display: inline;
  font-weight: bold;
  &:after {
    position: absolute;
    content: "";
    height: 2px;
    /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
    bottom: -2px;
    /* center - (optional) use with adjusting width */
    margin: 0 auto;
    left: 0;
    width: ${({ underlineWidth }) => underlineWidth || "100%"};
    background: ${({ underlineColor }) => underlineColor || "red"};
    /* optional animation */
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;

export function UnderlineTypographyWithThemeColor({
  containerStyle,
  ...props
}) {
  const theme = useTheme();
  return (
    <div style={{ ...containerStyle }}>
      <UnderlineTypography
        underlineColor={theme.palette.secondary.main}
        {...props}
      />
    </div>
  );
}
