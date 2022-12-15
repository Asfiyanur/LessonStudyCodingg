import os
os.system('cls' if os.name == 'nt' else 'clear')

# def print_types(data) :
#     for i in data:
#         print(i,type(i))

# test =[122,'asf',[1,2,3],(1,2,3),{1,2,3},True]

# print_types(test)

class Person:
    name ='asf'
    age=28
    
person1=Person()
person2=Person()

print(person1.name)
print(person2.age)

Person.job ='developer'
print(person1.job)