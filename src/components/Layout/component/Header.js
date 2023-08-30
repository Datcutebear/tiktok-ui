import styles from './Header.module.scss' 
import classNames from 'classnames/bind';
import image from '~/assets/images';

//Phần 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faEllipsisVertical, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';   

//Phần 3
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

//Phần 4
import 'tippy.js/dist/tippy.css'
import { Feedback, KeyBoarch, Language, LiveAction, Messages, Setting, TiktokCoin, UploadIcon } from '~/components/Icons';
import Images from '~/components/Images';
import Search from './Search';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <Language />,
        title: 'English',
        children: {
            title: "Language",
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: "Tiếng việt"
                },
            ],
        },
    },
    {
        icon: <Feedback />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <KeyBoarch />,
        title: 'Keyboard shortcut'

    }
]

const MENU_ACCOUNTS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile'
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/feedback'
    },
    {
        icon: <TiktokCoin />,
        title: 'Get Coins',
        to: '/getcoins'
    },
    {
        icon: <LiveAction />,
        title: 'LIVE Creator Hub',
        to: '/livecreatorhub'
    },
    {
        icon: <Setting />,
        title: 'Settings',
        to: '/setting'
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        to: '/login',
        separate: true
    }
]
function Header() {

    //Handle logic

    const HandleChangeMenu = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = true

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt='Tiktok' />
                </div>
                <Search />               
                <div className={cx('actions')}>
                {   
                    currentUser ? ( 
                        <>
                            <Button upload to="/upload">
                                <div className={cx('upload')}>
                                    <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                                    <span className={cx('upload-text')}>
                                        Upload
                                    </span>
                                </div>
                            </Button>
                            <Tippy content="Messages">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <Messages />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                    <>
                        <Button upload to="/upload">
                            <div className={cx('upload')}>
                                <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                                <span className={cx('upload-text')}>
                                    Upload
                                </span>
                            </div>
                        </Button>
                        <Button primary>
                            Log in
                        </Button>
                    </>
                    )}

                    <Menu items={currentUser ? MENU_ACCOUNTS : MENU_ITEMS} onChange={HandleChangeMenu}>
                        {
                            currentUser ? (
                                <Images 
                                    className={cx('user-avatar')} 
                                    src='https://blogger.googleusercontent.com/img/a/AVvXsEjJ-twiS5eBEOi7ciP5dGYD686PWENTDDpC1HV8unlYZiBK2Efd5qRelzS6P0-xqg7DTi32k01FA9q5o74DZWjKTMqwHwphHsPkOql6P-Hw6Zrl69H2MJjyPTTovF9eisqjs0qOge1pr2bX5ihSzRVEhKTWx6zsHLJy-690VuvVjJKyg1EwcIzUk-0S' 
                                    alt='Dương Thành Đạt' />
                            ) : (
                                <button className={cx('another-change')}>
                                    <FontAwesomeIcon className={cx('icon-menu')} icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </Menu>
                </div>
            </div>
        </header>
     );
}

export default Header;