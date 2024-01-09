import React from 'react'
import SocialLinks from "../components/SocialLinks";

export default function HomePage() {
   
    return (
        <>
            <div className="homepage" >
                <img  src={process.env.REACT_APP_PUBLIC_URL + 'assets/admin/profile.png'} loading={"lazy"} />
                <div className='title-container'>
                    <div className='title rounded-blur'>Abhishek Nayak</div>
                    <div className='title rounded-blur'>Frontend Developer</div>
                </div>
                <SocialLinks />
            </div>
        </>
    );
}
