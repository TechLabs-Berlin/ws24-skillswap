import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/SkillsContext.jsx";



const Search = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const {skills, setSkills} = useAuth();
    const skillsSelected = (item) => {
        setSkills([...skills, item]);
        console.log(skills);
    }

    const navigateToProfile = () => {
        navigate("/")
    };

    const removeSkill = (idToRemove) => {
        setSkills(skills.filter(skill => skill.id !== idToRemove));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://ws24-skillswap.onrender.com/api/skills');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log('error', error)
            }
        };

        fetchData();

    }, []);


    const postDataToServer = async () => {
        try {
            const response = await fetch(' https://ws24-skillswap.onrender.com/api/users/update/65e07569ce88a79c6ccea9e3', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"skills": [...skills]}) // Replace with your data object
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if(data.code === 200) {
                console.log('submitted data to BE successfully!!');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (

        <div>
            <h1>Hello Elena!</h1>
            <p> Lets add your skills so people can easily find you.</p>
            {skills?.map(item => (
                <div style={{ padding: '10px' }} key={item.id}>
                    <button>
                        {item.name}
                    </button>
                    <span>
                <button onClick={() => removeSkill(item.id)}>
                X
              </button>
              </span>
                </div>
            ))}
            <input type="text" placeholder="Search here"/>


            {data?.map(item => (
                <div style={{ padding: '10px' }} key={item.id}>
                    <button onClick={() => skillsSelected(item)}>
                        {item.name}
                    </button>
                </div>
            ))}
            <button className='AddButton' onClick={navigateToProfile} >Add</button>

        </div>

    );
};

export default Search;





