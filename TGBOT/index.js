const TelegramApi = require("node-telegram-bot-api");

const {gameOptions, againOptions} = require('./options')

const token = "5616392730:AAHgUkf5sJ4YuonDckqY83yD4KBouLB9sQE";

const bot = new TelegramApi(token, { polling: true });

const chats = {};



const startGame = async (chatId) => {
      await bot.sendMessage(chatId, 'Загадываю цифру от 0 до 9, угадывай');
      const randomNumber = Math.floor(Math.random() * 10);
      chats[chatId] = randomNumber;
      await bot.sendMessage(chatId, 'Пытайся', gameOptions);
} 

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Приветствие" },
    { command: "/info", description: "Информация о госте" },
    { command: "/game", description: "Игра от 0 до 9" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        `https://tlgrm.ru/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/1.webp`
      );
      return bot.sendMessage(chatId, `Привет ${msg.from.first_name}`);
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Твое имя ${msg.from.first_name} ${msg.from.last_name}`
      );
    }
    if(text === '/game') {
      return startGame(chatId);
    }
    return bot.sendMessage(chatId, 'Что???');
  })
  bot.on('callback_query', msg => {

    const data = msg.data;
    const chatId = msg.message.chat.id;

    if(data == '/again') {
      return startGame(chatId);
    }
    if(data == chats[chatId]) {
      return bot.sendMessage(chatId, `В ТОЧКУ, ЭТО ИМЕННО ${chats[chatId]}`, againOptions);
    } else {
      return bot.sendMessage(chatId, `К сожалению, это было ${chats[chatId]}`, againOptions)
    } 
  })
};

start()
