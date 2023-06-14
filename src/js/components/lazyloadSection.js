
export const lazyLoadComponent = async (componentName,callback = () => {return}) => {
    if(!componentName) {
        return false;
    } 
    const module = await import(/* webpackChunkName: componentName */ `./${componentName}`);
    module.default();
    callback();
 }
 