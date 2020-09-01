<h3>Short description</h3>
Inquisitive Minds Remote Education application idea/solution is a "One-platform One-Learning" based app where it augments online learning and helping to understand a subject in depth gradually increasing knowledge on a subject by using a reasoning approach. 
 

<h3>Long description</h3>
<b>Problem Statement</b>:
 Hackathon presents us with a platform where we can help the community to overcome barriers amidst such unprecedented times like Covid-19 or ease the process of any day to day activities by providing implementable ideas/solutions.
<br>
<b>Track</b> : Covid-19-Remote Education. 
We chose the remote education track because we see that we can augment the learning process of students and curb major challenges faced by teachers who can prepare/deliever the   lectures, prepare an assessment while sitting at home and maintaning social distancing.
<br>
<b>Overview/Crux: </b>Inquisitive Minds is a remote education app which is oriented for teachers and students by using an online platform.
Teacher can add quiz questions and students can take open book based quiz where the wrong answers would be presented to the student with the correct reasoning.
Chatbot is implemented to provide technical support and non technical assistance like giving more personalized information and assistance to the student. 
The central idea here is to provide the students and teachers a common platform where they learn online.
  
Inquisitive Minds app is based on a concept called Open-Book Examination. Here, the only difference is the content would be made online giving it a feel of open book quiz or exam and the reasoning would be provided accordingly very specific to the subject of exam.
Imagine,when we are in an online classroom of more than 100 participants, and there might be instances when we face issues with either network or connectivity Or would hesitate to ask a question. This is one of the reasons why we are encorporating a chabot into the app so as to give a personalised response to the user either tech or non-tech.

<h3>Project Roadmap</h3>

![Inquisitive Minds Roadmap](https://github.com/MadhuraMary/InquisitiveMinds/blob/master/RoadMap-IM.png)

<h3>Demo video</h3>
https://youtu.be/9ItTy3I0oLc <br/>


<h3>Getting started/Running the project</h3>

<b>Steps to run the Flask application:</b>

<b>--Note--Please make sure that you have python installed on your pc. Having two versions installed would create conflicts. Below project best runs with 3.7.2 Python version.</b>

1. One must create a virtual environment in the base Chatbot folder as below:
a. Go to --> cd DriveName\IMbot-master
b. once in above path: Create a virtual environment by writing command: py -3 -m venv venv
Once ran, you should see a venv folder under the 'IMbot-master' folder

c. Now we need to activate the virtual environment by running below command:
venv\Scripts\activate

d. This activates our virtual python environment and should show something like
(venv)DriveName\IMbot-master

e. Above steps are generic for any Flask application. So, we come to a step where we need to run our app. Using below commands we import all the dependencies/requirements for InquisitiveBot in (venv)DriveName\IMbot-master path

pip install -r requirements.txt

   
f. Above steps would import the libraries/packages used. Upon successful import, you must see the same message in the powershell/cmd window. If not resolve all dependencies acc to ones installtion of Python version.

Run app.py using below cmd in (venv)DriveName\IMbot-master path <br>
python app.py

h. Once ran, this would run our localhost and the app would be displayed if you want to see it though one can see it embedded in the Angular app.


<b>Steps to run the Angular application:</b><br>
a. Run ng serve for a dev server.<br>
b  Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.<br>
c. Also Run node server.js to have database server connection simultaneously in other window.<br>

Once the application has run the sample login credentials are provided below for logging in and using the application:
<br>
 
 <b>Student login to answer the questions:</b><br>
  Login Email: abc@abc.com<br>
  Password: abc1234<br>
  
  <b>Teacher login to enter the questions:</b><br>
 Login Email: def@def.com<br>
 Password: abc1234<br>



<b>Built with</b><br>
IBM DB 2 on Cloud<br>
Angular framework with typescript<br>
Node JS<br>
Express JS<br>
Python with Flask framework<br>


