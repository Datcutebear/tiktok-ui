import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItems from "./MenuItem";
import { useState } from "react";
import Header from "./Header";



const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], onChange = defaultFn}) {
    
    const [history, setHistory] = useState([{data: items}])

    const current = history[history.length - 1]

    
    const itemRender = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItems key={index} data={item} onClick = {() => {
                if(isParent){
                    setHistory(pre => [...pre, item.children])
                } else{
                    onChange(item)
                }
            } } />
        })
    }
    
    return ( 
        <Tippy
            visible
            interactive
            delay={[0,700]}
            placement='bottom-end'
            offset = {[17, 10]}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className = {cx('custom-popper')}>
                        { history.length > 1 && <Header title="Language" onBack={() => {
                            const currentArray = [...history]
                            currentArray.splice(history.length - 1, 1)
                            setHistory(currentArray)
                        }} />}
                        {itemRender()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children} 
        </Tippy>
    );
}

export default Menu;