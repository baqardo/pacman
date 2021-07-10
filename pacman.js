//------------------------
/*
UKAŁD KODU

1. ZMIENNE GLOBALNE


2.KLASY
    -> function Specialpoint(x,y)
    -> function Wall(x,y,width,height)
    -> function Food(x,y)
    -> function PacMan()

3.FUNKCJE GŁOWNE
    -> function preload()
    -> function setup()
    -> function draw()

4.FUNKCJE POBOCZNE
    -> function keyPressed()
    -> function checkSpecialPoints()
    -> function foodCreator()
    -> function specialPointCreator()
    -> function wallCreator()


*/
//-----------------------
//-------------------------------------------------------------
//--zmienne globalne------------------------

var stan = 0;
var p; //Pacman
var scl = 25; //Rozmiar kratki
var eatSound;

var food = []; // tablica z jedzeniem
var foodImage; // obrazek jedzenia

var bigFood = [];
var bigFoodImage;

var Score = 0; // zdobyte punkty przez gracza
// zmienne przechowojaca diva score

var livesCounter = 3;

var factor_speed = 0.2; // droga przebyta przez pacmana za kazdym odswierzeniem obrazu
var frequency = 20; // czestotliwosc odswierzania
var pacman_Prawo;
var pacman_Lewo;
var pacman_Gora;
var pacman_Dol;
var pacman; // zmienna przechoujaca aktualny obrazek pacmana (obrazki wczytanie znajduja sie powyrzej^^^)

//-------------------------------------
//---------------------pacman--

var oldx = 0; //stary kierunek x
var oldy = 0; //stary kierunek y
var oldposx; // stary koordynat x wykorzystane aby pacmam nie stawal tylko szedl dalej
var oldposy; // stary koordynat y wykorzystane aby pacmam nie stawal tylko szedl dalej

//---------------------pacman--
//-------------------------------------

//-------------------------------------
//--------ghost1----------

var tab_specialpoints_for_ghost_1 = [];
var ghost_images = [ [], [], [], [] ];
var ghost_alt_img;
var ifScared = false;
var counter = 1;
var endCondicion = 0;
var howMany = 0;
var ghosts = [];
var hudGhostImage;

var tab_specialpoints = []; // tablica przechowujaca punkty w ktorych pacman moze skrecic o 90 stopni
var currentDirection = 2; // kierunek ostatnio wcisnietej strzalki
var expectedDirection = 2;
var boolSpecialPoint; // przechowuje 0 lub 1 - sprawdza czy pacman znajduje sie w specjalnym punkcie
var wall = []; // przechowuje sciany
//---zmienne globalne------------------------
//-------------------------------------------------------------

var gameOverBox = document.querySelector('.popup--gameover');
var winBox = document.querySelector('.popup--win');
var livesContener = document.querySelector('.lives');
var arrows = [
	document.querySelector('.arrows__button--up'),
	document.querySelector('.arrows__button--left'),
	document.querySelector('.arrows__button--down'),
	document.querySelector('.arrows__button--right')
];
livesContener.innerHTML = livesCounter;

//responsive
// var board = document.querySelector('#gameHolder');
// var screen_height = document.querySelector('html').clientHeight;
// var screen_width = document.querySelector('html').clientWidth;

// var board_width = 0;
// var board_height = 0;

// if (screen_height * 0.5 > screen_width) {
// 	board_height = screen_width * 0.95;
// 	board_width = board_height;
// } else {
// 	board_height = screen_height * 0.5;
// 	board_width = board_height;
// }

// board.style.width = board_width + 'px';
// board.style.height = board_height + 'px';

function checkResponsive() {
	if (document.querySelector('html').clientWidth <= 1000) {
		var board = document.querySelector('#gameHolder');
		var screen_height = document.querySelector('html').clientHeight;
		var screen_width = document.querySelector('html').clientWidth;

		var board_width = 0;
		var board_height = 0;

		if (screen_height * 0.5 > screen_width) {
			board_height = screen_width * 0.95;
			board_width = board_height;
		} else {
			board_height = screen_height * 0.5;
			board_width = board_height;
		}

		board.style.width = board_width + 'px';
		board.style.height = board_height + 'px';
	}
}
checkResponsive();
window.onresize = checkResponsive;
//--------------------------------------------------------
//klasy ---------------------------------

function sound(src) {
	this.sound = document.createElement('audio');
	this.sound.src = src;
	this.sound.setAttribute('preload', 'auto');
	this.sound.setAttribute('controls', 'none');
	this.sound.style.display = 'none';
	this.sound.volume = 0.1;
	document.body.appendChild(this.sound);
	this.play = function() {
		this.sound.play();
	};
	this.stop = function() {
		this.sound.pause();
	};
}

function Specialpoint(x, y) {
	this.x = x * scl;
	this.y = y * scl;
}

function Specialpoint_for_ghost(x, y, gora, prawo, dol, lewo) {
	this.x = x * scl;
	this.y = y * scl;

	this.gora = gora;
	this.prawo = prawo;
	this.dol = dol;
	this.lewo = lewo;
}

