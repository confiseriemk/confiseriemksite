import React, { useState } from 'react'
import { Alert, AlertText, GlobalStyle, Container, Status, Button, ButtonText, Banner, OpensIn, Item, ItemImage, ItemTitle, ItemDescription, ItemPrice, Focus, FocusImage, FocusTitle, FocusPrice, FocusDescription } from './styles'
import api from '../../services/api'
import background from '../../assets/banner.jpg'
import Donuts from '../../assets/Donuts.png'
import Brownie from '../../assets/Brownie.png'
import BombomdeMorango from '../../assets/BombomdeMorango.png'
import { AiOutlineShop } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { IconContext } from "react-icons";
import { BiCheckCircle } from "react-icons/bi";
import Select from 'react-select'
import { InputNumber } from 'rsuite';
import {Container as Floating} from 'react-floating-action-button'
import 'rsuite/dist/styles/rsuite-default.css';


export default function Home() {
    const [products, setProducts] = useState([])
    const [focus, setFocus] = useState('')
    const [selectedOption, setSelectedOption] = useState("Selecione um sabor")
    const [quantity, setQuantity] = useState(1)
    const [flavor, setFlavor] = useState('')
    const [focusPrice, setFocusPrice] = useState("")
    const [executed, setE] = useState(false)
    const [donutsOptions, setDonutsOptions] = useState([])
    const [brownieOptions, setBrownieOptions] = useState([])
    const [bombomOptions, setBombomOptions] = useState([])
    const [alert, setAlert] = useState(false)
    const [status, setStatus] = useState("")
    const [input, setInput] = useState(1)
    async function getStatus() {
        let status;
        await api.get("/whenOpen").then(r => {
            status = r.data.opensIn
            setStatus(status)
        })
    }
    function pushAlert() {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 3000)
    }
    function addToCart(price, quantity, item, flavor) {
        if(flavor == "" | undefined | null) {
            return
        } else
        var existingCart = JSON.parse(localStorage.getItem("cart"));
        if(existingCart == null) existingCart = [];
        var product = {
            "name": item,
            "unityPrice": selectedOption,
            "totalPrice": price,
            "flavor": flavor,
            "quantity": quantity,
        }
        localStorage.setItem("product", JSON.stringify(product));
        // Save allEntries back to local storage
        existingCart.push(product);
        localStorage.setItem("cart", JSON.stringify(existingCart));
        pushAlert()
        setFocus('')
    }
    async function getProducts() {
        let data;
        await api.get('/products').then(r => data = r.data)
        setProducts(data)
        data.map((item) => {
            if(item.name == "Donuts") {
                setDonutsOptions(item.flavors)
            }
            if(item.name == "Brownie") {
                setBrownieOptions(item.flavors)
            }
            if(item.name == "Bombom de Morango") {
                setBombomOptions(item.flavors)
            }
        })
        console.log(data)
    }
    function executeRequest() {
        if(!executed) {
            getStatus()
            getProducts()
            setE(true)
        } else {
            return
        }
    }
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

    function returnOptions(item) {
        if(item == "Donuts") {
            return donutsOptions
        }
        if (item == "Bombom de Morango") {
            return bombomOptions
        }
        if(item == "Brownie") {
            return brownieOptions
        }
    }
    function inputChange(value) {
        if(isNaN(selectedOption)) {
            return
        } else {
            setFocusPrice(value * selectedOption)
            setQuantity(Number(value))
        } 
    }
    const handleChange = (selected) => {
        setSelectedOption(Number(selected.price));
        setFlavor(String(selected.label))
        setFocusPrice(input * selected.price)
    }
    function banner() {
        if(status == "Aberto") {
            return { backgroundImage: `url(${background})` }
        } else {
            return { backgroundImage: `url(${background})`, backgroundBlendMode: "overlay", backgroundColor: 'rgba(0, 0, 0, 0.7)' }
        } 
    }
    executeRequest()
    return (
        <Container>
            <GlobalStyle />
            <Banner style={banner()}>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 40 }}>{status == "Aberto" ?
            ""
            
            :
            <>
                <IconContext.Provider value={{ color: "white", size: 80}}>
                        <AiOutlineShop style={{ marginTop: 17 }}/>
                </IconContext.Provider>
                <div>
                <Status>
                   Loja fechada
                </Status>
                <OpensIn>{status}</OpensIn>
                </div>
            </>
            }</div>
            </Banner>
        <div>{focus !== "" ? 
        <div style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer',   }}>
        <IconContext.Provider value={{ color: "#181f2d", size: 40}}>
            <IoIosArrowBack onClick={() => setFocus('')} style={{ marginTop: 30 }}/>
        </IconContext.Provider>
        <Focus>
            <FocusImage style={{backgroundImage: `url(${returnImage(focus.name)})`}}></FocusImage>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <FocusTitle>{focus.name}</FocusTitle>
                <FocusDescription>{focus.description}</FocusDescription>
                <div style={{ marginLeft: 10, width: 300, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: 160 }}>
                        <Select options={returnOptions(focus.name)} onChange={r => handleChange(r)} />
                    </div>
                    <div style={{ width: 100, height: 50, marginTop: 15 }}>
                    <InputNumber defaultValue={1} max={100} min={1} onChange={value => {inputChange(value); setInput(input)}} />
                    </div>
                </div>
                <div style ={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 410 }}>
                <FocusPrice style={{ marginRight: 40 }}>{focusPrice !== "" ? `R$ ${Number(focusPrice).toFixed(2).replace(".", ",")}` : isNaN(selectedOption) ? selectedOption : `R$ ${Number(selectedOption).toFixed(2).replace(".", ",")}` }</FocusPrice>
                <div style={{ width: 150, position: 'initial' }}>
                <Button onClick={() => addToCart(focusPrice, quantity , focus.name, flavor)}><ButtonText>Adicionar ao carrinho</ButtonText></Button>
                </div>
                </div>
            </div>
        </Focus>
        </div> 
        
        : 
        <div style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer',  }}>{products.map((item, i) => 
            <Item onClick={() => setFocus(item)} key={i}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                     <div>
                     <ItemTitle>{item.name}</ItemTitle>
                     <ItemDescription>{item.description}</ItemDescription>
                     <ItemPrice>{`À partir de R$ ${String(item.price.toFixed(2)).replace(".", ",")}`}</ItemPrice>
                     </div>
                     <ItemImage style={{backgroundImage: `url(${returnImage(item.name)})`}} />
                </div>
            </Item>
         )}</div>
        }</div>
        <Floating>{alert 
        ?
        <Alert>
        <AlertText>Adicionado ao carrinho</AlertText>
        <IconContext.Provider value={{ color: "white", size: 30,}}>
                <BiCheckCircle style={{ marginRight: 10 }}/>
        </IconContext.Provider>
    </Alert>
    : ""
    }</Floating>
    </Container> 
    )
}
