/* eslint-disable prettier/prettier */
module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendText(`received the text message: ${context.event.text}`);
  }
};
