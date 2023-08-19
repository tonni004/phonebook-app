import Container from "components/Container"
import LoadingButton from "components/LoadingButton/LoadingButton";
import styles from './NotFoundPage.module.scss';
export default function NotFoundPage() {
    return (
        <Container>
            <div className={styles.NotFoundPageField}>

                <div>
                    <h1 className={styles.ErrorTitle}>404</h1>
                    <p className={styles.PageNotFoundTitle}>Page not found</p>
                    <p>Oops! he page you are looking for doesn't exist or an other error occurred. </p>
                    <LoadingButton title={'Go Home'} link={'/phonebook-app'} size={'m'} />
                </div>
            </div>
        </Container>

    )
}
