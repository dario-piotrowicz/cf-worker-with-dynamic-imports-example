export default {
  async fetch() {
    const helloWorldText = await import("./helloWorld.js").then(
      ({ helloWorldText }) => helloWorldText
    );

    return new Response(helloWorldText);
  },
};
