import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import styles from "../styles/Gerenciar.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'

const TelaGerenciarEmprestimos = () => {
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

            <h1>Gerenciador de Emprestimos</h1>

            <section className={styles.flexContainerSection}>
                <div className={styles.flexContainerDiv}>
                    <p>Email do Leitor</p>
                    <p>ISBN</p>
                    <p>IDExemplar</p>
                    <p>      </p>
                </div>          
                
                <div className={styles.flexContainerDiv}>
                    <span>email@email.com</span>
                    <span>123456</span>
                    <span>1</span>
                    
                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>email@email.com</span>
                    <span>123456</span>
                    <span>1</span>


                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>email@email.com</span>
                    <span>123456</span>
                    <span>1</span>


                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
                        </IconButton>

                    </div>
                </div>

                <div className={styles.flexContainerDiv}>
                    <span>email@email.com</span>
                    <span>123456</span>
                    <span>1</span>


                    <div>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>

                        <IconButton>
                            <SearchIcon/>
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

export default TelaGerenciarEmprestimos