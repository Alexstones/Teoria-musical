<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let quiz: {
      question: string;
      options: string[];
      answer: string;
    };
  
    const dispatch = createEventDispatcher();
  
    let selectedOption = '';
  
    function submitAnswer() {
      if (!selectedOption) return;
      const isCorrect = selectedOption === quiz.answer;
      dispatch('answer', isCorrect);
    }
  </script>
  
  <style>
    .quiz {
      margin-top: 1rem;
    }
    label {
      display: block;
      margin: 0.3rem 0;
      cursor: pointer;
    }
    button.submit {
      margin-top: 0.7rem;
      background: #10b981;
      color: white;
      border: none;
      padding: 0.5rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
    button.submit:disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
  </style>
  
  <div class="quiz">
    <p><strong>Quiz:</strong> {quiz.question}</p>
    {#each quiz.options as option}
      <label>
        <input 
          type="radio" 
          name="quiz" 
          value={option} 
          bind:group={selectedOption} 
        />
        {option}
      </label>
    {/each}
    <button class="submit" on:click={submitAnswer} disabled={!selectedOption}>
      Submit
    </button>
  </div>
  