import React, { useState } from 'react'
import api from '../../services/api'
import { useHistory } from "react-router-dom";
import { GlobalStyle, Input, Container,SubmitButton, Text, ButtonText, Sections, SidebySide, Forgotten } from './styles'

export default function Signup() {
    let history = useHistory();
    //Stepper
    const [step, setStep] = useState(1)
    //Right Section
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    //Left Section
    const [cep, setCep] = useState('')
    const [address, setAddress] = useState('')
    const [address2, setAddress2] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')

    function mascararTel(v){
        v=v.replace(/\D/g,"");            
        v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); 
        v=v.replace(/(\d)(\d{4})$/,"$1-$2");   
        return v;
    }
    function mascararCep(v){
        v=v.replace(/^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/, '$1.$2-$3')
        return v;
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function buscaEndereco(cep){
        cep=cep.replace(/[^a-zA-Z0-9 ]/g, "");
        api.get(`/shipping/?cep=${cep}`).then(response => {
            console.log(response)
            setState(response.data.data.uf)
            setAddress(response.data.data.logradouro)
            setDistrict(response.data.data.bairro)
            setCity(response.data.data.localidade)
        })
    }
    //Função que envia uma solicitação de criação de contas a API
    function sendProfileCreate(name, phone, address, email) {
        api.post("/profiles/?key=ac503125220aec9d0f3ddc4731a9565e", {
            "name": name,
            "phone": phone,
            "adresses": address,
            "email": email
        })
    }

    function createAccount(name, surname, number, cep, address, address2, district, city, state, phone, email) {
            sendProfileCreate(name + " " + surname, phone, [
                {
                    "cep": cep,
                    "address": address,
                    "number": number,
                    "district": district,
                    "city": city,
                    "state": state,
                    "address2": address2
                }
            ], email)
    }

    async function loginRequest(email) {
        await api.get(`/login/?email=${email}&key=ac503125220aec9d0f3ddc4731a9565e`).then(r => localStorage.setItem('login', r.data._id))
        history.push("/")
        window.location.reload()
    }
    
    
    return (
        <Sections>
            <GlobalStyle />
            <Container>{step === 1 ? 
            <div style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <Text>Seus dados:</Text>
            <SidebySide>
                <Input placeholder="Nome" onChange={text => setName(text.target.value)}/>
                <Input placeholder="Sobrenome" onChange={text => setSurname(text.target.value)}/>  
            </SidebySide>
            
            <Input placeholder="Email" onChange={text => setEmail(text.target.value)}/>  
            <Input placeholder="Telefone para Contato" onChange={text => {
                text.target.value = mascararTel(text.target.value)
                setPhone(text.target.value)
                }}/>
                <Forgotten>{error}</Forgotten>
                <SubmitButton onClick={() => {
                    if(name === "" || surname === "" || phone === "" || email === "") {
                        setError("Preencha todos os dados antes de prosseguir!")
                    } else {
                        const re = /\(\d{2,}\) \d{4,}\-\d{4}/
                        if(re.test(phone, re)) {
                           if(validateEmail(email)) {
                            setError('')
                            setStep(2)
                           } else {
                               setError("Email Inválido")
                           }
                        } else {
                            setError("Telefone Inválido")
                        }
                    }
                }}>
                <ButtonText>
                    Próximo
                </ButtonText>
            </SubmitButton>
            </div> : 
            
            <div style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            <Text>Endereço:</Text>
                <SidebySide>
                    <Input placeholder="CEP" type="text" value={cep} autoComplete="off" onBlur={() => buscaEndereco(cep)} onChange={text => {
                text.target.value = mascararCep(text.target.value)
                setCep(text.target.value)
                }} />
                    <Input placeholder="Número" autoComplete="off" value={number} onChange={text => setNumber(text.target.value)}/>
                    </SidebySide>
                <SidebySide>
                    <Input placeholder="Complemento" onChange={text => setAddress2(text.target.value)} />
                    <Input placeholder="Bairro" value={district} onChange={text => setDistrict(text.target.value)}/>
                </SidebySide>
                    <Input placeholder="Logradouro" value={address} onChange={text => setAddress(text.target.value)}/>
                    <Input placeholder="Cidade" value={city} onChange={text => setCity(text.target.value)}/>
                    <Input placeholder="UF" value={state} onChange={text => setState(text.target.value)}/>

                    <SubmitButton onClick={() => {
                        createAccount(name, surname, number, cep, address, address2, district, city, state, phone, email)
                        setTimeout(function(){
                            loginRequest(email)
                        }, 3000);
                    }}>
                <ButtonText>
                    Registrar
                </ButtonText>
            </SubmitButton>
            </div>}
            
        </Container>
        </Sections>
    )
}