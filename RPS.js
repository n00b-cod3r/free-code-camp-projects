
//JavaScript Code
	let i = 0	//Global Variables
	const gameBegin = window.document.getElementById("start-game");
	const chosePlayerOption = window.document.getElementById("chose-player-option");
	const playerBtn = window.document.getElementById("player-btn");
	const ruleBackSingle = window.document.getElementById("ruleBackSingle");
	const ruleBackMulti = window.document.getElementById("ruleBackMulti");
	const ruleForward = window.document.getElementById("ruleForward");
	
	function load() {
		const images = ["image2.png", "image3.jpg", "image4.jpg"];
		{ //block of expression statements
			window.document.body.style.backgroundImage = `url(${images[i]})`;
			i = (i + 1) % images.length;
		};
	}

	setInterval(load, 5000); //Repeating background images


	//Game Starts
	gameBegin.addEventListener("click", () => {
		window.document.getElementById("player-box").style.display = "block";
		setTimeout(startGameHide, 1000);
	});

	//Hiding start-game button function
	function startGameHide() {
		gameBegin.style.display = "none";
	}

	//player Options
	playerBtn.addEventListener("click", () => {
		{//block of expression statements
			if(chosePlayerOption.value == "Single Player") {
				window.document.getElementById("singlePlayer").style.display = "block";
				window.document.getElementById("rules").style.display = "block";
				window.document.getElementById("player-box").style.display = "none";
			}
			else {
				window.document.getElementById("multiPlayer").style.display = "block";
				window.document.getElementById("rules").style.display = "block";
				window.document.getElementById("player-box").style.display = "none";
			}
		};
	});

	//singlePlayerBack button
	ruleBackSingle.addEventListener("click", () => {
		window.document.getElementById("player-box").style.display = "block";
		window.document.getElementById("rules").style.display = "none";
		window.document.getElementById("singlePlayer").style.display = "none";
	});

	//multiPlayerBack button
	ruleBackMulti.addEventListener("click", () => {
		window.document.getElementById("player-box").style.display = "block";
		window.document.getElementById("rules").style.display = "none";
		window.document.getElementById("multiPlayer").style.display = "none";
	});

	//singlePlayerForward button
	ruleForward.addEventListener("click", () => {
		window.document.getElementById("single-player-interface").style.display = "block";
		window.document.getElementById("rules").style.display = "none";
	});

	//multiPlayerForward button
	ruleForward2.addEventListener("click", () => {
		window.document.getElementById("multi-player-interface").style.display = "block";
		window.document.getElementById("rules").style.display = "none";
	});

	//declaring global variables
	let playerScore = 0;
	let computerScore = 0;

	let playerChooses = "";
	let computerResult = null;

	const playerClickRock = window.document.getElementById("Rock");
	const playerClickPaper = window.document.getElementById("Paper");
	const playerClickScissor = window.document.getElementById("Scissor");
	
	const pscore = window.document.getElementById("playerScore");
	const cscore = window.document.getElementById("computerScore");

	//player click function
	playerClickRock.addEventListener("click", () => {
		{//block of expression statements
			if(playerScore < 3 && computerScore < 3) {
				playerChooses = playerClickRock.textContent;
				computerResult = getComputerResult();				//calling to getComputerResult() function
				getSinglePlayerResult();
				window.document.getElementById("computerChoosen").textContent = computerResult;
			}
			else {
				let checkResult = singlePlayerCheckResult();
				if(checkResult) {
						window.document.getElementById("single-player-interface").style.display = "none";
						window.document.getElementById("single-player-result").style.display = "block";
						window.document.getElementById("computer-won").style.display = "block";
				}
				else {
						window.document.getElementById("single-player-interface").style.display = "none";
						window.document.getElementById("single-player-result").style.display = "block";
						window.document.getElementById("player-won").style.display = "block";
				}
			}
		};
	});
	
	//player click on paper
	playerClickPaper.addEventListener("click", () => {
		{//block of expression statements
			if(playerScore < 3 && computerScore < 3) {
				playerChooses = playerClickPaper.textContent;
				computerResult = getComputerResult();				//calling to getComputerResult() function
				getSinglePlayerResult();
				window.document.getElementById("computerChoosen").textContent = computerResult;
			}
			else {
				let checkResult = singlePlayerCheckResult();
					if(checkResult) {
						window.document.getElementById("single-player-interface").style.display = "none";
						window.document.getElementById("single-player-result").style.display = "block";
						window.document.getElementById("computer-won").style.display = "block";
					}
					else {
						window.document.getElementById("single-player-interface").style.display = "none";
						window.document.getElementById("single-player-result").style.display = "block";
						window.document.getElementById("player-won").style.display = "block";
					}
			}
		};
	});

	//player click on scissor
	playerClickScissor.addEventListener("click", () => {
		{//block of expression statements
			if(playerScore < 3 && computerScore < 3) {
				playerChooses = playerClickScissor.textContent;
				computerResult = getComputerResult();				//calling to getComputerResult() function
				getSinglePlayerResult();
				window.document.getElementById("computerChoosen").textContent = computerResult;
			}
			else {
				let checkResult = singlePlayerCheckResult();
				if(checkResult) {
					window.document.getElementById("single-player-interface").style.display = "none";
					window.document.getElementById("single-player-result").style.display = "block";
					window.document.getElementById("computer-won").style.display = "block";
				}
 				else {
					window.document.getElementById("single-player-interface").style.display = "none";
					window.document.getElementById("single-player-result").style.display = "block";
					window.document.getElementById("player-won").style.display = "block";
				}
			}
		};
	});

	//function for getting computer result
	function getComputerResult() {
		const values = ["Rock", "Paper", "Scissor"];
		let result = "";

		{//block of expression statements
			result = values[Math.floor(Math.random() * values.length)];
		};
		return result;
	}

	function getSinglePlayerResult() {

		{//block of expressions statements
			if(playerChooses === "Rock") {
				if(computerResult === "Paper") {
					++computerScore;
					cscore.textContent = computerScore;
				}
				else if(computerResult === "Scissor") {
					++playerScore;
					pscore.textContent = playerScore;
				}
				else;
			}
			else if(playerChooses === "Paper") {
				if(computerResult === "Scissor") {
					++computerScore;
					cscore.textContent = computerScore;
				}
				else if(computerResult === "Rock") {
					++playerScore;
					pscore.textContent = playerScore;
				}
				else;
			}
			else {
				if(computerResult === "Rock") {
					++computerScore;
					cscore.textContent = computerScore;
				}
				else if(computerResult === "Paper") {
					++playerScore;
					pscore.textContent = playerScore;
				}
				else;
			}
					
		};
	}

	
	//getting single player result
	function singlePlayerCheckResult() {
		{//block of expression statements
			if(playerScore < computerScore)
				return true;
			else
				return false;
		};
	}


	//Designing reset function
	function reset() {
		playerScore = 0;		// Initializing player score to zero
		computerScore = 0;		// Initializing computer score to zero
		playerChooses = "";		// Initializing player chosen to empty string or null
		player1Score = 0;
		player2Score = 0;
		player1Option = null;
		player2Option = null;

		window.document.getElementById("rules").style.display = "block";
		window.document.getElementById("single-player-result").style.display = "none";
		window.document.getElementById("multi-player-result").style.display = "none";
		window.document.getElementById("multi-player1-result").style.display = "none";
		window.document.getElementById("multi-player2-result").style.display = "none";
		window.document.getElementById("computer-won").style.display = "none";
		window.document.getElementById("player-won").style.display = "none";
		window.document.getElementById("computerChoosen").textContent = '0';
		
		cscore.textContent = '0';
		pscore.textContent = '0';
		p1score.textContent = '0';
		p2score.textContent = '0';
	}


	/*		Multi Player 		*/

	//declaring global variables for multi player

	let player1Score = 0;
	let player2Score = 0;

	let player1Option = null;
	let player2Option = null;

	const p1score = window.document.getElementById("player1Score");
	const p2score = window.document.getElementById("player2Score");


	//player1 clicks on rock
	p1_Rock.addEventListener("click", () => {

		{//block of expression statements
			if(player1Score < 3 && player2Score < 3) {
				player1Option = "Rock";
				window.document.getElementById("player1-multi").style.display = "none";
				window.document.getElementById("player2-multi").style.display = "block";
			}
			else {
				let checkResult2 = multiPlayerCheckResult();
				if(checkResult2) {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player1-result").style.display = "block";
				}
				else {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player2-result").style.display = "block";
				}
			}
		};
	});


	//player1 clicks on paper
	p1_Paper.addEventListener("click", () => {

		{//block of expression statements
			if(player1Score < 3 && player2Score < 3) {
				player1Option = "Paper";
				window.document.getElementById("player1-multi").style.display = "none";
				window.document.getElementById("player2-multi").style.display = "block";
			}
			else {
				let checkResult2 = multiPlayerCheckResult();
				if(checkResult2) {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player1-result").style.display = "block";
				}
				else {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player2-result").style.display = "block";
				}
			}
		};
	});

	//player1 clicks on scissor
	p1_Scissor.addEventListener("click", () => {

		{//block of expression statements
			if(player1Score < 3 && player2Score < 3) {
				player1Option = "Scissor";
				window.document.getElementById("player1-multi").style.display = "none";
				window.document.getElementById("player2-multi").style.display = "block";
			}
			else {
				let checkResult2 = multiPlayerCheckResult();
				if(checkResult2) {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player1-result").style.display = "block";
				}
				else {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player2-result").style.display = "block";
				}
			}
		};
	});

	//player2 clicks on rock
	p2_Rock.addEventListener("click", () => {
		
		{//block of expression statements
			if(player1Score < 3 && player2Score < 3) {
				player2Option = "Rock";
				checkMulti();			//invocation of checkMulti() function
				window.document.getElementById("player1-multi").style.display = "block";
				window.document.getElementById("player2-multi").style.display = "none";
			}
			else {
				let checkResult2 = multiPlayerCheckResult();
				if(checkResult2) {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player1-result").style.display = "block";
				}
				else {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player2-result").style.display = "block";
				}
			}
		};
	});

	//player2 clicks on paper
	p2_Paper.addEventListener("click", () => {
		
		{//block of expression statements
			if(player1Score < 3 && player2Score < 3) {
				player2Option = "Paper";
				checkMulti();			//invocation of checkMulti() function
				window.document.getElementById("player1-multi").style.display = "block";
				window.document.getElementById("player2-multi").style.display = "none";
			}
			else {
				let checkResult2 = multiPlayerCheckResult();
				if(checkResult2) {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player1-result").style.display = "block";
				}
				else {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player2-result").style.display = "block";
				}
			}
		};
	});

	//player2 clicks on scissor
	p2_Scissor.addEventListener("click", () => {
		
		{//block of expression statements
			if(player1Score < 3 && player2Score < 3) {
				player2Option = "Scissor";
				checkMulti();			//invocation of checkMulti() function
				window.document.getElementById("player1-multi").style.display = "block";
				window.document.getElementById("player2-multi").style.display = "none";
			}
			else {
				let checkResult2 = multiPlayerCheckResult();
				if(checkResult2) {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player1-result").style.display = "block";
				}
				else {
					window.document.getElementById("multi-player-interface").style.display = "none";
					window.document.getElementById("multi-player-result").style.display = "block";
					window.document.getElementById("multi-player2-result").style.display = "block";
				}
			}
		};
	});


	//designing checkMulti() function
	function checkMulti() {

		{//block of expressions statements
			if(player1Option === "Rock") {
				if(player2Option === "Paper") {
					++player2Score;
					p2score.innerHTML = player2Score;
				}
				else if(player2Option === "Scissor") {
					++player1Score;
					p1score.innerHTML = player1Score;
				}
				else;						//No one gets point
			}
			else if(player1Option === "Paper") {
				if(player2Option === "Scissor") {
					++player2Score;
					p2score.innerHTML = player2Score;
				}
				else if(player2Option === "Rock") {
					++player1Score;
					p1score.innerHTML = player1Score;
				}
				else;						//No one gets point
			}
			else {
				if(player2Option === "Rock") {
					++player2Score;
					p2score.innerHTML = player2Score;
				}
				else if(player2Option === "Paper") {
					++player1Score;
					p1score.innerHTML = player1Score;
				}
				else;						//No one gets point
			}
		};
	}

	//designing multiPlayerCheckResult() function
	function multiPlayerCheckResult() {
		if(player1Score < player2Score)
			return false;
		else
			return true;
	}
