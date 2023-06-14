import { lazyLoadComponent } from '../../components/lazyloadSection';

import 'Styles/sections/image-banner.scss';

const componentLoaded = () => {
  console.log("Image banner componentLoadedasdf")
}

window.addEventListener('DOMContentLoaded', () => {
    componentLoaded();
})

document.addEventListener("click", () => {
    lazyLoadComponent('hello-world');
})