import MovieCard from './MovieCard';
const movieData = [
  {
    adult: false,
    backdrop_path: '/qjGrUmKW78MCFG8PTLDBp67S27p.jpg',
    genre_ids: [16, 28, 12, 14],
    id: 635302,
    original_language: 'ja',
    original_title: '劇場版「鬼滅の刃」無限列車編',
    overview:
      'Тандзиро с друзьями из отряда уничтожителей демонов расследует серию загадочных исчезновений внутри мчащегося поезда. Но компания ещё не знает, что в составе находится один из двенадцати Лунных демонов, и он приготовил для них ловушку.',
    popularity: 911.596,
    poster_path: '/sFXMvI0I5GEiXRCJDIuzBBXpkiZ.jpg',
    release_date: '2020-10-16',
    title: 'Истребитель демонов: Поезд «Бесконечный»',
    video: false,
    vote_average: 8.4,
    vote_count: 2488,
  },
  {
    adult: false,
    backdrop_path: '/adlZgxAudw3ZPA0HUcDzSTKrH8B.jpg',
    genre_ids: [16, 10751, 35, 12, 10770],
    id: 755812,
    original_language: 'fr',
    original_title: 'Miraculous World : New York, les héros unis',
    overview:
      'В честь недели дружбы между Францией и США класс Маринет готовится к поездке в Нью-Йорк. Эдриан тоже хочет поехать, но поначалу его не отпускает отец, к тому же Леди Баг просит Супер-Кота последить за Парижем в ее отсутствие. Когда Габриель все-таки разрешает сыну полететь в Нью-Йорк, Эдриан оказывается перед сложным выбором. Желание посетить Нью-Йорк пересиливает, и он отправляется в долгожданное путешествие. Леди Баг и Супер-Кот не подозревают, что Бражник тоже собирается в город небоскребов, и что им предстоит объединить силы с американскими супергероями, чтобы дать отпор врагу.',
    popularity: 294.919,
    poster_path: '/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg',
    release_date: '2020-09-25',
    title: 'Леди Баг и Супер-Кот: Нью-Йорк. Союз героев',
    video: false,
    vote_average: 8.2,
    vote_count: 899,
  },
  {
    adult: false,
    backdrop_path: '/hdXQxlD4mep7qtC5TsvhIt840OV.jpg',
    genre_ids: [16, 28, 12, 878],
    id: 703771,
    original_language: 'en',
    original_title: 'Deathstroke: Knights & Dragons - The Movie',
    overview:
      'Десять лет назад Слейд Уилсон, также известный как супер-убийца по имени Детстроук, совершил трагическую ошибку, и его жена и сын заплатили ужасную цену. Теперь, десять лет спустя, семье Уилсона снова угрожают кровожадный Шакал и террористы из H.IV.E. Сможет ли Детстроук искупить грехи прошлого - или его семья заплатит самую высокую цену?',
    popularity: 266.621,
    poster_path: '/iTdtIZYvc9MHgnXf4ns8WDJoGzB.jpg',
    release_date: '2020-08-04',
    title: 'Детстроук: Рыцари и Драконы',
    video: false,
    vote_average: 6.9,
    vote_count: 350,
  },
  {
    adult: false,
    backdrop_path: '/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
    genre_ids: [28, 878, 35, 10751],
    id: 454626,
    original_language: 'en',
    original_title: 'Sonic the Hedgehog',
    overview:
      'Отвязный ярко-синий ёжик Соник вместе с новообретённым — человеческим — лучшим другом Томом Вачовски знакомится со сложностями жизни на Земле и противостоит злодейскому доктору Роботнику, который хочет пленить Соника и использовать его безграничные суперсилы для завоевания мирового господства.',
    popularity: 228.436,
    poster_path: '/z7S7EX1YHOhCX9afC9aSyStJFEE.jpg',
    release_date: '2020-02-12',
    title: 'Соник в кино',
    video: false,
    vote_average: 7.4,
    vote_count: 8101,
  },
  {
    adult: false,
    backdrop_path: '/fmIp40ev4VGquK2bMo52PQgaV2d.jpg',
    genre_ids: [16, 10751, 12, 14, 35],
    id: 529203,
    original_language: 'en',
    original_title: 'The Croods: A New Age',
    overview:
      'Такие харизматичные герои как члены клана Крудс просто не в силах усидеть на месте. Они смело идут навстречу самым головокружительным приключениям и готовы ответить непредсказуемостью и находчивостью на любой вызов судьбы.',
    popularity: 232.834,
    poster_path: '/gT8cDQklL3xoVuXPLGRdjDI3tRA.jpg',
    release_date: '2020-11-25',
    title: 'Семейка Крудс: Новоселье',
    video: false,
    vote_average: 7.6,
    vote_count: 2998,
  },
  {
    adult: false,
    backdrop_path: '/z8TvnEVRenMSTemxYZwLGqFofgF.jpg',
    genre_ids: [28, 14, 12],
    id: 458576,
    original_language: 'en',
    original_title: 'Monster Hunter',
    overview:
      'Лейтенант Артемис и её солдаты с Земли случайно попадают в параллельный мир, где обитают разнообразные монстры. Закалённые бойцы оказываются в необычной ситуации и вынуждены использовать все свои навыки, чтобы пережить встречу с фантастическими тварями. Спасти их может только загадочный Охотник, который как никто умеет убивать монстров.',
    popularity: 223.39,
    poster_path: '/uHiil0BMdvGouYQv70MgYqho44n.jpg',
    release_date: '2020-12-03',
    title: 'Охотник на монстров',
    video: false,
    vote_average: 6.8,
    vote_count: 2592,
  },
  {
    adult: false,
    backdrop_path: '/iDLtDgxLiYsarfdQ4msUhUqoNPp.jpg',
    genre_ids: [878],
    id: 725273,
    original_language: 'en',
    original_title: 'Solitary',
    overview:
      'Айзек Хэвлок — осужденный за убийство молодой человек, насильно отправленный в космос по программе реабилитации заключенных, которые должны создать первую земную колонию. Однако что-то идет не так, и на корабле, который дожидался его на орбите, происходит взрыв, в результате чего Айзек вместе со своей сокамерницей оказывается в ловушке в аварийной капсуле; начинается отчаянная борьба за жизнь.',
    popularity: 186.977,
    poster_path: '/ApwmbrMlsuOay5rXQA4Kbz7qJAl.jpg',
    release_date: '2020-08-31',
    title: 'Одиночка',
    video: false,
    vote_average: 5.6,
    vote_count: 76,
  },
  {
    adult: false,
    backdrop_path: '/yjmqROw9fa9GahuUxvBFnoVYYMG.jpg',
    genre_ids: [16, 18, 10749],
    id: 719088,
    original_language: 'ja',
    original_title: 'イエスかノーか半分か',
    overview:
      'Куниеда Кэй - молодой популярный телеведущий, который поддерживает видимость идеала в своей профессиональной жизни, ему даже дали прозвище Принц. Но на самом деле презирает всех вокруг себя как некомпетентных дураков. Тем не менее, в силу обстоятельств, аниматор Цудзуки Усио сумел обнаружить потаенную сторону личности Кэя.',
    popularity: 191.354,
    poster_path: '/sH8xCXLEbihNNVDbewddzkYnNPF.jpg',
    release_date: '2020-12-11',
    title: 'Да, нет или наверное?',
    video: false,
    vote_average: 7.1,
    vote_count: 26,
  },
  {
    adult: false,
    backdrop_path: '/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg',
    genre_ids: [10749, 18],
    id: 613504,
    original_language: 'en',
    original_title: 'After We Collided',
    overview:
      'Встреча с Хардином разделила её жизнь на до и после. Молодые и такие разные – от их страсти буквально разлетаются искры. Однако внезапно в жизни девушки появляется новый знакомый, который готов положить к её ногам весь мир.',
    popularity: 230.647,
    poster_path: '/kWkFxHdXhKBM3NmncrX8JYhVXEe.jpg',
    release_date: '2020-09-02',
    title: 'После. Глава 2',
    video: false,
    vote_average: 7.3,
    vote_count: 4591,
  },
  {
    adult: false,
    backdrop_path: '/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
    genre_ids: [10751, 16, 14, 12, 35],
    id: 400160,
    original_language: 'en',
    original_title: 'The SpongeBob Movie: Sponge on the Run',
    overview:
      'Гэри, лучший друг Губки Боба, пропал. Нужно найти его! Губка Боб и Патрик отправляются далеко за пределы Бикини Боттома, чтобы спасти своего друга в розовой раковине.',
    popularity: 205.016,
    poster_path: '/wEisOJUM7mLB27ekk8w3MzswUfI.jpg',
    release_date: '2020-08-14',
    title: 'Губка Боб в бегах',
    video: false,
    vote_average: 7.6,
    vote_count: 2476,
  },
  {
    adult: false,
    backdrop_path: '/yzpCv8CCWondN7O5au1KGiqnC3A.jpg',
    genre_ids: [28, 12, 14],
    id: 464052,
    original_language: 'en',
    original_title: 'Wonder Woman 1984',
    overview:
      '1984 год. Диана всё ещё грустит по погибшему Стиву, борется с мелким криминалом и работает в музее Смитсоновского института. Однажды она знакомится с новой коллегой Барбарой, специалисткой широкого профиля, которой поручено изучить новые артефакты. Среди древних предметов оказывается загадочный кристалл, который исполняет желания. Так к Диане внезапно возвращается Стив, а застенчивая и неуклюжая Барбара обретает невероятную силу, сноровку и привлекательность. Но за волшебным кристаллом охотится бизнесмен Максвелл Лорд, и у него имеются очень коварные планы на этот артефакт.',
    popularity: 170.137,
    poster_path: '/1B2YJCYyRudISmfSWCRfc95gAtq.jpg',
    release_date: '2020-12-16',
    title: 'Чудо-женщина: 1984',
    video: false,
    vote_average: 6.6,
    vote_count: 6867,
  },
  {
    adult: false,
    backdrop_path: '/rQaHA74pevnGsxcKGaoZVGWe9TC.jpg',
    genre_ids: [16, 35, 14, 10751],
    id: 508442,
    original_language: 'en',
    original_title: 'Soul',
    overview:
      'Уже немолодой школьный учитель музыки Джо Гарднер всю жизнь мечтал выступать на сцене в составе джазового ансамбля. Однажды он успешно проходит прослушивание у известной клубной певицы и, возвращаясь домой вне себя от счастья, падает в люк и умирает. Теперь у Джо одна дорога — в Великое После, но он сбегает с идущего в вечность эскалатора и случайно попадает в Великое До. Тут новенькие души обретают себя, и у будущих людей зарождаются увлечения, мечты и интересы. Джо становится наставником упрямой души 22, которая уже много веков не может найти свою искру и отправиться на Землю.',
    popularity: 172.215,
    poster_path: '/x4egXUupjQ8KkRzhD54fmPZuFvF.jpg',
    release_date: '2020-12-25',
    title: 'Душа',
    video: false,
    vote_average: 8.2,
    vote_count: 8112,
  },
  {
    adult: false,
    backdrop_path: '/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg',
    genre_ids: [10751, 14, 12, 35, 27],
    id: 531219,
    original_language: 'en',
    original_title: "Roald Dahl's The Witches",
    overview:
      'В конце 1967 года после гибели родителей мальчик переезжает жить к бабушке. Та вскоре замечает, что в их городке отираются ведьмы, которые не прочь превратить её внука в какое-нибудь животное, поэтому решает спрятаться в самом шикарном отеле Алабамы, где работает её кузен. Бабуля думала, что там они встретят только скучающих богатых постояльцев, но именно в этом отеле решает устроить тайный шабаш Величайшая Самая Главная Ведьма.',
    popularity: 140.501,
    poster_path: '/1BUMAQIph7yzMHi2FRl2XgjONAs.jpg',
    release_date: '2020-10-25',
    title: 'Ведьмы',
    video: false,
    vote_average: 6.5,
    vote_count: 2209,
  },
  {
    adult: false,
    backdrop_path: '/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg',
    genre_ids: [27, 53, 12, 9648],
    id: 522444,
    original_language: 'en',
    original_title: 'Black Water: Abyss',
    overview:
      'Пять любителей приключений отправляются на поиски тайной пещеры в Австралии. Друзья надеются на веселую вылазку, но разбушевавшаяся стихия преграждает обратный путь и приводит к ним нечто смертельно опасное – то, чего там не должно быть.',
    popularity: 165.705,
    poster_path: '/zBXMuJJfwswqeMj9s9ixPoJRNof.jpg',
    release_date: '2020-07-09',
    title: 'Хищные Воды: Западня',
    video: false,
    vote_average: 5.2,
    vote_count: 327,
  },
  {
    adult: false,
    backdrop_path: '/54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
    genre_ids: [28, 80, 18, 53],
    id: 539885,
    original_language: 'en',
    original_title: 'Ava',
    overview:
      'Она умна, красива и чрезвычайно опасна. Перемещаясь по миру словно тень, агент по имени Ева в одиночку выполняет самые сложные задания своего руководства. Внезапно, когда очередная спецоперация идёт не по плану, и Ева решает выйти из игры, один из влиятельных боссов секретной службы открывает на неё охоту.',
    popularity: 154.589,
    poster_path: '/xf92uk5zPY8aSofxdsRpWBPrkRi.jpg',
    release_date: '2020-07-02',
    title: 'Агент Ева',
    video: false,
    vote_average: 5.8,
    vote_count: 2005,
  },
  {
    adult: false,
    backdrop_path: '/pQdZmXq0vvKP1RYUrDHQkzMlS4x.jpg',
    genre_ids: [16, 28, 53, 12, 14],
    id: 571265,
    original_language: 'ja',
    original_title: 'デジモンアドベンチャー LAST EVOLUTION 絆',
    overview:
      'Обычная подготовка подростков к летнему лагерю прервалась самым неожиданным образом. Вместе со своим соседом Тайчи узнаёт причину беспорядков. Вся электроника в мегаполисе вышла из строя. Мальчишка понимает, что его родственники, мать и сестра, теперь находятся в огромной опасности. Поезд, на который они сели, находится неизвестно где и, скорее всего, похищен неведомой силой. Необходимо остановить его, и они бегут на ближайшую железнодорожную станцию. Но именно там он внезапно переносится в параллельный, цифровой мир. Именно здесь, в виртуальном Токио, находится причина неприятностей. Кто-то захотел проникнуть в настоящий мир, чтобы обрести власть. Встреча со сражающимся дигимоном становится только началом новых приключений героев. Надежде на спокойную жизнь осуществиться не дано.',
    popularity: 164.177,
    poster_path: '/6C9fb7duBSzsXkkobfwuMgEW58F.jpg',
    release_date: '2020-02-21',
    title: 'Приключения дигимонов: Последняя эволюция',
    video: false,
    vote_average: 8.1,
    vote_count: 146,
  },
  {
    adult: false,
    backdrop_path: '/ySHlkHDbXztjdjRJ0pZN7FXRnaW.jpg',
    genre_ids: [16, 12, 28, 14],
    id: 631132,
    original_language: 'ja',
    original_title: "ゴブリンスレイヤー -GOBLIN'S CROWN-",
    overview:
      'Убийца Гоблинов вместе с товарищами по оружию продолжает выполнять свою миссию по спасению людей от гоблинов. В этот раз они направились в заснеженные края по просьбе Девы Меча, дабы спасти дочь дворянина, которая стала авантюристом. Однако за всем этим скрывается гораздо большая опасность, чем могло показаться на первый взгляд. Теперь главным героям предстоит не только выручить попавших в беду, но и вновь сразиться со свирепыми гоблинами.',
    popularity: 143.328,
    poster_path: '/cbwQ3KTcILbJh8wRYJbVEp10IRE.jpg',
    release_date: '2020-02-01',
    title: 'Убийца гоблинов: Корона гоблина',
    video: false,
    vote_average: 7.6,
    vote_count: 167,
  },
  {
    adult: false,
    backdrop_path: '/zMrk2G3XsnfYKiIp1NEfdtvDyBH.jpg',
    genre_ids: [12, 14, 18],
    id: 337401,
    original_language: 'en',
    original_title: 'Mulan',
    overview:
      'История о бесстрашной молодой девушке, которая выдаёт себя за мужчину, чтобы вступить в ряды армии, противостоящей Северным захватчикам, надвигающимся на Китай. Старшая дочь храброго воина Хуа, Мулан — энергичная и решительная девушка. Когда Император издаёт указ о том, что один мужчина из каждой семьи должен вступить в ряды Имперской армии, Мулан занимает место своего больного отца, еще не зная, что ей предстоит прославиться как одному из величайших воинов в истории Китая.',
    popularity: 144.156,
    poster_path: '/uxPauLtzjl9oWZtS1Bwp9mCDRFh.jpg',
    release_date: '2020-09-04',
    title: 'Мулан',
    video: false,
    vote_average: 7,
    vote_count: 5687,
  },
  {
    adult: false,
    backdrop_path: '/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg',
    genre_ids: [28, 12, 80],
    id: 604822,
    original_language: 'zh',
    original_title: '急先锋',
    overview:
      'Они берутся за задания, которые другим не под силу. Когда международный синдикат наемников похищает известного бизнесмена, единственным шансом на его спасение становится лихая команда «Авангард», не имеющая равных в мастерстве и дерзости.',
    popularity: 138.404,
    poster_path: '/rrHIr2HFbr3DPIwZHJUjEVxXEUQ.jpg',
    release_date: '2020-09-30',
    title: 'Авангард: Арктические волки',
    video: false,
    vote_average: 6.4,
    vote_count: 409,
  },
  {
    adult: false,
    backdrop_path: '/jiqD14fg7UTZOT6qgvzTmfRYpWI.jpg',
    genre_ids: [28, 80],
    id: 495764,
    original_language: 'en',
    original_title:
      'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)',
    overview:
      'Харли Квинн рассталась с Джокером и через некоторое время сообщила об этом всему Готэму, взорвав тот самый химзавод. Девушка больше не тоскует по несостоявшимся отношениям - ей некогда, так как она также потеряла неприкосновенность, и теперь за ней охотятся разной степени криминализованности граждане, желающие отомстить. А в это время ставший крёстным отцом Готема Роман Сайонис очень жаждет вернуть пропавший бриллиант, который стащила у его подручного малолетняя карманница.',
    popularity: 121.282,
    poster_path: '/wh5FEKiNeirvD02T2Ui22duZGCZ.jpg',
    release_date: '2020-02-05',
    title: 'Хищные птицы: Потрясающая история Харли Квинн',
    video: false,
    vote_average: 7,
    voteCount: 8806,
  },
];

const MovieList = () => {
  return (
    <div className="grid grid-cols-2 auto-rows-auto gap-8 px-8 w-3/4 align-top mx-auto">
      {movieData.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            src="src/img/demon-slayer.jpg"
            name={movie.title}
            rating={movie.vote_average}
          />
        );
      })}
      {/* <MovieCard
        src="src/img/demon-slayer.jpg"
        name="Demon Slayer"
        rating={8.9}
      />
      <MovieCard src="src/img/toy-story.jpg" name="Toy Story 4" rating={6.2} />
      <MovieCard
        src="src/img/demon-slayer.jpg"
        name="Demon Slayer"
        rating={8.9}
      />
      <MovieCard
        src="src/img/demon-slayer.jpg"
        name="Demon Slayer"
        rating={8.9}
      />
      <MovieCard
        src="src/img/demon-slayer.jpg"
        name="Demon Slayer"
        rating={8.9}
      />
      <MovieCard
        src="src/img/demon-slayer.jpg"
        name="Demon Slayer"
        rating={8.9}
      /> */}
    </div>
  );
};

export default MovieList;
