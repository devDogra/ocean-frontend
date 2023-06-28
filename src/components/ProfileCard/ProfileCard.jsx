import "./ProfileCard.css";

export default function ProfileCard({username, email}) {
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
            </div>
        </div>
    );
}