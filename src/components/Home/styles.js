import styled from 'styled-components'

export const Container = styled.div`
    background-color: #f7f7f7;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    overflow-x: hidden;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    transition: 400ms;
`

export const Banner = styled.div`
    display: flex;
    margin-top: 30px;
    width: 95%;
    height: 250px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: overlay;
    align-items: center;
`

export const Status = styled.h2`
    font-weight: 500; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #fff;
`

export const OpensIn = styled.h3`
    font-weight: 500; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #fff;
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
export const ItemDescription = styled.h5`
    font-weight: 400; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`

export const Item = styled.div`
    margin-top: 30px;
    margin-right: 10px;
    width: 350px;
    height: 140px;
    border-radius: 4px;
    border: 1px solid #ccc;
`

export const Quantity = styled.div`
    margin-top : 17px;
    margin-left: 10px;
    width: 80px;
    height: 25px;
    border-radius: 4px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const QuantitySelector = styled.h4`
    font-weight: 600; 
    font-family: 'Montserrat';
    color: #000;
    user-select: none;
`


export const QuantityInput = styled.input`
    width: 20px;
    height: 20px;
    font-weight: 600; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
    margin-right: 10px;
    text-align: center;
    border-width:0px;
    border:none;
    :focus {
        outline: none;
    }
`

export const ItemImage = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 6px;
    margin-top: 10px;
    margin-right: 10px;
    background-size: contain;
`

export const Focus = styled.div`
    margin-top: 30px;
    margin-right: 10px;
    width: 650px;
    height: 240px;
    border-radius: 4px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    flex-direction: row;
`


export const FocusImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 6px;
    margin-left: 10px;
    background-size: contain;
`


export const FocusTitle = styled.h2`
    font-weight: 500; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`
export const FocusPrice = styled.h2`
    font-weight: 400; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`
export const FocusDescription = styled.h3`
    font-weight: 400; 
    font-family: 'Montserrat';
    margin-left: 10px;
    color: #000;
`


