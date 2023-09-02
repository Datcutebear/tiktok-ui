import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from '~/components/Popper';
import MenuItems from "./MenuItem";
import { useState, useContext } from "react";
import Header from "./Header";
import DarkLightMode from "~/components/DarkLightMode";
import { ThemeContext} from "~/components/DarkLightMode/ThemeContext";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn, ...passProps}) {
    
    const [history, setHistory] = useState([{data: items}])

    const current = history[history.length - 1]

    const { theme, toggleTheme } = useContext(ThemeContext);

    const itemRender = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            if(item.title !== "Log out")
            {
                return <MenuItems key={index} data={item} onClick = {() => {
                    if(isParent){
                        setHistory(pre => [...pre, item.children])
                    } else{
                        onChange(item)
                    }
                } } />
            }
        })
    }

    const renderLogout = () => {
        const logoutItem = current.data.find(item => item.title === "Log out");
        if (logoutItem) {
            return <MenuItems key={logoutItem.title} data={logoutItem} onClick={onChange} />;
        }
        return null;
    }

    return ( 
        <Tippy
            {...passProps} 
            interactive
            delay = {[0,700]}
            placement = 'bottom-end'
            hideOnClick = {hideOnClick}
            offset = {[17, 10]}
            render = {(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className = {cx('custom-popper')}>
                        { history.length > 1 && <Header title={history[history.length-1].title} onBack={() => {
                            const currentArray = [...history]
                            currentArray.splice(history.length - 1, 1)
                            setHistory(currentArray)
                        }} />}
                        <div className={cx('menu-body')}> 
                            {itemRender()}
                            {history.length === 1 && <DarkLightMode  theme={theme} toggleTheme={toggleTheme} />}
                            {renderLogout()}                       
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children} 
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}
export default Menu;