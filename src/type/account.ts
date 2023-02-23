export interface accountType {
  name: string;
}

export interface signinType {
  userid: string;
  password: string;
}

export interface signinErrorType {
  isLogined: boolean;
  hasAccountInfoNotMatched: boolean;
}