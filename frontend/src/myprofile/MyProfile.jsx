import ProfilePicture from './ProfilePicture';

import AboutMe from './AboutMe';
import MyInterests from './MyIntrests';
import CurrentSwap from './CurrentSwap';
import MySkills from './MySkills';
import Frame from './Frame';
import Saved from './saves';
import Header from './Header';


import '../myprofile/MyProfile.css'



const person = {
  name: 'Elena',
  picture: 'src/Assets/logo.png',
  skils: [
    'piano',
    'cooking',
    'Language'
  ],
  about: 'Been playing piano for 10 years ...',
  interests: [
    'music',
    'lenguage'
  ]
}




const MyProfile = () => {


  return (
    <>
     <Header image={person.picture} />
        <h1 className="page-title">My Profile</h1>
      
      <ProfilePicture picture={person.picture} />

      <MyInterests interest={person.interests} />

      <MySkills/>

      <AboutMe description={person.about} name={'me'} />

      <Frame/>

      <CurrentSwap/>

      <Saved/>
    </>
  );
};

export default MyProfile;
