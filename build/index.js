import transform from "css-to-react-native-transform";
import React from "react";
function getValue(props, interpolation) {
    if (typeof interpolation === "function") {
        return interpolation(props);
    }
    return interpolation;
}
function getCssString(props, literals, placeholders) {
    return literals.reduce((acc, next, index) => {
        acc += next;
        const placeholder = getValue(props, placeholders[index]);
        if (placeholder) {
            acc += placeholder;
        }
        return acc;
    }, "");
}
function styledNative(WrappedComponent) {
    return (literals, ...placeholders) => {
        return props => {
            const css = getCssString(props, literals, placeholders);
            const result = transform(css);
            return <WrappedComponent {...result} {...props}/>;
        };
    };
}
export default styledNative;
//# sourceMappingURL=index.js.map