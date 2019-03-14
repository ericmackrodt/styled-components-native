import transform from "css-to-react-native-transform";
import styled from "styled-components/native";
function getCssString(literals, placeholders) {
    return literals.reduce((acc, next, index) => {
        acc += next;
        const placeholder = placeholders[index];
        if (placeholder) {
            acc += placeholder;
        }
        return acc;
    }, "");
}
function styledNative(WrappedComponent) {
    return (literals, ...placeholders) => {
        const css = getCssString(literals, placeholders);
        const result = transform(css);
        return styled(WrappedComponent).attrs(Object.assign({}, result)) ``;
    };
}
export default styledNative;
//# sourceMappingURL=index.js.map