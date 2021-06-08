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
    margin-top: 10px;
    margin-right: 10px;
    width: 650px;
    height: 400px;
    border-radius: 8px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
`

export const Text = styled.h1`
    font-weight: 600; 
    font-family: 'Montserrat';
`

export const ItemTitle = styled.h4`
    font-weight: 500; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`
export const ItemPrice = styled.h4`
    font-weight: 400; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`
export const ItemFlavor = styled.h5`
    font-weight: 400; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`

export const Item = styled.div`
    margin-top: 15px;
    margin-right: 10px;
    margin-bottom: 15px;
    width: 500px;
    height: 140px;
    border-radius: 4px;
    border: 1px solid #ccc;
`

export const ItemImage = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 6px;
    margin-top: 10px;
    margin-right: 10px;
    background-size: contain;
`

export const Button = styled.div`
    width: 650px;
    height: 50px;
    border-style: solid;
    border-radius: 4px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-width: 1px;
    cursor: pointer;
    transition: 100ms;
    color: #181f2d;
    @media(max-width: 800px){
        width: 90px;
        height: 30px;
    }

    &:hover {
        color: #fff;
        background-color: #181f2d;
    }
`

export const ButtonText= styled.h2`
    cursor: pointer;
    font-weight: 400; 
    font-family: 'Montserrat';
    @media(max-width: 800px){
        font-size: 12px;
    }
    text-decoration: 'none';
    user-select: none;
`