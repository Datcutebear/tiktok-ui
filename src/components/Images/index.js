import { useState, forwardRef } from "react";
import image from "~/assets/images";
import styles from './Image.module.scss'
import classNames from "classnames/";

function Image({src, alt, className, ...props}, ref) {
    const[fallback, setFallback]= useState('')
    
    const handleError = () => {
        setFallback(image.noImage)
    }

    return <img className={classNames(styles.wrappper, className)} ref={ref} {...props} src={fallback || src} alt={alt} onError={handleError} />
}

export default forwardRef(Image);