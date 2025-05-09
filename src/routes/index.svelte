<script>
  import { user } from '../lib/stores/user.js';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  let username = '';
  let password = '';
  let mode = 'login';
  let error = '';

  $: currentUser = $user;

  onMount(() => {
    if (currentUser) {
      goto('/app');
    }
  });

  function handleSubmit() {
    error = '';
    const trimmedUsername = username.trim();

    if (trimmedUsername.length < 3) {
      error = 'Username must be at least 3 characters';
      return;
    }

    if (password.length < 4) {
      error = 'Password must be at least 4 characters';
      return;
    }

    const res =
      mode === 'login'
        ? user.login(trimmedUsername, password)
        : user.register(trimmedUsername, password);

    if (!res.success) {
      error = res.error || 'An unknown error occurred.';
    }
  }
</script>
