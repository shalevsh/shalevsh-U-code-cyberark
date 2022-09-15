
# exersice 3
def CircleIter(array,num_circle):
    counter=0
    for _ in range(0,num_circle):
       if(counter==len(array)):
           counter=0
       yield array[counter]
       counter+=1


for x in CircleIter([1,2,3],4):
  print(x, end=" ")
  for y in CircleIter([5,6],3):
    print(y, end=" ")
print()   