function Wall(x, y, width, height, lu, ru, rd, ld) {
	this.x = x * scl;
	this.y = y * scl;
	this.width = width * scl;
	this.height = height * scl;

	this.drawWall = function() {
		noStroke();
		//strokeWeight(1);
		//stroke('#FFF');
		var color = ownColor;
		fill(color);
		rect(this.x, this.y, this.width, this.height, lu, ru, rd, ld);
	};
}

function Food(x, y) {
	this.x = x * scl;
	this.y = y * scl;

	this.drawFood = function() {
		//fill(66, 110, 244);
		//rect(this.x, this.y);
		image(foodImage, this.x, this.y, scl, scl);
	};
}

function BigFood(x, y) {
	this.x = x * scl;
	this.y = y * scl;

	this.drawBigFood = function() {
		//fill(66, 110, 244);
		//rect(this.x, this.y);
		image(bigFoodImage, this.x, this.y, scl, scl);
	};
}

function PacMan() {
	// kalsa pacman
	this.Heart = '<img src="Images/heart.png" width="100" >';

	this.begin = function() {
		this.x = pacmanInfo[0] * scl;
		this.y = pacmanInfo[1] * scl;
		this.xspeed = pacmanInfo[2];
		this.yspeed = pacmanInfo[3];
	};

	this.update = function() // updejtuje pozycje pacmana
	{
		this.x = this.x + this.xspeed * scl * factor_speed;
		this.y = this.y + this.yspeed * scl * factor_speed;
		for (let i = 0; i < wall.length; i++) {
			if ((bol = p.colision(wall[i]) == 1)) break;
		}
		if (
			bol == 1 &&
			(p.xspeed > oldx || p.xspeed < oldx) &&
			(p.yspeed > oldy || p.yspeed < oldy) &&
			(oldposx == p.x && oldposy == p.y)
		) {
			p.dir(oldx, oldy);
			bol = 0;
		}
		// (aktualna x wspolrzedna pacmana , poczatkowy ogranicznik x , koncowy ogranicznik x)
		this.x = constrain(this.x, 0, width - scl); // ogranicza plansze (zeby pacman nie mogl wyjsc poza plansze)
		//this.y = constrain(this.y, 0, height - scl); jestem wyciszony
		this.jump();
	};

	this.show = function() // rysowanie pacmana
	{
		//fill(255, 204, 0);
		//image(pacman, this.x, this.y, scl, scl);
		//rect(this.x, this.y, scl, scl);
		if (stan < 3) {
			image(pacman, this.x, this.y, scl, scl);
			stan += 1;
			return;
		}
		if (stan >= 3 && stan < 5) {
			if (currentDirection == 1) image(pacman_GoraP, this.x, this.y, scl, scl);
			if (currentDirection == 2) image(pacman_PrawoP, this.x, this.y, scl, scl);
			if (currentDirection == 3) image(pacman_DolP, this.x, this.y, scl, scl);
			if (currentDirection == 4) image(pacman_LewoP, this.x, this.y, scl, scl);
			stan += 1;
			return;
		}
		if (stan >= 5 && stan < 9) {
			image(pacman_Zamkniety, this.x, this.y, scl, scl);
			stan += 1;
		}
		if (stan == 9) stan -= 9;
	};

	this.eat = function(pos) {
		if (this.x == pos.x && this.y == pos.y) {
			Score += 10;
			endCondicion++;
			pos.x = -1 * scl;
			pos.y = -1 * scl;
			eatSound.play();
		}
	};

	this.eatBig = function(pos) {
		if (this.x == pos.x && this.y == pos.y) {
			for (let i = 0; i < ghosts.length; i++) {
				ghosts[i].boo();
			}
			pos.x = -1 * scl;
			pos.y = -1 * scl;
			return 1;
		}
		return 0;
	};

	this.dir = function(
		x,
		y // zmienia kierunek poruszania sie pacmana -  w zaleznosci od wcisnietej strzalki
	) {
		oldx = this.xspeed;
		oldy = this.yspeed;
		this.xspeed = x;
		this.yspeed = y;
	};

	this.death = function(ghost) {
		for (var i = 1; i < 5; i++) {
			if (
				(this.x == ghost.x && this.y == ghost.y) ||
				(this.x == ghost.x && this.y == ghost.y - i * scl * (factor_speed - ghost.ownFactorSpeed)) ||
				(this.x == ghost.x && this.y == ghost.y + i * scl * (factor_speed - ghost.ownFactorSpeed)) ||
				(this.x == ghost.x - i * scl * (factor_speed - ghost.ownFactorSpeed) && this.y == ghost.y) ||
				(this.x == ghost.x + i * scl * (factor_speed - ghost.ownFactorSpeed) && this.y == ghost.y)
			) {
				if (ifScared && ghost.ownIfScared) {
					Score += 1000;
					ghost.x = -200;
					ghost.y = -200;
					ghost.ghostDeath = 1;
					break;
				}
			}
		}
	};

	this.colision = function(pos) {
		if (
			this.x + (scl - scl * factor_speed) >= pos.x &&
			this.x - (scl - scl * factor_speed) <= pos.x + pos.width - scl &&
			(this.y + (scl - scl * factor_speed) >= pos.y &&
				this.y - (scl - scl * factor_speed) <= pos.y + pos.height - scl)
		) {
			//if ((((this.x) >= (pos.x)) && ((this.x) <= (pos.x + pos.width - scl))) && (((this.y) >= (pos.y)) && ((this.y) <= (pos.y + pos.height - scl))))
			//if((this.y == pos.y && this.x == pos.x))
			if (this.xspeed == 1) {
				this.x = this.x - scl * factor_speed;
			}

			if (this.xspeed == -1) {
				this.x = this.x + scl * factor_speed;
			}

			if (this.yspeed == 1) {
				this.y = this.y - scl * factor_speed;
			}

			if (this.yspeed == -1) {
				this.y = this.y + scl * factor_speed;
			}
			return 1;
		}
		return 0;
	};

	this.jump = function() {
		if (currentDirection == 4 && this.x == 0) {
			this.x = 27 * scl;
		} else if (currentDirection == 2 && this.x == 27 * scl) {
			this.x = 0;
		}
	};
}

