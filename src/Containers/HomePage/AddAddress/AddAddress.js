import React, { useState } from 'react';
import {Wrapper, Container, Heading, Home, Description, EditDescription, Options, Edit, Delete} from './AddressStyle';
import {FaHome} from 'react-icons/fa';
import './address.css';

function AddAddress()
{

    const[values, setValues]= useState([
        {
            id: 0,
            name: "Home",
            description: "DTTDC, under flyover facility , Raja Garden Crossing ring road, New Delhi 110015 , India"
        },
        {
            id: 1,
            name: "Office",
            description: "DTTDC, under flyover facility , Raja Garden Crossing ring road, New Delhi 110015 , India"
        },
        {
            id: 0,
            name: "PG",
            description: "DTTDC, under flyover facility , Raja Garden Crossing ring road, New Delhi 110015 , India"
        }
    ])

    const [edit, setEdit]= useState(null);

    function editHandler(index){
        setEdit(index)
    }

    function finalHandler(){
        setEdit(null)
    }

    function changeHandler(event){
        console.log("values: ",values);
        let input= event.target.value
        values.map((value, index)=> {
            if(edit === index)
            {
                value.description= input
                console.log("the input: ",input)
            }
            console.log("the input: ",input)

        })


    }

    return(
        <div>
            <Wrapper>
                {values.map((value, index)=> (
                <Container>
                <Heading>
                    <FaHome color= {"#a0a0a0"}></FaHome>
                    <Home>{value.name}</Home>
                </Heading>
                {edit=== index ? 
                <div>
                <EditDescription
                    placeholder= "Give your new Address"
                    type= "text"
                    name= "address"
                    rows= "4"
                    onChange= {changeHandler}
                />
                <Edit onClick= {finalHandler}>Ok </Edit> </div>
                 : 
                <Description>{value.description}</Description>
                }
                <Options>
                    <Edit onClick= {()=> editHandler(index)}>Edit</Edit>
                    <Delete disabled= "true">Delete</Delete>
                </Options>
            </Container>
                ))}

            </Wrapper>
        </div>
    );
}

export default AddAddress;