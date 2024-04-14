from flask import Flask, render_template, request, jsonify
import pickle 
import math
app = Flask(__name__)

with open(r'C:\Users\Johannes\Documents\ws24-skillswap\DS\01_Notebooks\04_Modeling\Activity_Projection\Activity_Projection_Model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['Post'])
def predict():
    skill_domains = [
        "Agriculture",
        "Animal Care",
        "Art",
        "Beauty",
        "Dance",
        "Music",
        "Writing",
        "Language",
        "Health",
        "Sports",
        "Food",
        "Technology",
        "Photo",
        "Video"
    ]

    input_values = []
    at_least_one_selected = False
    for skill_domain in skill_domains:
        input_value = float(request.form.get(skill_domain, 0))
        input_values.append(input_value)
        if input_value == 1: 
            at_least_one_selected = True

    if not at_least_one_selected:
        return jsonify({'error': 'Please select at least one skill category'}), 400

    prediction = loaded_model.predict([input_values])
    rounded_prediction = math.ceil(prediction[0])  
    return jsonify({'prediction': rounded_prediction})


if __name__ == '__main__':
    app.run(debug=True)
    
    

