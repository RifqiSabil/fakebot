const question = document.getElementById("question");
const answer = document.getElementById("answer");
const loading = document.getElementById("loading");
const container = document.getElementsByClassName("container");

let init = 0;

answer.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      send();
    }
  });

const botSay = (data) => {
    return[`Hello, I am a Fake Bot, could you tell me your name, please? 😁`, 
    `Hello ${data?.name}, could you tell me your age? 🫡`, 
    `I see, so you're ${data?.age} years old, then could you tell me your hobby? 🙂`, 
    `Hahaha I love ${data?.hobby} too. Do you have a boy/girlfriend? 😏`, 
    `You said "${data?.spouse}"? Seriously? 🫠 Okay thank you ${userAns[0]} for coming, hopefully we can do ${userAns[2]} together! 😊`];
}

let userAns = [];

if(init%5 == 0){
question.innerHTML = botSay()[0];
console.log("The bot has started...");
}

function send() {
    if(answer.value.length < 1) return  alert("Please write down your answer first🥺");
    init++
    loading.style.display = "block";
    container[0].style.filter = "blur(8px)";
    console.log(`init = ${init%5}`);
    if(init%5 == 1){
        console.log({userName: answer.value});
        bot({name: answer.value});
        userAns.push(answer.value);
    }
    else if(init%5 == 2){
        console.log({userAge: answer.value});
        bot({age: answer.value});
        userAns.push(answer.value);
    }
    else if(init%5 == 3){
        console.log({userHobby: answer.value});
        bot({hobby: answer.value});
        userAns.push(answer.value);
    }
    else if(init%5 == 4){
        console.log({userSpouse: answer.value});
        bottoEnd({spouse: answer.value});
        userAns.push(answer.value);
    }
    else{
        botEnd();
        //to empty the answer array
        userAns = [];
    }
    console.log(userAns);
}


//we can only use userArray to save answer than the code below
function bot(userAnswer){
    setTimeout(() => {
        question.innerHTML = botSay(userAnswer)[init%5];
        loading.style.display = "none";
        container[0].style.filter = "none";
        answer.value = '';
    }, 1000);
}

function bottoEnd(userAnswer){
    setTimeout(() => {
        question.innerHTML = botSay(userAnswer)[init%5];
        loading.style.display = "none";
        container[0].style.filter = "none";
        answer.value = "Okay you`re welcome❤️";
    }, 1000);
}

function botEnd() {
    console.log("The bot has ended..."); 
    //to reload window, even it's not needed in this program cause it's userAns = [] and we've used modulus %
    setTimeout(() => {
        window.location.reload();
        loading.style.display = "none";
        container[0].style.filter = "none";
        question.innerHTML = botSay()[0];
    }, 1000);
}