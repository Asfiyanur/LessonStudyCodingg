import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const login = (values) => {
    dispatch(fetchStart());
    console.log("email : " + values.email);
    console.log("password : " + values.password);
    dispatch(loginSuccess(values));
  };

  const register = (values) => {
    dispatch(fetchStart());
    console.log(values);
    dispatch(registerSuccess(values));
  };

  return { login, register };
};

export default useAuthCalls;
