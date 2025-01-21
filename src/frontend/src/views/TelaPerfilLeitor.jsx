import IconButton from "@mui/material/IconButton"
import styles from "../styles/PerfilLeitor.module.css"
import { useNavigate } from "react-router"

const TelaPerfilLeitor = () => {
    const navegar = useNavigate()

    const estiloBotoes = {
        display: "flex",
        flexDirection: "column",
        width: "30%"
    };

    const containerFlex = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "40%",
        justifyContent: "center"
    };

    const centralizar = {
        justifyContent: "center",
        alignItem: "center"
    };

    return (
    <section className={styles.gridContainer}>
        <aside className={styles.navBarVert}>
            <div style={estiloBotoes}>
                <input type="submit" value="Voltar" onClick={() => navegar("/TelaAcervo")}/>
                <input type="submit" value="Logout" onClick={() => navegar("/")}/>
            </div>
        </aside>
        <article style={centralizar}>
            <form style={containerFlex}>
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
        </article>
    </section>
    )
}

export default TelaPerfilLeitor