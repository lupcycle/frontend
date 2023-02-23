import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import api from "../api/api";
import { signinAPI } from "../api/list";
import { accountInfoState, isSigninErrorState } from "../store/account";
import { signinType } from "../type/account";


const useSigninHook = {

  Signin : async ({userid, password}: signinType) => {

    const [isSigninError, isSigninErrorSetter ] = useRecoilState(isSigninErrorState)
    const accountInfoSetter = useSetRecoilState(accountInfoState)
    const navigate = useNavigate();

    try {
      const response = await signinAPI({userid, password})

      api.setAuthorizationHeader(response.token["access-token"])

      isSigninErrorSetter({...isSigninError,  hasAccountInfoNotMatched: false})
      accountInfoSetter(response.account)
      navigate("/")

    } catch {
      isSigninErrorSetter({...isSigninError,  hasAccountInfoNotMatched: false})
    }
  },

  Signout : async () => {}

}

export default useSigninHook;

