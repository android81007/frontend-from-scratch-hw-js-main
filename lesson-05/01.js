/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource,amount) {
    // for (let key in game.resources) {
    if ('gold' === resource) {
    return  game.resources.gold += amount;
    }else if ('lumber' === resource) {
      return  game.resources.lumber += amount;
    }
    else {
      console.log("Invalid resource");
    }
  }
}
// }
let mmm = game.addResource('gold', 50);
console.log(mmm);
let iii = game.addResource('lumber', 30);
console.log(iii);