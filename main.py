import os
import telebot


bot = telebot.Telebot("5066712348:AAEwdgtCGg7h1ErTq6Cz04RdPiBookaqarE")


@bot.message_handler(commands=["start"])
def send_welcome(message):
    bot.reply_to(message, "Hellow! I'm Omindu")

@bot.message_handler(commands=["Mk"])
def send_message(message):
    bot.send_message(message.chat.id, "mokuth Ne bn")

@bot.message_handler(commands=["Gn"])
def send_message(message):
    bot.send_message(message.chat.id, "Good Night")

@bot.message_handler(commands=["Gm"])
def send_message(message):
    bot.send_message(message.chat.id, "Good Night")








bot.polling()