import reactWrapper from "JsComponents/reactWrapper";
import VariantSelector from "ReactComponents/variant-selector";
import "StyleComponents/variant-options.scss"; 

export default () => {
    reactWrapper(VariantSelector, 'variant-selector', '#variant-data');
}