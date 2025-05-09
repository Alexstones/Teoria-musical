// src/lib/data/lessons.ts


export const lessonsData = {
  piano: {
    beginner: [
      {
        title: 'Notas básicas del piano',
        content: 'Aprende las notas: Do, Re, Mi, Fa, Sol, La, Si.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Piano_keyboard.svg/800px-Piano_keyboard.svg.png',
        videoUrl: 'https://www.youtube.com/embed/hFykjO50DFk',
        quiz: {
          question: '¿Cuál es la nota que sigue después de "Mi"?',
          options: ['Fa', 'Re', 'Sol', 'La'],
          correctAnswer: 'Fa'
        }
      },
      {
        title: 'Colocación de las manos',
        content: 'La posición adecuada ayuda a tocar con más precisión y evitar lesiones.',
        imageUrl: 'https://www.libertyparkmusic.com/wp-content/uploads/2019/10/piano-hand-position.jpg',
        quiz: {
          question: '¿Por qué es importante la posición de las manos?',
          options: ['Para mejorar la postura', 'Para sonar más fuerte', 'Para evitar lesiones', 'Ambas A y C'],
          correctAnswer: 'Ambas A y C'
        }
      },
      {
        title: 'Escala de Do mayor',
        content: 'Practica tocando C-D-E-F-G-A-B-C con ambas manos.',
        quiz: {
          question: '¿Cuántas notas tiene la escala de Do mayor?',
          options: ['6', '7', '8', '5'],
          correctAnswer: '8'
        }
      },
      {
        title: 'Lectura de partituras simples',
        content: 'Comienza a leer partituras con figuras simples como negras y blancas.',
        quiz: {
          question: '¿Qué figura dura el doble que una negra?',
          options: ['Blanca', 'Corchea', 'Redonda', 'Semicorchea'],
          correctAnswer: 'Blanca'
        }
      },
      {
        title: 'Ejercicio con ambas manos',
        content: 'Coordina ambas manos tocando escalas en espejo.',
        quiz: {
          question: '¿Qué se mejora al tocar con ambas manos?',
          options: ['Coordinación', 'Velocidad', 'Ritmo', 'Todas las anteriores'],
          correctAnswer: 'Todas las anteriores'
        }
      }
    ],
    intermediate: [
      {
        title: 'Acordes mayores y menores',
        content: 'C, Dm, Em, F, G, Am...',
        quiz: {
          question: '¿Cuál es un acorde menor?',
          options: ['C', 'Em', 'G', 'F'],
          correctAnswer: 'Em'
        }
      },
      {
        title: 'Arpegios básicos',
        content: 'Practica arpegios de C, G y Am en ambas manos.',
        quiz: {
          question: '¿Qué es un arpegio?',
          options: ['Acorde tocado simultáneamente', 'Notas tocadas secuencialmente de un acorde', 'Un ritmo', 'Una escala'],
          correctAnswer: 'Notas tocadas secuencialmente de un acorde'
        }
      },
      {
        title: 'Lectura a dos voces',
        content: 'Lee e interpreta partituras con voces independientes en cada mano.',
        quiz: {
          question: '¿Qué mano suele llevar la melodía?',
          options: ['Derecha', 'Izquierda', 'Ambas', 'Ninguna'],
          correctAnswer: 'Derecha'
        }
      },
      {
        title: 'Dinámicas musicales',
        content: 'Aprende a tocar suave (p) y fuerte (f).',
        quiz: {
          question: '¿Qué significa "f" en música?',
          options: ['Suave', 'Fuerte', 'Rápido', 'Lento'],
          correctAnswer: 'Fuerte'
        }
      },
      {
        title: 'Compases compuestos',
        content: 'Practica compases como 6/8 o 9/8 en melodías simples.',
        quiz: {
          question: '¿Cuántos tiempos tiene un compás de 6/8?',
          options: ['3', '6', '2', '4'],
          correctAnswer: '2'
        }
      }
    ],
    advanced: [
      {
        title: 'Progresiones armónicas',
        content: 'ii-V-I, I-vi-IV-V en diferentes tonalidades.',
        quiz: {
          question: '¿Cuál de estas progresiones es una típica cadencia?',
          options: ['ii-V-I', 'I-IV', 'V-I-V', 'IV-I-vi'],
          correctAnswer: 'ii-V-I'
        }
      },
      {
        title: 'Improvisación básica',
        content: 'Usa la escala pentatónica sobre acordes mayores.',
        quiz: {
          question: '¿Qué escala se usa para improvisar en C mayor?',
          options: ['C menor', 'C pentatónica mayor', 'G mayor', 'F mayor'],
          correctAnswer: 'C pentatónica mayor'
        }
      },
      {
        title: 'Cambios de tonalidad',
        content: 'Explora modulaciones simples entre tonalidades cercanas.',
        quiz: {
          question: '¿Qué tonalidad está relacionada con C mayor?',
          options: ['G mayor', 'D menor', 'A mayor', 'Bb mayor'],
          correctAnswer: 'G mayor'
        }
      },
      {
        title: 'Estilos musicales',
        content: 'Practica estilos como jazz, blues o clásico.',
        quiz: {
          question: '¿Qué estilo suele usar acordes de séptima?',
          options: ['Clásico', 'Blues', 'Pop', 'Barroco'],
          correctAnswer: 'Blues'
        }
      },
      {
        title: 'Acompañamiento avanzado',
        content: 'Practica acompañamientos con mano izquierda sobre melodía.',
        quiz: {
          question: '¿Qué mano suele tocar la melodía?',
          options: ['Izquierda', 'Derecha', 'Ambas', 'Ninguna'],
          correctAnswer: 'Derecha'
        }
      }
    ]
  },
  guitarra: {
    beginner: [
      {
        title: 'Cuerdas al aire',
        content: 'E A D G B e — conoce el nombre de cada cuerda.',
        imageUrl: 'https://i.ytimg.com/vi/lvIBKlcVfJc/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/g6h2ztdqCc8', 
        quiz: {
          question: '¿Cuál es la primera cuerda (la más delgada)?',
          options: ['Mi agudo (e)', 'Sol (G)', 'La (A)', 'Re (D)'],
          correctAnswer: 'Mi agudo (e)'
        }
      },
      {
        title: 'Acordes abiertos',
        content: 'C, G, D, E, A — y cómo colocarlos correctamente.',
        quiz: {
          question: '¿Qué acorde no es abierto?',
          options: ['C', 'G', 'F', 'D'],
          correctAnswer: 'F'
        }
      },
      {
        title: 'Ritmos de rasgueo',
        content: 'Rasgueos en 3/4 y 4/4 con patrones populares.',
        quiz: {
          question: '¿Qué compás es más común en música pop?',
          options: ['3/4', '6/8', '4/4', '5/4'],
          correctAnswer: '4/4'
        }
      },
      {
        title: 'Cambio de acordes',
        content: 'Práctica de cambios limpios entre acordes básicos.',
        quiz: {
          question: '¿Qué ayuda a mejorar los cambios de acordes?',
          options: ['Tocar rápido', 'Practicar lento y con precisión', 'No mirar la mano', 'Usar cejilla'],
          correctAnswer: 'Practicar lento y con precisión'
        }
      },
      {
        title: 'Canción fácil',
        content: 'Toca una canción usando C, G y Am.',
        quiz: {
          question: '¿Cuál es un acorde mayor?',
          options: ['Am', 'C', 'Em', 'Dm'],
          correctAnswer: 'C'
        }
      }
    ],
    intermediate: [
      {
        title: 'Acordes con cejilla',
        content: 'Aprende F y Bm usando cejilla en traste 1 o 2.',
        quiz: {
          question: '¿Cuál de estos acordes requiere cejilla?',
          options: ['C', 'Bm', 'D', 'A'],
          correctAnswer: 'Bm'
        }
      },
      {
        title: 'Escalas en el mástil',
        content: 'Ubica patrones de escalas mayores y menores.',
        quiz: {
          question: '¿Qué escala corresponde a C mayor?',
          options: ['C-D-E-F-G-A-B', 'C-E-G', 'A-B-C-D-E-F-G', 'G-A-B-C-D-E-F'],
          correctAnswer: 'C-D-E-F-G-A-B'
        }
      },
      {
        title: 'Fingerpicking básico',
        content: 'Técnica de punteo con dedos en patrones simples.',
        quiz: {
          question: '¿Qué dedo suele tocar la primera cuerda?',
          options: ['Pulgar', 'Índice', 'Medio', 'Anular'],
          correctAnswer: 'Anular'
        }
      },
      {
        title: 'Progresiones comunes',
        content: 'Toca I-IV-V y ii-V-I en guitarra.',
        quiz: {
          question: '¿Qué función cumple el acorde V?',
          options: ['Tónica', 'Subdominante', 'Dominante', 'Modulante'],
          correctAnswer: 'Dominante'
        }
      },
      {
        title: 'Ritmos latinos',
        content: 'Explora ritmos de bolero, bossa nova o rumba.',
        quiz: {
          question: '¿Cuál es un ritmo latino?',
          options: ['Waltz', 'Bossa Nova', 'Rock', 'Funk'],
          correctAnswer: 'Bossa Nova'
        }
      }
    ],
    advanced: [
      {
        title: 'Improvisación sobre progresiones',
        content: 'Toca sobre un backing track usando la escala adecuada.',
        quiz: {
          question: '¿Qué escala se recomienda para improvisar sobre un acorde de Am?',
          options: ['Escala mayor de C', 'Escala menor de A', 'Escala de G', 'Escala pentatónica mayor de A'],
          correctAnswer: 'Escala menor de A'
        }
      },
      {
        title: 'Modulación en solos',
        content: 'Cambia de tonalidad durante una improvisación.',
        quiz: {
          question: '¿Qué ayuda a modular durante un solo?',
          options: ['Repetir riffs', 'Usar acordes de paso', 'Cambiar la escala', 'Ambas B y C'],
          correctAnswer: 'Ambas B y C'
        }
      },
      {
        title: 'Uso de efectos',
        content: 'Reverb, delay y overdrive para enriquecer el sonido.',
        quiz: {
          question: '¿Qué efecto da un eco al sonido?',
          options: ['Reverb', 'Delay', 'Distorsión', 'Flanger'],
          correctAnswer: 'Delay'
        }
      },
      {
        title: 'Tapping y técnicas avanzadas',
        content: 'Explora hammer-ons, pull-offs y tapping.',
        quiz: {
          question: '¿Qué técnica usa ambas manos en el mástil?',
          options: ['Rasgueo', 'Fingerpicking', 'Tapping', 'Slide'],
          correctAnswer: 'Tapping'
        }
      },
      {
        title: 'Estilos de guitarra solista',
        content: 'Explora rock, jazz, y blues con solos característicos.',
        quiz: {
          question: '¿Qué estilo usa la escala blues?',
          options: ['Rock', 'Reggaetón', 'Pop', 'Disco'],
          correctAnswer: 'Rock'
        }
      }
    ]
  }
};

