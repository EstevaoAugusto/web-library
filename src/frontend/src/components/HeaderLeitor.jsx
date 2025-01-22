import PersonIcon from "@mui/icons-material/Person" 
import IconButton from "@mui/material/IconButton"
import styles from "../styles/Header.module.css"
import { useNavigate } from "react-router"


const HeaderLeitor = () => {
    const navegar = useNavigate()
    
    return (
        <header className={styles.header}>
            <input type="text" id="fpesquisa" name="fpesquisa" placeholder='Pesquisa'/>

            <IconButton onClick={() => navegar("/TelaPerfilLeitor")}>
                <PersonIcon/>
            </IconButton>
        </header>
    )
}

export default HeaderLeitor