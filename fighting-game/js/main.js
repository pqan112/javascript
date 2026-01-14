const player1 = {
  name: "Player 1 nè",
  hp: 1000,
  dame: 10,
  attack(target) {
    this.hp -= target.dame;
    console.log(
      `${this.name} tấn công ${target.name}, chịu dame là ${target.dame}, máu còn lại là ${this.hp}`
    );
  },
  isAlive() {
    return this.hp > 0;
  },
};

const player2 = {
  name: "Player 2 nè",
  hp: 1000,
  dame: 20,
  attack(target) {
    this.hp -= target.dame;
    console.log(
      `${this.name} tấn công ${target.name}, chịu dame là ${target.dame}, máu còn lại là ${this.hp}`
    );
  },
  isAlive() {
    return this.hp > 0;
  },
};

let round = 1;
while (player1.isAlive() && player2.isAlive) {
  if (round % 2 === 0) {
    player2.attack(player1);
  } else {
    player1.attack(player2);
  }

  round++;
}
