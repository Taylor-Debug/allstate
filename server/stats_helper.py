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
        result = self.database.fetch_all("SELECT b.employee_name, FORMAT(SUM(a.exercise_time)/60, 2) AS totalExerciseTime, FORMAT(SUM(a.sleep_time)/60, 2) AS totalSleep, FORMAT(SUM(a.social_interaction_time)/60, 2) AS totalSocialTime, FORMAT(SUM(a.work_time)/60, 2) AS totalWork FROM dayroutine as a join employeedata b on a.employee_id = b.employee_id GROUP BY b.employee_name")
        return result

    def join_all(self):
        result = self.database.fetch_all("SELECT * FROM dayroutine as a left join employeedata b on a.employee_id = b.employee_id")
        return result

    def calculate_total_exercise(self):
        result = self.database.fetch_all("SELECT FORMAT(SUM(exercise_time),2) FROM dayroutine")
        return result

    def highest_month(self):
        result = self.database.fetch_all("SELECT month, SUM(exercise_time) as totalExerciseTime FROM dayroutine GROUP BY month ORDER BY totalExerciseTime LIMIT 0,1")
        return result

    def totalStaff(self):
        result = self.database.fetch_all("")
        return result

    def avgEmployeeAge(self):
        result = self.database.fetch_all("")
        return result

    # HINT: You can define more queries here, along with some python logic to calculate!
    def calculate_another_stat(self):
      # all_rows = self.database.fetch_all("")
      return None
