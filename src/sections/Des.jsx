import React from 'react'
import ModelDisplay from '../components/ModelDisplay'   



function Des() {
  return (
    <div className='des-bg' id='About'>
        <div className='des-container'>
            <div className='des-container-info1'>
                <h1>Technology Stack</h1>
                <br />
                <p style={{color:"#fff", paddingTop:"5px"}}>Backend & PC Software</p>
                <div className='icons'>
                    <img height="50" width="50" src="https://cdn.simpleicons.org/python" />
                    <img height="50" width="50" src="https://cdn.simpleicons.org/flask" />
                    <img height="50" width="50" src="https://cdn.simpleicons.org/opencv" />
                    <img height="50" width="50" src="https://cdn.simpleicons.org/googlegemini" />
                    <img height="50" width="50" src="https://cdn.simpleicons.org/electron" />

                </div>

                <p style={{color:"#fff", paddingTop:"5px"}}>Mobile App</p>
                <div className='icons'>
                    <img height="50" width="50" src="https://cdn.simpleicons.org/react" />
                    <img height="50" width="50" src="https://cdn.simpleicons.org/fastapi" />
                </div>
                
                <p style={{color:"#fff", paddingTop:"5px"}}>IOT Device</p>
                <div className='icons'>
                    <img height="50" width="50" src="https://cdn.simpleicons.org/arduino" />
                </div>

            
                <p style={{color:"#fff", paddingTop:"5px"}}>Database</p>
                <div className='icons'>
                    <img height="50" width="50" src="https://cdn.simpleicons.org/supabase" />
                </div>
                <br />
                <br />
                <h1>Hardware Parts</h1>
                    <br />
                    <div>
                        <span className='features'>ESP32 C3 Mini</span>
                        <span className='features'>0.96" OLED Display</span>
                        <span className='features'>LEDs</span>
                        
                        <span className='features'>LM386 Amplifier</span>
                        <span className='features'>8Ω Speaker</span>


                    </div>

            </div>
            <div className='des-container-info2'>
                <ModelDisplay />
            </div>
            <div className='des-container-info3'>
                 <div style={{padding:"30px", color:"#fff", fontWeight:"100" }}>
                    <p><strong style={{color:"#FF004F", fontWeight:"800"}}>PARTH is more than just a project—it is a product-oriented ecosystem</strong> that seamlessly integrates artificial intelligence, IoT hardware, and mobile and PC automation with a strong focus on human-friendly design. By combining these elements, PARTH transforms traditional systems into <strong style={{color:"#FF004F", fontWeight:"800"}}>smart, interactive companions</strong> that adapt to users’ needs and enhance everyday experiences.</p>

                </div>
                <img src="blueprint.png" />
               
            </div>
        </div>
    </div>
  )
}

export default Des