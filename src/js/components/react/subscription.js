import React from "react";
import 'StyleComponents/subscription-sec.scss';
import {subscriptionInfo} from "JsComponents/subscriptionData"



export default () => { 
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.subscription-container__dropbtn')) {
      var dropdowns = document.getElementsByClassName("subscription-container__dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
    console.log("data",subscriptionInfo);

    return(
        <>
            <div className="subscription-container">
                <p className="subscription-container__value-tag">Best value</p>
                <div className="subscription-container__subs-one-wrapper">
                    <div className="subscription-container__subscription-wrapper">
                        <div className="subscription-container__subs-text">
                        <input type="radio" id="subscribe" name="purchase" value="sellingIdsubs" />
                        <label htmlFor="SUBSCRIBE & SAVE 10%">SUBSCRIBE & SAVE 10%</label><br/>
                        <div className="subscription-container__dropdown">
                        <button onClick={myFunction} className="subscription-container__dropbtn">Delivery options</button>
                        <div id="myDropdown" className="subscription-container__dropdown-content" >
                            <a href="#">Delivered every 1 month</a>
                            <a href="#">Delivered every 2 months</a>
                            <a href="#">Delivered every 3 months</a>
                        </div>
                        </div>
                        </div>
                        <div className="subscription-container__subs-price">
                        <p className="subscription-container__subs-compPrice">$35.00</p>
                        <p className="subscription-container__subs-actualPrice">$30.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

