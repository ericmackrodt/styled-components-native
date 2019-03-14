import React from "react";
declare function styledNative<TProps>(WrappedComponent: React.ComponentType<TProps>): (literals: TemplateStringsArray, ...placeholders: string[]) => React.FunctionComponent<TProps>;
export default styledNative;
