<script>
  import { onMount } from 'svelte';
  import { user, loadUser } from '$lib/stores/user';

  onMount(() => {
    loadUser();
  });
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #f0f2f5;
    color: #333;
  }

  header {
    padding: 1rem 2rem;
    background: #222;
    color: #ff3e00;
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  main {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    min-height: 75vh;
  }

  footer {
    text-align: center;
    padding: 1rem;
    color: #666;
    font-size: 0.9rem;
  }

  a {
    color: #ff3e00;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<header>Music Theory Learning App</header>
<main>
  <slot />
</main>
<footer>
  &copy; 2024 Music Theory Learning — Built with SvelteKit
</footer>

  