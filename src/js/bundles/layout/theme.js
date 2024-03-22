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
      this.elements = {};
    }
  
    connectedCallback() {
      this.cacheElements();
      this.attachEventListeners();
    }
  
    cacheElements() {
      this.elements.button = this.querySelector('.dropdown__button');
      this.elements.panel = this.querySelector('.dropdown__list-wrapper');
      this.elements.selectedSellingPlan = this.getAttribute('selected_selling_plan');
      this.subscriptionSelectEl = this.closest('subscription-btn-plan-update');
    }
  
    attachEventListeners() {
      this.elements.button.addEventListener('click', this.openSelector.bind(this));
      this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
      this.addEventListener('keyup', this.onContainerKeyUp.bind(this));
      this.addEventListener('sellingPlanDropDownchanged', this.handleDropDownChanged.bind(this));
      window.addEventListener('mousedown', this.onOutsideClick.bind(this));
      this.elements.panel.addEventListener('click', this.handleItemClick.bind(this));
    }
  
    hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
    }
  
    onContainerKeyUp(event) {
      if (event.code.toUpperCase() === 'ESCAPE') {
        this.hidePanel();
        this.elements.button.focus();
      }
    }
  
    handleItemClick(event) {
      const selectedItem = event.target.closest('.dropdown__item');
      if (!selectedItem) return;
      event.preventDefault();
      const selectedOptionText = selectedItem.textContent.trim();
      const selectedSellingPlanId = selectedItem.getAttribute('selling-plan-id');
      const btnText = this.elements.button.querySelector(".btn_text");
      btnText.textContent = selectedOptionText;
      this.elements.selectedSellingPlan = selectedSellingPlanId;
      this.setAttribute('selected_selling_plan', selectedSellingPlanId);
      this.hidePanel();
      selectedItem.classList.add('selected');
      const selectDropdownChange = new CustomEvent('sellingPlanDropDownchanged', {
        detail: {
          "sellingPlanId": selectedSellingPlanId
        }
      });
      this.dispatchEvent(selectDropdownChange);
    }
  
    openSelector() {
      this.elements.button.focus();
      this.elements.panel.removeAttribute('hidden');
      this.elements.button.setAttribute('aria-expanded', 'true');
    }
  
    closeSelector(event) {
      const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
      if (event.relatedTarget === null || shouldClose) {
        this.hidePanel();
      }
    }
  
    onOutsideClick(event) {
      if (!this.elements.panel.contains(event.target) && event.target !== this.elements.button) {
        this.hidePanel();
      }
    }
  
    handleDropDownChanged(ev) {
      const { sellingPlanId } = ev.detail;
      if (!this.subscriptionSelectEl) return;
      const sellingPlanIdChanged = new CustomEvent('sellingPlanchanged', {
        detail: { "sellingPlanId": sellingPlanId }
      });
      this.subscriptionSelectEl.dispatchEvent(sellingPlanIdChanged);
    }
  }
  
  customElements.define('dropdown-select', DropDownSelect);