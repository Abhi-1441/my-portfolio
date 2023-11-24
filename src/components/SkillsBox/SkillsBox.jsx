import React, { useEffect, useState } from 'react'
import './SkillsBox.css'

const SkillsBox = (props) => {
    const generalSkills = props.skills.general;
    const frontEndSkills = props.skills.front_end;
    const backEndSkills = props.skills.back_end;
    const machineDevSkills = props.skills.machine_dev;
    const AllSkills = [...generalSkills, ...frontEndSkills, ...backEndSkills, ...machineDevSkills]

    const filters = ["All", "Front-end", "Back-end", "Machine-development" , "General"];
    const [Filter, setFilter] = useState(0);
    const HandleClick = (index) => {    
            setFilter(index)
    }
    return (
        <div className='skillsBox'>
            <div className="filter_btns_container">
                {filters.map((filter, index) => {
                    return (
                        <span key={index} className={`filter_btn ${Filter === index ? 'active-filter' : ''}`} onClick={() => HandleClick(index)}>{filter}</span>
                    );
                })}
            </div>
            <div className="filtered_skills">
                {
                    Filter === 0 ?  AllSkills.map((skill,index)=>{ return(<div className="skill" key={index}>{skill}</div> ) }): 
                    Filter === 1 ?  frontEndSkills.map((skill,index)=>{ return(<div className="skill" key={index}>{skill}</div> )  }): 
                    Filter === 2 ?  backEndSkills.map((skill,index)=>{ return(<div className="skill" key={index}>{skill}</div> )  }): 
                    Filter === 3 ?  machineDevSkills.map((skill,index)=>{ return(<div className="skill" key={index}>{skill}</div> )  }): 
                    Filter === 4 ?  generalSkills.map((skill,index)=>{ return(<div className="skill" key={index}>{skill}</div> ) }): 
                    null
                }
            </div>
        </div>
    )
}

export default SkillsBox