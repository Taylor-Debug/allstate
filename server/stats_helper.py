from database_helper import Database


class StatsHelper():

    def __init__(self):
        self.database = Database()
        print("Stats Helping initialising!")

    #Used for content table
    def select_all_employee(self):
        result = self.database.fetch_all("SELECT * FROM employeedata")
        return result

    #Used for Total Exercise Hours
    # def select_all_hours(self):


    #Most Active Month!

    def select_all(self):
        result = self.database.fetch_all("SELECT dayroutine.exercise_time, dayroutine.social_interaction_time, dayroutine.work_time, dayroutine.sleep_time, employeedata.employee_name FROM dayroutine INNER JOIN employeedata on dayroutine.employee_id=employeedata.employee_id")
        return result

    def join_all(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine as a left join employeedata b on a.employee_id = b.employee_id")
        return result

    # HINT: You can define more queries here, along with some python logic to calculate!
    def calculate_another_stat(self):
      # all_rows = self.database.fetch_all("")
      return None
