
import reactWrapper from "JsComponents/reactWrapper";
import Subscription from "ReactComponents/subscription-selector";
import "StyleComponents/subscription-sec.scss";  


export default () => {
    reactWrapper(Subscription, 'subscriptions', '#subscription-data');
}