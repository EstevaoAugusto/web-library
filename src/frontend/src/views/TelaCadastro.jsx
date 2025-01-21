import styles from "../styles/Cadastro.module.css"
import { useNavigate } from "react-router"
import PilhaLivros from "../assets/images/PilhaLivros.png"

const TelaCadastro = () => {
    const navegar = useNavigate()

    const estiloLivro = {
        width: "30%",
        height: "30%"
    };

    return (
    <section className={styles.containerFlexSecao}>
        <img style={estiloLivro} src={PilhaLivros} alt="Pilha de livros" />
        <form className={styles.containerFlex}>
            <label htmlFor="fnome">Nome</label> 
            <input type="text" id="fnome" name="fnome" /> 

            <label htmlFor="femail">Email</label> 
            <input type="text" id="femail" name="femail" />  

            <label htmlFor="fsenha">Senha</label>
            <input type="password" id="fsenha" name="fsenha"/>

            <label htmlFor="fendereco">Endereço (Opcional)</label> 
            <input type="text" id="fendereco" name="fendereco" /> 

            <label htmlFor="ftelefone">Telefone (Opcional)</label>
            <input type="text" id="ftelefone" name="ftelefone" />

            <input type="submit" value="Cadastrar" onClick={() => navegar("/TelaAcervo")}/>
            <input type="submit" value="Já tem Conta?" onClick={() => navegar("/TelaLogin")}/>
        </form>
    </section>
    )
}

export default TelaCadastro