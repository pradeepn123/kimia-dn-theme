import { create } from "zustand";

export const usebuyBoxStore = create(() => ({
        "option1": null,
        "option2": null,
        "option3": null
})) 

export const updateSelectedValues = (key, value) => usebuyBoxStore.setState((state) => {
  debugger;
   state[key] = value;
   return state;
});

export const getSelectedValues = () => usebuyBoxStore.getState();