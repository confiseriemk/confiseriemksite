import styled from 'styled-components'

export const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #f00;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    left: 1340px;
    top: 40px;
`

export const Quantity= styled.h6`
    cursor: pointer;
    font-weight: 400; 
    font-family: 'Montserrat';
    @media(max-width: 800px){
        font-size: 12px;
    }
    text-decoration: 'none';
    color: #fff;
    user-select: none;
`

export const Container = styled.div`
    grid-area: HD;
    border-bottom: 1px solid #dedede;
    background: #202430;
    height: 80px;
    overflow: hidden;
    color: #000;
    justify-content: space-between;
    display: flex;
    align-items: center;
`

export const Tabs = styled.div`
    user-select: none;
    display: flex;
    flex-direction: row;
    align-items: center;
`


export const Icon = styled.img`
    width: 154,13px;
    height: 80px;
`

export const Button = styled.div`
    width: 150px;
    height: 50px;
    border-style: solid;
    border-radius: 4px;
    background-color: #181f2d;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    cursor: pointer;
    transition: 100ms;
    color: #fff;
    @media(max-width: 800px){
        width: 90px;
        height: 30px;
        margin-right: 16px;
    }

    &:hover {
        color: #181f2d;
        background-color: #fff;
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

export const Tab= styled.h3`
    margin-right: 20px;
    cursor: pointer;
    font-weight: 400; 
    font-family: 'Montserrat';
    @media(max-width: 800px){
        font-size: 12px;
    }
    text-decoration: 'none';
    color: #fff;
`

export const Address= styled.h4`
    margin-right: 20px;
    cursor: pointer;
    font-weight: 400; 
    font-family: 'Montserrat';
    @media(max-width: 800px){
        font-size: 12px;
    }
    text-decoration: 'none';
    color: #fff;
`
