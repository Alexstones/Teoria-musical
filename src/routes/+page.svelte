<script lang="ts">
  import { user, loadUser } from '$lib/stores/user';
  import { lessonsData } from '$lib/data/lessons';
  import { onMount } from 'svelte';

  let username = '';
  let password = '';
  let mode: 'login' | 'register' = 'login';
  let error = '';

  let course: 'piano' | 'guitarra' | '' = '';
  let level: 'beginner' | 'intermediate' | 'advanced' = 'beginner';
  let lessons = [];
  let currentLessonIndex = 0;
  let selectedOption = '';
  let showAnswer = false;
  let score = 0;

  onMount(() => {
    loadUser();
  });

  $: lessons = course && level ? lessonsData?.[course]?.[level] ?? [] : [];

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

  function selectCourse(selected: 'piano' | 'guitarra') {
    course = selected;
    level = 'beginner';
    currentLessonIndex = 0;
    selectedOption = '';
    showAnswer = false;
    score = 0;
  }

  function onLevelChange(newLevel: 'beginner' | 'intermediate' | 'advanced') {
    level = newLevel;
    currentLessonIndex = 0;
    selectedOption = '';
    showAnswer = false;
    score = 0;
  }

  function checkAnswer() {
    const correct = lessons[currentLessonIndex].quiz?.correctAnswer;
    if (selectedOption === correct) {
      score += 1;
    }
    showAnswer = true;
  }

  function nextLesson() {
    currentLessonIndex += 1;
    selectedOption = '';
    showAnswer = false;
  }

  function reset() {
    course = '';
    level = 'beginner';
    currentLessonIndex = 0;
    selectedOption = '';
    showAnswer = false;
    score = 0;
  }

  function logout() {
    user.logout();
    reset();
    username = '';
    password = '';
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
      <h4>{lessons[currentLessonIndex].title}</h4>
      <p>{lessons[currentLessonIndex].content}</p>

      {#if lessons[currentLessonIndex].imageUrl}
        <img src={lessons[currentLessonIndex].imageUrl} alt="Imagen lección" style="max-width: 100%; margin: 1rem 0;" />
      {/if}

      {#if lessons[currentLessonIndex].videoUrl}
        <iframe
          width="560"
          height="315"
          src={lessons[currentLessonIndex].videoUrl}
          title="Video de la lección"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="max-width: 100%; margin: 1rem 0;"
        ></iframe>
      {/if}

      <div class="quiz">
        <p><strong>{lessons[currentLessonIndex].quiz?.question}</strong></p>
        <ul>
          {#each lessons[currentLessonIndex].quiz?.options as option}
            <li>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  bind:group={selectedOption}
                  disabled={showAnswer}
                />
                {option}
              </label>
            </li>
          {/each}
        </ul>

        {#if !showAnswer}
          <button on:click={checkAnswer} disabled={!selectedOption}>Revisar</button>
        {/if}

        {#if showAnswer}
          <p>
            {selectedOption === lessons[currentLessonIndex].quiz?.correctAnswer
              ? '✅ ¡Correcto!'
              : `❌ Incorrecto. La respuesta correcta era: ${lessons[currentLessonIndex].quiz?.correctAnswer}`}
          </p>
          {#if currentLessonIndex < lessons.length - 1}
            <button on:click={nextLesson}>Siguiente lección</button>
          {:else}
            <h3>Lecciones completadas ✅</h3>
            <p>Puntaje final: {score} / {lessons.length}</p>
            <button on:click={reset}>Reiniciar</button>
          {/if}
        {/if}
      </div>
    {:else}
      <p>No hay lecciones disponibles para este nivel.</p>
    {/if}
  {/if}
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

  .quiz ul {
    list-style: none;
    padding: 0;
  }

  .quiz li {
    margin: 0.5rem 0;
  }
</style>
