
# exersice 2
def my_accumulate(array):
    sum=0
    for num in array:
        sum += num
        yield (sum)


for elem in my_accumulate([1, 2, 3, 4, 5]):
    print(elem)
