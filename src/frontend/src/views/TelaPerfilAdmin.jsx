import PersonIcon from '@mui/icons-material/Person';
import styles from "../styles/PerfilLeitor.module.css"
import { useNavigate } from "react-router"

const TelaPerfilAdmin = () => {
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
        <>
            <section className={styles.gridContainer}>
                <aside className={styles.navBarVert}>
                    <div style={estiloBotoes}>
                        <input type="submit" value="Voltar" onClick={() => navegar("/TelaAdministrador")}/>
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
                
                    <label htmlFor="fsenhaatual">Senha atual</label>
                    <input type="text" id="fsenhaatual" name="fsenhaatual" />

                    <label htmlFor="fsenhanova">Senha nova</label>
                    <input type="text" id="fsenhanova" name="fsenhanova" />

                    <input type="submit" value="Atualizar Dados"/>
            </form>
        </article>
    </section>
        </>
    )
}

export default TelaPerfilAdmin