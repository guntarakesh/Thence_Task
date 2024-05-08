import React from 'react'
import Question from './question'

function Footer() {
    return (
        <div className='footer'>
            <div className='questions'>
                <div className='question-headings'>
                    <p>whats on your mind</p>
                    <h1>Ask Questions</h1>
                </div>
                <div>
                    <Question question='Do you offer freelancers?' answer='if unhappy with a project, communicate with the freelancer,allow for revisions,and refer to agreement. Escalate to platform support 
                    if needed,considering mediation. Review policies,seek collaborative solutions for resolution.' />
                    <hr></hr>
                    <Question question='what is the guarantee that i will be satisfied with the hired talent?' 
                    answer='if unhappy with a project, communicate with the freelancer,allow for revisions,and refer to agreement. Escalate to platform support 
                    if needed,considering mediation. Review policies,seek collaborative solutions for resolution.' />
                    <hr></hr>
                    <Question question='why should i not go to agency directly?' answer='if unhappy with a project, communicate with the freelancer,allow for revisions,and refer to agreement. Escalate to platform support 
                    if needed,considering mediation. Review policies,seek collaborative solutions for resolution.' />
                    <hr></hr>
                    <Question question='Who can help me pick a right skillset andduration for me?' answer='if unhappy with a project, communicate with the freelancer,allow for revisions,and refer to agreement. Escalate to platform support 
                    if needed,considering mediation. Review policies,seek collaborative solutions for resolution.' />
                    
                </div>
            </div>
            <div className='copyright'>
                    <a style={{textDecoration:'none'}} href='#'> &#169; Talup 2024.All rights reserved </a>
                    <a style={{ margin: '0px 50px',marginLeft:'auto' }} href='#'>Terms&Conditions</a>
                    <a href='#'>Privacy Policy</a>
           
                </div>
        </div>
    )
}

export default Footer