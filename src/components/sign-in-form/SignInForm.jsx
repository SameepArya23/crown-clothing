//useContext is not imported.
import { useState } from "react";
import {
  signInWithGooglePopup,
  //   createUserAuthWithEmailAndPassword,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./sign-in-form.styles.scss";
import Button from "../button/Button";
// import { UserContext } from "../../contexts/User.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //# context code { useContext } for CALLING { setCurrentUser } from UserContext.
  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const { user } =
      await signInAuthWithEmailAndPassword(email, password);
      //# context code SETTING THE USER.
      // setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Password is incorrect");
      }

      if (password.length < 8) {
        alert("Password should have 8 charecters");
      }
    }

    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={logGoogleUser} buttonType={"google"}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
