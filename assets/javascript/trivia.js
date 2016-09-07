<script>
	//sets counter to 30 seconds
		var answerTimer = 30;

		//sets the interval at 1 second and runs decrement each second.
		function gameClock() {
			counter = setInterval(decrement, 1000);
		}
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

		function resetTimer () {
			answerTimer = 30;
		}
		//runs the game clock
		// gameClock();



		$('#gameTimer').hide();
			$('#btnStart').on("click", function() {
				$('#btnStart').hide();
				$('#gameTimer').show();
				gameClock();
			});


	</script>