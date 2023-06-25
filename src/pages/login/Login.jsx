import SplashBanner from "../../components/SplashBanner/SplashBanner";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";
import { apiURL } from "../../fakeEnvVars";

export default function Login() {
  return (
    <>
      <div id="login-page">
        <SplashBanner title="Ocean" byline="This is a byline" />
        <LoginForm />
      </div>
    </>
  );
}
