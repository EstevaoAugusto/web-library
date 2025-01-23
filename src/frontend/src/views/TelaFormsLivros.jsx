import styles from "../styles/Forms.module.css"
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'

const TelaFormsLivros = () => {
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
                    <label htmlFor="ftitulo">Título:</label> 
                    <input type="text" id="ftitulo" name="ftitulo" />
                    
                    <label htmlFor="fautor">Autor:</label> 
                    <input type="text" id="fautor" name="fautor" />

                    <label htmlFor="feditora">Editora:</label> 
                    <input type="text" id="feditora" name="feditora" />


                    <label htmlFor="fgenero">Gênero:</label> 
                    <input type="text" id="fgenero" name="fgenero" />

                    <label htmlFor="fanopublicacao">Ano de Publicação</label> 
                    <input type="text" id="fanopublicacao" name="fanopublicacao" />

                    <label htmlFor="fisbn">ISBN</label> 
                    <input type="text" id="fisbn" name="fisbn" />

                    <label htmlFor="fdescricao">Descrição</label> 
                    <input type="text" id="fdescricao" name="fdescricao" />

                    <button>Cadastrar Livro</button>
                </div>
            </section>
        </>
    )
}

export default TelaFormsLivros