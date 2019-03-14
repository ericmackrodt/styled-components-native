import React from "react";
export declare type Interpolation<P> = InterpolationValue | InterpolationFunction<P>;
export declare type InterpolationValue = string | number | FalseyValue;
export declare type FalseyValue = undefined | null | false;
export declare type InterpolationFunction<P> = (props: P) => Interpolation<P>;
declare function styledNative<TProps>(WrappedComponent: React.ComponentType<TProps>): (literals: TemplateStringsArray, ...placeholders: Interpolation<TProps>[]) => React.FunctionComponent<TProps>;
export default styledNative;
