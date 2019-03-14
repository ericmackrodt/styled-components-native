import React from "react";
declare function styledNative<TProps, C extends React.ComponentType<TProps>>(WrappedComponent: C): (literals: TemplateStringsArray, ...placeholders: string[]) => import("styled-components").StyledComponent<C, any, {} & TProps, keyof TProps>;
export default styledNative;
