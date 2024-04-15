# General installation requirements

```bash
pip install pandas
pip install numpy
pip install Faker
pip install seaborn
pip install matplotlib
pip install folium
pip install scikit-learn
pip install flask
pip install virtualenv
```

# How to create the synthetic data set in "DS\01_Notebooks\01_Synthetic_Data_Set":

**Run the notebooks in the following order:**

1. `DS\01_Notebooks\01_Synthetic_Data_Set\01_Personal_Info.ipynb`
2. `DS\01_Notebooks\01_Synthetic_Data_Set\02.1_skill_selection_offered.ipynb`
3. `DS\01_Notebooks\01_Synthetic_Data_Set\02.2_skill_selection_demanded.ipynb`
4. `DS\01_Notebooks\01_Synthetic_Data_Set\02_Skill_Exchange.ipynb`
5. `DS\01_Notebooks\01_Synthetic_Data_Set\03_Track_Record.ipynb`
6. `DS\01_Notebooks\01_Synthetic_Data_Set\04_Feedback.ipynb`

Then, run `DS\01_Notebooks\01_Synthetic_Data_Set\00_Aggregate_Data.ipynb`


# How to run the folder "DS\01_Notebooks\02_Features_Insights":

**Run the notebooks in the following order:**

1. `DS\01_Notebooks\02_Features_Insights\01_User_Activity_Status\User_Activity_Status.ipynb`
2. `DS\01_Notebooks\02_Features_Insights\02_Match_Recommendation\Recommendations.ipynb`
3. `DS\01_Notebooks\02_Features_Insights\03_Exploratory_Data_Analysis\Exploratory.data.analysis.ipynb`
- To run the last part of the exploratory data analysis that analyzes the input data for the ML model, run `DS\01_Notebooks\03_Feature_Engineering\Data_Activity_Projection.ipynb` first (see below)


# How to run the folder "DS\01_Notebooks\03_Feature_Engineering":

**Run the notebooks in the following order:**

1. `DS\01_Notebooks\03_Feature_Engineering\Data_Activity_Projection.ipynb`
2. `DS\01_Notebooks\03_Feature_Engineering\General_Encodings\General_Encodings.ipynb` (optional, not required for ML model)


# How to run the folder "DS\01_Notebooks\04_Modeling\Activity_Projection":

**Run the notebooks in the following order:**

1. `DS\01_Notebooks\04_Modeling\Activity_Projection\Activity_Projection.ipynb`


# How to run the app in "DS\02_Application_Code\01_Activity_Status_Flask":

1. **Make sure the pickle file in "DS\01_Notebooks\04_Modeling\Activity_Projection" is created**

2. **Make sure that installation requirements are fulfilled**
    - Flask: `pip install flask`
    - Scikit-learn: `pip install scikit-learn`

3. **Create environment for building the API**
    - Install virtual environment: `pip install virtualenv`
    - Create environment while being in the folder "DS\02_Application_Code\01_Activity_Status_Flask": `virtualenv --python python3 venv`

4. **Activate the virtual environment while being in the folder "DS\02_Application_Code\01_Activity_Status_Flask"**
    - `source venv/Scripts/activate`
    - Deactivate the virtual environment (if needed): `deactivate`

5. **Run the app**
    - `python Activity_Prediction_app.py`