import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Container, Button, ButtonText, Tabs, Tab, Address, Circle, Quantity} from './styles'
import api from '../../services/api'
import { VscAccount } from "react-icons/vsc";
import { BiShoppingBag } from 'react-icons/bi';
import { IconContext } from "react-icons";

export default function Header() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [quantity, setQuantity] = useState('')
    const [executed, setE] = useState(false)
    async function searchData(id) {
        await api.get(`/profiles/${id}/?key=ac503125220aec9d0f3ddc4731a9565e`).then(r => {
            if(r.data === null || undefined) {
                localStorage.removeItem('login')
                window.location.reload()
            } else {
            const data = r.data
            const address = data.adresses[0]
            setName(data.name)
            setAddress(address.address + ", " + address.number)
            }
        })
    }
    function execute(){
        if(executed) {
        } else {
            searchData(localStorage.getItem('login'))
            let counter = 0;
            const cart = JSON.parse(localStorage.getItem('cart'))
            if(cart === null) {
                setQuantity(0)
                setE(true)
            } else {
                for (const item of cart) {
                    
                    counter++;
                }
                setQuantity(counter)
                setE(true)
            }
        }
    }
    execute();
    return (
            <Container>
                <NavLink style={{textDecoration: 'none'}} to="/">
                    <div style={{ display: "flex", marginLeft: 20 }}>
                        <Icon src={require(`./all.png`)} />
                    </div>
                </NavLink>
                
                <div>{localStorage.getItem('login') ? 
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <Tabs>
                    <Address style={{ marginRight: 5 }}>{`Entregando em: ${address} |`}</Address>

                <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Tab>{`Olá,  ${name}`}</Tab>
                    <IconContext.Provider value={{ color: "white", size: 30}}>
                    <VscAccount style={{ marginRight: 15 }} />
                    </IconContext.Provider>
                    </div>
                    <NavLink style={{textDecoration: 'none', marginTop: 5}} to="/cart">
                    <IconContext.Provider value={{ color: "white", size: 30}}>
                    <BiShoppingBag style={{ marginRight: 15, marginBottom: 5, cursor: 'pointer' }} />
                    <Circle><Quantity>{quantity}</Quantity></Circle>
                    </IconContext.Provider>
                    </NavLink>   
            </Tabs>
            
            </div>
            : 
            <div style={{ display: 'flex', flexDirection: 'row' }}>

            <Tabs>
                <NavLink style={{textDecoration: 'none', color: 'inherit'}} to="/signup">
                <Tab>criar conta</Tab>
                </NavLink>
            </Tabs>
            <NavLink style={{textDecoration: 'none'}} to="/login"><Tab>
                <Button>
                    <ButtonText>Entrar</ButtonText>
                </Button>    
            </Tab></NavLink>  
            <NavLink style={{textDecoration: 'none', marginTop: 10}} to="/cart">
                    <IconContext.Provider value={{ color: "white", size: 30}}>
                    <BiShoppingBag style={{ marginRight: 15, marginBottom: 5, cursor: 'pointer' }} />
                    <Circle><Quantity>{quantity}</Quantity></Circle>
                    </IconContext.Provider>
                    </NavLink>   
                
            </div>}</div>
            </Container>
    )
}