import './WaveAnimation.scss'
import { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from "components/BodyTheme/BodyTheme";


export default function WaveAnimation() {
    const { theme } = useContext(ThemeContext);


    return (
        <>
            <svg className="editorial"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 
                            58-18 88-18s
                            58 18 88 18 
                            58-18 88-18 
                            58 18 88 18
                            v44h-352z" />
                </defs>
                <g className={classNames("parallax1", [theme])}>
                    <use xlinkHref="#gentle-wave" x="50" y="3" fill="rgba(2,2,2,0.7)" />
                </g>
                <g className={classNames("parallax2", [theme])}>
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="rgba(2,2,2,0.5)" />
                </g>
                <g className={classNames("parallax3", [theme])}>
                    <use xlinkHref="#gentle-wave" x="50" y="9" fill="rgba(2,2,2,0.3)" />
                </g>
                <g className={classNames("parallax4", [theme])}>
                    <use xlinkHref="#gentle-wave" x="50" y="6" fill="#222" />
                </g>
            </svg>

        </>
    )
}