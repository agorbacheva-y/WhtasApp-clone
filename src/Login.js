import { auth, provider } from "./firebase";
import './Login.css';
import Button from '@mui/material/Button';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  // first argument is state, second argument is dispatch
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsapp logo"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          <p>Sign in with Google</p>
        </Button>
      </div>
       
    </div>
  );
}

export default Login;
