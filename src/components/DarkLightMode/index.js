import React from "react";
import { useContext } from "react";
import classNames from "classnames/bind";
import styles from'./DarkLightMode.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "./ThemeContext";


const cx = classNames.bind(styles)


function DarkLightMode() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={cx('switch')}>
            <span className={cx('mode-icon')}> 
                <FontAwesomeIcon icon={faMoon} />
            </span>
            <label className={cx('label-switch')}>
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
                <input onChange={toggleTheme} type="checkbox"  />
                <span className={cx('slider-switch')}/>
            </label>                
        </div> 
    );
}

export default DarkLightMode;