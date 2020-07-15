document.addEventListener("keydown", function(event){
	if (event.keyCode == 37) {
      let box4 = document.getElementById("box4")
      box4.style.left = box4.getBoundingClientRect().left - 50 + 'px'
	}

	else if (event.keyCode == 39) {
      let box4 = document.getElementById("box4")
      box4.style.left = box4.getBoundingClientRect().left + 50 + 'px'
	}
})


let ballX = 300
let ballY = 100

let ballMoveX = -5
let ballMoveY = 5

let scoreNum = 0

function moveBall(){
	let ball = document.getElementById("ball")
	ballX = ballX + ballMoveX
	ballY = ballY + ballMoveY
	ball.style.left = ballX + 'px'
	ball.style.top = ballY + 'px'
}


function collisionMovingBox() {
	let box = document.getElementById("box4").getBoundingClientRect()
	let ball = document.getElementById("ball").getBoundingClientRect()

	//console.log(ball.getBoundingClientRect().top)
	//console.log(box.getBoundingClientRect().top)

	if(ball.right > document.body.offsetWidth || ball.left<0){
		ballMoveX = -ballMoveX
	}

	else if(ball.top<0){
		ballMoveY = -ballMoveY
	}

	else if(ball.top + 60 > box.top ){
		if(ball.left+25>box.left && ball.right-25<box.right){
			ballMoveY = -ballMoveY

			let score = document.getElementsByTagName("h3")[0]
			scoreNum = scoreNum + 1
			score.innerHTML = "Score: " + scoreNum

		}

		else{

			let gameOver = document.getElementsByTagName("h1")[0]
			gameOver.innerHTML = "Game Over"
			gameOver.className = "gameOver"

			clearInterval(moveBallInterval)
			clearInterval(collisionMovingBoxInterval)
			document.body.className = "bgred"
			ballX = 100
			ballY = 100


			setTimeout(function() {
				document.body.className = ""
				moveBallInterval = setInterval(moveBall, 100)
				collisionMovingBoxInterval = setInterval(collisionMovingBox, 100)
				gameOver.innerHTML = "Pong Game"
				gameOver.className = ""

				
				let score = document.getElementsByTagName("h3")[0]
				scoreNum = 0
				score.innerHTML = "Score: " + scoreNum
			}, 5000)



		}
	}

}







let moveBallInterval = setInterval(moveBall, 50)
let collisionMovingBoxInterval = setInterval(collisionMovingBox, 100)



















