import React, { useState } from 'react'
import { GlobalStyle, Container, Text, PaymentMethod } from './styles'
import Pix from '../../assets/Pix.png'
import api from '../../services/api'
import Boleto from '../../assets/Boleto.png'

export default function FinishBuy() {
const [data, setData] = useState('')
const [executed, setE] = useState(false)
const [step, setStep] = useState(1)
const [shipping, setShipping] = useState([])
const [paymentMethod, setPayment] = useState("")

async function searchData(id) {
    await api.get(`/profiles/${id}/?key=ac503125220aec9d0f3ddc4731a9565e`).then(async r =>  {
        if(r.data === null || undefined) {
            localStorage.removeItem('login')
            window.location.reload()
        } else {
        const data = r.data
        const cep = data.adresses[0].cep.replace(/\D/g, '')
        const number = data.adresses[0].number
        await api.get(`/shipping/?cep=${cep}&number=${number}`).then(r => {
            const data = r.data
            console.log(data)
            setData(data.data)
            setShipping(data.price)
        })
        }
    })
}
function execute() {
    if(executed) {
        return
    } else {
        searchData(localStorage.getItem('login'))
        setE(true)
    }
}
execute()
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', flexDirection: 'column' }}>
        <Container>
            <GlobalStyle />
            <div>{step == 1 ? 
                    <>
                    <Text>Forma de pagamento:</Text>
                    <div style={{ display: "flex", flexDirection: "column",  alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                    <PaymentMethod onClick={() => {setPayment("pix"); setStep(2)}}>
                        <img style={{ width: 350, height: 124, marginLeft: 10 }} src={Pix} />
                    </PaymentMethod>
                    <PaymentMethod onClick={() => {setPayment("boleto"); setStep(2)}}>
                        <img style={{ width: 350, height: 124, marginLeft: 20 }} src={Boleto} />
                    </PaymentMethod>
                    </div>  
                    </>
            : step == 2 ?  
            <>
            <Text>{`Frete: ${shipping}`}</Text>
            </> : ""
        }</div>
        </Container>
        </div>
    )
}