import classNames from "classnames/bind";
import styles from './AcountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEllipsis} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AcountItems({data}) {
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}
                 src={data.avatar}
                 alt={data.avatar}
            />
            <div className={cx('full-account')}> 
                <div className={cx('account')}>
                    <div className={cx('name')}>
                        <h4 className={cx('nickname')}>{data.nickname}</h4>
                    { data.tick === true && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                    </div>
                    <div className={cx('user-name')}>
                        {data.full_name}
                    </div>
                </div>
                <FontAwesomeIcon className={cx('user-menu')} icon={faEllipsis} />
            </div>
        </div>
    )
}

export default AcountItems