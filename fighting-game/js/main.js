// const player1 = {
//   name: "Player 1",
//   hp: 1000,
//   damage: 10,
//   defense: 5,
//   attack(target) {
//     const damage = Math.max(this.damage - target.defense, 0);
//     target.hp = Math.max(target.hp - damage, 0);
//     console.log(
//       `${this.name} tấn công ${target.name}, chịu damage là ${damage}, máu còn lại là ${target.hp}`,
//     );
//   },
//   isAlive() {
//     return this.hp > 0;
//   },
// };

// const player2 = {
//   name: "Player 2",
//   hp: 1000,
//   damage: 20,
//   defense: 5,
//   attack(target) {
//     const damage = Math.max(this.damage - target.defense, 0);
//     target.hp = Math.max(target.hp - damage, 0);
//     console.log(
//       `${this.name} tấn công ${target.name}, chịu damage là ${damage}, máu còn lại là ${target.hp}`,
//     );
//   },
//   isAlive() {
//     return this.hp > 0;
//   },
// };

// let round = 1;
// while (player1.isAlive() && player2.isAlive()) {
//   if (round % 2 === 0) {
//     player2.attack(player1);
//   } else {
//     player1.attack(player2);
//   }

//   round++;
// }

// object literals không tái sử dụng được các hàm
function Character(name, hp, atk, defense) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;

  this.attack = function (target) {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp = Math.max(target.hp - damage, 0);
    console.log(
      `${this.name} tấn công ${target.name}, chịu damage là ${damage}, 
      máu của ${target.name} còn lại là ${target.hp}`,
    );
  };
  this.isAlive = function () {
    return this.hp > 0;
  };
}

const player1 = new Character("Player 1", 1000, 10, 5);
const player2 = new Character("Player 2", 1000, 20, 5);

let round = 1;
while (player1.isAlive() && player2.isAlive()) {
  if (round % 2 === 0) {
    player2.attack(player1);
  } else {
    player1.attack(player2);
  }

  round++;
}

const winner = player1.isAlive() ? player1 : player2;
console.log(`${winner.name} wins`);
