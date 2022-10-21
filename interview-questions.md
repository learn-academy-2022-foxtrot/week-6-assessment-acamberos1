# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model? 

Your answer:go back and add the foreign edit it so it has the foreign key. The foreign key is the id of the colums in the second table. it would be on the student model

Researched answer: a foreign key is a column of the table which belongs to the other one. Using migrate can help change or add a column if the developer forgot to add one. The name of the foreign key is the name of the column, it would be the student model since it belongs to the cohort table.

2. Which RESTful routes must always be passed params? Why?

Your answer: the ones that invlolve seeing, creating, updating and deleting them so the computer and/or software knows what to see, change, create, update and delete. this would be view, put, post , delete, and patch.

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: rails g model, this will create a table for rails that can be fillable with different instances. rails g resources, does similair function to rails g model but removes view by default for backend developing. i cant think of any others at the top of my head

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students   index.controller

action: "POST" location: /students update.controller

action: "GET" location: /students/new index.controller

action: "GET" location: /students/2 

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

story 1: I want to be able to write the things i need to so and save them 
story 2: I want to have my list be able to have a pink background or have the option to
story 3: i want to be able to put the lists in a table where each column is named for each day of the week. This will allow me to keep track of chores or appointments on certain days
story 4: The application will have a title at the top saying to do list application in bold so it is easily distinguishable
story 5: I will be able to underline text i make and/or bolden them for important taks
story 6:  i will be able to use emoji's in the to do list 
story 7: It will be compatible with text-to speech software in the event that I cant see
story 8: will have an enlarge function so I can see without glassess
story 9: The application will allow my text to be highlighted.
story 10: Will have a search function to let me look for specific words or phrases
