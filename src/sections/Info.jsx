import React from 'react'

function Info() {
    return (
        <div className='info-bg'>
            <div className='info-container'>
                <div className='info-title'>
                    <h1>FUTURE IS <span style={{ color: "#ED584E" }}>NOW</span> HERE</h1>
                    <p style={{fontWeight:"700"}}>About PARTH</p>
                    
                </div>
                <div className='info-des'>
                    <p style={{ color: "#fff" }}>
                        <span style={{ color: "#ED584E" }}>PARTH</span> is an intelligent personal assistant ecosystem designed to <span style={{ color: "#ED584E" }}>bring awareness, automation, and personality</span> to your digital life.
                        It seamlessly connects your PC, mobile application, and a smart pet-bot device into one unified assistant that actively monitors and responds to what matters most.
                    </p>
                </div>
            </div>

            <div className='info-container-bento'>
                <div className='info-container1'>
                    <h1>Problem Statement</h1><br />
                    <div>
                        <span className='features'>Notification Overload</span>
                        <span className='features'>No smart automation</span>
                        <span className='features'>Missed Critical Alerts</span>
                        <span className='features'>Complex Security Monitoring</span>
                        <span className='features'>Low User Engagement</span>
                    </div>

                </div>
                <div className='info-container1'>
                    <h1>Our Solution – <span style={{ color: "#fff" }}>PARTH</span> Ecosystem</h1><br />
                    <div>
                        <span className='features'>Core Intelligence Software</span>
                        <span className='features'>Mobile Control App</span>
                        <span className='features'>Physical AI Companion</span>
                        <span className='features'>Live Monitoring</span>
                        <span className='features'>Generative AI Engine</span>
                    </div>
                </div>
            </div>

            
                <div className='info-des'>
                    <p style={{ color: "#fff" , textAlign:"center"}}>This
                        <span style={{ color: "#ED584E" }}> ecosystem</span> creates a <span style={{ color: "#ED584E" }}> smart, interactive, and responsive assistant</span> that bridges the gap between the digital and physical world.
                    </p>
                </div>
            
        </div>
    )
}

export default Info