import React from "react";
import { Link } from "react-router-dom";

import {
  ButtonPrimary,
  ButtonIcon,
  ButtonLink,
} from "../../components/Button/Button";
import {
  FormControl,
  RadioButton,
} from "../../components/Forms/FormControl/FormControl";

import logo from '../../assets/svg/logo2.svg'; 

import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import "./Login.css";


interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleUsername: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const Login = ({handleSubmit, handleUsername, handlePassword, isValid }: Props) => {
  
  return (
    <>
      <div className="login-wrapper">

        <img src={logo} className="logo" alt="logo" />

        <h1 className="mb-5">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="login-input mb-3">
            <FormControl type="text" placeholder="Username" onChange={handleUsername} />
          </div>

          <div className="password-input mb-3">
            <FormControl type="password" placeholder="Password" onChange={handlePassword} />
          </div>

          <div className="remember-widget mb-5">
            <RadioButton children="Remember me" />
            <Link to="/forgot-password" className="btn btn-link">
              <ButtonLink type="button">Forgot password?</ButtonLink>
            </Link>
          </div>

          <div className="btn-login mb-5">
            <ButtonPrimary type="submit">Login</ButtonPrimary>
          </div>

          <div className="btn-icons-widget mb-3">
            <ButtonIcon type="button">
              <FaApple />
            </ButtonIcon>
            <ButtonIcon type="button">
              <FcGoogle />
            </ButtonIcon>
          </div>

          <span className="mr-3">Don't have an account?</span>
          <Link to="/signup">
            <ButtonLink type="button">Sign up</ButtonLink>
          </Link>
        </form>

        <div className="is-valid">
          {isValid ? 'Login or password incorrect!' : '' }
        </div>

      </div>
    </>
  );
};

export default Login;
