import React from "react";
import frontimage from "../../assets/Asset 2ldpi.png";
import mekvahan from "../../assets/Asset 3ldpi.png";
import google from "../../assets/Asset 5ldpi.png";
import facebook from "../../assets/Asset 6ldpi.png";
import {navigate} from '@reach/router';
import axios from 'axios';

import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  Header,
  Icon,
  Mekvahan,
  Forms,
  Input,
  ImageWrapper,
  ForgotPassword,
  LoginButton,
  NewUser,
  Account,
  SignUp,
  HorizontalWrapper,
  Horizontal,
  Line,
  Text,
  IconWrapper,
  Continue,
  Google,
  Facebook,
  BottomWrapper
} from "./LoginStyle";

function Login(props) {

  function submitHandler() {

    props.history.push("/mekvahan");

    // axios.post("https://mekvahan.com/api/android_intern_task")
    // .then(response=> console.log("response: ",response))
    // .catch(err=> console.log("error: ", err))
  }

  // const Invoices = () => (
  //   <div>
  //     {/* <MainPage
  //       onSubmit={async event => {
  //         const newInvoice = await 
  //         event.preventDefault();
  //         navigate(`/login`);
  //       }} */}
  //     {/* /> */}
  //   </div>
  // )

  return (
    <Wrapper>
      <LeftWrapper>
        <ImageWrapper src={frontimage} alt="the car" style= {{width: '100%',height: '100%', overflowY: "hidden"}}/>
      </LeftWrapper>
      <RightWrapper>
        <Header>
          <Icon>
            <img src={mekvahan} alt="mekvahan" />
          </Icon>
          <Mekvahan>MEKVAHAN</Mekvahan>
        </Header>
        <Forms onSubmit= {submitHandler}>
          <div>
            <div>
              <Input
                placeholder="10 digit mobile number"
                inputMode="numeric"
                maxLength= {10}
                name="number"
                required
              />
            </div>
            <div>
              <Input
                placeholder="Password"
                type="password"
                name="password"
                required
              />
              <ForgotPassword href= "#">Forgot Password?
              </ForgotPassword>
            </div>
            <BottomWrapper>
              <LoginButton type= "submit">Login</LoginButton>
              <NewUser>
                <Account>Don't have an account ? </Account>
                <span>
                  <SignUp href= "#">Sign Up now</SignUp>
                </span>
              </NewUser>
              <HorizontalWrapper>
                <Horizontal>
                  <Line />
                </Horizontal>
                <Text>Or</Text>
                <Horizontal>
                  <Line />
                </Horizontal>
              </HorizontalWrapper>
              <IconWrapper>
                <Continue>continue with</Continue>
                <Facebook><img src= {google} alt= "google"/></Facebook>
                <Google><img src= {facebook} alt= "facebook"/></Google>
              </IconWrapper>
            </BottomWrapper>
          </div>
        </Forms>
      </RightWrapper>
    </Wrapper>
  );
}

export default Login;
