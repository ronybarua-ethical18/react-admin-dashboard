import React from 'react'
import './TopBar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import topAvatar from '../../images/topAvatar.jpg'
export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbar-left">
                    <span className="logo">ReactAdmin</span>
                </div>
                <div className="topbar-right">
                    <div className="topbarContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarContainer">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarContainer">
                        <Settings />
                    </div>
                    <img className="topAvatar" src={topAvatar} alt="topAvatar" />
                </div>
            </div>
        </div>
    )
}
