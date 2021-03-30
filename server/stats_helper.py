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
        result = self.database.fetch_all("SELECT b.employee_name, SUM(a.exercise_time) AS totalExerciseTime, SUM(a.sleep_time) AS totalSleep, SUM(a.social_interaction_time) AS totalSocialTime, SUM(a.work_time) AS totalWork FROM dayroutine as a join employeedata b on a.employee_id = b.employee_id GROUP BY b.employee_name")
        return result

    def join_all(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine as a left join employeedata b on a.employee_id = b.employee_id")
        return result

    # HINT: You can define more queries here, along with some python logic to calculate!
    def calculate_another_stat(self):
      # all_rows = self.database.fetch_all("")
      return None
