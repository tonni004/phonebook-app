import React, { useContext } from "react";
import { ThemeContext } from '../BodyTheme/BodyTheme.js';
import classNames from "classnames";
import styles from './FormSection.module.scss';

const FormSection = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={styles.FormSection}>
            <div className={classNames(styles.FormPanel, styles[theme])}>
                {children}
            </div>
        </div>

    )
}

export default FormSection;