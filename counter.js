let count = 0; 
let totalRound = 0;


function increment(){
    count++;
    document.getElementById("current-round").innerText = count;

    if(count==108){
        count=0;
    document.getElementById("current-round").innerText = count;
        totalRound++;
    document.getElementById("total-round").innerText = totalRound;
    celebrate();

    if(totalRound%16 == 0)
        fireworksCelebration();
    }
}


function decrement(){
    if(count==0){
        alert("count is already 0!")
    }
    else{
    count--;

    document.getElementById("current-round").innerText = count;
    }
}




    function clearFunc(){
    count = 0;
            document.getElementById("current-round").innerText = count;
    }

    function save(){
        let msg = document.getElementById("welcome");
        msg.innerText += count + "-";
        count = 0;
            document.getElementById("current-round").innerText = count;

    }

    function celebrate() {
  // Burst confetti in the center
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Optional: Add more bursts from different angles
  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.1, y: 0.8 }
    });
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { x: 0.9, y: 0.8 }
    });
  }, 300);
};

function totalIncrement(){
    totalRound++;
    document.getElementById("total-round").innerText = totalRound;
    celebrate();
    if(totalRound%16 == 0)
        fireworksCelebration();
}

function totalDecrement(){

    if(totalRound==0){
        alert(" Total count is already 0!")
    }
    else{
    totalRound--;

    document.getElementById("total-round").innerText = totalRound;
    }

}

function totalClear(){
    totalRound=0;
    document.getElementById("total-round").innerText = totalRound;
}

function fireworksCelebration(repeat = 5) {
  let count = 0;

  function blast() {
    // Flash effect (optional)
    document.body.style.backgroundColor = 'white';
    setTimeout(() => {
      document.body.style.backgroundColor = '';
    }, 80);

    // Loud particle burst in center
    confetti({
      particleCount: 60,
      spread: 160,
      startVelocity: 90,
      ticks: 50,
      origin: {
        x: 0.5 + (Math.random() - 0.5) * 0.2,
        y: 0.7 + (Math.random() - 0.5) * 0.2
      },
      colors: ['#ff0000', '#ffff00', '#ffffff']
    });

    // Repeat with delay for firecracker sequence
    count++;
    if (count < repeat) {
      setTimeout(blast, 300 + Math.random() * 200); // delay between blasts
    }
  }

  blast();
}