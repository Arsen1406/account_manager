import { AccountCircle, ConnectingAirports, AccountBox, Public, BarChart } from '@mui/icons-material'
import CheckAuth from '../utils';
import "./sidebar.css"


export default function Sidebar() {
    let cook = CheckAuth()
    let state
    if (cook === false){
        state = 'login';
    } else {
        state = 'logout';
    }

  return (
    <body>
        <section class="menu">
            <a href="/" class="menu__logo logo">AM</a>
            <ul class="menu__list">
                <li class="menu__item item">
                    <a href="/proxy" class="menu__link link">
                        <ConnectingAirports className='iconSidebar' /><span>Прокси</span>
                    </a>
                </li>
                <li class="menu__item item">
                    <a href="/accounts" class="menu__link link">
                        <AccountBox className='iconSidebar' /><span>Аккаунты</span>
                    </a>
                </li>
                <li class="menu__item item">
                    <a href="/network" class="menu__link link">
                        <Public className='iconSidebar' /><span>Сети</span>
                    </a>
                </li>
                <li class="menu__item item">
                    <a href="/statistic/" class="menu__link link">
                        <BarChart className='iconSidebar' /><span>Статистика</span>
                    </a>
                </li>
            </ul>
            <div className='userLogin'>
                <a href={'/' + state} class="menu__link link">
                    <AccountCircle className='iconSidebar' /><span>{state}</span>
                </a>
            </div>
        </section>
        <section class="content">
        </section>
    </body>
  )
}
