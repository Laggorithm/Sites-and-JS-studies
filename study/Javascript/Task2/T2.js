

//Task_1


//Task_10
const candidates = [];

function Candidates(){
  const amount = prompt("Enter number of candidates:");
  for (let i = 0; i < amount; i++) {
    const name = prompt(`Enter name of candidate ${i + 1}:`);
    candidates.push({Name: name, votes: 0, id : i});
  }
  console.log(candidates);
}

function Voting(){
  Candidates();
  const voters = prompt("Enter number of voters:");
  for (let i = 0; i < voters; i++) {
    const vote = prompt("Enter candidate Name to vote for:");
    const candidate = candidates.find(c => c.Name === vote);
    if (candidate) {
      candidate.votes += 1;
    } else {
      alert("Candidate not found. Vote not counted.");
    }
  }
  candidates.sort((a, b) => b.votes - a.votes);
  let result = `Winner: ${candidates[0].Name} with ${candidates[0].votes} votes <br>All candidates:\n`;
  candidates.forEach(c => {
    result += `<br> ${c.Name}: ${c.votes} votes `;
  }); 
  document.querySelector("#voting").innerHTML = result;

}