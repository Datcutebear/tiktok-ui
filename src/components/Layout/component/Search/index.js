import styles from './Search.module.scss' 
import classNames from 'classnames/bind';


//Phần 2
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSpinner} from '@fortawesome/free-solid-svg-icons';   
import { useEffect, useRef, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper';
import { Delete } from '~/components/Icons';

//Phần 3
import HeadlessTippy from '@tippyjs/react/headless';
import AcountItems from '~/components/AcountItems';

import { useDebounce } from '~/hooks';

//Phần thư viện Axios
import axios from 'axios';
import * as searchService from '~/apiServices/SearchService'



const cx = classNames.bind(styles)

function Search() {
    // Hiện border khi focus
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleInputFocus = () => {
        setIsInputFocused(true);
        setShowResult(true)
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
    };

    // xóa và tải khi nhập xong
    const handleInputChange = (event) => {
      const value = event.target.value;
      if (!value.startsWith(' '))
      {
        setInputValue(value);
        setIsLoading(true);
      }
      
     // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 1700);
    };
  
    const handleDeleteClick = () => {
      setInputValue('');
      inputRef.current.focus()
    };
    // Làm menu tìm kiếm cho search
    const [searchResult, setSearchResult] = useState([])

    //Focus khi delete
    const inputRef = useRef()

    //Điều kiện để người dùng nhập vào

    const [showResult, setShowResult] = useState(false)

    const handleTippyHidden = () =>{
        setShowResult(false)
    }

    //Call API for searching
    const debounced = useDebounce(inputValue, 500)

    useEffect(() => {
        if(!debounced.trim()){
            setSearchResult([])
            return;
        }
        
        const fetchAPI = async () => {

            const result = await searchService.search(debounced)
            setSearchResult(result)
        }
        
        fetchAPI()

    },[debounced])
    

    //Debounce là một dạng sau khi search xong mới cho tìm kiếm từ đó
    
    // Handle click cho nút searh
    const handleSubmit = () => {

    }
    return (
        // có thể xóa bỏ warning của Tippy bằng hai cách, là gắn thêm appendTo như bên dưới
        // hoặc có thể bọc nó bằng thẻ div 
        <div>
            <HeadlessTippy
                        appendTo={() => document.body}
                        interactive
                        visible={showResult && searchResult.length > 0}
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
                                       {searchResult.map((result) => (
                                            <AcountItems key={result.id} data={result}/>
                                       ))}
                                    </PopperWrapper>
                                </div>
                        )}
                        onClickOutside={handleTippyHidden}
                    >
                    <div className={cx('search')}>
                        <div className={cx('search-element', { focused: isInputFocused })}>
                            <input className={cx('input')} placeholder='Search accounts and videos' spellCheck='false' 
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                onChange={handleInputChange}
                                value={inputValue}
                                ref={inputRef}
                            />
                            {!!inputValue && !isLoading && (
                                <button className={cx('close-button')} onClick={handleDeleteClick}>    
                                    <Delete />                       
                                </button>
                            )}
                            {isLoading && ( 
                                <div className={cx('loading')}>
                                 <FontAwesomeIcon icon={faSpinner} />
                                </div>
                            )}
                            <button className={cx('search-button')} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
                                <FontAwesomeIcon icon={faSearch} />    
                            </button>      
                        </div>
                    </div>
                    </HeadlessTippy>
        </div>
    );
}

export default Search;