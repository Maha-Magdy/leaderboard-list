/* eslint-disable consistent-return */
export default class NewRecord {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  async addNewRecord() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7KZzvMgheMijgkb7Br8c/scores/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: this.name, score: this.score }),
      },
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      console.log('There is an error:', error);
    }
  }
}
