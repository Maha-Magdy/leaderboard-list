export default class NewRecord {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  async addNewRecord() {
    const response = await fetch(
      "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: this.name, score: this.score }),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("There is an error:", error);
    }
  }
}
