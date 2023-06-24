import SplashBanner from "../../components/SplashBanner/SplashBanner";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Register.css";

export default function Register() {
  return (
    <>
      <div id="register-page">
        <SplashBanner title="Ocean" byline="This is the registration byline" />
        <RegisterForm />
      </div>
    </>
  );
}
