from flask import Flask, render_template, request, jsonify
import pickle 
app = Flask(__name__)

with open(r'C:\Users\Johannes\Documents\Uni\Master\Tech_Labs\ws24-skillswap\DS\02_Application_Code\01_Activity_Status_Flask\Activity_Projection_Model.pkl', 'rb') as file:
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
    for skill_domain in skill_domains:
        input_value = float(request.form.get(skill_domain, 0))
        input_values.append(input_value)

    prediction = loaded_model.predict([input_values])
    return jsonify({'prediction': str(prediction[0])})


if __name__ == '__main__':
    app.run(debug=True)
    
    

