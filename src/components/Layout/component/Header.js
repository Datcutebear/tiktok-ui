import styles from './Header.module.scss' 
import classNames from 'classnames/bind';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons';   
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import AcountItems from '~/components/AcountItems';

const cx = classNames.bind(styles)
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

                </div>
            </div>
        </header>
     );
}

export default Header;