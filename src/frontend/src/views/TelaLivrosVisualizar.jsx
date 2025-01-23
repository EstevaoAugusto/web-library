import styles from "../styles/Forms.module.css"
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router'

const TelaLivrosVisualizar = () => {
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
                    <label htmlFor="ftitulo">Título: Engenharia de Software</label> 
                    
                    <label htmlFor="fautor">Autor: Qualquer Coisa</label> 

                    <label htmlFor="feditora">Editora: Qualquer Coisa</label> 


                    <label htmlFor="fgenero">Gênero: Qualquer Coisa</label> 

                    <label htmlFor="fanopublicacao">Ano de Publicação: Qualquer Coisa</label> 

                    <label htmlFor="fisbn">ISBN: Qualquer Coisa</label> 

                    <label htmlFor="fdescricao">Descrição: Qualquer coisa</label> 

                </div>
            </section>  
        </>
    )
}

export default TelaLivrosVisualizar