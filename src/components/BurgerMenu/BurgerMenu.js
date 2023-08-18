import * as React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useCycle } from "framer-motion";
import classNames from "classnames";
import styles from './BurgerMenu.module.scss';

import { BurgerMenuToggle } from "components/BurgerMenuToggle/BurgerMenuToggle";
import { useDimensions } from './use-dimensions.ts';
import Navigation from "components/NavBar";
const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};


export default function BurgerMenu() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleOutsideClick = useCallback((e) => {
        if (isOpen && containerRef.current && !containerRef.current.contains(e.target)) {
            toggleOpen(false);
        }
    }, [isOpen, containerRef, toggleOpen]);

    const handleMenuClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [isOpen, handleOutsideClick]);

    return (
        <div>
            {windowWidth >= 1279
                ? <Navigation />
                : <div onClick={handleMenuClick} ref={containerRef}>
                    <BurgerMenuWithDimensions
                        isOpen={isOpen}
                        toggleOpen={toggleOpen}
                        containerRef={containerRef}
                    />
                </div>
            }
        </div>

    )
}

function BurgerMenuWithDimensions({ isOpen, toggleOpen, containerRef }) {
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"} >
            <BurgerMenuToggle
                toggle={() => toggleOpen()} />
            <motion.nav
                custom={height}
                ref={containerRef}
                className={classNames(styles.BurgerNavMenu, styles[isOpen])} >
                <motion.div className={classNames(styles.BurgerMenuBackground, styles[isOpen])} variants={sidebar}>
                    <div className={styles.BurgerMenuNavField} >
                        <Navigation />
                    </div>
                </motion.div>
            </motion.nav>
        </motion.nav>

    );
}


