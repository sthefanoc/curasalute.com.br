import React, { Component } from 'react';
import { Link } from 'gatsby';



class Menu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li class="dropdown"><Link to={'/'}>Início</Link>
                            <ul>
                                <li><Link to={'/'}>Link 01</Link></li>
                                <li><Link to={'/'}>Link 02</Link></li>
                                <li><Link to={'/'}>Link 03</Link></li>
                                <li><Link to={'/'}>Link 04</Link></li>
                                <li class="dropdown"><Link to={'/'}>Sub links</Link>
                                    <ul>
                                        <li><Link to={'/'}>Sub link 01</Link></li>
                                        <li><Link to={'/index-2'}>Sub link 02</Link></li>
                                        <li><Link to={'/index-3'}>Sub link 03</Link></li>
                                        <li><Link to={'/index-4'}>Sub link 04</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to={'/#sobre-nos'}>Sobre nós</Link></li>
                        <li class="dropdown"><Link to={'/#servicos'}>Serviços</Link>
                            <ul>
                                <li><Link to={'/#'}>Serviços 01</Link></li>
                                <li><Link to={'/#'}>Serviços 02</Link></li>
                                <li><Link to={'/#'}>Serviços 03</Link></li>
                            </ul>
                        </li>
                        
                        <li class="dropdown"><Link to={'/#'}>Blog</Link>
                            <ul>
                                <li><Link to={'/#'}>Posts Recentes</Link></li>
                            </ul>
                        </li>
                        <li class="dropdown"><Link to={'/#'}>Páginas</Link>
                            <ul>
                                <li><Link to={'/#'}>Nosso Time</Link></li>
                                <li><Link to={'/#'}>Trabalhe Conosco</Link></li>
                            </ul>
                        </li>

                        <li><Link to={'/#contato'}>Contato</Link></li>
                    </ul>
                </div>

            </>
        )
    }
}
export default Menu;