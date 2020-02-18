import React from "react";
import "./Footer.css";

function Footer() {
    return(
        <div className="footer">
            <div className="mobile-only">


                <div className="profile-photo-footer"></div>
                <ul className="social-media-footer">
                    <li><a href="https://github.com/renanbrayner" target="_blank"><i className="fab fa-github-square fa-2x"></i></a></li>
                    <li><a href="https://www.facebook.com/renan.brayner.395" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/renan-brayner-a2a6b31a2/" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
                </ul>
                <ul className="aside-data-footer">
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


            </div>
            <ul className="footer-list">
                <li><p className="footer-branding">Feito com ReactJS</p></li>
                <li className="footer-cpr-li"><p className="footer-cpr">Copyright &copy;	2020 - Renan Brayner. Todos os direitos reservados.</p></li>
            </ul>           
        </div>
    )
};

export default Footer;