function Ghost(start_x, start_y, xs, type) {
	this.x = start_x * scl; //, (x,y)- pozycja stratowa
	this.y = start_y * scl;
	this.xspeed = xs; // kierunek  poruszania
	this.yspeed = 0;
	this.start = 0;
	this.oldx_ghost = 0; //stary kierunek x
	this.oldy_ghost = 0; //stary kierunek y
	this.oldposx_ghost; // stary koordynat x wykorzystane aby pacmam nie stawal tylko szedl dalej
	this.oldposy_ghost;
	this.ownIfScared = false;
	this.ownFactorSpeed = 0.2;
	this.oldFactorSpeed = this.ownFactorSpeed;
	this.type = type;
	this.ghostDeath = 0;
	this.ownCount = 0;

	this.begin = function(start_x, start_y, xs, type) {
		this.x = start_x * scl; //, (x,y)- pozycja stratowa
		this.y = start_y * scl;
		this.xspeed = xs; // kierunek  poruszania
		this.yspeed = 0;
		this.start = 0;
		this.oldx_ghost = 0; //stary kierunek x
		this.oldy_ghost = 0; //stary kierunek y
		this.oldposx_ghost; // stary koordynat x wykorzystane aby pacmam nie stawal tylko szedl dalej
		this.oldposy_ghost;
		this.ownIfScared = false;
		this.ownFactorSpeed = 0.2;
		this.oldFactorSpeed = this.ownFactorSpeed;
		this.type = type;
		this.ghostDeath = 0;
		this.ownCount = 0;
	};

	this.eyeRoll = function() {
		if (this.yspeed == -1) {
			return 0;
		} else if (this.xspeed == 1) {
			return 1;
		} else if (this.yspeed == 1) {
			return 2;
		} else {
			return 3;
		}
	};

	this.update = function() // updejtuje pozycje pacmana
	{
		if (this.x == 13 * scl && this.start == 0) {
			this.start = 1;
			this.dir(0, -1);
		}

		this.x = this.x + this.xspeed * scl * this.ownFactorSpeed;
		this.y = this.y + this.yspeed * scl * this.ownFactorSpeed;
		for (let i = 0; i < wall.length; i++) {
			if ((bol = this.colision(wall[i]) == 1)) break;
		}
		if (
			bol == 1 &&
			(this.xspeed > this.oldx_ghost || this.xspeed < this.oldx_ghost) &&
			(this.yspeed > this.oldposy_ghost || this.yspeed < this.oldposy_ghost) &&
			(this.oldposx_ghost == this.x && this.oldposy_ghost == this.y)
		) {
			this.dir(this.oldposx_ghost, this.oldposy_ghost);
			bol = 0;
		}
		// (aktualna x wspolrzedna pacmana , poczatkowy ogranicznik x , koncowy ogranicznik x)
		this.x = constrain(this.x, 0, width - scl); // ogranicza plansze (zeby pacman nie mogl wyjsc poza plansze)
		//this.y = constrain(this.y, 0, height - scl);
		this.jump();

		if (this.ghostDeath) {
			this.ownCount++;
			if (this.ownCount == 100) {
				this.returnToStart();
				this.ghostDeath = 0;
				this.ownCount = 0;
			}
		}
	};

	this.die = function() {
		if (
			(p.x == this.x && p.y == this.y) ||
			(p.x == this.x && p.y == this.y - scl * factor_speed) ||
			(p.x == this.x && p.y == this.y + scl * factor_speed) ||
			(p.x == this.x - scl * factor_speed && p.y == this.y) ||
			(p.x == this.x + scl * factor_speed && p.y == this.y)
		) {
			if (!ifScared || !this.ownIfScared) {
				livesCounter--;
				factor_speed = 0;
				ghosts[0].ownFactorSpeed = 0;
				ghosts[1].ownFactorSpeed = 0;
				ghosts[2].ownFactorSpeed = 0;
				ghosts[3].ownFactorSpeed = 0;
				noLoop();
				livesContener.innerHTML = livesCounter;
				if (livesCounter <= 0) {
					gameOverBox.classList.remove('none');
					document.querySelector('.endscoreLost').innerText = Score;
					return;
				}

				p.begin();

				/*ghosts[0].begin(11,13,1,1);
                ghosts[1].begin(16,13,-1,2);
                ghosts[2].begin(11,15,1,3);
                ghosts[3].begin(16,15,-1,4);*/

				for (let i = 0; i < ghosts.length; i++) {
					ghosts[i].begin(ghostsInfo[i][0], ghostsInfo[i][1], ghostsInfo[i][2], ghostsInfo[i][3]);
				}

				pacman = pacman_Prawo;
				currentDirection = 2;
				expectedDirection = 2;
				factor_speed = 0.2;
				loop();
			}
		}
	};

	this.boo = function() {
		this.oldFactorSpeed = 0.2;
		this.ownFactorSpeed = 0.1;
		while ((this.x % scl) * this.ownFactorSpeed != 0 && this.ownIfScared != true) {
			if (((this.x + scl * this.oldFactorSpeed) % scl) * this.ownFactorSpeed == 0)
				this.x += scl * this.oldFactorSpeed;
			else this.x -= scl * this.oldFactorSpeed;
		}

		while ((this.y % scl) * this.ownFactorSpeed != 0 && this.ownIfScared != true) {
			if (((this.y + scl * this.oldFactorSpeed) % scl) * this.ownFactorSpeed == 0)
				this.y += scl * this.oldFactorSpeed;
			else this.y -= scl * this.oldFactorSpeed;
		}
		this.ownIfScared = true;
	};

	this.notScared = function() {
		this.oldFactorSpeed = this.ownFactorSpeed;
		this.ownIfScared = false;
		this.ownFactorSpeed = 0.2;
		while ((this.x % scl) * this.ownFactorSpeed != 0) {
			if (((this.x + scl * this.oldFactorSpeed) % scl) * this.ownFactorSpeed == 0)
				this.x += scl * this.oldFactorSpeed;
			else this.x -= scl * this.oldFactorSpeed;
		}
		while ((this.y % scl) * this.ownFactorSpeed != 0) {
			if (((this.y + scl * this.oldFactorSpeed) % scl) * this.ownFactorSpeed == 0)
				this.y += scl * this.oldFactorSpeed;
			else this.y -= scl * this.oldFactorSpeed;
		}
	};

	this.returnToStart = function() {
		this.x = start_x * scl; //, (x,y)- pozycja stratowa
		this.y = start_y * scl;
		this.start = 0;
		this.ownIfScared = false;
		this.ownFactorSpeed = 0.2;
		this.xspeed = xs; // kierunek  poruszania
		this.yspeed = 0;
	};

	this.show = function(
		photo // rysowanie pacmana
	) {
		if (ifScared && this.ownIfScared) photo = ghost_alt_img;

		if (counter >= howMany - 30 && counter % 2 == 0 && this.ownIfScared) {
			photo = ghost_alt_img2;
		}
		image(photo, this.x, this.y, scl, scl);
	};

	this.generation_next_dir = function(index) {
		var direction_x;
		var direction_y;
		var rand_x = [ 4, 2 ];
		var rand_y = [ 3, 1 ];

		if (this.ownIfScared == true) {
			if (p.x > this.x) {
				direction_x = 4;
			} else if (p.x == this.x) {
				direction_x = random(rand_x);
			} else {
				direction_x = 2;
			}

			if (p.y > this.y) {
				direction_y = 3;
			} else if (p.y == this.y) {
				direction_y = random(rand_y);
			} else {
				direction_y = 1;
			}
		} else {
			if (this.type == 1) {
				if (p.x < this.x) {
					direction_x = 4;
				} else if (p.x == this.x) {
					direction_x = random(rand_x);
				} else {
					direction_x = 2;
				}

				if (p.y > this.y) {
					direction_y = 3;
				} else if (p.y == this.y) {
					direction_y = random(rand_y);
				} else {
					direction_y = 1;
				}
			}
			if (this.type == 2) {
				if (p.x < this.x && dist(p.x, p.y, this.x, this.y) <= 27 * scl) {
					direction_x = 4;
				} else if (p.x > this.x && dist(p.x, p.y, this.x, this.y) <= 27 * scl) {
					direction_x = 2;
				} else {
					direction_x = random(rand_x);
				}

				if (p.y > this.y && dist(p.x, p.y, this.x, this.y) <= 27 * scl) {
					direction_y = 3;
				} else if (p.y < this.y && dist(p.x, p.y, this.x, this.y) <= 27 * scl) {
					direction_y = 1;
				} else {
					direction_y = random(rand_y);
				}
			}
			if (this.type == 3) {
				if (p.x < this.x && dist(p.x, p.y, this.x, this.y) <= 25 * scl) {
					direction_x = 4;
				} else if (p.x > this.x && dist(p.x, p.y, this.x, this.y) <= 25 * scl) {
					direction_x = 2;
				} else {
					direction_x = random(rand_x);
				}

				if (p.y > this.y && dist(p.x, p.y, this.x, this.y) <= 25 * scl) {
					direction_y = 3;
				} else if (p.y < this.y && dist(p.x, p.y, this.x, this.y) <= 25 * scl) {
					direction_y = 1;
				} else {
					direction_y = random(rand_y);
				}
			}
			if (this.type == 4) {
				if (p.x < this.x && dist(p.x, p.y, this.x, this.y) <= 22 * scl) {
					direction_x = 4;
				} else if (p.x > this.x && dist(p.x, p.y, this.x, this.y) <= 22 * scl) {
					direction_x = 2;
				} else {
					direction_x = random(rand_x);
				}

				if (p.y > this.y && dist(p.x, p.y, this.x, this.y) <= 22 * scl) {
					direction_y = 3;
				} else if (p.y < this.y && dist(p.x, p.y, this.x, this.y) <= 22 * scl) {
					direction_y = 1;
				} else {
					direction_y = random(rand_y);
				}
			}
		}

		//var czy_koniec=0;
		//var next_dir = random(rand);

		var losuj_kolejnosc = [ 1, 2, 3, 4 ];
		var kol = random(losuj_kolejnosc);

		if (kol == 1) {
			if (direction_x == 2 && tab_specialpoints_for_ghost_1[index].prawo == 1) {
				this.dir(1, 0);
				return;
			} else if (direction_x == 4 && tab_specialpoints_for_ghost_1[index].lewo == 1) {
				this.dir(-1, 0);
				return;
			} else if (direction_y == 1 && tab_specialpoints_for_ghost_1[index].gora == 1) {
				this.dir(0, -1);
				return;
			} else if (direction_y == 3 && tab_specialpoints_for_ghost_1[index].dol == 1) {
				if (tab_specialpoints_for_ghost_1[index].dol == 1) {
					this.dir(0, 1);
					return;
				}
			} else {
				var rand = [ 1, 2, 3, 4 ];
				while (1) {
					var next_dir = random(rand);
					if (next_dir == 1) {
						if (tab_specialpoints_for_ghost_1[index].gora == 1) {
							this.dir(0, -1);
							break;
						}
					}
					if (next_dir == 2) {
						if (tab_specialpoints_for_ghost_1[index].prawo == 1) {
							this.dir(1, 0);
							break;
						}
					}
					if (next_dir == 3) {
						if (tab_specialpoints_for_ghost_1[index].dol == 1) {
							this.dir(0, 1);
							break;
						}
					}
					if (next_dir == 4) {
						if (tab_specialpoints_for_ghost_1[index].lewo == 1) {
							this.dir(-1, 0);
							break;
						}
					}
				}
			}
		}
		if (kol == 2) {
			if (direction_x == 4 && tab_specialpoints_for_ghost_1[index].lewo == 1) {
				this.dir(-1, 0);
				return;
			} else if (direction_x == 2 && tab_specialpoints_for_ghost_1[index].prawo == 1) {
				this.dir(1, 0);
				return;
			} else if (direction_y == 1 && tab_specialpoints_for_ghost_1[index].gora == 1) {
				this.dir(0, -1);
				return;
			} else if (direction_y == 3 && tab_specialpoints_for_ghost_1[index].dol == 1) {
				if (tab_specialpoints_for_ghost_1[index].dol == 1) {
					this.dir(0, 1);
					return;
				}
			} else {
				var rand = [ 1, 2, 3, 4 ];
				while (1) {
					var next_dir = random(rand);
					if (next_dir == 1) {
						if (tab_specialpoints_for_ghost_1[index].gora == 1) {
							this.dir(0, -1);
							break;
						}
					}
					if (next_dir == 2) {
						if (tab_specialpoints_for_ghost_1[index].prawo == 1) {
							this.dir(1, 0);
							break;
						}
					}
					if (next_dir == 3) {
						if (tab_specialpoints_for_ghost_1[index].dol == 1) {
							this.dir(0, 1);
							break;
						}
					}
					if (next_dir == 4) {
						if (tab_specialpoints_for_ghost_1[index].lewo == 1) {
							this.dir(-1, 0);
							break;
						}
					}
				}
			}
		}
		if (kol == 3) {
			if (direction_y == 1 && tab_specialpoints_for_ghost_1[index].gora == 1) {
				this.dir(0, -1);
				return;
			} else if (direction_y == 3 && tab_specialpoints_for_ghost_1[index].dol == 1) {
				if (tab_specialpoints_for_ghost_1[index].dol == 1) {
					this.dir(0, 1);
					return;
				}
			} else if (direction_x == 2 && tab_specialpoints_for_ghost_1[index].prawo == 1) {
				this.dir(1, 0);
				return;
			} else if (direction_x == 4 && tab_specialpoints_for_ghost_1[index].lewo == 1) {
				this.dir(-1, 0);
				return;
			} else {
				var rand = [ 1, 2, 3, 4 ];
				while (1) {
					var next_dir = random(rand);
					if (next_dir == 1) {
						if (tab_specialpoints_for_ghost_1[index].gora == 1) {
							this.dir(0, -1);
							break;
						}
					}
					if (next_dir == 2) {
						if (tab_specialpoints_for_ghost_1[index].prawo == 1) {
							this.dir(1, 0);
							break;
						}
					}
					if (next_dir == 3) {
						if (tab_specialpoints_for_ghost_1[index].dol == 1) {
							this.dir(0, 1);
							break;
						}
					}
					if (next_dir == 4) {
						if (tab_specialpoints_for_ghost_1[index].lewo == 1) {
							this.dir(-1, 0);
							break;
						}
					}
				}
			}
		}
		if (kol == 4) {
			if (direction_y == 3 && tab_specialpoints_for_ghost_1[index].dol == 1) {
				if (tab_specialpoints_for_ghost_1[index].dol == 1) {
					this.dir(0, 1);
					return;
				}
			} else if (direction_y == 1 && tab_specialpoints_for_ghost_1[index].gora == 1) {
				this.dir(0, -1);
				return;
			} else if (direction_x == 2 && tab_specialpoints_for_ghost_1[index].prawo == 1) {
				this.dir(1, 0);
				return;
			} else if (direction_x == 4 && tab_specialpoints_for_ghost_1[index].lewo == 1) {
				this.dir(-1, 0);
				return;
			} else {
				var rand = [ 1, 2, 3, 4 ];
				while (1) {
					var next_dir = random(rand);
					if (next_dir == 1) {
						if (tab_specialpoints_for_ghost_1[index].gora == 1) {
							this.dir(0, -1);
							break;
						}
					}
					if (next_dir == 2) {
						if (tab_specialpoints_for_ghost_1[index].prawo == 1) {
							this.dir(1, 0);
							break;
						}
					}
					if (next_dir == 3) {
						if (tab_specialpoints_for_ghost_1[index].dol == 1) {
							this.dir(0, 1);
							break;
						}
					}
					if (next_dir == 4) {
						if (tab_specialpoints_for_ghost_1[index].lewo == 1) {
							this.dir(-1, 0);
							break;
						}
					}
				}
			}
		}
	};

	this.jump = function() {
		if (this.x == 0) {
			this.x = 27 * scl;
		} else if (this.x == 27 * scl) {
			this.x = 0;
		}
	};

	this.dir = function(
		x,
		y // zmienia kierunek poruszania sie pacmana -  w zaleznosci od wcisnietej strzalki
	) {
		this.oldx_ghost = this.xspeed;
		this.oldy_ghost = this.yspeed;
		this.xspeed = x;
		this.yspeed = y;
	};

	this.colision = function(pos) {
		if (
			this.x + (scl - scl * this.ownFactorSpeed) >= pos.x &&
			this.x - (scl - scl * this.ownFactorSpeed) <= pos.x + pos.width - scl &&
			(this.y + (scl - scl * this.ownFactorSpeed) >= pos.y &&
				this.y - (scl - scl * this.ownFactorSpeed) <= pos.y + pos.height - scl)
		) {
			//if ((((this.x) >= (pos.x)) && ((this.x) <= (pos.x + pos.width - scl))) && (((this.y) >= (pos.y)) && ((this.y) <= (pos.y + pos.height - scl))))
			//if((this.y == pos.y && this.x == pos.x))
			if (this.xspeed == 1) {
				this.x = this.x - scl * this.ownFactorSpeed;
			}

			if (this.xspeed == -1) {
				this.x = this.x + scl * this.ownFactorSpeed;
			}

			if (this.yspeed == 1) {
				this.y = this.y - scl * this.ownFactorSpeed;
			}

			if (this.yspeed == -1) {
				this.y = this.y + scl * this.ownFactorSpeed;
			}
			return 1;
		}
		return 0;
	};
}

