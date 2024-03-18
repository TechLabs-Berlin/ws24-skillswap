import ProfilePicture from './ProfilePicture';
import MySkills from './SkillSection';
import AboutMe from './AboutMe';
import MyInterests from './MyIntrests';
import CurrentSwap from './CurrentSwap';
import '../myprofile/UserProfile.css'


const UserProfileTwo = () => {


  return (
    <>
      <h1 className="page-title">My Profile</h1>

      <ProfilePicture/>

      <MySkills/>

      <AboutMe/>

      <MyInterests/>

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

export default UserProfileTwo;
