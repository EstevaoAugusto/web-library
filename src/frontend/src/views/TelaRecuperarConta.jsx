import styles from "../styles/Cadastro.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from "react-router"
import IconButton from '@mui/material/IconButton'

const TelaRecuperarConta = () => {
    const navegar = useNavigate()

    return (
        <>
            <IconButton onClick={() => navegar("/TelaLogin")}>
                <ArrowBackIcon/>
            </IconButton>
            <section className={styles.containerFlexSecao}>
                <form className={styles.containerFlex}>
                    <h1>Digite o seu email e nova senha:</h1>
                    <label for="femail">Email</label> 
                    <input type="text" id="femail" name="femail" />  
    
                    <label for="fsenha">Senha</label>
                    <input type="password" id="fsenha" name="fsenha"/>
        
                    <input type="submit" value="Recuperar Senha" onClick={() => navegar("/TelaAcervo")}/>
                    <input type="submit" value="Já tem Conta?" onClick={() => navegar("/TelaLogin")}/>
                    <input type="submit" value="Primeiro Acesso" onClick={() => navegar("/")}/>
                </form>
            </section>
        </>
    )

}

export default TelaRecuperarConta