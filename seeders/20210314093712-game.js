'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'games',
      [
        {
          title: 'Rock Papper Scissors',
          description:
            'Rock paper scissors is a hand game usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). A simultaneous, zero-sum game, it has only two possible outcomes: a draw, or a win for one player and a loss for the other. A player who decides to play rock will beat another player who has chosen scissors ("rock crushes scissors" or sometimes "blunts scissors"), but will lose to one who has played paper ("paper covers rock"); a play of paper will lose to a play of scissors ("scissors cuts paper"). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie. The type of game originated in China and spread with increased contact with East Asia, while developing different variants in signs over time.',
          image: 'https://miro.medium.com/max/800/1*8du96SQUQ0NlWmWvVu20Zw.png',
          link: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Block Champ',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'https://games.aarp.org/games/lets-block-champ',
          image: 'https://aarpcloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-games/LetsBlockChamp/0.13/build/resources/assets/thumbs/screenshot.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Anagram',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'https://games.aarp.org/games/anagram-crossword',
          image: 'https://aarpcloud.cdn.arkadiumhosted.com/arenaxstorage-blob/arenax-games/bestForPuzzleAnagramDailyCrossword/0.19/assets/thumbs/screenshot.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Skribbl',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'https://skribbl.io/',
          image: 'https://skribbl.io/res/thumbnail.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Spyfall',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'https://spyfall.adrianocola.com/',
          image: 'https://exlt.files.wordpress.com/2017/03/screen-shot-2017-03-02-at-11-26-14.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Slitherio',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'http://www.crazygames.com/game/slitherio',
          image: 'http://slither.io/s/fbthumb3.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Mini Giants',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'https://www.crazygames.com/game/minigiants-io',
          image: 'https://images.crazygames.com/games/minigiants-io/cover-1584553354815.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Zombie Royale',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: 'https://www.crazygames.com/game/zombsroyaleio',
          image: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Yu Gi Oh',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: '#',
          image: 'https://iogames.space/sites/default/files/iogames-01.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Futsal',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: '#',
          image: 'https://i1.wp.com/danilofreire.com/wp-content/uploads/2020/10/Game-Futsal-Terbaik-Indoor-Soccer-2019.jpg?resize=720%2C405&ssl=1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Sepak bola',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: '#',
          image: 'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/08/23/3096159796.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Tank',
          description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: '#',
          image: 'https://m.media-amazon.com/images/M/MV5BZWY3MDA3YmEtNDY2Yi00NDFhLTg0NjAtOTZhZWFkNDNiM2NkXkEyXkFqcGdeQXVyNDg4MTIzNzk@._V1_.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('games', null, {});
  },
};
