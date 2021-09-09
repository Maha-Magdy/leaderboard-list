export default class RecentScores {
  static getRecentScores() {
    // const recentScores = [
    //   { name: "Name", score: 100 },
    //   { name: "Name", score: 20 },
    //   { name: "Name", score: 50 },
    //   { name: "Name", score: 78 },
    //   { name: "Name", score: 125 },
    //   { name: "Name", score: 77 },
    //   { name: "Name", score: 42 },
    // ];

    const recentScores = async () => {
      const response = await fetch(
        "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7KZzvMgheMijgkb7Br8c/scores/",
        {
          method: "GET",
        }
      );

      try {
        const leaderBoard = await response.json();
        console.log("Hello", leaderBoard.result);
        return leaderBoard.result;
      } catch (error) {
        console.log("There is an error:", error);
      }
    };

    return recentScores();
  }
}
