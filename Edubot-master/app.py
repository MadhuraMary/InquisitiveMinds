#import libraries/dependencies
from flask import Flask, render_template, request
import chatbot

#Create Flask Object
app = Flask(__name__)

#Routing to Index page and ChatBot
@app.route("/")
def index():    
    return render_template("edubot.html") 

@app.route("/get",methods=['GET'])
def chatty():    
    userText = request.args.get('message')    
    return str(chatbot.chatbot_response(userText)) 

#Invoke Main
if __name__ == "__main__":    
    app.run()