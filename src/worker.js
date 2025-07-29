export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World! v2 from Git, worker.js');
  }
};
