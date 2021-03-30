from flask import Flask, jsonify
import time
from stats_helper import StatsHelper
from flask_cors import CORS
import simplejson as json # instead of import json


app = Flask(__name__)
CORS(app)
stats_helper = StatsHelper()

#Used to bring in employee table information 
# @app.route('/')
# def home():
#     return json.dumps(stats_helper.select_all_employee)

# #Used bring in stats
# @app.route('/Total_Exercise_Hours')
# def exercies_hours_total():
   
@app.route('/')
def homepage():
    return json.dumps(stats_helper.select_all())

@app.route('/employee')
def employee():
    return json.dumps(stats_helper.select_all_employee())

@app.route('/calcExercise')
def calcExercise():
    return json.dumps(stats_helper.calculate_total_exercise())

@app.route('/highestMonth')
def highestMonth():
    return json.dumps(stats_helper.highest_month())

@app.route('/totalStaff')
def totalStaff():
    return json.dumps(stats_helper.totalStaff())

@app.route('/avgEmployeeAge')
def avgEmployeeAge():
    return json.dumps(stats_helper.avgEmployeeAge())

@app.route('/alldata')
def alldata():
    return json.dumps(stats_helper.join_all())


print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

