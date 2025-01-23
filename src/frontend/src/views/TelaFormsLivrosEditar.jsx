import styles from "../styles/Forms.module.css"
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'

const TelaFormsLivrosEditar = () =>{
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
                    <input type="text" id="ftitulo" name="ftitulo" defaultValue="Engenharia de Software" />
                    
                    <label htmlFor="fautor">Autor:</label> 
                    <input type="text" id="fautor" name="fautor" defaultValue="Qualquer coisa" />

                    <label htmlFor="feditora">Editora:</label> 
                    <input type="text" id="feditora" name="feditora" defaultValue="Qualquer coisa" />


                    <label htmlFor="fgenero">Gênero:</label> 
                    <input type="text" id="fgenero" name="fgenero" defaultValue="Qualquer coisa" />

                    <label htmlFor="fanopublicacao">Ano de Publicação</label> 
                    <input type="text" id="fanopublicacao" name="fanopublicacao" defaultValue="Qualquer coisa" />

                    <label htmlFor="fisbn">ISBN</label> 
                    <input type="text" id="fisbn" name="fisbn" defaultValue="Qualquer coisa" />

                    <label htmlFor="fdescricao">Descrição</label> 
                    <input type="text" id="fdescricao" name="fdescricao" defaultValue="Qualquer coisa" />

                    <button>Atualizar dados</button>
                </div>
            </section>
        </>
    )
}

export default TelaFormsLivrosEditar