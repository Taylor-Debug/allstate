from flask import Flask, jsonify
import time
from stats_helper import StatsHelper
import json
from flask_cors import CORS


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


@app.route('/alldata')
def alldata():
    return json.dumps(stats_helper.join_all())


print("### Application started...")


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
