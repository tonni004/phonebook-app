import s from './Footer.module.scss';
// svg
import Instagram from '../../images/svg/instagram.svg';
import Github from '../../images/svg/github.svg';
import LinkedIn from '../../images/svg/linkedin.svg';
import Apple from '../../images/svg/apple.svg';
import Android from '../../images/svg/android.svg';
import WaveAnimation from 'components/WaveAnimation';

export default function Footer() {
    return (
        <>
            <WaveAnimation />
            <div className={s.FooterBackground}>

                <footer >
                    <div className={s.Footer}>


                        <div className={s.LinkField}>

                            <div className={s.NavigationField}>
                                <h4 className={s.NavigationTitle}>Navigation</h4>

                                <ul className={s.LinkList}>
                                    <li >
                                        <a href=' ' className={s.ListLinkItem}>FAQ</a>
                                    </li>
                                    <li>
                                        <a href=' ' className={s.ListLinkItem}>Support</a>
                                    </li>
                                    <li>
                                        <a href=' ' className={s.ListLinkItem}>Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>

                            <div className={s.FollowUsField}>
                                <h4 className={s.FollowUsTitle}>Follow us</h4>

                                <ul className={s.IconList}>

                                    <li className={s.FooterIcon}>
                                        <a href=' ' className={s.FollowUsLink} ><img className={s.FollowUsImg} src={Instagram} aria-label='instagram' /></a>
                                    </li>
                                    <li className={s.FooterIcon}>
                                        <a href='https://github.com/tonni004/phonebook-app' className={s.FollowUsLink}><img className={s.FollowUsImg} src={Github} aria-label='github' /></a>
                                    </li>
                                    <li className={s.FooterIcon}>
                                        <a href=' ' className={s.FollowUsLink}><img className={s.FollowUsImg} src={LinkedIn} aria-label='linkedin' /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={s.FollowUsField}>
                            <h4 className={s.FollowUsTitle}>Mobile app</h4>

                            <ul className={s.IconList}>

                                <li className={s.FooterIcon}>
                                    <a href=' ' className={s.FollowUsLink}><img className={s.FollowUsImg} src={Apple} aria-label='apple' /></a>
                                </li>

                                <li className={s.FooterIcon}>
                                    <a href=' ' className={s.FollowUsLink}><img className={s.FollowUsImg} src={Android} aria-label='android' /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className={s.FooterCopyright}><span>&copy;</span> 2023, Phonebook</p>
                </footer>
            </div>
        </>

    )
}