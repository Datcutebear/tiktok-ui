import classNames from "classnames/bind";
import styles from './AcountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEllipsis} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AcountItems() {
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                 src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720~c5_300x300.webp?x-expires=1692536400&x-signature=e5y7llaqV2xXTO775M6DGkt71AI%3D"
                 alt=""
            />
            <div className={cx('full-account')}> 
                <div className={cx('account')}>
                    <div className={cx('name')}>
                        <h4 className={cx('nickname')}>hoaa.hanassii</h4>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                    </div>
                    <div className={cx('user-name')}>
                        Đào Lê Phương Hoa
                    </div>
                </div>
                <FontAwesomeIcon className={cx('user-menu')} icon={faEllipsis} />
            </div>
        </div>
    )
}

export default AcountItems