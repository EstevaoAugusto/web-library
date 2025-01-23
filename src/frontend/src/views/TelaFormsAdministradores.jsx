import styles from "../styles/Forms.module.css"
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'

const TelaFormsAdministradores = () => {
    const navegar = useNavigate()

    const estiloHeader = {
        backgroundColor: "#997C70",
        border: "5px solid #997C70"
    };

    return (
        <>
            <header style={estiloHeader}>
                <IconButton onClick={() => navegar("/TelaAdministrador")}>
                    <ArrowBackIcon/>    
                </IconButton>                
            </header>

            <section>
                <div className={styles.containerFlex}>
                    <label htmlFor="fnomeadmin">Nome do Administrador:</label> 
                    <input type="text" id="fnomeadmin" name="fnomeadmin" />
                                        
                    <label htmlFor="femailadmin">Email:</label> 
                    <input type="text" id="femailadmin" name="femailadmin" />
                    
                    <label htmlFor="fsenhaadmin">Senha:</label> 
                    <input type="text" id="fsenhaadmin" name="fsenhaadmin" />

                    <div>
                        <button>Adicionar Administradores</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TelaFormsAdministradores