![Logo](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/4f9ec323-2a73-4b88-a65a-e5c4558abc87)
https://medium.com/@isabellaoelofse/skillswap-11d8f7fd6f13

<br>


<h1 align="center">SkillSwap- A Platform for Skill Exchange • Blog Post</h1>

<br>

## Summary


SkillSwap is a simple yet powerful mobile application that facilitates user skill exchange. The core objective of our project is to create a platform where individuals can connect, share their expertise, and learn from one another.


## Introduction

In today’s fast-paced world, the exchange of skills has become more important than ever. However, many individuals face significant challenges when it comes to accessing and exchanging skills effectively. Traditional methods such as paid services or formal education often present barriers, limiting opportunities for many.

Through competitive research on existing skill exchange platforms, we were able to identify some challenges that we have hoped to address differently with SkillSwap. We narrowed down the primary challenges in the current landscape of skill exchange:

1. Limited Access to Diverse Skills: Despite the abundance of valuable skills in our communities, there is often no platform or place to easily connect individuals with others who can benefit from their expertise.

2. Unequal Exchange Opportunities: Traditional methods of skill exchange, such as apprenticeships or universities, can be costly and exclusive, leaving many individuals without access to valuable learning opportunities due to financial constraints or lack of formal qualifications.

3. Lack of Organization and Structure: Without a centralised platform, finding suitable skill exchange opportunities or coordinating exchanges efficiently can be a daunting task.
   
<br>

# Our Solution

As SkillSwap we therefore wanted to address these challenges and so we set out to develop a solution: a user-friendly platform that connects individuals with various skills and facilitates seamless skill exchange through a matching algorithm.

<br>

# Methodology


**User Experience Design (UX)**

