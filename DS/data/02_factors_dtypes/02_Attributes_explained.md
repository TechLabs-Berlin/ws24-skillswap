# Overview of Assumptions and Answer Options

## 01 Personal Info

1. **First_Name:**
   - Generated fake first names.
  
2. **EMail:**
   - Possible answers: Email addresses generated based on first names and last names with realistic email providers including German providers.
   - Range of Email Providers: 'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'zoho.com', 'protonmail.com', 'mail.com', 'gmx.de', 'web.de', 't-online.de', 'freenet.de', '1und1.de', 'arcor.de', 'unitybox.de'

3. **Age:**
   - Possible answers: Random integers between 18 and 65, representing age.

4. **Gender:**
   - Possible answers: "Male", "Female", "Other".

5. **Location_Preferences:**
   - Possible answers: "Local Only", "Remote Only", "Local or Remote".

6. **Coordinate:**
   - Possible answers: Random coordinates within the borders of Berlin.
   - Range of Coordinates: 
     - West: 13.0883
     - East: 13.7612
     - North: 52.6755
     - South: 52.3385

7. **Country:**
   - Possible answers: "Germany" for all entries.

8. **City:**
   - Possible answers: "Berlin" for all entries.

9. **Languages_Preferred:**
   - Possible answers: Lists of languages spoken, where individuals may speak up to 5 languages selected from a list of most spoken languages globally and in Europe.
   - Range of Languages: ["Mandarin Chinese", "Spanish", "English", "Hindi", "Arabic", "Bengali", "Portuguese", "Russian", "Japanese", "Punjabi", "German", "French", "Italian", "Polish", "Ukrainian", "Romanian", "Turkish"]

10. **Last_Seen:**
    - Possible answers: "Recently", "Today", "Yesterday", "Within a Week", "Within a Month", "Over a Month Ago".

11. **Response_Time:**
    - Possible answers: "Within 24 hours", "Within a week", "Within a month", "More than a month".

## 02 Skill Rating

### Answer options for rating one's skill level in each skill category

- **NaN:**
  Individuals who are not interested in or don't offer the respective skill.

- **Novice:**
  Individuals who are new to the skill and are in the initial stages of learning.

- **Beginner:**
  Individuals who have a basic understanding of the skill and can perform fundamental tasks with guidance.

- **Intermediate:**
  Individuals who have progressed beyond the beginner stage and can perform tasks independently with occasional guidance.

- **Advanced:**
  Individuals who have achieved a high level of proficiency in the skill and can handle complex tasks with minimal assistance.

- **Expert:**
  Individuals who possess extensive experience and profound knowledge in the skill area, capable of providing mentorship and performing tasks at the highest level of proficiency.

### Skill Domains

- Professional Skills
- Creative Skills
- Language Skills
- Technical Skills
- Social Skills
- Practical Skills
- Academic Skills
- Life Skills


### Approach Data Creation
  
  #### Skills offered
  1. Everybody has relevant knowledge in at least one and maximum 3 skill domains
      - Pick a number between 1 and 3
      - Take this number and select (1 to 3) random skill domains
  2. Everybody is expert in at least one skill
      - Select the sub-skills from the selected domains
      - Make sure that a person is an expert in one skill 
  3. The skill levels in the remaining sub-skills from the selected domains where the person has some knowledge are normally distributed 
  4. The sub-skills from the remaining domains get an NaN value
  5. Assumption
      - On average, people are beginners in the fields where they are not experts (That's why they are on the platform)

  
  #### Skills demanded 
  1. Everybody has interests in at least one and maximum 5 skill domains
      - Pick a number between 1 and 5
      - Take this number and select (1 to 5) random skill domains
  2. The demanded skill levels are normally distributed 
  3. The sub-skills from the remaining domains get an NaN value
  4. Assumption
      - On average, people tend to seek for people that are rather experienced to teach them skills


## 03 Track Record

1. **Count_Skills_Rec:**
   - Random count of skills received, generated within the defined maximum count of 300 (random assumption)

2. **Count_Skills_Off:**
   - Random count of skills offered, generated based on the calculated maximum deviation (20%) allowed from a 1:1 ratio against skills received.

3. **Rec_to_Off_Ratio:**
   - Actual ratios calculated based on the count of skills received and offered

## 04 Feedback 

- **Normally distributed Rating options for every Feedback category:**
   - Possible answers:
     1. Very Dissatisfied
     2. Dissatisfied
     3. Neutral or Average
     4. Satisfied
     5. Very Satisfied
   - Assumption
      -  On average, people rate something between "Neutral or Average" and "Satisfied"