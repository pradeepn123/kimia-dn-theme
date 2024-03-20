import 'Styles/global/index.scss';
import { ProductCarousel } from 'Components/productCarousel';
import dymanicRenderComponents from 'Components/dymanicRenderComponents';
dymanicRenderComponents(ProductCarousel,'product-carousel');
import { handleAccordion } from '../../components/accordion';

handleAccordion();

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

document.addEventListener('DOMContentLoaded' , () => {
  const setCustomCookie =  () => {
    console.log("cookie", getCookie("cart_sig"));
    if(!(getCookie("cart_sig"))) {
      setCookie("cart_sig", "4622ccaf3a40a11497bef638fb472175", 365)
    }
   }
   window.customSetCookie = setCustomCookie;
})

  //In order to make search work when we hit enter key
  document.addEventListener('DOMContentLoaded', () =>{
    const sideBarButton = document.querySelectorAll('[data-sidebar-button');
    sideBarButton.forEach( (e)=>{
      e.addEventListener('click', function(){
        var input = document.querySelector(".search-field__input");
        input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.querySelector(".search-sidebar__footer-button").click();
        }
        });
      })
    })
  })


class DropDownSelect extends HTMLElement {
  constructor() {
    super();
    this.elements = {
      input: this.querySelector('input[name="locale_code"], input[name="country_code"]'),
      button: this.querySelector('button'),
      panel: this.querySelector('.disclosure__list-wrapper'),
      hiddenInput: this.querySelector('[name="selected_selling_plan"]') // Changed selector
    };
    this.elements.button.addEventListener('click', this.openSelector.bind(this));
    this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
    this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

    this.querySelectorAll('.disclosure__item').forEach(item => item.addEventListener('click', this.onItemClick.bind(this)));

    const selectedSellingPlan = this.getAttribute('selected_selling_plan');
    if (selectedSellingPlan) {
        this.elements.hiddenInput.value = selectedSellingPlan;
    }
}

    hidePanel() {
        this.elements.button.setAttribute('aria-expanded', 'false');
        this.elements.panel.setAttribute('hidden', true);
    }

    onContainerKeyUp(event) {
        if (event.code.toUpperCase() !== 'ESCAPE') return;

        this.hidePanel();
        this.elements.button.focus();
    }

    onItemClick(event) {
        event.preventDefault();
        const selectedOptionText = event.currentTarget.textContent.trim();
        const sellingPlanId = event.currentTarget.getAttribute('selling-plan-id');
        this.elements.button.textContent = selectedOptionText;
        this.elements.hiddenInput.value = sellingPlanId;
        this.hidePanel();
    }

    openSelector() {
        this.elements.button.focus();
        this.elements.panel.toggleAttribute('hidden');
        this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
    }

    closeSelector(event) {
        const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
        if (event.relatedTarget === null || shouldClose) {
            this.hidePanel();
        }
    }
}

customElements.define('dropdown-select', DropDownSelect);

  