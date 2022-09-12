# Import module calendar, and use its functions to write the following:
# Find whether 2010 is a leap year. And 2020?
# Find how many leap years there will be between 2020 - 2080 (inclusive).
# Find which day of the week March 14, 2028 will be.
import calendar
year1 = 2010
year2 = 2020

# display the calendar
print(calendar.isleap(year1))
print(calendar.isleap(year2))
END_YEAR = 2080
START_YEAR = 2020
counter = 0
for year in range(START_YEAR, END_YEAR+1):
    if (calendar.isleap(year)):
        counter += 1

print(counter)
