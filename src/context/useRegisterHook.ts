import { Button } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import api from "../api/api";
import restapi from "../api/fetchAPI";
import { dataState } from "../store/data";



const useRegisterHook = {
  Register : () => {
    restapi.get("/url",)

  },

  CheckIDValid : () => {
    
  }
}

export default useRegisterHook;