//klasy---------------------------------------------
//------------------------------------------------------------------

//-------------------------------------------------------------------
//funkcje glowne-------------------------------

function preload() {
	pacman_Prawo = loadImage('https://image.ibb.co/cJQ79S/right.png');
	pacman_PrawoP = loadImage('https://image.ibb.co/cL24so/prawo_1.png');
	pacman_DolP = loadImage('https://image.ibb.co/fbhOJT/dol_1.png');
	pacman_LewoP = loadImage('https://image.ibb.co/hG7OJT/lewo.png');
	pacman_GoraP = loadImage('https://image.ibb.co/dgjEQ8/gora.png');
	pacman_Zamkniety = loadImage('https://image.ibb.co/iF1ayT/372897_200x130_1.png');
	pacman_Lewo = loadImage('https://image.ibb.co/dKbEpS/left.png');
	pacman_Gora = loadImage('https://image.ibb.co/bAkkw7/up.png');
	pacman_Dol = loadImage('https://image.ibb.co/dwEdG7/down.png');
	foodImage = loadImage('https://image.ibb.co/kDD7W7/Food.png');
	bigFoodImage = loadImage('https://image.ibb.co/g5PH9S/food.png');
	ghost_images[0][0] = loadImage('https://image.ibb.co/jMpjAy/ru.png');
	ghost_images[0][1] = loadImage('https://image.ibb.co/fCMLiJ/rr.png');
	ghost_images[0][2] = loadImage('https://image.ibb.co/kwJNxd/rd.png');
	ghost_images[0][3] = loadImage('https://image.ibb.co/imuHVy/rl.png');
	ghost_images[1][0] = loadImage('https://image.ibb.co/nMN4Ay/pu.png');
	ghost_images[1][1] = loadImage('https://image.ibb.co/hwWLiJ/pr.png');
	ghost_images[1][2] = loadImage('https://image.ibb.co/fBVPAy/pd.png');
	ghost_images[1][3] = loadImage('https://image.ibb.co/kyYcVy/pl.png');
	ghost_images[2][0] = loadImage('https://image.ibb.co/f4ipcd/bu.png');
	ghost_images[2][1] = loadImage('https://image.ibb.co/fvDY3J/br.png');
	ghost_images[2][2] = loadImage('https://image.ibb.co/dDNROJ/bd.png');
	ghost_images[2][3] = loadImage('https://image.ibb.co/jFFPAy/bl.png');
	ghost_images[3][0] = loadImage('https://image.ibb.co/hxD0iJ/ou.png');
	ghost_images[3][1] = loadImage('https://image.ibb.co/gA9vHd/or.png');
	ghost_images[3][2] = loadImage('https://image.ibb.co/dmN4Ay/od.png');
	ghost_images[3][3] = loadImage('https://image.ibb.co/eTJpcd/ol.png');
	ghost_alt_img = loadImage('https://thumb.ibb.co/b1FEA8/scared.png');
	ghost_alt_img2 = loadImage('https://image.ibb.co/fLoono/scared2.png');
	pacman = pacman_Prawo;
	eatSound = new sound('../../jedzenie.mp3');
}

