import "./topbar.css"

export default function TopBar(){
    return(
        <div className="TopBar">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-whatsapp"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write a Blog</li>
                    <li className="topListItem">Log Out</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImage"
                 src="https://sfundon97.github.io/InternCareer/sfundo.jpg" alt=""></img>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}