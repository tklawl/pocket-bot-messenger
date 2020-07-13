/* eslint-disable prettier/prettier */
module.exports = async function App(context) {
  if (context.event.isText === "Hello") {
    await context.sendText("Hey, there!");
  } else if (context.event.isText === "GET_STARTED") {
    await context.sendText("Roll it!");
  } else if (context.event.isText === "Roll") {
    await context.sendText("Rolling!");
  }
};
