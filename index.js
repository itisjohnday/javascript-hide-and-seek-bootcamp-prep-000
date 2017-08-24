function getFirstSelector (selector) {
  const element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  const element = document.querySelector('#nested .target');
  return element;
}

function increaseRankBy(n) {
  const rankArr = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankArr.length; i++) {
    rankArr[i].innerHTML = parseInt(rankArr[i].innerHTML) + 1;
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
