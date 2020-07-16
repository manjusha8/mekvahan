import styled from 'styled-components';

export const Wrapper= styled.div`
    width: 100%;
    background: white;
    padding: 25px 10px;
    border-radius: 3px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const Container= styled.div`
    border: 1px solid #ece8e8;
    border-radius: 3px;
    width: 300px;
    padding: 20px;
    margin: 0px 0px 20px 10px;
`;

export const Heading= styled.div`
    display: flex;
    color: black;
`;

export const Home= styled.div`
    margin-left: 5px;
`;

export const Description= styled.div`
    color: #a0a0a0;
    padding: 10px;
    font-family: Helvetica;
    font-size: 14px;
    margin-left: 12px;
`;

export const EditDescription= styled.textarea`
    color: #a0a0a0;
    padding: 10px;
    font-family: Helvetica;
    font-size: 14px;
    margin-left: 12px;
    border: none;
    outline: none;
    overflow: hidden;
`;

export const Options= styled.div`
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
`;

export const Edit= styled.button`
    color: white;
    background: #b71d1d;
    border: none;
    outline: none;
    padding: 5px 25px;
    border-radius: 3px;
`;

export const Delete= styled.button`
    color: white;
    border: none;
    outline: none;
    padding: 5px 25px;
    border-radius: 3px;
    background: #ece8e8;
    margin-left: 20px;
`;


