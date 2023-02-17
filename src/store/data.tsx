import { atom, selector } from "recoil";




export const dataState = atom({
  key: 'dataState',
  default: ''
});

export const fetchDataState = selector({
  key: 'fetchDataState',
  get: ({get}) => {
    // fetch API
  }
})

