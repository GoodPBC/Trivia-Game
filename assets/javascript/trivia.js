	var triviaQuestions = [{
		triviaQuestion: "Who played the main character of Pink?",
		questionAnswers: ['Bob Geldof', 'Roy Harper', 'Syd Barrett', 'Sting'],
		correctAnswer: 0,
		victoryPic: "/*URl for winning pic*/",
	},	{
		triviaQuestion: "Who did Roger Waters originally want to play the role of Pink?",
		questionAnswers: ['his brother-in-law', 'himself', 'Roger Daltrey<', 'David Bowie'],
		correctAnswer: 1,
		victoryPic: "/*URl for winning pic*/",
	},	{
		triviaQuestion: "Who directed 'The Wall'?",
		questionAnswers: ['Stanley Kubrick', 'John Sayles', 'Alan Parker', 'Stephen Hopkins'],
		correctAnswer: 2,
		victoryPic: "/*URl for winning pic*/",
	},	{
		triviaQuestion: "Who was the film's Executive Producer?",
		questionAnswers: ['Roger Waters', 'James Guthrie', 'Bob Ezrin', 'Steve O\'Rourke'],
		correctAnswer: 3,
		victoryPic: "/*URl for winning pic*/",
	},	{ 
	}];



	//sets counter to 30 seconds
	var answerTimer = 5;

		//sets the interval at 1 second and runs decrement each second.
	function gameClock() {
		counter = setInterval(decrement, 1000);
		
		//decreases answer timer by one and shos answerTimer in "#timer"
		function decrement(){
			answerTimer--;

			$("#timer").html('<h2 class="text-center">' + answerTimer + '</h2>');

			if (answerTimer === 0) {
				stop();
				resetTimer();

				console.log('Time is Up!');
			}
		}

		function stop(){
			clearInterval(counter);
		}
	}

	function resetTimer () {
		answerTimer = 5;
	}
			
	
	function userGuess () {

	}

		$('#gameTimer').hide();
			$('#btnStart').on("click", function() {
				$('#btnStart').hide();
				$('#gameTimer').show();
				
		});


		$('#questionDiv').hide();

			$('#btnStart').on("click", showQuestion);
				
		


		function showQuestion () {
			$('#gameQuestion').html('<h2>' + triviaQuestions[0].triviaQuestion + '</h2>');
				console.log(triviaQuestions[0].triviaQuestion);
				console.log(triviaQuestions[0].questionAnswers[0]);
				$('#answerOne').html('<button class="btn btn-primary btn-block ">' + triviaQuestions[0].questionAnswers[0] + '</button>');
				$('#answerTwo').html('<button class="btn btn-primary btn-block">' + triviaQuestions[0].questionAnswers[1] + '</button>');
				$('#answerThree').html('<button class="btn btn-primary btn-block">' + triviaQuestions[0].questionAnswers[2] + '</button>');
				$('#answerFour').html('<button class="btn btn-primary btn-block">' + triviaQuestions[0].questionAnswers[3] + '</button>');
				$('#questionDiv').show();
				$('.btn-primary').on("click", function(){
					// if (this.val == triviaQuestions.correctAnswer) {
					console.log('you are correct');
			
				});
				gameClock();
		}
 