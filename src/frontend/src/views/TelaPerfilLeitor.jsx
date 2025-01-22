import PersonIcon from '@mui/icons-material/Person';
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
        alignItem: "center",
        alignContent: "center",
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
                <PersonIcon/>
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
                
                <label htmlFor="fsenha">Senha nova</label>
                <input type="text" id="fsenha" name="fsenha" />

                <input type="submit" value="Atualizar Dados"/>
            </form>
        </article>
    </section>
    )
}

export default TelaPerfilLeitor