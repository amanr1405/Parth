import React from 'react'
import Navbar from '/src/components/Navbar'


function Heroic() {
    return (
        
        <div className='heroic-bg'>
            <Navbar/>      
            <div className='heroic-inside'>
            
            <div className='heroic-left'>
                <div className='heroic-left-info'>
                    <p>Personal Assistant Ready To <span style={{color:"#ED584E"}}> Help</span></p>
                    <h1>PARTH</h1>
                    <hr />
                </div>
                <p>An AI-powered ecosystem that connects your <span style={{color:"#ED584E"}}>PC, Mobile,</span> and <span style={{color:"#ED584E"}}>a Smart Pet Bot</span> into one intelligent companion.</p>
            </div>
            </div>

        </div>
    )
}

export default Heroic