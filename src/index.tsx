import transform from "css-to-react-native-transform";
import React from "react";
import styled from "styled-components/native";

function getCssString(literals: TemplateStringsArray, placeholders: string[]) {
  return literals.reduce((acc, next, index) => {
    acc += next;

    const placeholder = placeholders[index];

    if (placeholder) {
      acc += placeholder;
    }

    return acc;
  }, "");
}

function styledNative<TProps, C extends React.ComponentType<TProps>>(
  WrappedComponent: C
) {
  return (literals: TemplateStringsArray, ...placeholders: string[]) => {
    const css = getCssString(literals, placeholders);
    const result: TProps = transform(css);

    return styled(WrappedComponent).attrs({ ...result })``;
  };
}

export default styledNative;
