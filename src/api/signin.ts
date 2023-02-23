import fetchapi from "./fetchAPI";



export const signinAPI = async(input : {
  userid: string;
  password: string;
}) : Promise<{
  token: {
    "access-token": string;
    "refresh-token"?: string;
  },
  account: {
    name: string;
  }
}> => {
  return fetchapi.post("/auth/signin", {
    ...input
  })
}

export const syncAPI = async () : Promise<{
  name: string;
}> => fetchapi.post("/auth/sync")