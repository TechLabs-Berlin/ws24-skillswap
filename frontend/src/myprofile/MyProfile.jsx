import ProfilePicture from './ProfilePicture';
import AboutMe from './AboutMe';
import MyInterests from './MyIntrests';
import CurrentSwap from './CurrentSwap';
import MySkills from './MySkills';
import Frame from './Frame';
import Saved from './saves';
import '../myprofile/MyProfile.css'
import { Link } from 'react-router-dom';
import svgsettings from '../assets/icons/settings.svg';



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
    <nav>  
      <Link to="/settings" style={{ color: 'white' }}>
          <button><img src={svgsettings} alt="" /></button>
      </Link>
    </nav>

     
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
