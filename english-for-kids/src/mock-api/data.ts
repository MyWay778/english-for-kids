/* eslint-disable import/prefer-default-export */
interface Category {
  id: number;
  name: string;
  imageSrc: string;
  words: Word[];
}

interface Word {
  id: number;
  spelling: string;
  translating: string;
  imageSrc: string;
  soundSrc: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Action (set A)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/swim.jpg',
    words: [
      {
        id: 1,
        spelling: 'cry',
        translating: 'плакать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/cry.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/cry.mp3',
      },
      {
        id: 2,
        spelling: 'dance',
        translating: 'танцевать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dance.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dance.mp3',
      },
      {
        id: 3,
        spelling: 'dive',
        translating: 'нырять',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dive.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dive.mp3',
      },
      {
        id: 4,
        spelling: 'draw',
        translating: 'рисовать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/draw.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/draw.mp3',
      },
      {
        id: 5,
        spelling: 'fish',
        translating: 'ловить рыбу',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fish.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fish.mp3',
      },
      {
        id: 6,
        spelling: 'fly',
        translating: 'летать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fly.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fly.mp3',
      },
      {
        id: 7,
        spelling: 'hug',
        translating: 'обнимать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/hug.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/hug.mp3',
      },
      {
        id: 8,
        spelling: 'jump',
        translating: 'прыгать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/jump.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/jump.mp3',
      },
    ],
  },
  {
    id: 2,
    name: 'Action (set B)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/sing.jpg',
    words: [
      {
        id: 9,
        spelling: 'swim',
        translating: 'плавать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/swim.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/swim.mp3',
      },
      {
        id: 10,
        spelling: 'skip',
        translating: 'пропускать, прыгать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/skip.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/skip.mp3',
      },
      {
        id: 11,
        spelling: 'sing',
        translating: 'петь',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/sing.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/sing.mp3',
      },
      {
        id: 12,
        spelling: 'run',
        translating: 'бежать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/run.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/run.mp3',
      },
      {
        id: 13,
        spelling: 'open',
        translating: 'открывать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/open.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/open.mp3',
      },
      {
        id: 14,
        spelling: 'ride',
        translating: 'ездить',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/ride.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/ride.mp3',
      },
      {
        id: 15,
        spelling: 'point',
        translating: 'указывать',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/point.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/point.mp3',
      },
      {
        id: 16,
        spelling: 'play',
        translating: 'играть',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/play.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/play.mp3',
      },
    ],
  },
  {
    id: 3,
    name: 'Action (set C)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/play.jpg',
    words: [
      {
        id: 17,
        spelling: 'push',
        translating: 'толкать',
        imageSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXG5FUfF8JCikYO_uYRb54YILlgcVwCZe73Q&usqp=CAU',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/push--_us_1.mp3',
      },
      {
        id: 18,
        spelling: 'pull',
        translating: 'тянуть',
        imageSrc:
          'http://ilslearningcorner.com/wp-content/uploads/2016/05/kids-rope-pull-heavy-work-blog.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/pull--_us_1.mp3',
      },
      {
        id: 19,
        spelling: 'drop',
        translating: 'падать',
        imageSrc: 'https://www.astromeridian.ru/assets/images/sonnik/ypast.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/drop--_us_1.mp3',
      },
      {
        id: 20,
        spelling: 'argue',
        translating: 'спорить',
        imageSrc:
          'https://i2-prod.mirror.co.uk/incoming/article8870297.ece/ALTERNATES/s615/1_Little-girl-telling-off-a-boy.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/argue--_us_1.mp3',
      },
      {
        id: 21,
        spelling: 'drive',
        translating: 'водить машину',
        imageSrc:
          'http://st2.depositphotos.com/1761942/12054/i/450/depositphotos_120548444-Funny-little-kid-boy-driving-toy-car-outdoors.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/drive--_us_1.mp3',
      },
      {
        id: 22,
        spelling: 'catch',
        translating: 'ловить',
        imageSrc:
          'https://st.depositphotos.com/1468291/2593/i/600/depositphotos_25930731-stock-photo-boy-playing-with-ball-on.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/catch--_us_1.mp3',
      },
      {
        id: 23,
        spelling: 'carry',
        translating: 'нести',
        imageSrc:
          'https://www.eatright.org/-/media/eatrightimages/health/lifestyle/travel/summertravelfoodtips.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/carry--_us_1.mp3',
      },
      {
        id: 24,
        spelling: 'build',
        translating: 'строить',
        imageSrc:
          'https://pravdapfo.ru/sites/default/files/kamenshhik-v-perchatkah-kladjot-kirpich.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/build--_us_1.mp3',
      },
    ],
  },
  {
    id: 4,
    name: 'Adjective',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/scared.jpg',
    words: [
      {
        id: 25,
        spelling: 'big',
        translating: 'большой',
        imageSrc:
          'https://i.pinimg.com/originals/7c/54/19/7c54192665c29ca75603ece273faea33.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/big--_us_1.mp3',
      },
      {
        id: 26,
        spelling: 'small',
        translating: 'маленький',
        imageSrc:
          'https://justhamsters.net/wp-content/uploads/2020/07/FEATURED-56-Adorable-Baby-Hamster-Pictures-That-Will-Melt-Your-Heart.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/small--_us_1.mp3',
      },
      {
        id: 27,
        spelling: 'fast',
        translating: 'быстрый',
        imageSrc:
          'data:image/jpeg;base64,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',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/fast--_us_1.mp3',
      },
      {
        id: 28,
        spelling: 'slow',
        translating: 'медленный',
        imageSrc:
          'https://vetstreet-brightspot.s3.amazonaws.com/0f/9fb090dfd411e1a02d005056ad4734/file/snail-100300623-lc080612.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/slow--_us_1.mp3',
      },
      {
        id: 29,
        spelling: 'friendly',
        translating: 'дружелюбный',
        imageSrc:
          'https://cdn-prod.medicalnewstoday.com/content/images/articles/318/318935/happy-child-with-dog.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/friendly--_us_1.mp3',
      },
      {
        id: 30,
        spelling: 'unfriendly',
        translating: 'ловить',
        imageSrc:
          'https://media.istockphoto.com/photos/fight-cat-dog-picture-id646828826?k=6&m=646828826&s=612x612&w=0&h=iI_UoKFVhuVUlmCahDzb2gc0tFxX307sMu8spO1Jmfw=',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/unfriendly--_us_1.mp3',
      },
      {
        id: 31,
        spelling: 'young',
        translating: 'молодой',
        imageSrc: 'https://i.redd.it/azc0s59g0q131.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/young--_us_1.mp3',
      },
      {
        id: 32,
        spelling: 'old',
        translating: 'старый',
        imageSrc:
          'https://www.clinicadentallogrono.es/wp-content/uploads/2019/05/osteoporosis-dentista.jpg',
        soundSrc:
          'https://ssl.gstatic.com/dictionary/static/sounds/oxford/old--_us_1.mp3',
      },
    ],
  },
  {
    id: 5,
    name: 'Animal (set A)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/bird.jpg',
    words: [
      {
        id: 33,
        spelling: 'cat',
        translating: 'кот',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/cat.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/cat.mp3',
      },
      {
        id: 34,
        spelling: 'chick',
        translating: 'цыпленок',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/chick.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/chick.mp3',
      },
      {
        id: 35,
        spelling: 'chicken',
        translating: 'курица',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/chicken.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/chicken.mp3',
      },
      {
        id: 36,
        spelling: 'dog',
        translating: 'собака',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dog.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dog.mp3',
      },
      {
        id: 37,
        spelling: 'horse',
        translating: 'лошадь',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/horse.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/horse.mp3',
      },
      {
        id: 38,
        spelling: 'pig',
        translating: 'свинья',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/pig.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/pig.mp3',
      },
      {
        id: 39,
        spelling: 'rabbit',
        translating: 'кролик',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/rabbit.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/rabbit.mp3',
      },
      {
        id: 40,
        spelling: 'sheep',
        translating: 'овца',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/sheep.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/sheep.mp3',
      },
    ],
  },
  {
    id: 6,
    name: 'Animal (set B)',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/lion.jpg',
    words: [
      {
        id: 41,
        spelling: 'dolphin',
        translating: 'дельфин',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dolphin.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dolphin.mp3',
      },
      {
        id: 42,
        spelling: 'turtle',
        translating: 'черепаха',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/turtle.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/turtle.mp3',
      },
      {
        id: 43,
        spelling: 'mouse',
        translating: 'мышь',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/mouse.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/mouse.mp3',
      },
      {
        id: 44,
        spelling: 'lion',
        translating: 'лев',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/lion.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/lion.mp3',
      },
      {
        id: 45,
        spelling: 'giraffe',
        translating: 'жираф',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/giraffe.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/giraffe.mp3',
      },
      {
        id: 46,
        spelling: 'frog',
        translating: 'жаба',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/frog.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/frog.mp3',
      },
      {
        id: 47,
        spelling: 'fish',
        translating: 'рыба',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/fish1.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/fish.mp3',
      },
      {
        id: 48,
        spelling: 'bird',
        translating: 'птица',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/bird.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/bird.mp3',
      },
    ],
  },
  {
    id: 7,
    name: 'Clothes',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/boot.jpg',
    words: [
      {
        id: 49,
        spelling: 'shoe',
        translating: 'туфли',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/shoe.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/shoe.mp3',
      },
      {
        id: 50,
        spelling: 'pants',
        translating: 'брюки',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/pants.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/pants.mp3',
      },
      {
        id: 51,
        spelling: 'blouse',
        translating: 'блузка',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/blouse.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/blouse.mp3',
      },
      {
        id: 52,
        spelling: 'dress',
        translating: 'платье',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/dress.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/dress.mp3',
      },
      {
        id: 53,
        spelling: 'boot',
        translating: 'ботинок',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/boot.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/boot.mp3',
      },
      {
        id: 54,
        spelling: 'shirt',
        translating: 'рубаха',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/shirt.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/shirt.mp3',
      },
      {
        id: 55,
        spelling: 'coat',
        translating: 'пальто',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/coat.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/coat.mp3',
      },
      {
        id: 56,
        spelling: 'skirt',
        translating: 'юбка',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/skirt.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/skirt.mp3',
      },
    ],
  },
  {
    id: 8,
    name: 'Emotion',
    imageSrc:
      'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/smile.jpg',
    words: [
      {
        id: 57,
        spelling: 'laugh',
        translating: 'смех',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/laugh.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/laugh.mp3',
      },
      {
        id: 58,
        spelling: 'smile',
        translating: 'улыбка',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/smile.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/smile.mp3',
      },
      {
        id: 59,
        spelling: 'scared',
        translating: 'испуганный',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/scared.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/scared.mp3',
      },
      {
        id: 60,
        spelling: 'surprised',
        translating: 'удивленный',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/surprised.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/surprised.mp3',
      },
      {
        id: 61,
        spelling: 'tired',
        translating: 'уставший',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/tired.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/tired.mp3',
      },
      {
        id: 62,
        spelling: 'happy',
        translating: 'счастливый',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/happy.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/happy.mp3',
      },
      {
        id: 63,
        spelling: 'angry',
        translating: 'сердитый',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/angry.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/angry.mp3',
      },
      {
        id: 64,
        spelling: 'sad',
        translating: 'грустный',
        imageSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/sad.jpg',
        soundSrc:
          'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/sad.mp3',
      },
    ],
  },
];
