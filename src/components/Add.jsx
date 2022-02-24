import React from 'react'
import styled from 'styled-components'
import { Red } from '../style/GlobolStyle';

export const Add = ({setIsOpenModal}) => {
  return (
    <AddStlyle onClick={()=> setIsOpenModal(true)}>+</AddStlyle>
  )
}


const AddStlyle = styled.button `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    aspect-ratio: 1 / 1;
    font-size: 25px;
    border-radius: 50%;
    background: ${Red};
    border: none;
    color: #fff;
    transition: 200ms ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
`;