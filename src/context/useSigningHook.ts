import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
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

      isSigninErrorSetter({...isSigninError,  hasAccountInfoNotMatched: false})
      accountInfoSetter(response)
      navigate("/main")

    } catch {
      isSigninErrorSetter({...isSigninError,  hasAccountInfoNotMatched: false})
    }
  },

  Signout : async () => {}

}

export default useSigninHook;

