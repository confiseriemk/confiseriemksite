import React, { useState } from 'react'
import { GlobalStyle, Container, Text, Item, ItemFlavor, ItemPrice, ItemTitle, ItemImage, Button, ButtonText } from './styles'
import api from '../../services/api'
import Donuts from '../../assets/Donuts.png'
import Brownie from '../../assets/Brownie.png'
import BombomdeMorango from '../../assets/BombomdeMorango.png'
import { FiTrash2 } from 'react-icons/fi'
import { IconContext } from "react-icons";
import { useHistory } from "react-router-dom";

export default function Cart() {
    const history = useHistory()
    const [cart, setCart] = useState()
    const [info, setInfo] = useState("")
    const [executed, setE] = useState(false)
    function returnImage(item) {
        if(item == "Donuts") {
            return Donuts
        }
        if (item == "Bombom de Morango") {
            return BombomdeMorango
        }
        if(item == "Brownie") {
            return Brownie
        }
    }
    function getCart() {
        let store = JSON.parse(localStorage.getItem('cart')) 
        let price = 0;
        for (const item of store) {
            price += Number(item.totalPrice)
        }
        console.log(price)
        setInfo(`- Total: R$${Number(price).toFixed(2).replace(".", ",")}`)
        setCart(store)
    }
    function deleteItem(index) {
        let store = JSON.parse(localStorage.getItem('cart'))
        store.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(store))
        getCart()
    }
    function finishBuy() {
        console.log(cart)
        if(cart.length == 0) {
            setInfo("- Não há itens no carrinho")
        } else {
            history.push("/finish");
        }
    }
    function execute() {
        if(executed) {
            return
        } else {
            getCart()
            setE(true)
        }
    }
    execute()
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', flexDirection: 'column' }}>
        <div style={{ width: 650, marginTop: 10, display: 'flex', flexDirection: 'row' }}>
        <Text>Carrinho</Text>
        <Text style={{ marginLeft: 10, color: '#f00' }}>{info}</Text>
        </div>
        <Container>
            <GlobalStyle />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>{cart === undefined ?
            <>
            <ItemPrice>Não há itens no carrinho</ItemPrice>
            </> 
            :
            cart ? 
            cart.map((item, i) => 
                <div style={{ display: 'flex', flexDirection: 'row', alignItems:'center' }}>
                <Item key={i}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div>
                    <ItemTitle>{item.name}</ItemTitle>
                    <ItemFlavor>{`• ${item.flavor}`}</ItemFlavor>
                    <ItemPrice>{`Quantidade: ${item.quantity}`}</ItemPrice>
                    <ItemPrice>{`R$ ${Number(item.totalPrice).toFixed(2).replace(".", ",")}`}</ItemPrice>
                    </div>
                    <ItemImage style={{backgroundImage: `url(${returnImage(item.name)})`}} />
                    </div>
                </Item>
                <IconContext.Provider value={{ color: "#f00", size: 30}}>
                    <FiTrash2 onClick={() => deleteItem(i)} style={{ cursor: 'pointer' }} />
                </IconContext.Provider>
                </div>
            )   
            : ""
        }</div>
        </Container>
        <Button onClick={() => finishBuy()}><ButtonText>Finalizar compra</ButtonText></Button>
        </div>
    )
}