import PersonIcon from "@mui/icons-material/Person" 
import IconButton from "@mui/material/IconButton"
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "../styles/Header.module.css"
import { useNavigate } from "react-router"


const HeaderLeitor = () => {
    const navegar = useNavigate()
    
    return (
        <header className={styles.headerAdmin}>
            <IconButton onClick={() => navegar("/TelaPerfilAdmin")}>
                <PersonIcon/>
            </IconButton>

            
            <IconButton onClick={() => navegar("/")}>
                <LogoutIcon/>
            </IconButton>
        </header>
    )
}

export default HeaderLeitor