import { useState, useEffect } from 'react';

const Search = () => {
    const [data, setData] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const skillsSelected = (item) => {
        setSelectedSkills([...selectedSkills, item]);
    }

    const removeSkill = (idToRemove) => {
        setSelectedSkills(selectedSkills.filter(skill => skill.id !== idToRemove));
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
                body: JSON.stringify({"skills": [...selectedSkills]}) // Replace with your data object
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
            {selectedSkills?.map(item => (
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

            <button style={{ backgroundColor: 'darkolivegreen' }}onClick={postDataToServer}>call backend to post data</button>

        </div>

    );
};

export default Search;





