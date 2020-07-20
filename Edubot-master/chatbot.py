#import Chatbot libraries
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import nltk

#Train the chatbot 
edubot = ChatBot(name="Edubot",storage_adapter="chatterbot.storage.SQLStorageAdapter",logic_adapters=['chatterbot.logic.BestMatch'])
trainer = ListTrainer(edubot)
trainer.train(["Hello","Greetings from Edubot","How are you","I am good ! Thanks","Facing issue","Please explain your issue"])
trainer.train(["Hi","Hi there","Need help","Please explain your issue"])
trainer.train(["Hi there","Greetings from Edubot","How are you","I am good ! Thanks","I am facing problems with my account","Please explain your issue"])
trainer.train(["Hey","Greetings from Edubot","How are you","I am good ! Thanks"])
trainer.train(["Need more information","Sure! Please enter your subject in one word","Lion","Lions are the only cats that live in groups.Lions scent mark their territory, using their wee, to create a border.", "Tiger","The tiger is the biggest species of the cat family. Tigers can reach a length of up to 3.3 metres (11 feet) and weigh as much as 300 kilograms (660 pounds)."])
trainer.train(["Bye","Bye ! Happy to assist"])
trainer.train(["Thanks","No bother"])
trainer.train(["Thank you","You are welcome"])
trainer.train(["Thanks","You are most welcome"])
trainer.train(["Facing issues while login","Could you please let me know what error or message you see","I get ErrorIM-Login","I suggest you to check if you have any other accounts with same id/phone"])
trainer.train(["Issuse is not resolved","Would you like to escalate this issue to the next level team","Yes","Thanks for confirming,Your issue has been escalated to the specialized team"])
trainer.train(["My issue didn't get resolved","Would you like to escalate this issue to the next level team","Yes","Thanks for confirming,Your issue has been escalated to the specialized team"])
trainer.train(["Issuse is not resolved","Would you like to escalate this issue to the next level team","No","Could you please provide more information about the issue?"])
trainer.train(["I am not able to login","Would you like to contact our Tech team","Yes","Could you please let us know your time zone","IST","Our team will reach out to you"])
trainer.train(["Not able to signup","Did you review the password criteria","Yes","Do you have an existing account with same phone/email?","Don't know","Please give me a moment, I will be right back","Ok","Thanks for your patience"])
trainer.train(["Need to talk to Quiz educator","Sure,Let me see who can get in touch. Dropping an email to xyz@xyz.com. You should get an assistance asap."])

#Call the funtion
def chatbot_response(text):
    return edubot.get_response(text)
