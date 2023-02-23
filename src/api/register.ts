import fetchapi from "./fetchAPI";



export const checkIDValidAPI = async(input: {
  userid: string;
}) : Promise<void> =>
  fetchapi.post('/auth/checkidvalid', input)


  
export const registerAPI = async(input: {
  userid: string;
  password: string;
  group: number[];
}) : Promise<void> =>
  fetchapi.post('/auth/register', input)