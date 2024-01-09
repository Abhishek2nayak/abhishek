import React from 'react'
import EducationTimeLineContent from "../components/EducationTimeLineContent";
import Header from '../components/Header'

export default function Education() {
    return (
        <section className={"education"} id={"education"}>
            <Header title='Education' />
            <EducationTimeLineContent educationObj={
                {
                    degree: "Bachelor of sciences Information Technology",
                    time: "2021 - 2024",
                    description: "\n" +
                        "I've excelled in development, open source contributions, and computer fundamentals, achieving a 9 CGPA—an embodiment of my multifaceted expertise."
                }
            }
                side={"right"}
            />
            <EducationTimeLineContent educationObj={
                {
                    degree: "12th standard",
                    time: "2019 - 2021",
                    description: "\n" +
                        "I successfully completed my 12th-grade studies in Science with an outstanding achievement of 80%"
                }
            }
                side={"left"}
            />
            <EducationTimeLineContent educationObj={
                {
                    degree: "10th standard",
                    time: "2019",
                    description: "I completed my 10th standard with a commendable 82%, notably securing 93 marks in Mathematics."
                }
            }
                side={"right"}
            />
        </section>
    );
}
