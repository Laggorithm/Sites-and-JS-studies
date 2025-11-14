//Task6
function RollD6() {

  //randomize number from 1 to 6 and save it to variable, then print out
  const d6 = Math.floor(Math.random() * 6) + 1;
  const ul = document.querySelector("#d6-list");
  const li = document.createElement("li");
  li.textContent = "You rolled a " + d6;
  ul.appendChild(li);
}

//Task_9
function RandomEvenNumbers(){
  const numbers = [];
  const evenNumbers = [];
  //randomize numbers in to numbers list first
  while (numbers.length < 10) {
    const randNum = Math.floor(Math.random() * 100) + 1;
    if (!numbers.includes(randNum)) {
      numbers.push(randNum);
    }
  }
  //filter even numbers
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  document.querySelector("#randomEvens").innerHTML = "Random Numbers: " + numbers.join(", ") + "<br>Even Numbers: " + evenNumbers.join(", ");
}

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