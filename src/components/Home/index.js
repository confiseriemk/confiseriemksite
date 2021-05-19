import React, { useState } from 'react'
import { Container, Status, Banner, OpensIn, Item, ItemImage, ItemTitle, ItemDescription, ItemPrice, QuantitySelector, Quantity, QuantityInput, Focus, FocusImage, FocusTitle, FocusPrice, FocusDescription } from './styles'
import api from '../../services/api'
import background from '../../assets/banner.jpg'
import Donuts from '../../assets/Donuts.png'
import Brownie from '../../assets/Brownie.png'
import BombomdeMorango from '../../assets/BombomdeMorango.png'
import { AiOutlineShop } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import { IconContext } from "react-icons";
import Select from 'react-select'
import { InputNumber } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Icon } from 'rsuite';


export default function Home() {
    const [products, setProducts] = useState([])
    const [focus, setFocus] = useState('')
    const [selectedOption, setSelectedOption] = useState("Selecione um sabor")
    const [focusPrice, setFocusPrice] = useState("")
    const [executed, setE] = useState(false)
    const [donutsOptions, setDonutsOptions] = useState([])
    const [brownieOptions, setBrownieOptions] = useState([])
    const [bombomOptions, setBombomOptions] = useState([])
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
    const handleChange = (selected) => {
        setSelectedOption(Number(selected.price));
    }
    executeRequest()
    return (
        <Container>
            <Banner style={{backgroundImage: `url(${background})`}}>
                <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 40 }}>
                <IconContext.Provider value={{ color: "white", size: 80}}>
                        <AiOutlineShop style={{ marginTop: 17 }}/>
                </IconContext.Provider>
                <div>
                <Status>
                   Loja fechada
                </Status>
                <OpensIn>Abre amanhã às 13:00</OpensIn>
                </div>
                </div>
            </Banner>
        <div>{focus !== "" ? 
        <div style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer',   }}>
        <Focus>
            <FocusImage style={{backgroundImage: `url(${returnImage(focus.name)})`}}></FocusImage>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <FocusTitle>{focus.name}</FocusTitle>
                <FocusDescription>{focus.description}</FocusDescription>
                <div style={{ marginLeft: 10, width: 300, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Select options={returnOptions(focus.name)} onChange={r => handleChange(r)} />
                    <div style={{ width: 160, height: 50 }}>
                    <InputNumber defaultValue={1} max={100} min={1} onChange={value => setFocusPrice(value * selectedOption)} />
                    </div>
                </div>
            <FocusPrice>{focusPrice !== "" ? `R$ ${Number(focusPrice).toFixed(2).replace(".", ",")}` : isNaN(selectedOption) ? selectedOption : `R$ ${Number(selectedOption).toFixed(2).replace(".", ",")}` }</FocusPrice>
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
    </Container>
    )
}
