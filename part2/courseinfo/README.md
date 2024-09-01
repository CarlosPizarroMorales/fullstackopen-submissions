# Course Information - Part 2
_Exercises 2.1-2.5_

## Exercise 2.1 - step 6
 - Based on the solution code for _courseinfo_ project in `part1`, define a single Component `Course` formatting all the info of any (if more than one) course.
 - Modularize the code, this way:
```
App
  Course
    Header
    Content
      Part
      Part
      ...
```
- The total sum of exercises is not needed yet.
- The app should work regardless of the number of parts a course has, so make sure to use iterable methods.

## Exercise 2.2 - step 7
- Show also the sum of the exercises of the course.
![image](./src/assets/view-2.2.png)

## Exercise 2.3 - step 8
- If you haven't done so already, calculate the sum of exercises with the array method reduce.

## Exercise 2.4 - step 9
- Let's extend our application to allow for an arbitrary number of courses

## Exercise 2.5 - step 10
- Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course in the same module.