/* eslint-disable prettier/prettier */
module.exports = async function App(context) {
  if (context.event.text === "Get Started") {
    await context.sendText("Welcome from the Pocket Me Tee family!");
    await context.sendText("Do you want to win a prize? :)", {
      quickReplies: [
        {
          contentType: "text",
          title: "Yes! I want a prize.",
          payload: "Yes! I want a prize.",
        },
        {
          contentType: "text",
          title: "No. I don't want a prize.",
          payload: "No. I don't want a prize.",
        },
      ],
    });
  } else if (context.event.text === "Yes! I want a prize.") {
    await context.sendText("Sure! Give it a spin.");
  } else if (context.event.text === "No. I don't want a prize.") {
    await context.sendText(
      "That's okay! What did you want to talk to us about?"
    );
  } else {
    await context.sendText("Need some help?", {
      quickReplies: [
        {
          contentType: "text",
          title: "HELP1",
          payload: "Yes",
        },
        {
          contentType: "text",
          title: "HELP2",
          payload: "Yes",
        },
        {
          contentType: "text",
          title: "HELP3",
          payload: "Yes",
        },
      ],
    });
  }
};
