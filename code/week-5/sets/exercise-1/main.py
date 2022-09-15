# to import requests
# need to
# C:\Users\Your Name\AppData\Local\Programs\Python\Python36-32\Scripts>pip install requests
import requests
import json
jobs = json.loads(requests.get(
    "https://supportmister-urbanquiet.codio.io/nyc_jobs.json").text)


def find_jobs_by_word(word):
    return [job for job in jobs if word in job.get("job_description")]


print(len(find_jobs_by_word("experience")))  # 165


# which agencies offers Entry-Level jobs and jobs that are located in Broadway (not neccesarily the same job)
# this does not mean that an agency needs to have a job in entry level and in Broadway
entry_level_jobs = set([job["agency"] for job in jobs if job["career_level"] == "Entry-Level"])
not_in_brooklin = set([job["agency"] for job in jobs if "Broadway" in job["work_location"]])

result = (entry_level_jobs & not_in_brooklin)
print("broadway", result)


############################
hourly = set([job["salary_range_to"] for job in jobs if job["salary_frequency"] == "Hourly"])
entry_level = set([job["salary_range_to"] for job in jobs if job["career_level"] != "Entry-Level"])
res = hourly & entry_level
print("max", max(res))

############################
def is_in_range(job, from_, to):
    is_above_min = float(job.get("salary_range_from")) >= from_
    is_below_max = float(job.get("salary_range_to")) <= to
    return is_above_min and is_below_max

salary_min = 17
salary_max = 18
agencies_in_range = [job["agency"] for job in jobs if is_in_range(job, salary_min, salary_max)]
print("in range", (set(agencies_in_range)))