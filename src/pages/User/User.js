import './User.css'
import userImage from '../../images/topAvatar.jpg'
import { Link } from "react-router-dom";
import {
    PermIdentity,
    CalendarToday,
    PhoneAndroid,
    MailOutline,
    LocationSearching,
    Publish
} from '@material-ui/icons'
export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userInfo">
                        <img src={userImage} alt="userImage" className="userImage" />
                        <div className="userBio">
                            <strong className="userTitle">Rony Jackson</strong>
                            <p className="userDesignation">Software Developer</p>
                        </div>
                    </div>
                    <div className="userAccountDetails">
                        <p className="userAccountTitle">Account Details</p>
                        <div className="userNameInfo">
                            <PermIdentity className="userNameIcon" />
                            <span>ronybarua.ethical18</span>
                        </div>
                        <div className="userBirthDate">
                            <CalendarToday className="userNameIcon" />
                            <span>25.7.1994</span>
                        </div>
                    </div>
                    <div className="userContactDetails">
                        <p className="userContactTitle">Contact Details</p>
                        <div className="userPhone">
                            <PhoneAndroid className="userPhoneIcon" />
                            <span>+880-1325-345678</span>
                        </div>
                        <div className="userEmail">
                            <MailOutline className="userEmailIcon" />
                            <span>ronybarua.ethical18@gmail.com</span>
                        </div>
                        <div className="userAddress">
                            <LocationSearching className="userAddressIcon" />
                            <span>NewYork, USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input
                                    type="text"
                                    placeholder="Rony Jackson"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Rony Jackson"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input
                                    type="text"
                                    placeholder="ronybarua.ethical18@gmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input
                                    type="text"
                                    placeholder="+880-1325-345678"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input
                                    type="text"
                                    placeholder="NewYork, USA"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={userImage} alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" name="" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
