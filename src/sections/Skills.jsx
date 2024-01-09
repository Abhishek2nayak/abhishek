import React from 'react'
import Header from '../components/Header'
import SkillCard from '../components/SkillCard';
import { SkillArray } from '../constants/Utils';
export default function Skills() {
    return (
        <div className='skills' id={"skills"}>
            <Header title='Skills' />
            <div className='skills-container'>
                {
                    SkillArray.map((skill, i) => {
                        return (
                            <SkillCard key={i} title={skill.title} icon={skill.icon} />
                        )
                    })
                }

            </div>
        </div>
    )
}