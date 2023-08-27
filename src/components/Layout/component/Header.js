import styles from './Header.module.scss' 
import classNames from 'classnames/bind';
import image from '~/assets/images';

//Phần 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faUser, faBookmark, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCommentDollar, faToolbox, faTimes, faSearch, faSpinner, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faArrowUpRightFromSquare, faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons';   
import { useEffect, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper';

//Phần 3
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import AcountItems from '~/components/AcountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

//Phần 4
import 'tippy.js/dist/tippy.css'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
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
        icon: <FontAwesomeIcon icon={faCommentDollar} />,
        title: 'Get Coins',
        to: '/getcoins'
    },
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
        to: '/livecreatorhub'
    },
    {
        icon: <FontAwesomeIcon icon={faToolbox} />,
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
    // Hiện border khi focus
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    // xóa và tải khi nhập xong
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      setIsLoading(true);
  
      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };
  
    const handleDeleteClick = () => {
      setInputValue('');
    };
    // Làm menu tìm kiếm cho search
    const [searchResult, setSearchResult] = useState([])

    useEffect(() =>{
        setTimeout(() => {
            setSearchResult([])
        }, 3000);
    })

    //Handle logic

    const HandleChangeMenu = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = false

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt='Tiktok' />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                   <div>
                                    <div className={cx('recent-result')}>
                                        Recent searches
                                    </div>
                                   </div>
                                   <div>
                                    <div className={cx('recommend')}>
                                        You may like
                                    </div>
                                    <div className={cx('account')}>
                                        Accounts
                                    </div>
                                   </div>
                                   <AcountItems />
                                   <AcountItems />
                                   <AcountItems />
                                   <AcountItems />
                                </PopperWrapper>
                            </div>
                    )}
                >
                <div className={cx('search')}>
                    <div className={cx('search-element', { focused: isInputFocused })}>
                        <input className={cx('input')} placeholder='Search accounts and videos' spellCheck='false' 
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onChange={handleInputChange}
                            value={inputValue}
                        />
                        {inputValue && !isLoading && (
                            <button className={cx('close-button')} onClick={handleDeleteClick}>    
                                <FontAwesomeIcon icon={faTimes} />                       
                            </button>
                        )}
                        {isLoading && ( 
                            <div className={cx('loading')}>
                             <FontAwesomeIcon icon={faSpinner} />
                            </div>
                        )}
                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faSearch} />    
                        </button>      
                    </div>
                </div>
                </HeadlessTippy>
                
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
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
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
                                <img className={cx('user-avatar')} src='https://blogger.googleusercontent.com/img/a/AVvXsEjJ-twiS5eBEOi7ciP5dGYD686PWENTDDpC1HV8unlYZiBK2Efd5qRelzS6P0-xqg7DTi32k01FA9q5o74DZWjKTMqwHwphHsPkOql6P-Hw6Zrl69H2MJjyPTTovF9eisqjs0qOge1pr2bX5ihSzRVEhKTWx6zsHLJy-690VuvVjJKyg1EwcIzUk-0S' alt='Dương Thành Đạt' />
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