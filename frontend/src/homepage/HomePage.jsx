import Picture from '../components/Picture';
import AboutMe from '../components/AboutMe';
import './homePage.css'

const person = {
    name: 'Bjorn',
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

const HomePage = () => {


    return (
        <>
            <h1 className="page-title">SkillSwaps</h1>

            <Picture picture={person.picture} />

            <AboutMe description={person.about} name={person.name} />

            <section>
                <dl>
                    <dt>Last active</dt>
                    <dd>Online</dd>
                </dl>
            </section>
        </>
    );
};

export default HomePage;