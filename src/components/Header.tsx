import MainLogo from '../assets/main-logo.svg';
import { HeaderContainer } from '../styles/components/header.styles';
import { getCurrentHourAndMinute } from '../utils/getCurrentHourAndMinute';
import { getTodayDate } from '../utils/getTodayDate';

export const Header = () => {

    return (
        <HeaderContainer>

            <img
                src={MainLogo}
                alt="logo da aplicação com o nome Stone Currency na cor verde"
            />

            <div className='right__content'>
                <p>{getTodayDate()} | {getCurrentHourAndMinute()} UTC</p>
                <span>Dados de câmbio disponibilizados pela Morningstar.</span>
            </div>
        </HeaderContainer>
    )
}