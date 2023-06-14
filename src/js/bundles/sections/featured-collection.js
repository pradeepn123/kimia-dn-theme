//load js dependancies
import { quickAdd } from "../../components/quick-add";
import { ProductForm } from "../../components/product-form";

//import scss files 
import 'Styles/components/card.scss';
import 'Styles/components/price.scss';
import 'Styles/components/quick-add.scss';
import 'Styles/components/slider.scss';
import 'Styles/templates/collection.scss';

window.addEventListener('DOMContentLoaded', () => {
    quickAdd();
    ProductForm();
})