import { writable } from 'svelte/store';

interface UserProgress {
  [course: string]: {
    [level: string]: number;
  };
}

interface User {
  username: string;
  progress: UserProgress;
}

function createUserStore() {
  const { subscribe, set, update } = writable<User | null>(null);

  return {
    subscribe,

    register: (username: string, password: string): { success: boolean; error?: string } => {
      if (typeof window === 'undefined') return { success: false, error: 'Not in browser' };

      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[username]) {
        return { success: false, error: 'User already exists.' };
      }

      users[username] = { password, progress: {} };
      localStorage.setItem('users', JSON.stringify(users));
      set({ username, progress: {} });
      localStorage.setItem('currentUser', username);

      return { success: true };
    },

    login: (username: string, password: string): { success: boolean; error?: string } => {
      if (typeof window === 'undefined') return { success: false, error: 'Not in browser' };

      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (!users[username]) {
        return { success: false, error: 'User does not exist.' };
      }
      if (users[username].password !== password) {
        return { success: false, error: 'Incorrect password.' };
      }

      set({ username, progress: users[username].progress || {} });
      localStorage.setItem('currentUser', username);

      return { success: true };
    },

    logout: () => {
      if (typeof window === 'undefined') return;
      set(null);
      localStorage.removeItem('currentUser');
    },

    updateProgress: (course: string, level: string, newProgress: number) => {
      if (typeof window === 'undefined') return;

      update(user => {
        if (!user) return null;

        user.progress = user.progress || {};
        if (!user.progress[course]) {
          user.progress[course] = {};
        }
        user.progress[course][level] = newProgress;

        const users = JSON.parse(localStorage.getItem('users') || '{}');
        if (users[user.username]) {
          users[user.username].progress = user.progress;
          localStorage.setItem('users', JSON.stringify(users));
        }

        return user;
      });
    },

    loadUser: () => {
      if (typeof window === 'undefined') return;

      const username = localStorage.getItem('currentUser');
      if (!username) return;

      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (!users[username]) return;

      set({ username, progress: users[username].progress || {} });
    }
  };
}

export const user = createUserStore();
export const loadUser = user.loadUser;
