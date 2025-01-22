import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import styles from "../styles/Gerenciar.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router'

const TelaGerenciarAdministradores = () => {
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

            <h1>Gerenciador de Administradores</h1>

            <section className={styles.flexContainerSection}>                
                <div className={styles.flexContainerDiv}>
                    <span>Peter Pascuau</span>

                    <div>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>Peter Pascuau</span>

                    <div>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>Peter Pascuau</span>

                    <div>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>

                <div>
                    <button>Adicionar Administradores</button>
                </div>
            </section>
        </>
    )
}

export default TelaGerenciarAdministradores