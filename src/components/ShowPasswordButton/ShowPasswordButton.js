import { Icon } from 'react-icons-kit';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import s from './ShowPasswordButton.module.scss';


export default function ShowPasswordButton({ toggle, icon }) {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            type='button'
            className={s.ShowPasswordButton}
            onClick={toggle}>
            <Icon icon={icon} size={18} onClick={toggle} />
        </motion.button>

    )
}

ShowPasswordButton.propTypes = {
    toggle: PropTypes.func.isRequired,
    icon: PropTypes.object.isRequired,
}