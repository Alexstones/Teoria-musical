<script lang="ts">
    import { lessonsData } from '$lib/data/lessons';
  
    let instrument: 'piano' | 'guitarra' | null = null;
    let level: 'beginner' | 'intermediate' | 'advanced' | null = null;
  
    let currentLessonIndex = 0;
    let score = 0;
    let selectedOption = '';
    let showAnswer = false;
    let lessons = [];
  
    // cuando ya hay instrumento y nivel, carga las lecciones correspondientes
    $: if (instrument && level) {
      lessons = lessonsData[instrument][level];
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
      instrument = null;
      level = null;
      currentLessonIndex = 0;
      score = 0;
      selectedOption = '';
      showAnswer = false;
      lessons = [];
    }
  </script>
  
  {#if !instrument || !level}
    <h2>Selecciona tu instrumento y nivel</h2>
    <label>
      Instrumento:
      <select bind:value={instrument}>
        <option value="" disabled selected>-- Elige uno --</option>
        <option value="piano">Piano</option>
        <option value="guitarra">Guitarra</option>
      </select>
    </label>
  
    <label style="margin-left: 1rem;">
      Nivel:
      <select bind:value={level}>
        <option value="" disabled selected>-- Elige uno --</option>
        <option value="beginner">Principiante</option>
        <option value="intermediate">Intermedio</option>
        <option value="advanced">Avanzado</option>
      </select>
    </label>
  {/if}
  
  {#if instrument && level && lessons.length > 0}
    <h2>Lección {currentLessonIndex + 1} de {lessons.length}</h2>
    <h3>{lessons[currentLessonIndex].title}</h3>
    <p>{lessons[currentLessonIndex].content}</p>
  
    {#if lessons[currentLessonIndex].imageUrl}
      <img src={lessons[currentLessonIndex].imageUrl} alt={lessons[currentLessonIndex].title} style="max-width: 100%; margin: 1rem 0;" />
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
  {/if}
  
  