import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({
    className, 
    to, 
    href, 
    children, 
    primary = false, 
    outline = false,
    rounded = false, 
    small= false, 
    large= false,
    upload = false,
    disable = false, 
    onClick,
    leftIcon = false,
    rightIcon = false,
    ...passProps}) {
    
    let Comp = "button"
    
    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        small,
        large,
        upload,
        disable,
        [className]: className
    })
    
    const props = {
        onClick,
        ...passProps
    }
    // Remove listening events when it have class disable
    if(disable){
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === "function"){
                delete props[key]}
        })
    }

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = 'a'
    }

    return (
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>
                {children}
            </span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;