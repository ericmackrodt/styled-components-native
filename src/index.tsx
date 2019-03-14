import transform from "css-to-react-native-transform";
import React from "react";

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

function styledNative<TProps>(WrappedComponent: React.ComponentType<TProps>) {
  return (
    literals: TemplateStringsArray,
    ...placeholders: string[]
  ): React.SFC<TProps> => {
    const css = getCssString(literals, placeholders);
    const result: Partial<TProps> = transform(css);

    return (props: TProps) => <WrappedComponent {...result} {...props} />;
  };
}

export default styledNative;
