import { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../BodyTheme//BodyTheme.js';
import { ReactComponent as SunIcon } from '../../images/svg/sun-icon.svg';
import { ReactComponent as MoonIcon } from '../../images/svg/moon-icon.svg';
import s from './ToggleThemeButton.module.scss';

export default function ToggleThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <label className={classNames(s['toggle-wrapper'])} htmlFor="toggle">
                <div className={classNames(s['toggle'], s[theme])}>
                    <span className={s["hidden"]}>
                        {theme === "light" ? "Light Mode" : "Dark Mode"}
                    </span>
                    <div className={classNames(s['icons'], s[theme])}>
                        <SunIcon />
                        <MoonIcon />
                    </div>
                    <input
                        id="toggle"
                        name="toggle"
                        type="checkbox"
                        checked={theme === "light"}
                        onChange={toggleTheme}
                    />
                </div>
            </label>
        </>
    )
}