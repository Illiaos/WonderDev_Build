const { Telegraf } = require('telegraf');

// Use the token from the environment variable
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start((ctx) => ctx.reply('Welcome to the Unity Game! Play it here: https://yourusername.github.io/repository-name/'));

bot.launch().then(() => {
  console.log('Bot started');
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
