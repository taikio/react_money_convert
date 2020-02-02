import React, { useState } from 'react';

import './Conversor.css';

const Conversor = (props) => {

    const [moedaA_valor, setMoedaA_valor] = useState("");
    const [moedaB_valor, setMoedaB_valor] = useState(0);

    const converter = () => {

        if (isNaN(parseInt(moedaA_valor))) {
            alert('Informe um valor numérico');
            return;
        }


        let de_para = `${props.moedaA}_${props.moedaB}`;
        
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=8c26d68917239e25afd0`;

        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(moedaA_valor) * cotacao).toFixed(2);
            setMoedaB_valor(moedaB_valor);
        });
    }

    return (
        <div className="conversor">
            <h2>{props.moedaA} para {props.moedaB}</h2>
            <input type="text" onChange={(event) => {setMoedaA_valor(event.target.value)}}></input>
            <input type="button" value="converter" onClick={converter}></input>
            <h2>{moedaB_valor}</h2>
        </div>
    )
};

export default Conversor;