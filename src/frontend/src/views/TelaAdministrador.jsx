import { useNavigate } from "react-router"
import Header from "../components/HeaderAdmin.jsx"
import styles from "../styles/Administrador.module.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const TelaAdministrador = () => {
    const navegar = useNavigate()

    const estiloBotoes = {
        width: '100%',
        height: '100%',

    };

    const estiloElemento = {
        backgroundColor: '#459EFF',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
    };

    const flexContainerNumeros = {
        display: 'flex',
        flexDirection: 'row',
    };

    return (
        <>
            <Header/>
            <section>

            <div className={styles.containerFlex}>
                
                <Stack spacing={3} direction="row">
                    <Button sx={estiloBotoes} variant="contained" onClick={() => navegar("/TelaGerenciarExemplares")}>Gerenciar Exemplares</Button>
                    <Button sx={estiloBotoes} variant="contained" onClick={() => navegar("/TelaGerenciarAdministradores")}>Gerenciar Administradores</Button>
                    <Button sx={estiloBotoes} variant="contained" onClick={() => navegar("/TelaGerenciarLivros")}>Gerenciar Livros</Button>
                    <Button sx={estiloBotoes} variant="contained" onClick={() => navegar("/TelaGerenciarEmprestimos")}>Gerenciar Emprestimos</Button>
                </Stack>
            </div>
            </section>
        </>
    )
}

export default TelaAdministrador