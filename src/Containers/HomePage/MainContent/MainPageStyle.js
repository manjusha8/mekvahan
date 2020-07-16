import styled from 'styled-components';

export const Wrapper= styled.div`
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
`;

export const LeftWrapper= styled.div`
    width: 30%;
`;

export const CommonWrapper= styled.div`
    background: white;
    width: 100%;
    border-radius: 3px;
    margin-bottom: 7px; 
    padding: 7px;
    color: ${props=> props.active!=null ? (props.active ? '#b71d1d' : 'black') : 'black'}
`;

export const Common= styled.div`
    background: white;
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    height: 100%;
    padding: 7px;

`;

export const RightWrapper= styled.div`
    width: 70%;
    margin-left: 25px;
`;

export const ProfileContent= styled.div`
    display: flex;
`;

export const Profile= styled.div`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: #a0a0a0;
`;

export const UserName= styled.div`
    margin-left: 10px;
`;

export const Headers= styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const Link= styled.div`
    text-decoration: none;
`;

export const AddressWrapper= styled.div`
    display: flex;
    justify-content: space-between;
`;

export const AddAddress= styled.button`
    color: #a0a0a0;
    border: none;
    background: white;
    outline: none;
`;


