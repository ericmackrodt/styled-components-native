import transform from "css-to-react-native-transform";
import React from "react";

export type Interpolation<P> = InterpolationValue | InterpolationFunction<P>;
// must be an interface to be self-referential
export type InterpolationValue = string | number | FalseyValue;
export type FalseyValue = undefined | null | false;
export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

function getValue<TProps>(props: TProps, interpolation: Interpolation<TProps>) {
  if (typeof interpolation === "function") {
    return interpolation(props);
  }
  return interpolation;
}

function getCssString<TProps>(
  props: TProps,
  literals: TemplateStringsArray,
  placeholders: Array<Interpolation<TProps>>
) {
  return literals.reduce((acc, next, index) => {
    acc += next;

    const placeholder = getValue(props, placeholders[index]);

    if (placeholder) {
      acc += placeholder;
    }

    return acc;
  }, "");
}

function styledNative<TProps>(WrappedComponent: React.ComponentType<TProps>) {
  return (
    literals: TemplateStringsArray,
    ...placeholders: Array<Interpolation<TProps>>
  ): React.SFC<TProps> => {
    return props => {
      const css = getCssString(props, literals, placeholders);
      const result: TProps = transform(css);
      return <WrappedComponent {...result} {...props} />;
    };
  };
}

export default styledNative;
