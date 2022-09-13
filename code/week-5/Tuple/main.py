# Exercise 1

from asyncio.windows_events import NULL


my_tuple = (1,"2",2.3,True,1.3,"dsds",False,"0")

# Excrice 2
print(my_tuple[4], my_tuple[-4:-5:-1])


# Excrice 3

days = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
new_days = days[:2]+days[3:]
print(new_days)


# Excrice 4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(numbers[::-1])

# Excrice 5

def revers_tuple(reverse):
    return reverse[:0:-1]
print(revers_tuple((1,2,3)))

def reverse_last_element(reverse_last):
    return reverse_last[-2::-1]
print(reverse_last_element((2,4,6,8,10,12)))