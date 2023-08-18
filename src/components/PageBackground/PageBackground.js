import styles from './PageBackground.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from 'components/BodyTheme/BodyTheme';

function PageBackground({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={classNames(styles.PageBackground, styles[theme])}>
            {children}
        </div>

    )

}

export default PageBackground;