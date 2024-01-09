import React from "react";


const SkillCard = ({title,icon}) => {
    return(
        <div className="skill-card">
            {icon}
            <span>{title}</span>
        </div>

    );
}


export default SkillCard;