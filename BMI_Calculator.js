Statement) Write a JavaScript program to calculate Body Mass Index (BMI) of 5 users.
First, initialize two arrays:

height[] with 5 integer values.
weight[] with 5 integer values.
Depending on the calculated BMI value, display the corresponding category: "Underweight", "Normal Weight", "Overweight", or "Obese". Make sure to use the exact spellings mentioned in the question.

If BMI is less than 18.5, display "Underweight".
If BMI is between 18.5 and 24.9 (Inclusive of both ends), display "Normal Weight".
If BMI is between 25 and 29.9 (Inclusive of both ends), display "Overweight".
If BMI is 30 or greater, display "Obese".
Note: The BMI formula is calculated as weight (in kilograms) divided by the square of height (in meters). 
�
�
�
=
�
�
�
�
ℎ
�
ℎ
�
�
�
ℎ
�
2
BMI= 
height 
2
 
weight
​
 

Note: Make sure to consider appropriate data types for the weight, height, and BMI calculations.

By solving this problem, you will practice accepting user input, performing calculations, and using conditional statements to determine and display the BMI category based on the calculated value.

Output Format
On a single line - display the following as space separated values

Display the calculated BMI value with two decimal places.
Display the corresponding BMI category using the exact spellings: "Underweight", "Normal Weight", "Overweight", or "Obese".
  
Sample 1: 
Input                                              Output
height = [1.70, 1.65, 1.80, 1.60, 1.75]             10.38 Underweight
weight = [30, 55, 90, 102, 65]                      20.20 Normal Weight
                                                    27.78 Overweight
                                                    39.84 Obese
                                                    21.22 Normal Weight
