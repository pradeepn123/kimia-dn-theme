import reactWrapper from "./reactWrapper";

export default (component, elname) => {
    const reactElements = document.querySelectorAll(elname);
    reactElements.forEach(el => {
        let propsHolderClass = null;
        const propsHolder = el.closest('div').querySelector('[data-props]');
        if(propsHolder) {
          propsHolderClass = `.${propsHolder.className || null}`;
        }
        reactWrapper(component,elname,propsHolderClass,el);
    })
}



