import React, {useState, useEffect} from "react";
import "./Home.css";
import ProjectTile from "../../components/ProjectTile/ProjectTile";
import pedraPapelTesouraBg from "../../assets/pedra-papel-tesoura.png";
import gitsearchBg from "../../assets/gitsearch.png";

function Home() {
    
    const [opacidadeHome, setOpacidadeHome] = useState(0);

    useEffect(() => {
        setTimeout(() => {  setOpacidadeHome(1); }, 10);
        return () => {
            setOpacidadeHome(0)
        }
    }, [])

    return(
        <div className="home" style={{opacity: 0, opacity: opacidadeHome, transition: "opacity 1s"}}>
            <div className="home-spacer"></div>
            <div className="home-content">
                <h1>Veja meus Projetos</h1>
                <div className="tile-flex">
                    <ProjectTile name="GitSearch" imgUrl={gitsearchBg} description="React app que usa a api do github para buscar usuários." projectUrl="https://renanbrayner.github.io/gitsearch/" target="_blank" projectGithub="https://github.com/renanbrayner/gitsearch"></ProjectTile>
                    <ProjectTile name="Pedra Papel e Tesoura" imgUrl={pedraPapelTesouraBg} description="Jogo de pedra papel e tesoura feito com HTML, CSS e JavaScript." projectUrl="https://renanbrayner.github.io/pedraPapelETesoura/" target="_blank" projectGithub="https://github.com/renanbrayner/pedraPapelETesoura"></ProjectTile>
                </div>
            </div>
        </div>
    )
};

export default Home;