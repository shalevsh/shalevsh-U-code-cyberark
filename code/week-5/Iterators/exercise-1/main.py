
#exersice 1 
def my_enumerate(array, start_index=None):
   length = len(array)  
   if(start_index==None):
     start_index=0; 
   for i in range(0, length):
      yield (start_index,array[i])
      start_index+=1
        


for index, elem in my_enumerate([10, 20, 30, 40]):
  print(index, elem) 


for index, elem in my_enumerate([10, 20, 30, 40], 10):
  print(index, elem)  
