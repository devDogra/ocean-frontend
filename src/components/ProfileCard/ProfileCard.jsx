import LogoutButton from "../LogoutButton/LogoutButton";
import "./ProfileCard.css";

export default function ProfileCard({username, email, stats, handleLogout}) {
    console.log("stats"); 
    console.log(stats); 
    return (
        <div className="profile-card">
            <h3 className="heading">{username}'s profile</h3>
            <div className="info-container">
                <div className="info">
                    <span className="info-key">Email: </span>
                    <span className="info-val">{email}</span>
                </div>
                <div className="info">
                    <span className="info-key">Username: </span>
                    <span className="info-val">{username}</span>
                </div>
                <hr />
                <div className="info">
                    <span className="info-key">Posts Created: </span>
                    <span className="info-val">{stats.postsCreated}</span>
                </div>
                <div className="info">
                    <span className="info-key">Total Points: </span>
                    <span className="info-val">{stats.totalPoints}</span>
                </div>
            </div>
            <LogoutButton />
        </div>
    );
}