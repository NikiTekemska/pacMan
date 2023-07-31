document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById("score");
    const remainingLives = document.getElementById('lives');
    const width = 28;
    let score = 0;
    let pacManLives = 3;
    

    const layout =
        [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
            1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
            1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
            1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
            1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
        ]
    const squares = [];
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            if(layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if(layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if(layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if(layout[i] === 3) {
                squares[i].classList.add('power')
            } else if(layout[i] === 4) {
                squares[i].classList.add('empty')
            }
        }
    }
    createBoard();

    let pacManIndex = 490;
    squares[pacManIndex].classList.add('pac-man');


    function pacManMoving(e) {
        squares[pacManIndex].classList.remove('pac-man')

        switch (e.keyCode) {
            case 37:
                if(!squares[pacManIndex - 1].classList.contains('wall')) {
                    pacManIndex -= 1;
                    if(squares[pacManIndex].classList.contains('pac-dot')){
                        score++;
                        squares[pacManIndex].classList.remove('pac-dot')
                    }
                }
                if((pacManIndex - 1) === 363){
                    pacManIndex = 391;
                }
                break;
            case 38:
                if (pacManIndex - width >= 0 && !squares[pacManIndex - width].classList.contains('wall') ) {
                    pacManIndex -= width;
                    if(squares[pacManIndex].classList.contains('pac-dot')){
                        score++;
                        squares[pacManIndex].classList.remove('pac-dot')
                    }
                };
                break;
            case 39:
                if((pacManIndex+1) === 392){
                    pacManIndex = 364;
                }
                if (!squares[pacManIndex + 1].classList.contains('wall')) {
                    pacManIndex += 1;
                    if(squares[pacManIndex].classList.contains('pac-dot')){
                        score++;
                        squares[pacManIndex].classList.remove('pac-dot')
                    }
                };
                
                break;
            case 40:
                if (pacManIndex + width < width * width && !squares[pacManIndex + width].classList.contains('wall')) {
                    pacManIndex += width;
                    if(squares[pacManIndex].classList.contains('pac-dot')){
                        score++;
                        squares[pacManIndex].classList.remove('pac-dot')
                    }
                };
                break;


        }
        scoreDisplay.innerText = score;
        squares[pacManIndex].classList.add('pac-man');
        powerPelletEaten();
        currentLive();
        checkForWin();
    }
    document.addEventListener('keyup',pacManMoving);

    function powerPelletEaten(){
        if (squares[pacManIndex].classList.contains('power')){
            score +=10;
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScaredGhost, 10000);
            squares[pacManIndex].classList.remove('power')
        }
    }

    function unScaredGhost(){
        ghosts.forEach(ghost => ghost.isScared = false);
    }

    class Ghost {
        constructor(className, startIndex, speed){
            this.className = className
            this.startIndex = startIndex
            this.speed = speed;
            this. currentIndex = startIndex;
            this.isScared = false;
            this.timeId =NaN;
        }
    }
      let ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 400),
        new Ghost('inky', 351, 300),
        new Ghost('clyde', 379, 500)
     ]

     ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
        squares[ghost.currentIndex].classList.add('ghost');
        
     });

     ghosts.forEach(ghost => moveGhost(ghost));


     function moveGhost(ghost){
        const directions = [-1, +1, +width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];
        
        ghost.timeId = setInterval(function() {
            if(!squares[ghost.currentIndex + direction].classList.contains('ghost') && !squares[ghost.currentIndex + direction].classList.contains('wall')){
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove('ghost','scared-ghost');

                ghost.currentIndex += direction;
                squares[ghost.currentIndex].classList.add('ghost', ghost.className)
            } else {
                direction = directions[Math.floor(Math.random() * directions.length)];
            }

            if(ghost.isScared){
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')){
                squares[ghost.currentIndex].classList.remove(ghost.className,'ghost', 'scared-ghost');
                score += 100;
                ghost.currentIndex = ghost.startIndex;
                squares[ghost.currentIndex].classList.add('ghost',ghost.className)
            }

            currentLive()

        }, ghost.speed)
     }

     function currentLive(){
        if(squares[pacManIndex].classList.contains('ghost') && !squares[pacManIndex].classList.contains('scared-ghost')){
            squares[pacManIndex].classList.remove('pac-man');
            squares[490].classList.add('pac-man');
            pacManLives -=1;
            remainingLives.innerText = pacManLives;
        }
        if(pacManLives === 0) {
            ghosts.forEach(ghost => clearInterval(ghost.timeId));
            document.removeEventListener('keyup', pacManMoving);
            alert("Game over!")

        }

        
     }

     function checkForWin(){
        if (score === 274){
            ghosts.forEach(ghost => clearInterval(ghost.timeId));
            document.removeEventListener('keyup', pacManMoving);
            setTimeout(function () {alert("You have won!");}, 500) 
        }
     }
})
