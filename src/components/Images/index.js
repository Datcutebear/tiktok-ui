import { useState, forwardRef } from "react";
import image from "~/assets/images";
import styles from './Image.module.scss'
import classNames from "classnames/";
import PropTypes from 'prop-types'

function Image({src, alt, className, ...props}, ref) {
    const[fallback, setFallback]= useState('')
    
    const handleError = () => {
        setFallback(image.noImage)
    }

    return <img className={classNames(styles.wrapper, className)} ref={ref} {...props} src={fallback || src} alt={alt} onError={handleError} />
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}
export default forwardRef(Image);       