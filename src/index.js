/* eslint-disable no-plusplus */
import "./css/style.css";
import NewRecord from "./new-record.js";
import RecentScores from "./recent-scores.js";

const recentScoresList = document.getElementById("recent-scores-list");
const loadingSpinner = document.getElementById("loading-spinner");

const getRecentScores = () => {
  recentScoresList.innerHTML = "";
  loadingSpinner.style.display = "block";
  recentScoresList.style.display = "none";

  RecentScores.getRecentScores().then((leaderBoardList) => {
    for (let i = 0; i < leaderBoardList.length; i++) {
      const li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          `${leaderBoardList[i].user}: ${leaderBoardList[i].score}`
        )
      );
      recentScoresList.appendChild(li);
    }

    loadingSpinner.style.display = "none";
    recentScoresList.style.display = "block";
  });
};

window.addEventListener("load", getRecentScores());

const refreshList = document.getElementById("refresh-list");
refreshList.addEventListener("click", () => {
  getRecentScores();
});

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
