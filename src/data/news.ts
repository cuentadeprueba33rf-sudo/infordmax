export type NewsCategory = 'Internacional' | 'Ciencia y Tecnología' | 'Entretenimiento' | 'Medicina' | 'Deportes' | 'Política' | 'Noticias Locales' | 'Editorial';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: NewsCategory;
  imageUrl: string;
  date: string;
  author: string;
  featured?: boolean;
}

export const newsData: NewsArticle[] = [
  {
    id: '1',
    title: 'GUERRA GLOBAL AL BORDE DEL COLAPSO',
    excerpt: 'Estados Unidos e Irán llevan al mundo a una crisis sin precedentes',
    content: 'El mundo observa con tensión cómo el conflicto entre Estados Unidos e Irán ha escalado hasta convertirse en una de las crisis geopolíticas más peligrosas del siglo XXI. Lo que comenzó como décadas de desconfianza y enfrentamientos indirectos, terminó estallando en febrero de 2026 con una ofensiva militar masiva que cambió el equilibrio global.\n\nLa operación inicial, liderada por Estados Unidos junto a Israel, tuvo como objetivo principal desmantelar el programa nuclear iraní. Sin embargo, la magnitud de los ataques —dirigidos a instalaciones militares, nucleares e incluso infraestructura estratégica— provocó una respuesta inmediata y contundente por parte de Irán.\n\nTeherán no solo respondió atacando bases estadounidenses, sino que extendió su ofensiva a toda la región del Golfo, transformando el conflicto en una guerra regional con implicaciones globales. El uso de misiles balísticos, drones y estrategias de guerra asimétrica demostró la capacidad de resistencia iraní frente a una potencia militar superior.\n\nUno de los puntos más críticos fue el estrecho de Ormuz, una vía clave por donde circula gran parte del petróleo mundial. Su bloqueo parcial desató una reacción en cadena: aumento de precios, inestabilidad económica y temor a una crisis energética global.\n\nA pesar de un alto al fuego temporal, la tensión sigue latente. Las negociaciones avanzan lentamente, marcadas por la desconfianza absoluta entre ambas naciones. Analistas coinciden en que el mundo no está ante el fin del conflicto, sino ante una pausa estratégica que podría romperse en cualquier momento.',
    category: 'Internacional',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000&auto=format&fit=crop',
    date: '11 Abr 2026',
    author: 'Milagro Coronado',
    featured: true,
  },
  {
    id: '2',
    title: 'UCRANIA RESISTE, PERO EL MUNDO CAMBIA',
    excerpt: 'La guerra con Rusia entra en una fase crítica mientras el apoyo internacional se debilita',
    content: 'Tras más de cuatro años de conflicto, la guerra entre Rusia y Ucrania ha entrado en una etapa de desgaste prolongado donde ningún bando logra imponerse completamente.\n\nLo que comenzó como una invasión rápida en 2022, se ha transformado en una guerra compleja marcada por avances mínimos, pérdidas humanas masivas y una constante presión internacional.\n\nUcrania, aunque ha demostrado una resistencia notable, enfrenta ahora un desafío mayor: la reducción del apoyo militar externo. Estados Unidos, uno de sus principales aliados, ha desviado parte de su atención y recursos hacia el conflicto con Irán, debilitando indirectamente la posición ucraniana.\n\nPor su parte, Rusia ha logrado sostener su ofensiva a pesar de sanciones económicas severas, adaptándose a una economía de guerra y fortaleciendo alianzas estratégicas.\n\nEl impacto de este conflicto trasciende el campo de batalla. La interrupción de exportaciones clave como el trigo ha generado crisis alimentarias en diversas regiones del mundo, mientras que la incertidumbre geopolítica sigue afectando mercados globales.\n\nExpertos advierten que esta guerra podría extenderse durante años, redefiniendo el orden mundial y marcando una nueva era de tensiones entre potencias.',
    category: 'Internacional',
    imageUrl: 'https://images.unsplash.com/photo-1534294228306-bd54eb9a7ad8?q=80&w=2000&auto=format&fit=crop',
    date: '10 Abr 2026',
    author: 'Danna Simancas',
  },
  {
    id: '3',
    title: 'HUMANIDAD REGRESA A LA LUNA',
    excerpt: 'Artemis II marca el inicio de una nueva era en la exploración espacial',
    content: 'La misión Artemis II representa uno de los avances más significativos en la exploración espacial en décadas. Por primera vez desde las misiones Apolo, astronautas han vuelto a orbitar la Luna, marcando el inicio de una nueva carrera espacial.\n\nEste proyecto no solo busca regresar al satélite natural de la Tierra, sino sentar las bases para futuras misiones hacia Marte. La misión ha permitido probar tecnologías clave, sistemas de navegación y protocolos que serán esenciales para el futuro de la exploración humana.\n\nMás allá del logro técnico, Artemis II simboliza el regreso del liderazgo estadounidense en el espacio, en un contexto donde potencias como China y Rusia también buscan consolidar su presencia fuera del planeta.\n\nSin embargo, el camino no está exento de riesgos. Los costos elevados, los desafíos tecnológicos y la presión política representan obstáculos importantes para la continuidad del programa.\n\nAun así, el mensaje es claro: la humanidad ha vuelto a mirar hacia las estrellas.',
    category: 'Ciencia y Tecnología',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    date: '08 Abr 2026',
    author: 'Samuel Casseres',
    featured: true,
  },
  {
    id: '4',
    title: 'COLOMBIA EN TENSIÓN',
    excerpt: 'Salario mínimo y elecciones marcan el rumbo político del país',
    content: 'Colombia enfrenta un momento decisivo en su panorama político y económico. La discusión sobre el salario mínimo se ha convertido en un tema central, reflejando el delicado equilibrio entre mejorar la calidad de vida de los trabajadores y mantener la estabilidad empresarial.\n\nUn aumento significativo puede aliviar la presión económica sobre millones de ciudadanos, pero también podría generar efectos adversos como inflación o reducción del empleo.\n\nParalelamente, el país se prepara para procesos electorales marcados por una fuerte polarización. Temas como la seguridad, las reformas sociales y el crecimiento económico dominan el debate público.\n\nEste escenario evidencia un país en constante transformación, donde cada decisión política tiene un impacto directo en la vida de sus ciudadanos.',
    category: 'Política',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2000&auto=format&fit=crop',
    date: '04 Abr 2026',
    author: 'María de los Ángeles',
  },
  {
    id: '5',
    title: 'SABANALARGA BAJO ALERTA',
    excerpt: 'La creciente violencia enciende las alarmas en la población',
    content: 'El municipio de Sabanalarga atraviesa una situación compleja marcada por el aumento de hechos violentos y atentados que han generado preocupación entre sus habitantes.\n\nLa presencia de grupos criminales y la falta de control efectivo han contribuido a un clima de inseguridad que afecta no solo la tranquilidad de la población, sino también la economía local.\n\nLos ataques recientes han dejado en evidencia la vulnerabilidad de la región, provocando miedo, desplazamientos y una creciente desconfianza hacia las instituciones.\n\nLa situación exige respuestas urgentes por parte de las autoridades, en un intento por recuperar el control y garantizar la seguridad de los ciudadanos.',
    category: 'Noticias Locales',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
    date: '11 Abr 2026',
    author: 'Milagro Coronado',
  },
  {
    id: '6',
    title: 'LA MEDICINA DEL FUTURO YA ESTÁ AQUÍ',
    excerpt: 'Inteligencia artificial y genética revolucionan la salud',
    content: 'El campo de la medicina está viviendo una transformación sin precedentes gracias al avance de la tecnología. La inteligencia artificial ha comenzado a desempeñar un papel clave en el diagnóstico de enfermedades, permitiendo detectar condiciones con una precisión nunca antes vista.\n\nAl mismo tiempo, las terapias genéticas están abriendo la puerta a tratamientos personalizados que podrían cambiar radicalmente la forma en que se abordan enfermedades complejas.\n\nEl futuro apunta hacia una medicina más eficiente, preventiva y adaptada a cada individuo. Sin embargo, estos avances también plantean desafíos éticos y económicos que deberán ser abordados en los próximos años.',
    category: 'Medicina',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop',
    date: '07 Abr 2026',
    author: 'Danna Simancas',
  },
  {
    id: '7',
    title: 'EL ENTRETENIMIENTO CAMBIA PARA SIEMPRE',
    excerpt: 'La inteligencia artificial redefine la creación de contenido',
    content: 'El mundo del entretenimiento está experimentando una revolución impulsada por la tecnología. Las plataformas digitales han transformado la forma en que las personas consumen contenido, mientras que la inteligencia artificial comienza a desempeñar un papel cada vez más importante en su creación.\n\nDesde videos hasta música, la IA está permitiendo nuevas formas de expresión que desafían los límites tradicionales de la creatividad.\n\nLos influencers, por su parte, se han consolidado como figuras clave en este nuevo ecosistema, captando audiencias masivas y redefiniendo el concepto de celebridad.',
    category: 'Entretenimiento',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000&auto=format&fit=crop',
    date: '09 Abr 2026',
    author: 'María de los Ángeles',
  },
  {
    id: '8',
    title: 'EL DEPORTE: MÁS QUE UN JUEGO',
    excerpt: 'Una industria global que mueve millones y une al mundo',
    content: 'El deporte continúa siendo uno de los fenómenos más influyentes a nivel global. Más allá de la competencia, representa una industria multimillonaria que impacta la economía, la cultura y la sociedad.\n\nEventos internacionales reúnen a millones de personas, generando no solo entretenimiento, sino también identidad y conexión entre diferentes culturas.\n\nEn un mundo cada vez más dividido, el deporte sigue siendo un punto de encuentro capaz de unir a las personas.',
    category: 'Deportes',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2000&auto=format&fit=crop',
    date: '11 Abr 2026',
    author: 'Samuel Casseres',
  },
  {
    id: '9',
    title: 'CIERRE EDITORIAL',
    excerpt: 'INFORD MAX no solo informa, interpreta el mundo.',
    content: 'En una era donde la información circula a velocidades extremas, comprender el contexto detrás de cada noticia es más importante que nunca. Desde conflictos internacionales hasta avances científicos, cada historia forma parte de un panorama global en constante cambio.\n\nEl reto no es solo estar informado, sino entender lo que realmente está pasando.',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
    date: '11 Abr 2026',
    author: 'Equipo INFORD MAX',
    featured: true,
  }
];
