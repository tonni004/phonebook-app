import { useContext } from "react"
import { ThemeContext } from '../BodyTheme/BodyTheme.js';
import classNames from "classnames";
import s from './BackgroundOverlay.module.scss';

export default function BackgroundOverlay({ children }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={classNames(s.BackgroundOverlay, s[theme])}>
            {children}
        </div>
    )
}