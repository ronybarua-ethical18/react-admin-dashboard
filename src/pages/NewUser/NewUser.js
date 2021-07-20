import './NewUser.css'

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="username" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Full name" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">email</label>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Phone" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Address" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="active">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
            <button className="newUserButton">New User</button>
        </div>
    )
}
