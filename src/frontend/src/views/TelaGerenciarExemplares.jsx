import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import styles from "../styles/Gerenciar.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'


const TelaGerenciarExemplares = () => {
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

            <h1>Gerenciador de Exemplares</h1>

            <section className={styles.flexContainerSection}>
                <div className={styles.flexContainerDiv}>
                    <p>ID do Exemplar</p>
                    <p>ISBN</p>
                    <p>Nome do Livro</p>
                    <p>      </p>
                </div>          
                
                <div className={styles.flexContainerDiv}>
                    <span>1</span>
                    <span>123456</span>
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
                    <span>1</span>
                    <span>123456</span>
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
                    <span>1</span>
                    <span>123456</span>
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
                    <span>1</span>
                    <span>123456</span>
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
                    <button>Cadastrar Exemplares</button>
                </div>
            </section>
        </>
    )
}

export default TelaGerenciarExemplares