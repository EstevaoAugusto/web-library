import Header from "../components/Header.jsx"
import styles from "../styles/Acervo.module.css"

const TelaAcervo = () => {

    return (
        <>
            <Header/>
            <section>
                <div className={styles.conteudoAcervo}>
                    <h1>Meus Livros Emprestados</h1>

                    <h1>Livros Disponiveis</h1>

                </div>
            </section>
        </>
    )
}

export default TelaAcervo