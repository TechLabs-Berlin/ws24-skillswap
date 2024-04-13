## Data Science

### Creation of a synthetic data set

The data basis was intended to be a data set that contains all the information that is relevant for a successful skill matching process, provides information about user activity and at the same time contains personal user information in order to create a realistic data picture of an app.

Due to the specific use case of our app, the creation of a synthetic dataset proved to be the most suitable method to fulfil the above-mentioned purposes. For example, we were able to individually consider which skill categories and specific skills should be selectable in the app and then map these in the data. As it was not entirely clear when the data set was created which features and ML models should be used, various models and features were tried out and the synthetic data adapted accordingly. It may therefore be that in some places the approach to creating the data appears somewhat arbitrary, as the models for which they were created were ultimately not used.

Our approach to creating the dataset generally consisted of creating four or six datasets with different information and then aggregating them into a master dataset. This approach was chosen in order to ensure clarity when creating the individual data sets and to be able to make changes more systematically. The data set comprises a total of 800 rows or users, with a geographical focus on Berlin.

The four core data sets in notebook "01_Synthetic_Data_Set" are labelled as follows:

1. **Personal_Info.csv**: Contains personal information such as name, e-mail address, or gender.
2. **Skill_Exchange.csv**: Includes the selection of the user's skill portfolio and their skill interests. This dataset aggregates the two data sets where the skill portfolio or the skill interests are specified (Skill_Exchange_Offered.csv and Skill_Exchange_Demanded.csv).
3. **Track_Record.csv**: Provides information on the number of times a user has exchanged skills or received skills from others.
4. **Feedback.csv**: Contains information about user satisfaction with the app.

These datasets were then aggregated into the following data set:
- **Skillswap_Data_Raw.csv**

By creating a synthetic dataset, hardly any data cleaning was necessary as the individual datasets could be automatically generated consistently and as desired.

### Matching algorithm and visualization features

It is crucial for users to find potential matches with whom skills can be exchanged. It is also helpful to filter out those users who are currently active on the app in order to enable the most efficient and targeted matching process possible.

For this reason, users are first labelled with an activity status based on their user activity in notebook "02_Features_Insights\01_User_Activity_Status". In notebook "02_Features_Insights\02_Match_Recommendation", the matching process is then carried out on the basis of a randomly selected user. With regard to matching, there are various different criteria that can be used to select a match. In principle, it is possible for one person to impart a skill to another without receiving anything in return. This means that a skill transaction can take place even if there is no 1:1 matching between the skill offer and the skill interests of both parties. However, the illustration of the process in the notebook assumes a 1:1 matching: i.e. both parties can serve or fulfill each other's skill interests. This case is also referred to as a "super swap". The user preference of an in-person meeting is also assumed (instead of a remote session).

After the inactive users and only remotely available users have been filtered out, the user's top 10 geographically closest potential super swaps are identified accordingly, which can then be suggested to the user. The visualization of the positions on the map is for illustrative purposes but is not displayed in the app.

### Exploratory data analysis

In order to obtain an overview of the users, the distribution of the various skills and user satisfaction, this information was visualized in the notebook "02_Features_Insights\03_Exploratory_Data_Analysis". Demographic and geographical information, learning behavior, and user satisfaction with the app were recorded. Statistical correlations between individual variables were also analyzed, which will be used to train a machine learning model in the next step. However, due to the random creation of the data set, hardly any correlations between the various features were found. The significance of this data situation for the model is evaluated below.

### Model

Relevant information about the users is the extent to which they contribute to a lively skill swap app with their skill set and user behavior. Therefore, based on a user's skill set, it should be predicted how often the user is likely to give skill 'transactions' or lessons. Although this figure alone does not provide a comprehensive picture of a user's contribution to the app, it can be a data point for considering which type of user is particularly in demand in the app, for example to create a better balance in the existing skill sets.

The data set was prepared for this in the "Data_Activity_Projection.ipynb" file in the "03_Feature_Engineering" notebook. In addition, other user information from the synthetic data set was encoded in the file "Encodings.ipynb" in order to make it usable for other possible ML models. However, the latter encodings have not yet been used in this project.

We have opted for a regression with KNN as the ML model. K-NN searches for the k nearest neighbors of a given point in the feature space and then uses either the average or the weighted sum of their target variable values to predict the value for the given point. Thus, based on the user's skill set, the aim is to predict how often the user will give lessons based on the average value of all users with this skill set.

### Evaluation of the results and deployment

As there are ones and zeros to choose from for each skill category, there is no linear relationship between skill categories and the target variable in the synthetic data. The R2 value is therefore negative.

However, it is possible to obtain such a correlation in the real user data. To do this, the total number of lessons performed in each skill category could be divided into the respective categories in which they were performed. For example, a person could then have done 10 lessons in ‘Music’ and 2 in ‘Writing’ while the column “Sum_Skills_Off” counts 12 lessons. Then there would maybe be a linear relationship between the continuous features and the target variable.

As all features have a value of either 0 or 1 and there are therefore no outliers, no further scaling of the features is necessary. However, scaling was nevertheless carried out for demonstration purposes. After the K value with the lowest mean squared error was selected, the model was trained accordingly and converted into a pickle file for deployment.

The ‘02_Application_Code’ directory contains the code for deployment via a flask app.

### Conclusion

To summarize, our central objectives from a data science perspective were fulfilled. An algorithm was developed for a matching process that assigns suitable matches to a user. Furthermore, a machine learning model was used and deployed to develop an analysis tool that can be utilised to predict the activity of users in the app, which could be helpful for the further development of the app or for marketing purposes.

One of the biggest challenges was to create a suitable synthetic data set that contains realistic patterns of user behavior, which can then be used in the model. The data was not optimal for the ML model, but it can be assumed that real data will prove to be richer in patterns that can be learned by the model.

