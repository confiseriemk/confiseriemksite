import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    h1 {
        font-size: 2em;
        font-weight: bolder;
    }

    h2 {
        font-size: 1.5em;
        font-weight: bolder;
    }

    h3 {
	
        font-size: 1.17em;
        font-weight: bolder;
    }

    h4 {
        font-size: 1em; 
        font-weight: bolder;
    }

    h5 {
        font-size: .83em;
        font-weight: bolder;
    }

    h6 {
        font-size: .67em;
        font-weight: bolder;
    }

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 75vh;
    width: 30vw;
    border-radius: 15px;
    border-color: #000;
    border: 1px solid #ccc;
`

export const Input = styled.input`
    width: 95%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    outline: none;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
`

export const PasswordInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
    outline: none;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
`

export const SidebySide = styled.div`
    display: flex;
    flex-direction: row;
`

export const SubmitButton = styled.div`
    margin-left: 10px;
    width: 95%;
    height: 50px;
    border-style: solid;
    border-radius: 4px;
    background-color: #fff;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    cursor: pointer;
    transition: 100ms;
    color: #181f2d;
    @media(max-width: 800px){
        width: 90px;
        height: 30px;
        margin-right: 16px;
    }

    &:hover {
        color: #fff;
        background-color: #181f2d;
    }
`

export const ButtonText= styled.h3`
    cursor: pointer;
    font-weight: 400; 
    font-family: 'Montserrat';
    @media(max-width: 800px){
        font-size: 12px;
    }
    text-decoration: 'none';
`

export const Text = styled.h1`
    font-weight: 600; 
    font-family: 'Montserrat';
    margin-left: 10px;
`

export const Sections = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    align-items: center;
    background-color: #f7f7f7;
`

export const Forgotten = styled.h5`
    font-weight: 400; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #f00;
`