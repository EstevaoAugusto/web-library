import { useNavigate } from "react-router"
import Header from "../components/Header.jsx"
import styles from "../styles/Administrador.module.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const TelaAdministrador = () => {
    const navegar = useNavigate()

    return (
        <>
            <Header/>
            <section>

            <Stack spacing={2} direction="row">
                <Button variant="contained">Gerenciar Exemplares</Button>
                <Button variant="contained">Gerenciar Administradores</Button>
                <Button variant="contained">Gerenciar Livros</Button>
                <Button variant="contained">Gerenciar Emprestimos</Button>
            </Stack>
            </section>
        </>
    )
}

export default TelaAdministrador