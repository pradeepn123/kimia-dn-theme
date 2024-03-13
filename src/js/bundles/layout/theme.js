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

