import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import FintechSvg from '../assets/FintechSvg'
import { NavLink } from 'react-router-dom'


const Sidenav = () => {
  return (
    <div>
      <nav className='sidenav box bg-3'>
        <FintechSvg title='Fintech Logo' />
        <ul>
          <li>
            <span>
              <img src={resumo} alt="" />
            </span>
            <NavLink to={'/'}>Resumo</NavLink>
          </li>

          <li>
            <span>
              <img src={vendas} alt="" />
            </span>
            <NavLink to={'/vendas'}>Vendas</NavLink>
          </li>

          <li>
            <span>
              <img src={webhooks} alt="" />
            </span>
            <a href="">Webhooks</a>
          </li>

          <li>
            <span>
              <img src={configuracoes} alt="" />
            </span>
            <a href="">Configurações</a>
          </li>

          <li>
            <span>
              <img src={contato} alt="" />
            </span>
            <a href="">Contato</a>
          </li>

          <li>
            <span>
              <img src={sair} alt="" />
            </span>
            <a href="">Sair</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;