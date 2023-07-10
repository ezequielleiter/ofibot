const { Telegraf } = require('telegraf');
const schedule = require('node-schedule');
const { BOT_TOKEN } = require('./config');
const { default: axios } = require('axios');
const { getFeriados } = require('./services/feriados/commands');
const { mensajeDeFeriado } = require('./helpers/feriados');
const { getDatos } = require('./services/chistes/commands');
const { climaDelDia } = require('./services/clima/commands');



// Una vez por mes nos dia guando son los feriados
// el dia anterior que ese dia es feriado

// el clima todos los dias

// que nos diga lo que tenemos que pagar

const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  const res = await climaDelDia()
    ctx.reply(res)
})

bot.command('feriadosdelmes', async (ctx) => {
    try {
        const holidays = await getFeriados({delMes: true})
        const mensaje = mensajeDeFeriado(holidays);
        ctx.reply(mensaje);
      } catch (error) {
        console.error(error);
        ctx.reply('Ocurrió un error al obtener los feriados.');
      }
})

schedule.scheduleJob('55 16 * * *', async () => {
  try {
    const holidays = await getFeriados({delMes: true})
    const mensaje = mensajeDeFeriado(holidays);
    let message = `¡Buen inicio de mes!\n\nFeriados del mes:\n\n${mensaje}\n\nRecuerden pagar:\n\nEpen`;
    
    const chatId = "-946723434"; // Reemplaza con el ID del chat al que deseas enviar el mensaje
    bot.telegram.sendMessage(chatId, message);

  } catch (error) {
    console.error(error);
  }
});

schedule.scheduleJob('00 11 * * *', async () => {
  try {
    const holidays = await getFeriados({delMes: true})
    const mensaje = mensajeDeFeriado(holidays);
    let message = `¡Buen inicio de mes!\n\nFeriados del mes:\n\n${mensaje}\n\nRecuerden pagar:\n\nEpen`;
    
    const chatId = "-946723434"; // Reemplaza con el ID del chat al que deseas enviar el mensaje
    bot.telegram.sendMessage(chatId, message);

  } catch (error) {
    console.error(error);
  }
});

bot.launch()