import React, {useState, useEffect} from "react";
import "./Sobre.css";

function Sobre() {
    let cumprimento;
    var data = new Date();
    let hora = data.getHours();

    if(hora < 12) {
        cumprimento = "Bom dia"
    } else if (hora < 18) {
        cumprimento = "Boa tarde"
    } else {
        cumprimento = "Boa noite"
    }

    /*let idade;
    let ano = data.getFullYear();
    console.log(ano)*/

    const [opacidadeSobre, setOpacidadeSobre] = useState(0);

    useEffect(() => {
        setTimeout(() => {  setOpacidadeSobre(1); }, 10);
        return () => {
            setOpacidadeSobre(0)
        }
    }, [])

    return(
        <div className="sobre" style={{opacity: opacidadeSobre, transition: "opacity 1s"}}>
            <div className="sobre-spacer"></div>
            <div className="sobre-content">
                <h1>Sobre Mim</h1>
                <div className="sobre-photo"></div>
                <p><strong>{cumprimento}</strong>, meu nome é Renan, tenho 20 anos e sou um desenvolvedor. Estou ingresso na faculdade de análise e desenvolvimento de sistemas com o objetivo de me profissionalizar e busco ingressar no mercado de trabalho e por em prática meus conhecimentos em JavaScript, Html, CSS, Sass, React e Github.</p>
                <p className="sobre-last">Tenho um bom pensamento analítico e sou atencioso com detalhes, gosto de trabalhar em equipe principalmente se a comunicação for clara e objetiva, sou uma pessoa criativa e além de programar tenho hobbys como desenhar e pintar.</p>
            </div>
        </div>
    )
};

export default Sobre;