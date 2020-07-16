import React, { useState } from "react";
import pageimage from "../../../assets/Asset 16xhdpi.png";
import {
  Wrapper,
  LeftWrapper,
  RightWrapper,
  ProfileContent,
  Profile,
  UserName,
  Headers,
  Link,
  AddressWrapper,
  AddAddress,
  CommonWrapper,
  Common,
} from "./MainPageStyle";
import AddDetails from '../AddAddress/AddAddress';

function MainPage(props) {
  const [statement] = useState([
    {
      name: "My Profile",
      active: false
    },
    {
      name: "Manage Address",
      active: true
    },
    {
      name: "Change Password",
      active: false
    }
  ]);

  const [flag, setFlag] = useState(false);

  function clickHandler() {
    setFlag(true);
  }

  return (
    <Wrapper>
      <LeftWrapper>
        <CommonWrapper>
          <ProfileContent>
            <Profile></Profile>
            <UserName>
              <div>Hi</div>
              <div>Mekvahan!</div>
            </UserName>
          </ProfileContent>
        </CommonWrapper>
        <Headers>
          {statement.map((value, index) => (
            <div>
              <Link href="#">
                <CommonWrapper active= {value.active} id={index}>{value.name}</CommonWrapper>
              </Link>
            </div>
          ))}
        </Headers>
        <Common></Common>
      </LeftWrapper>
      <RightWrapper>
        <CommonWrapper>
          <AddressWrapper>
            <div> My Address</div>
            <AddAddress onClick={clickHandler}> + Add Address </AddAddress>
          </AddressWrapper>
        </CommonWrapper>
        {!flag ? (
          <Common>
            <img
              src={pageimage}
              alt="vehicle"
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            />
          </Common>
        ) : <AddDetails/>
        }
      </RightWrapper>
    </Wrapper>
  );
}

export default MainPage;
