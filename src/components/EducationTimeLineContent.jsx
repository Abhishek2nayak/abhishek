import React from "react";

export default function EducationTimeLineContent({educationObj,side}) {
    const{degree,time,description} = educationObj;
    if(side === "left") {
        return (
            <div className="timeline-block timeline-block-left">
                <div className="marker"></div>
                <div className="timeline-content">
                    <h3 className="blur">{degree}</h3>
                    <span className="blur">{time}</span>
                    <p className="blur">{description}</p>
                </div>
            </div>
        ) 

    } 
    return (
        <div className="timeline-block timeline-block-right">
            <div className="timeline-content">
            <div className="marker"></div>
                <h3 className="blur">{degree}</h3>
                <span className="blur">{time}</span>
                <p className="blur">{description}</p>
            </div>
        </div>
    );

}