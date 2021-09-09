/* eslint-disable consistent-return */
export default class RecentScores {
  static getRecentScores() {
    const recentScores = async () => {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7KZzvMgheMijgkb7Br8c/scores/',
        {
          method: 'GET',
        },
      );

      try {
        const leaderBoard = await response.json();
        return leaderBoard.result;
      } catch (error) {
        console.log('There is an error:', error);
      }
    };

    return recentScores();
  }
}