//--------------------------????????????
//jak zrobic nowa sciane
/*
1.w setup deklaracja
2.w draw wywolanie
3.w upade wywolac p.colision(nazwa_scinay)


*/
//jak zrobic nowa sciane
//--------------------------????????????

function setup() {
	// funkcja startowa wywolywana tylko raz na poczatku, tworzy plansze , oraz obiekt pacman
	var cnv = createCanvas(28 * scl, 31 * scl);
	cnv.parent('gameHolder');

	wallCreator();
	foodCreator();
	bigFoodCreator();
	specialPointCreator();
	specialPointCreator_for_ghost1();
	p = new PacMan();
	p.begin();

	for (var i = 0; i < 4; i++) {
		ghosts[i] = new Ghost(ghostsInfo[i][0], ghostsInfo[i][1], ghostsInfo[i][2], ghostsInfo[i][3]);
	}

	frameRate(frequency); // liczba klatek na sekunde
}

function draw() {
	// funkcja dzialalajaca w nieskonczonosc, maluje tlo
	// {
	//     var ghostsBox = document.querySelector(".ghosts");
	//     if (ghosts[0].ghostDeath == 1) {
	//         ghostsBox.innerHTML = '<img src="../../Images/ghosts/ghost_die/1-die.png" width="50px">';
	//     }
	//     else {
	//         ghostsBox.innerHTML = '<img src="../../Images/ghosts/_0' + ghosts[0].eyeRoll() + '.png" width="50px">';
	//     }
	//     if (ghosts[1].ghostDeath == 1) {
	//         ghostsBox.innerHTML += '<img src="../../Images/ghosts/ghost_die/2-die.png" width="50px">';
	//     }
	//     else {
	//         ghostsBox.innerHTML += '<img src="../../Images/ghosts/_1' + ghosts[1].eyeRoll() + '.png" width="50px">';
	//     }
	//     if (ghosts[2].ghostDeath == 1) {
	//         ghostsBox.innerHTML += '<img src="../../Images/ghosts/ghost_die/3-die.png" width="50px">';
	//     }
	//     else {
	//         ghostsBox.innerHTML += '<img src="../../Images/ghosts/_2' + ghosts[2].eyeRoll() + '.png" width="50px">';
	//     }
	//     if (ghosts[3].ghostDeath == 1) {
	//         ghostsBox.innerHTML += '<img src="../../Images/ghosts/ghost_die/4-die.png" width="50px">';
	//     }
	//     else {
	//         ghostsBox.innerHTML += '<img src="../../Images/ghosts/_3' + ghosts[3].eyeRoll() + '.png" width="50px">';
	//     }

	// }

	document.querySelector('.right__score').innerHTML = Score;
	document.querySelector('.endscoreWin').innerHTML = Score;

	if (endCondicion >= food.length) {
		winBox.classList.remove('none');
		return;
	}
	if (counter == howMany) {
		for (let i = 0; i < ghosts.length; i++) {
			ghosts[i].notScared();
		}

		ifScared = false;
		counter = 1;
		howMany = 0;
	}
	background(0, 0, 0);
	/*if((counter >=170)&&(counter%2==0))
    {
		for(let i=0;i<ghosts.length;i++)
			ghosts[i].show(ghost_alt_img2);
        //background(170, 170, 170) //zmiana koloru tla kanvasa       
    } else {
        background(0,0,0); //zmiana koloru tla kanvasa
    }*/

	for (let i = 0; i < wall.length; i++) {
		wall[i].drawWall();
	}
	for (let i = 0; i < food.length; i++) {
		food[i].drawFood();
		p.eat(food[i]);
	}

	for (let i = 0; i < bigFood.length; i++) {
		bigFood[i].drawBigFood();
		if (p.eatBig(bigFood[i])) {
			if (ifScared == true) {
				howMany += 100;
				break;
			} else {
				ifScared = true;
				howMany += 200;
				break;
			}
		}
	}

	p.update();
	p.show();

	for (let i = 0; i < ghosts.length; i++) {
		p.death(ghosts[i]);
		ghosts[i].die();
		ghosts[i].update();
		ghosts[i].show(ghost_images[i][ghosts[i].eyeRoll()]);

		if (checkSpecialPoints_for_ghosts(ghosts[i]).test) {
			ghosts[i].generation_next_dir(checkSpecialPoints_for_ghosts(ghosts[i]).index);
		}
	}

	boolSpecialPoint = checkSpecialPoints();

	if (checkSpecialPoints()) {
		if (expectedDirection == 1) {
			p.dir(0, -1);
			currentDirection = 1;
			pacman = pacman_Gora;
		}
		if (expectedDirection == 2) {
			p.dir(1, 0);
			currentDirection = 2;
			pacman = pacman_Prawo;
		}
		if (expectedDirection == 3) {
			p.dir(0, 1);
			currentDirection = 3;
			pacman = pacman_Dol;
		}
		if (expectedDirection == 4) {
			p.dir(-1, 0);
			currentDirection = 4;
			pacman = pacman_Lewo;
		}
	}

	if (ifScared == true) counter++;
}
//funkcje glowne-------------------------
//--------------q------------------------------------------------------------

