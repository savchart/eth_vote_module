const { Telegraf } = require('telegraf');
// path to .env file
require('dotenv').config();

const TOKEN = "7033659061:AAFaI2owlOGRq0-oKH3H8toTOPQzdjB2U1I"
const bot = new Telegraf(TOKEN);

const web_link = 'https://localhost:3000'

bot.start((ctx) =>
    ctx.reply(
        'Welcome! Click the button below to open the app.',
        {
            reply_markup: {
                inline_keyboard: [[{ text: "Open App", web_app: { url: web_link } }]]
            }
        }
    )
);

bot.on('callback_query', (ctx) => {
    console.log('Button pressed:', ctx.callbackQuery);
    ctx.answerCbQuery();
});

bot.launch();

console.log('Bot is running...');
