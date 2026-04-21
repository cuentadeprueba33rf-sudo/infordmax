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
    title: 'CRISIS DE LOS HIPOPÓTAMOS: EMERGENCIA AMBIENTAL',
    excerpt: 'El Ministerio de Ambiente autoriza la eutanasia ética ante la expansión descontrolada en el Magdalena.',
    content: 'El problema de los hipopótamos en Colombia ha pasado de ser una curiosidad histórica a una emergencia ambiental de grandes proporciones. Originados por cuatro ejemplares traídos ilegalmente por el narcotráfico en los años 80, hoy se estima que hay cerca de 200 individuos libres en la cuenca del río Magdalena. Debido a que no tienen depredadores naturales en el país y el clima les favorece, su población crece de forma descontrolada, amenazando con desplazar a especies nativas como el manatí y alterar la calidad del agua por sus desechos orgánicos.\n\nEn abril de 2026, el Ministerio de Ambiente oficializó un plan de manejo que ha generado un intenso debate nacional. Con una inversión de 7.200 millones de pesos, las autoridades han autorizado por primera vez la aplicación de la eutanasia ética para 80 ejemplares. Esta medida se suma a los esfuerzos de esterilización y los intentos de traslocación (envío a otros países), que hasta ahora han resultado insuficientes y costosos frente a la rapidez con la que estos animales se reproducen.\n\nMás allá del impacto ecológico, la situación tiene un grave componente social. En municipios como Puerto Boyacá, específicamente en zonas como la Isla del Silencio, los pescadores denuncian que ya no pueden realizar sus faenas con seguridad. El carácter territorial y agresivo de los hipopótamos ha generado encuentros peligrosos con la población civil, afectando la economía local y la tranquilidad de las familias que dependen del río.',
    category: 'Política',
    imageUrl: 'https://images.unsplash.com/photo-1533282250209-1785f7a01d6d?q=80&w=2000&auto=format&fit=crop',
    date: '20 Abr 2026',
    author: 'Milagro Coronado',
    featured: true,
  },
  {
    id: '2',
    title: 'ARTEMIS II: EL REGRESO TRIPULADO A LA LUNA',
    excerpt: 'La NASA prepara el primer sobrevuelo lunar con tripulación en más de medio siglo.',
    content: 'Artemis I fue un éxito total. La cápsula Orion viajó a 450,000 kilómetros de la Tierra, superando el récord del Apolo 13. Regresó intacta, demostrando que el escudo térmico puede soportar la reentrada a la atmósfera a velocidades de 40,000 km/h.\n\nActualmente, la misión Artemis II es la prioridad. Esta es tripulada, con cuatro astronautas —incluyendo por primera vez a una mujer, Christina Koch, y a un astronauta canadiense— listos para realizar un sobrevuelo lunar.\n\nEl cohete SLS, el más potente jamás construido, ya se encuentra en plataforma. Esta misión probará sistemas de soporte vital y comunicación en el espacio profundo, siendo el paso previo a Artemis III, donde se proyecta el regreso del ser humano a la Luna.',
    category: 'Ciencia y Tecnología',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2000&auto=format&fit=crop',
    date: '19 Abr 2026',
    author: 'Samuel Casseres',
    featured: true,
  },
  {
    id: '3',
    title: 'COLOMBIA: REINDUSTRIALIZACIÓN Y DESAFÍOS DE PAZ',
    excerpt: 'El Gobierno moviliza 1.2 billones en zonas francas mientras persisten retos de seguridad.',
    content: 'Hoy, 20 de abril de 2026, el Gobierno nacional destacó el fortalecimiento de su política de reindustrialización, reportando que se han movilizado más de 1.2 billones en inversión a través de las zonas francas del país. Esta iniciativa busca impulsar la inversión extranjera y nacional para fomentar la generación de empleo y el crecimiento económico bajo la administración actual.\n\nEn otros hechos relevantes en la agenda política, el presidente Gustavo Petro ha enfatizado recientemente que la generación de energías limpias desde los hogares es una vía para fortalecer la paz y la democracia en el país.\n\nEn cuanto al contexto de seguridad, aunque el acuerdo de paz sigue vigente, informes recientes mencionan que persisten desafíos en su implementación, lo que afecta la situación de orden público en diversas regiones. En materia de conflictividad social, datos de la Defensoría del Pueblo indican un aumento en las protestas sociales relacionadas con conflictos laborales (21%) y servicios públicos (16%).',
    category: 'Política',
    imageUrl: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=2000&auto=format&fit=crop',
    date: '20 Abr 2026',
    author: 'María de los Ángeles',
  },
  {
    id: '4',
    title: 'BARRANQUILLA: 213 AÑOS DE HISTORIA Y PROGRESO',
    excerpt: 'La ciudad celebra su aniversario con una agenda masiva de cultura y servicios.',
    content: 'Barranquilla celebró sus 213 años el 7 de abril de 2026, fecha en que fue erigida como villa en 1813. La ciudad preparó una agenda cultural y festiva que se extendió durante varios días, combinando tradición, educación y entretenimiento.\n\nActividades principales included the Museo del Carnaval with free entry, a major celebration at Cancha La Conquista, and a service fair at Malecón de Rebolo. The festivities culminated in a massive free concert at the Gran Malecón featuring artists like Aria Vega, Altafulla, Iván Villazón, and Elder Dayán.',
    category: 'Noticias Locales',
    imageUrl: 'https://images.unsplash.com/photo-1589417830403-cc6a12a76f2f?q=80&w=2000&auto=format&fit=crop',
    date: '07 Abr 2026',
    author: 'Danna Simancas',
  },
  {
    id: '5',
    title: 'SABANALARGA: ENTRE OBRAS Y ALERTAS',
    excerpt: 'Villa Encanto ve progreso en sus vías mientras los homicidios alcanzan cifras alarmantes.',
    content: 'Así avanza la construcción de la vía principal del barrio Villa Encanto. Ya se fundieron los primeros 60 metros lineales de concreto rígido, transformando el sector gracias a la inversión municipal.\n\nSin embargo, la seguridad preocupa: se han registrado incidentes recientes en el barrio Los Mariscos y Villa Carmen. Con el fallecimiento del joven Carlos Arango Estrada, la cifra de homicidios en Sabanalarga ya llega a diez en lo que va del año, un aumento alarmante que requiere atención urgente por parte de las autoridades departamentales.',
    category: 'Noticias Locales',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop',
    date: '20 Abr 2026',
    author: 'Milagro Coronado',
  },
  {
    id: '6',
    title: 'GLOBAL: TENSIONS AND MIGRATION TRENDS',
    excerpt: 'US strengthens naval presence in Persian Gulf; Canada hits record emigration levels.',
    content: 'The agenda in Washington is marked by global security and technological advancement. Tensions in the Persian Gulf have led the US to strengthen its naval presence to protect trade routes, focusing on active deterrence.\n\nElsewhere, Canada is recording a significant increase in emigration. During 2024, more than 81,000 people left the country due to high living costs and housing difficulties. Ontario concentrates 48% of these departures, reflecting deep economic challenges.',
    category: 'Internacional',
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2000&auto=format&fit=crop',
    date: '18 Abr 2026',
    author: 'Danna Simancas',
  },
  {
    id: '7',
    title: 'CAPTURE OF NICOLÁS MADURO: OPERATION ABSOLUTE RESOLUTION',
    excerpt: 'US Special Forces detained the leader in Caracas; currently held in Brooklyn.',
    content: 'Operation Absolute Resolution was carried out on January 3rd, 2026. United States special forces captured Nicolás Maduro and his wife at Fuerte Tiuna in Caracas using drones and helicopters. Following his detention, he was transferred to U.S. territory and is currently held at the Metropolitan Detention Center in Brooklyn.',
    category: 'Internacional',
    imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2000&auto=format&fit=crop',
    date: '03 Ene 2026',
    author: 'María de los Ángeles',
  },
  {
    id: '8',
    title: 'SALUD: LA ERA DE LA BIO-IA Y CRISPR',
    excerpt: 'Avances en oncología de precisión y tejidos bio-impresos marcan el 2026.',
    content: 'The year 2026 has been identified as the era of Bio-Artificial Intelligence. Advances include precision oncology using AI and gene editing technologies like CRISPR. There are also promising developments in bioprinted tissues that could significantly reduce mortality from heart disease by providing functional organ replacements.',
    category: 'Medicina',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop',
    date: '15 Abr 2026',
    author: 'Danna Simancas',
  },
  {
    id: '9',
    title: 'MUNDIAL 2026: RUMBO AL METLIFE STADIUM',
    excerpt: 'Tres naciones, 48 selecciones y 104 partidos para definir al campeón global.',
    content: 'El Mundial inicia el 11 de junio y será organizado por Estados Unidos, México y Canadá. Participarán 48 selecciones en un formato expandido de 104 partidos. La gran final se disputará el 19 de julio en el MetLife Stadium de Nueva York. El balón oficial, el Adidas Trionda, ya rueda en las fases de preparación.',
    category: 'Deportes',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2000&auto=format&fit=crop',
    date: '10 Abr 2026',
    author: 'Samuel Casseres',
  },
  {
    id: '10',
    title: 'LCDLF: FENÓMENO TRANSNACIONAL',
    excerpt: 'Nuevas dinámicas y una edición All Stars mantienen el impacto del reality.',
    content: 'La Casa de los Famosos sigue siendo el reality show con mayor impacto en Colombia, México y Estados Unidos. Para 2026, el show incluye dinámicas interactivas mediante IA, participantes destacados de temporadas anteriores y el anuncio de una futura edición All Stars.',
    category: 'Entretenimiento',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000&auto=format&fit=crop',
    date: '12 Abr 2026',
    author: 'María de los Ángeles',
  },
  {
    id: '11',
    title: 'EDITORIAL: COMPROMISO INFORD MAX',
    excerpt: 'Cerramos la jornada informativa con el compromiso de la integridad periodística.',
    content: 'Fin del contenido informativo de INFORD MAX para abril de 2026. Nuestra misión permanece intacta: proveer análisis profundo y veraz en un mundo en constante cambio. Gracias por confiar en las mentes detrás de la verdad.',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop',
    date: '21 Abr 2026',
    author: 'Equipo INFORD MAX',
    featured: true,
  }
];
