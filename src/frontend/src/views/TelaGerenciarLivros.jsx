import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import styles from "../styles/Gerenciar.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'

const TelaGerenciarLivros = () => {
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

            <h1>Gerenciador de Livros</h1>

            <section className={styles.flexContainerSection}>
                
                <div className={styles.flexContainerDiv}>
                    <span>Engenharia de Software</span>
                    
                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton onClick={() => navegar("/TelaLivrosVisualizar")}>
                            <SearchIcon/>
                        </IconButton>

                        <IconButton onClick={() => navegar("/TelaFormsLivrosEditar")}>
                            <EditIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>Engenharia de Software</span>
                    
                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
                        </IconButton>

                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>Engenharia de Software</span>
                    
                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
                        </IconButton>

                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>Engenharia de Software</span>
                    
                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
                        </IconButton>

                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </div>
                </div>

                <div>
                    <button onClick={() => { navegar("/TelaFormsLivros")}}>Cadastrar Livro</button>
                </div>
            </section>
        </>
    )
}

export default TelaGerenciarLivros