import React from "react";
import "./Aside.css";

function Aside() {
    return(
        <div className="aside">
            <h1>Renan Brayner</h1>
            <div className="profile-photo"></div>
            <ul className="aside-data">
                <li>
                    <p><strong>Endereço:</strong> Rua João Alves Mendes, 470 – Apt. 302 </p>
                </li>
                <li>
                    <p><strong>Email:</strong> renanbrayner@gmail.com</p>
                </li>
                <li>
                    <p><strong>Fone:</strong> +55 (81) 98181-5475</p>
                </li>
            </ul>
            <ul className="social-media">
                <li><a href="https://github.com/renanbrayner" target="_blank"><i className="fab fa-github-square fa-2x"></i></a></li>
                <li><a href="https://www.facebook.com/renan.brayner.395" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                <li><a href="https://www.linkedin.com/in/renan-brayner-a2a6b31a2/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
            </ul>
        </div>
    )
};

export default Aside;