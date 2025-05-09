import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'  // Esto permite que las rutas no prerenderizadas funcionen como una SPA
    }),
    paths: {
      base: ''
    }
  }
};
