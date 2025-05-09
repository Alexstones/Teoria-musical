<!-- src/lib/components/Lesson.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let lessons: {
    title: string;
    content: string;
    imageUrl?: string;
    videoUrl?: string;
    quiz?: {
      question: string;
      options: string[];
      correctAnswer: string;
    };
  }[] = [];

  export let currentLessonIndex: number = 0;

  const dispatch = createEventDispatcher();

  let selectedOption: string | null = null;
  let feedback: string = '';
  let score: number = 0;
  let answered: boolean = false;
  let finished: boolean = false;

  function checkAnswer() {
    if (!lessons[currentLessonIndex].quiz || answered) return;

    answered = true;
    if (selectedOption === lessons[currentLessonIndex].quiz.correctAnswer) {
      feedback = '✅ ¡Correcto!';
      score++;
    } else {
      feedback = `❌ Incorrecto. La respuesta correcta es: ${lessons[currentLessonIndex].quiz.correctAnswer}`;
    }
  }

  function next() {
    resetQuiz();
    if (currentLessonIndex < lessons.length - 1) {
      dispatch('next');
    } else {
      finished = true;
    }
  }

  function prev() {
    resetQuiz();
    dispatch('prev');
  }

  function resetQuiz() {
    selectedOption = null;
    feedback = '';
    answered = false;
  }

  function restart() {
    score = 0;
    finished = false;
    dispatch('restart');
  }
</script>

<style>
  .lesson-container {
    max-width: 700px;
    margin: auto;
    padding: 1rem;
    background: #fdfdfd;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: #ff3e00;
  }

  .quiz-section {
    margin-top: 1.5rem;
    padding: 1rem;
    background: #f3f3f3;
    border-radius: 8px;
  }

  .quiz-option {
    margin: 0.5rem 0;
  }

  .feedback {
    margin-top: 1rem;
    font-weight: bold;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }

  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.2s ease-in-out;
  }

  button:hover {
    background: #e03d00;
  }

  .score {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .restart-btn {
    margin-top: 1rem;
  }
</style>

<div class="lesson-container">
  {#if !finished}
    <h2>{lessons[currentLessonIndex].title}</h2>
    <p>{lessons[currentLessonIndex].content}</p>

    {#if lessons[currentLessonIndex].imageUrl}
      <img src={lessons[currentLessonIndex].imageUrl} alt="Imagen de la lección" />
    {/if}

    {#if lessons[currentLessonIndex].videoUrl}
      <iframe
        src={lessons[currentLessonIndex].videoUrl}
        title="Video de la lección"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    {/if}

    {#if lessons[currentLessonIndex].quiz}
      <div class="quiz-section">
        <h3>{lessons[currentLessonIndex].quiz.question}</h3>
        {#each lessons[currentLessonIndex].quiz.options as option}
          <div class="quiz-option">
            <label>
              <input
                type="radio"
                name="quiz"
                value={option}
                bind:group={selectedOption}
                disabled={answered}
              />
              {option}
            </label>
          </div>
        {/each}
        <button on:click={checkAnswer} disabled={answered}>Responder</button>
        {#if feedback}
          <div class="feedback">{feedback}</div>
        {/if}
      </div>
    {/if}

    <div class="controls">
      <button on:click={prev} disabled={currentLessonIndex === 0}>Anterior</button>
      <button on:click={next}>Siguiente</button>
    </div>
  {:else}
    <div class="score">
      <h2>🎉 ¡Has completado el curso!</h2>
      <p>Puntaje final: {score} de {lessons.length} correctas</p>
      <button class="restart-btn" on:click={restart}>Reiniciar</button>
    </div>
  {/if}
</div>