//---------------------------------------------------------------------------
//funkcje poboczne----------------

function keyPressed() {
	// obsluga sterwoania strzalkamiq
	if (keyCode === UP_ARROW) {
		turn('up');
	} else if (keyCode === DOWN_ARROW) {
		turn('down');
	} else if (keyCode === RIGHT_ARROW) {
		turn('right');
	} else if (keyCode === LEFT_ARROW) {
		turn('left');
	}
}

arrows[0].addEventListener('click', () => {
	turn('up');
});
arrows[1].addEventListener('click', function(e) {
	turn('left');
});
arrows[2].addEventListener('click', function(e) {
	turn('down');
});
arrows[3].addEventListener('click', function(e) {
	turn('right');
});

function turn(dir) {
	oldposx = p.x;
	oldposy = p.y;

	switch (dir) {
		case 'up': {
			if (currentDirection == 3) {
				p.dir(0, -1);
				pacman = pacman_Gora;
				currentDirection = 1;
			}
			expectedDirection = 1;
			break;
		}
		case 'left': {
			if (currentDirection == 2) {
				p.dir(-1, 0);
				pacman = pacman_Lewo;
				currentDirection = 4;
			}
			expectedDirection = 4;
			break;
		}
		case 'down': {
			if (currentDirection == 1) {
				p.dir(0, 1);
				pacman = pacman_Dol;
				currentDirection = 3;
			}
			expectedDirection = 3;
			break;
		}
		case 'right': {
			if (currentDirection == 4) {
				p.dir(1, 0);
				pacman = pacman_Prawo;
				currentDirection = 2;
			}
			expectedDirection = 2;
			break;
		}
	}
}

function checkSpecialPoints() {
	for (let i = 0; i < tab_specialpoints.length; i++) {
		if (tab_specialpoints[i].x == p.x && tab_specialpoints[i].y == p.y) {
			return 1;
		}
	}
	return 0;
}

function checkSpecialPoints_for_ghosts(duch) {
	function check_wynik() {
		this.test = 0;
		this.index = 0;
	}
	wynik = new check_wynik();

	for (let i = 0; i < tab_specialpoints_for_ghost_1.length; i++) {
		if (tab_specialpoints_for_ghost_1[i].x == duch.x && tab_specialpoints_for_ghost_1[i].y == duch.y) {
			wynik.test = 1;
			wynik.index = i;
			return wynik;
		}
	}
	return wynik;
}

//funkcje poboczne----------------
//---------------------------------------------------------------------------