The UX team played a crucial role in shaping the user experience of SkillSwap. We began by conducting extensive research to understand user needs and preferences. This involved brainstorming sessions to define key features and ‘How might we’ statements to address specific user pain points. After then developing personas and creating low-fidelity wireframes we were able to visualise the app’s flow and functionality. Finally, the Hi-Fi wireframes and prototype were created on [Figma](https://www.figma.com/file/P4FGekK8KHUDRuVefXLZb5/Wireframes?type=design&node-id=213%3A4346&mode=design&t=ep7tdIhxN8qQM1WO-1) and we conducted a usabilty test at the end. 

<br>

![Screenshot 2024-04-15 125720](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/7aa98ade-3537-4ba5-8ba4-6120b93d05d1)

![image](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/63100ac7-ae25-41c2-b45c-0144d6f27632)

![HiFi](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/3a2ed98f-8742-461d-81e7-854f4827de7c)

Throughout the development process, the UX team collaborated closely with other teams to ensure alignment between design and implementation. Regular meetings were held to discuss design updates and to integrate any feedback that was given. As the project progressed, the team iterated on the wireframes and eventually created a high-fidelity prototype using Figma.

In addition to design work, the UX team also contributed to user testing and feedback collection. They conducted usability tests to identify any issues or areas for improvement and incorporated user feedback into the final design.

![image](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/46271e6f-6cbd-43a3-8197-64f987aa0897)

![image](https://github.com/TechLabs-Berlin/ws24-skillswap/assets/150553622/90c9a154-0288-46a3-8cd5-303a590af214)

---

<br>

**Web Development (Frontend)**

Upon analyzing the main problems the final product wants to tackle in an initial workshop, the team roughly landed on the features to build for the App's frontend:
First of all we decided on using React.js as the main component based system, quickly set up using Vite. We also talked about the possibility of using typescript but eventually chose to go with jsx instead, since we're more familiar with it from the learning process, and it should be absolutely sufficient for our first project. Larry as our mentor played an important role here for our initial roadmap planning, and high level task distribution. So the team divided the tasks and took up different parts (see Notion documentation @ https://www.notion.so/4atatime/Apr-4-468b8adc7c134ebdab9545d66ba5266f?pvs=4#134cfabab0974be480e3f2ebfa14f31d) :

Setting up authentication, page switch, API calls - we learned how to create accounts and successfully log in as a registered user, with authorized token for each activity.

Homepage / swap page, as the main focus of the App, where all the potential skill swaps get shown to the user and potentially get selected -> swapped. The user can then send a message to other users with whom they are interested in swapping skills.

Page routing, the back bone user navigate through different pages. We learned and implemented reactdom, and the logic between pages.

A user profile page was designed where users can add or delete skills they are interested in or offering for other users, as well as change their own user information.

A messaging feature which allows users to exchange messages was added and allows users to communicate on the app.

Building SkillSwap had its difficulties. We faced technical problems, like connecting the front-end and back-end, fixing errors from GitHub, Css layout and giving logic. But by working together and communicating, we solved these problems and made a great product.

---

**Web Development (Backend)**

For SkillSwap's backend, user authentication and the ability to store user data in a database was crucial. The team set up a backend server using node.js/express.js and a database using MongoDB Atlas. Hosting the server separately from the frontend on a dedicated web-server via Render allowed the frontend team to access the API endpoints from early in the project phase, without having to deal with any backend technologies on their local machines.

The first task was to set up the backend data models via MongoDB, particularly for user-data, skills-data and skill-categories, and messages. For each of the data-models, dedicated restful API endpoints were created via the Express Router with CRUD functionality. An API endpoint for user authentication allows users to create accounts and to log into the app, and a middleware was implemented to verify whether the API-calls are being sent by a logged-in user.

The 'heart of the app' is an API endpoint for the SkillSwap mechanism, which allowed the frontend to fetch an array users from backend which matched with the user of the app on their skills they are offering to teach and looking to learn. Due to the limited time of the project phase, this SkillSwap API endpoint is only working on a very high-level and not based on any sophisticated algorithms for user recommendations. Albeit enough for the development of an MVP, the finalized version of the SkillSwap App would ideally connect the backend server with another API set up by Data Science in order to make user of an advanced recommendation enginge to ensure the best experience for the user.

---

**Data Science (DS)**

*Creation of a synthetic data set*

The data basis was intended to be a data set that contains all the information that is relevant for a successful skill matching process, provides information about user activity and at the same time contains personal user information in order to create a realistic data picture of the app.

Due to the specific use case of our app, the creation of a synthetic dataset proved to be the most suitable method to fulfil the above-mentioned purposes. For example, we were able to individually consider which skill categories and specific skills should be selectable in the app and then map these in the data. As it was not entirely clear when the data set was created which features and ML models should be used, various models and features were tried out and the synthetic data adapted accordingly. It may therefore be that in some places the approach to creating the data appears somewhat arbitrary, as the models for which they were created were ultimately not implemented.

Our approach to creating the dataset generally consisted of creating four (or six) datasets with different information and then aggregating them into a master dataset. This approach was chosen in order to ensure clarity when creating the individual data sets and to be able to make changes more systematically. The data set comprises a total of 800 rows (or users), with a geographical focus on Berlin.

The four core data sets in notebook "01_Synthetic_Data_Set" are labelled as follows:

1. **Personal_Info.csv**: Contains personal information such as name, e-mail address, or gender.
2. **Skill_Exchange.csv**: Includes the selection of the user's skill portfolio and their skill interests. This dataset aggregates the two data sets where the skill portfolio or the skill interests are specified (Skill_Exchange_Offered.csv and Skill_Exchange_Demanded.csv).
3. **Track_Record.csv**: Provides information on the number of times a user has exchanged skills or received skills from others.
4. **Feedback.csv**: Contains information about user satisfaction with the app.

These datasets were then aggregated into the following data set:
- **Skillswap_Data_Raw.csv**

By creating a synthetic dataset, hardly any data cleaning was necessary as the individual datasets could be automatically generated consistently and as desired.


*Matching algorithm and visualization features*

It is crucial for users to find potential matches with whom skills can be exchanged. It is also helpful to filter out those users who are currently active on the app in order to enable the most efficient and targeted matching process possible.

For this reason, users are first labelled with an activity status based on their user activity in notebook "01_Notebooks\02_Features_Insights\01_User_Activity_Status\User_Activity_Status.ipynb". In notebook "01_Notebooks\02_Features_Insights\02_Match_Recommendation\Recommendations.ipynb", the matching process is then carried out on the basis of a randomly selected user. With regard to matching, there are various different criteria that can be used to select a match. In principle, it is possible for one person to impart a skill to another without receiving anything in return. This means that a skill transaction can take place even if there is no 1:1 matching between the skill offer and the skill interests of both parties. However, the illustration of the process in the notebook assumes a 1:1 matching: i.e. both parties can serve or fulfill each other's skill interests. This case is also referred to as a "super swap". The user preference of an in-person meeting is also assumed (instead of a remote session).

After the inactive users and only remotely available users have been filtered out, the user's top 10 geographically closest potential super swaps are identified accordingly, which can then be suggested to the user. The visualization of the positions on the map is for illustrative purposes but is not displayed in the app.


*Exploratory data analysis*

In order to obtain an overview of the users, the distribution of the various skills and user satisfaction, this information was visualized in the notebook "DS\01_Notebooks\02_Features_Insights\03_Exploratory_Data_Analysis\Exploratory.data.analysis.ipynb". Demographic and geographical information, learning behavior, and user satisfaction with the app were recorded. The distribution of the target variable was also analyzed, which will be used to train a machine learning model in the next step. Due to the random creation of the data set, there are hardly any statistical relations between the features. The significance of this data situation for the model is evaluated below.


*Model*

Relevant information about the users is the extent to which they contribute to a lively skill swap app with their skill set and user behavior. Therefore, based on a user's skill set, we aimed at predictiong how often the user is likely to give lessons. Although this figure alone does not provide a comprehensive picture of a user's contribution to the app, it can be a data point for considering which type of user is particularly in demand in the app.

The data set was prepared for this in the "Data_Activity_Projection.ipynb" notebook in the "03_Feature_Engineering" folder. In addition, other user information from the synthetic data set was encoded in the file "Encodings.ipynb" in order to make it usable for other possible ML models. However, the latter encodings have not yet been used in this project.

We have opted for a regression with KNN as the ML model. K-NN searches for the k nearest neighbors of a given point in the feature space and then uses the average of their target variable values to predict the value for the given point. Thus, based on the user's skill set, the aim is to predict how often the user will give lessons based on the average value of all users with this skill set.


*Evaluation of the results and deployment*

The R2 value of the model is negative which means that the model has hardly any predictive power, which might e.g. be due to the fact, that there is no linear relationship between the variables.

However, it is possible to obtain such a correlation in the real user data. To do this, the total number of lessons taught in each skill category could be divided into the respective categories in which they were taught. For example, a person could then have done 10 lessons in ‘Music’ and 2 in ‘Writing’ while the column “Sum_Skills_Off” counts 12 lessons. Then there would maybe be a linear relationship between the continuous features and the target variable.

As all features have a value of either 0 or 1 and there are therefore no outliers, no further scaling of the features is necessary. However, scaling was nevertheless carried out for demonstration purposes. Although we identified the k-value with the lowest mean squared error, this k-value was not used to train the final model. This is because we wanted to achieve different predictions for different skill portfolios for demonstration purposes in the deployment. Due to the structure of the synthetic data set, the 'best' k-value of 635 would however produce the same prediction for every skill set as it predicts the mean of nearly all instances in the training data. We then decided to pick 12 as a random k-value because it leads to varying predictions. The model was then trained accordingly and converted into a pickle file for deployment.

The ‘02_Application_Code’ directory contains the code for deployment via a flask app.


*DS Conclusion*

To summarize, our central objectives from a data science perspective were fulfilled. An algorithm was developed for a matching process that finds suitable matches to a user. Furthermore, a machine learning model was used and deployed to develop an analysis tool that can be utilised to predict the activity of users in the app, which could be helpful for the further development of the app or e.g. for marketing purposes.

One of the biggest challenges was to create a suitable synthetic data set that contains realistic patterns of user behavior, which can then be used in the model. The data was not optimal for the ML model, but it can be assumed that real data will prove to be richer in patterns that can be learned by the model.

---

<br>

# Conclusion

What a thrilling journey. We worked hard, and well, together as a team. Many obstacles constrained the progress of the project at certain points but it was nothing that wasn’t able to be solved. As a group we had two mentors, Larry and Maria, who helped us with workshop ideas, and brainstorming sessions and were there around the clock for guidance and to answer our questions.

Members:

UX - Faith Jegede

UX - Isabella Oelofse

WD Fronted - Lexie Yu

WD Frontend - Najma Faiz

WD Frontend - Maryam Arghandiwal

WD Backend & Frontend - Andreas Landes

Data Science - Johannes Schaum



Mentors:

Larry D’almeida

Maria Mendes
