export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World! v3 from Git, worker.js');
  }
};
