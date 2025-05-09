<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function choose(course: string) {
    dispatch('selectCourse', course);
  }
</script>

<style>
  .container {
    text-align: center;
    margin-top: 2rem;
  }
  button {
    margin: 1rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background: #ff3e00;
    color: white;
    box-shadow: 0 4px 8px #cc3300aa;
    transition: background 0.3s ease;
  }
  button:hover {
    background: #e03d00;
  }
</style>

<div class="container">
  <h2>Selecciona tu curso de instrumento</h2>
  <button on:click={() => choose('guitarra')}>Guitarra</button>
  <button on:click={() => choose('piano')}>Piano</button>
</div>
