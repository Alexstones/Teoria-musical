<script lang="ts">
  import { user, loadUser } from '$lib/stores/user';
  import { lessonsData } from '$lib/data/lessons';
  import { onMount } from 'svelte';

  let username = '';
  let password = '';
  let mode: 'login' | 'register' = 'login';
  let error = '';
  let course = '';
  let level: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
  let lessons: any[] = [];
  let currentLessonIndex = 0;

  onMount(() => {
    loadUser();
  });

  $: lessons = course ? lessonsData?.[course]?.[level] ?? [] : [];

  async function handleSubmit() {
    error = '';
    const trimmedUsername = username.trim();

    if (trimmedUsername.length < 3) {
      error = 'El nombre de usuario debe tener al menos 3 caracteres.';
      return;
    }

    if (password.length < 4) {
      error = 'La contraseña debe tener al menos 4 caracteres.';
      return;
    }

    try {
      const res =
        mode === 'login'
          ? await user.login(trimmedUsername, password)
          : await user.register(trimmedUsername, password);

      if (!res.success) {
        error = res.error || 'Ocurrió un error desconocido.';
      }
    } catch (e) {
      error = 'Error inesperado. Por favor, intenta de nuevo.';
      console.error(e);
    }
  }

  function selectCourse(selected: string) {
    course = selected;
    level = 'beginner';
    currentLessonIndex = 0;
  }

  function onLevelChange(newLevel: 'beginner' | 'intermediate' | 'advanced') {
    level = newLevel;
    currentLessonIndex = 0;
  }

  function nextLesson() {
    if (currentLessonIndex < lessons.length - 1) {
      currentLessonIndex++;
    } else {
      alert('¡Has completado todas las lecciones de este nivel!');
    }
  }

  function prevLesson() {
    if (currentLessonIndex > 0) {
      currentLessonIndex--;
    }
  }

  function logout() {
    user.logout();
    course = '';
  }
</script>

{#if !$user}
  <h1>🎵 Aprende Música Jugando</h1>

  <form on:submit|preventDefault={handleSubmit}>
    <input placeholder="Nombre" bind:value={username} />
    <input type="password" placeholder="Contraseña" bind:value={password} />
    <button type="submit">{mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}</button>
    <p>{error}</p>
  </form>

  <button on:click={() => mode = mode === 'login' ? 'register' : 'login'}>
    Cambiar a {mode === 'login' ? 'registro' : 'login'}
  </button>
{:else}
  <nav>
    <div>¡Bienvenido, {$user.username}!</div>
    <button class="logout" on:click={logout}>Cerrar sesión</button>
  </nav>

  <section>
    {#if !course}
      <h2>Selecciona tu instrumento:</h2>
      <button on:click={() => selectCourse('guitarra')}>🎸 Guitarra</button>
      <button on:click={() => selectCourse('piano')}>🎹 Piano</button>
    {:else}
      <div class="levels">
        <button class:active={level === 'beginner'} on:click={() => onLevelChange('beginner')}>Principiante</button>
        <button class:active={level === 'intermediate'} on:click={() => onLevelChange('intermediate')}>Intermedio</button>
        <button class:active={level === 'advanced'} on:click={() => onLevelChange('advanced')}>Avanzado</button>
      </div>

      {#if lessons.length > 0}
        <h3>Lección {currentLessonIndex + 1} de {lessons.length}</h3>
        <p>{lessons[currentLessonIndex]}</p>

        <button on:click={prevLesson} disabled={currentLessonIndex === 0}>Anterior</button>
        <button on:click={nextLesson} disabled={currentLessonIndex === lessons.length - 1}>Siguiente</button>
      {:else}
        <p>No hay lecciones para este nivel.</p>
      {/if}
    {/if}
  </section>
{/if}

<style>
  input, button {
    display: block;
    margin: 0.5rem auto;
    padding: 0.5rem;
    font-size: 1rem;
  }

  .levels {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }

  .active {
    background-color: #ff3e00;
    color: white;
  }

  nav {
    background: #ff3e00;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  section {
    padding: 1rem;
  }
</style>
