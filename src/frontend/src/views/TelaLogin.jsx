import styles from "../styles/Cadastro.module.css"
import { useNavigate } from "react-router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'

const  TelaLogin = () => {
    const navegar = useNavigate()

    return (
        <>
            <IconButton onClick={() => navegar("/")}>
                <ArrowBackIcon/>
            </IconButton>
            <section className={styles.containerFlexSecao}>
                <form className={styles.containerFlex}>
                    <h1>Digite sua conta</h1>
                    <label for="femail">Email</label> 
                    <input type="text" id="femail" name="femail" />  

                    <label for="fsenha">Senha</label>
                    <input type="password" id="fsenha" name="fsenha"/> 

                    <input type="submit" value="Entrar" onClick={() => navegar("/TelaAcervo")}/>
                    <input type="submit" value="Recuperar Conta" onClick={() => navegar("/TelaRecuperarConta")}/>
                </form>
            </section>
        </>
    )
}

export default  TelaLogin