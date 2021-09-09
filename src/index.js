/* eslint-disable no-plusplus */
import "./css/style.css";
import NewRecord from "./new-record.js";
import RecentScores from "./recent-scores.js";

function getRecentScores() {
  const recentScoresList = document.getElementById("recent-scores-list");
  const ul = document.createElement("ul");
  const recentScores = RecentScores.getRecentScores();
  for (let i = 0; i < recentScores.length; i++) {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `${recentScores[i].name}: ${recentScores[i].score}`
      )
    );
    ul.appendChild(li);
  }

  recentScoresList.appendChild(ul);
}

window.addEventListener("load", getRecentScores());

const name = document.getElementById("name");
const score = document.getElementById("score");
const submitNewScore = document.getElementById("submit-new-score");

submitNewScore.addEventListener("click", (e) => {
  e.preventDefault();

  if (name.value !== "" && score.value !== "") {
    const newRecord = new NewRecord(name.value, score.value);
    newRecord.addNewRecord();
    name.value = null;
    score.value = null;
  }
});
