import "./css/style.css";
import { default as NewRecord } from "./new-record.js";
import RecentScores from "./recent-scores.js";

window.addEventListener("load", getRecentScores());

function getRecentScores() {
  const recentScoresList = document.getElementById("recent-scores-list");
  let ul = document.createElement("ul");
  const recentScores = RecentScores.getRecentScores();
  console.log("Hey Baby :D", RecentScores.getRecentScores());
  for (let i = 0; i < recentScores.length; i++) {
    //   debugger;
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
