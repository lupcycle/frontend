import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import api from "../api/api";
import restapi from "../api/fetchAPI";
import { dataState } from "../store/data";



const useRegisterHook = () => {
  const checkIDValid = () => {}

  const register = () => {}

  return {
    checkIDValid,
    register
  }
}

export default useRegisterHook;

