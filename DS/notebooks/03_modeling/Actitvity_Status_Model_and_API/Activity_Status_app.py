from flask import Flask, render_template, request, jsonify
import pickle 
app = Flask(__name__)

with open('Activity_Status_Model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)
    
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['Post'])
def predict():
    Last_Seen = float(request.form['Last_Seen'])
    Response_Time = float(request.form['Response_Time'])
    Above_Average_Track_record = float(request.form['Sum_Skills_Off_ab_avg'])
    prediction = loaded_model.predict([[Last_Seen, Response_Time, Above_Average_Track_record]])
    return jsonify({'prediction': str(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
    
    

