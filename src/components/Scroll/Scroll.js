import { useContext } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ThemeContext } from "components/BodyTheme/BodyTheme";
import classNames from "classnames";
import s from './Scroll.module.scss';

export default function Scroll() {
    const { scrollYProgress } = useScroll();
    const { theme } = useContext(ThemeContext);
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <motion.div className={classNames(s.ProgressBar, s[theme])} style={{ scaleX }} />
    )
}