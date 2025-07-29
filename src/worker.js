export default {
  async fetch(request, env, ctx) {
    return new Response('Hello World! v1 from Git, worker.js');
  }
};
