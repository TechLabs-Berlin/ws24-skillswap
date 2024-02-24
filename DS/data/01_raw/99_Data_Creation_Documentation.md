# High-level Approach

1. **Create 4 Dataframes (Synthetic Data)**
   - **Personal_Info:**
     - Contains personal info such as Name, Age, location coordinates etc.
     - Geographical scope of data: Only Berlin
   - **Skill_Exchange:**
     - Contains the possible skill categories and the skill level of each individual person in each category
   - **Track_Record:**
     - Counts the number of skills received and the number of skills offered (sucessful skill exchanges)
     - The ratio between the count of skills received and offered should stay as close to 1:1 as possible with a maximum deviation from each other of around 20%
   - **Feedback.**
     - Contains the User feedback on the platform (e.g. concerning usability)

2. **Merge Dataframes horizontally to create one aggregated dataset**
