
import { useRef } from "react";

export default function HoverIcon({
    onClick,
    iconPath, 
    hoverIconPath, 
    iconPathAlt = "", 
    hoverIconPathAlt = ""}
) {

    const iconRef = useRef(null); 
    const hoverIconRef= useRef(null); 

    const iconStyles = {
        height: "1.5em",
        width: "auto",
    }
    const hoverIconStyles = {
        ...iconStyles,
        display: "none",
    }



    function showHoverIcon(event) {
        const iconImg = iconRef.current;  
        const hoverIconImg = hoverIconRef.current; 
        iconImg.style.display = "none";
        hoverIconImg.style.display = "inline-block"; 
    }
    
    function showRegularIcon(event) {
        const iconImg = iconRef.current;  
        const hoverIconImg = hoverIconRef.current; 
        hoverIconImg.style.display = "none";
        iconImg.style.display = "inline-block"; 
    }

    return (
        <span onClick={onClick} onMouseEnter={showHoverIcon} onMouseLeave={showRegularIcon}>
            <img ref={iconRef} style={iconStyles} src={iconPath} alt={iconPathAlt} />
            <img ref={hoverIconRef} style={hoverIconStyles} src={hoverIconPath} alt={hoverIconPathAlt} />
        </span>
    );
}