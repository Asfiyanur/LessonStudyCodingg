import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import {
  fetchFail,
  fetchStart,
  isActive,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarningNotify,
} from "../helpers/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (values) => {
    const { email, password } = values;
    dispatch(fetchStart());

    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(loginSuccess());
      toastSuccessNotify("welcome");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("something went wrong");
    }
  };

  const register = async (values) => {
    const { email, password, name, surname } = values;
    const displayName = `${name} ${surname}`;
    dispatch(fetchStart());
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateCurrentUser(auth.currentUser, {
        displayName: displayName,
      });
      dispatch(registerSuccess(values));
      toastSuccessNotify("welcome");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("something went wrong");
    }
  };

  const logout = () => {
    signOut(auth);
    dispatch(logoutSuccess());
    navigate("/login");
    toastWarningNotify("you are logged out");
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const activeUser = {
          email: user?.email,
          displayName: user?.displayName,
          photoURL: user?.photoURL,
        };
        dispatch(isActive(activeUser));
      } else {
        console.log("kullanıcı yok");
      }
    });
  };

  return { login, register, logout, userObserver };
};

export default useAuthCalls;
