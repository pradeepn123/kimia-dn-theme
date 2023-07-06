import 'Styles/global/index.scss';
import { ProductCarousel } from 'Components/productCarousel';
import dymanicRenderComponents from 'Components/dymanicRenderComponents';
dymanicRenderComponents(ProductCarousel,'product-carousel');
import { handleAccordion } from '../../components/accordion';

handleAccordion();

