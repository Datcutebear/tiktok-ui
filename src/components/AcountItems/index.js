import classNames from "classnames/bind";
import styles from './AcountItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEllipsis} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

function AcountItems({data}) {
    return(
        <Link to={(`/@${data.nickname}`)} className={cx('wrapper')}>
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
        </Link>
    )
}
AcountItems.propTypes = {
    data: PropTypes.object.isRequired
}   
export default AcountItems