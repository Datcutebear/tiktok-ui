import styles from './Header.module.scss' 
import classNames from 'classnames/bind';
import image from '~/assets/images';

//Phần 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faSpinner, faPlus, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard} from '@fortawesome/free-solid-svg-icons';   
import { useEffect, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper';

//Phần 3
import Tippy from '@tippyjs/react/headless';
import AcountItems from '~/components/AcountItems';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

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
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt='Tiktok' />
                </div>
                <Tippy
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
                </Tippy>
                <div className={cx('actions')}>
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
                    <Menu items={MENU_ITEMS} onChange={HandleChangeMenu}>
                        <button className={cx('another-change')}>
                            <FontAwesomeIcon className={cx('icon-menu')} icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
     );
}

export default Header;