import styled, {createGlobalStyle} from 'styled-components'

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
    height: 500px;
    border-radius: 8px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
  width: 20px;
}
`

export const PaymentMethod = styled.div`
    margin-top: 10px;
    width: 400px;
    background-size: contain;
    height: 141px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    ::-webkit-scrollbar {
  width: 20px;
}
`
export const Text = styled.h1`
    margin-left: 10px;
    font-weight: 600; 
    font-family: 'Montserrat';
    color: #000;
`