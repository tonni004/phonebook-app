import { useContext } from 'react';
import { ThemeContext } from 'components/BodyTheme/BodyTheme';
import classNames from 'classnames';
import PropTypes from "prop-types";
import s from './ModalButton.module.scss';

export default function ModalButton({ onClick }) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <button className={classNames(s.Button, s[theme])} onClick={onClick} type='button'>
                <div className={classNames(s.ButtonLine, s[theme])}></div>
                <div className={classNames(s.ButtonLine, s[theme])}></div>
                <span className={classNames(s.ButtonText, s[theme])}>New contact</span>
                <div className={classNames(s.ButtonDrow1, s[theme])}></div>
                <div className={classNames(s.ButtonDrow2, s[theme])}></div>
            </button>
        </>

    )
}

ModalButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}