import ProfilePicture from './ProfilePicture';

import AboutMe from './AboutMe';
import MyInterests from './MyIntrests';
import CurrentSwap from './CurrentSwap';
import MySkills from './SkillSection';
import '../myprofile/MyProfile.css'


const person = {
  name: 'Elena',
  picture: 'src/myprofile/Assets/logo.png',
  skilss: [
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
      <h1 className="page-title">My Profile</h1>
      
      <ProfilePicture picture={person.picture} />

      <MySkills/>

      <AboutMe description={person.about} name={'me'}/>

      <MyInterests interest={person.interests}/>

      <CurrentSwap/>
      <section>
        <dl>
          <dt>Last active</dt>
          <dd>Online</dd>
        </dl>
      </section>
    </>
  );
};

export default MyProfile;
