import './WidgetSm.css'
import { Visibility } from '@material-ui/icons'
import userImage from '../../images/topAvatar.jpg'
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmUserList">
                <li className="widgetSmUserItem">
                    <img className="widgetSmUserImg" src={userImage} alt="userImage" />
                    <div className="widgetSmUserInfo">
                        <span className="widgetSmUserName">Rony Jackson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmUserItem">
                    <img className="widgetSmUserImg" src={userImage} alt="userImage" />
                    <div className="widgetSmUserInfo">
                        <span className="widgetSmUserName">Rony Jackson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmUserItem">
                    <img className="widgetSmUserImg" src={userImage} alt="userImage" />
                    <div className="widgetSmUserInfo">
                        <span className="widgetSmUserName">Rony Jackson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmUserItem">
                    <img className="widgetSmUserImg" src={userImage} alt="userImage" />
                    <div className="widgetSmUserInfo">
                        <span className="widgetSmUserName">Rony Jackson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmUserItem">
                    <img className="widgetSmUserImg" src={userImage} alt="userImage" />
                    <div className="widgetSmUserInfo">
                        <span className="widgetSmUserName">Rony Jackson</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
