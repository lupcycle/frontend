import { atom } from "recoil";
import { accountInfoDummy } from "../dummy/account";



export const accountInfoState = atom({
  key: 'accountInfoState',
  default: accountInfoDummy
})

export const isSigninErrorState = atom({
  key: 'isSigninErrorState',
  default: {
    isLogined: false,
    hasAccountInfoNotMatched: false
  }
})