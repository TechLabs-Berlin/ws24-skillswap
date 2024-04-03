import { useState, useEffect } from 'react';
import svgedit from '../assets/icons/edit.svg';

// eslint-disable-next-line react/prop-types
function ProfilePicture({ picture }) {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState(picture);

    useEffect(() => {
        setBackgroundImageUrl(picture);
    }, [picture]);

    function profileUpdate() {
        const profilePic = document.getElementById("profilePic");
        const profileU = document.getElementById("profileU");
        profilePic.src = URL.createObjectURL(profileU.files[0]);
        setBackgroundImageUrl(URL.createObjectURL(profileU.files[0]));
    }

    return (
        <section className="profileSection">
            <div className="profileContainer">
                <img src={backgroundImageUrl} id='Pic' className="background-picture" alt="Background"/>
                <div>
                    <img src={backgroundImageUrl} id='profilePic' className="profilePic" alt="Profile"/>

                    <button>
                        <label htmlFor="profileU" className="picU"><img src={svgedit} alt="" /></label>
                    </button>

                    <input type="file" accept='image/*' id='profileU' onChange={profileUpdate} className='profileU'/>
                </div>
            </div>
        </section>
    );
}

export default ProfilePicture;
