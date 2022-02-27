import React, { useState } from 'react'
import styled from 'styled-components'
import { BsBookmarkCheck } from "react-icons/bs"
import { FcCancel } from "react-icons/fc"
import { Black, Green, Red } from '../style/GlobolStyle'
import{useStore} from "../store"
import {nanoid} from 'nanoid'


export const Modal = ({setIsOpenModal}) => {
const [ title, setTitle] = useState('')
const[desc, setDesc] = useState('')



const {notes, setNotes} = useStore()

 const date = new Date()

 function creatNote(){
    let note={
    title:title,
    description:desc,
    date:date.toLocaleDateString(),
    id:nanoid(),
    }
    setNotes([...notes, note])
 }


    return (
        <ModalStyle>
            <div className="modal-body">
                <h2>Add Your Note Here...</h2>
                <input 
                value={title}
                onChange = {(event)=>setTitle(event.target.value)}
                className='modal-input' type="text" />
                <textarea 
                value={desc}
                onChange = {(event)=>setDesc(event.target.value)} className='modal-description'></textarea>
                <div className="modal-btns">
                    <button onClick={()=>creatNote()}><BsBookmarkCheck />Save</button>
                    <button onClick={()=> setIsOpenModal(false)}><FcCancel  />Canel</button>
                </div>
            </div>

        </ModalStyle>


    )
}

const ModalStyle = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    .modal{
        &-body{
            width: 480px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            background:#FFFFFF80;
            border-radius: 16px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), inset -1px -1px 1px rgba(0, 0, 0, 0.18), inset 1px 1px 1px rgba(255, 255, 255, 0.25);
        }
        &-title{
            font-size: 25px;
            color: ${Black};
            font-weight: 600;
        }
        &-input{
            padding: 15px;
            font-size: 18px;
            border: none;
            outline: none;
            color: ${Black};
            background:rgba(255, 255, 255, 0.5);
            border-radius:16px;
            margin: 15px 0 25px;
        }
        &-description{
            border: none;
            outline: none;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.5);
            color: ${Black};
            padding: 15px;
            resize: none;
            margin-bottom: 30px;
            min-height: 170px;
        }
        &-btns{
            display: flex;
            gap: 5px;
            button{
                padding: 4px;
                width: 110px;
                font-size: 16px;
                border: none;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                background: ${Green};
                color: #fff;
                letter-spacing: 1px;
                path{
                    fill:#fff;
                }
                &:last-child{
                    background:${Red};
                }
            }
        }
    }
`
