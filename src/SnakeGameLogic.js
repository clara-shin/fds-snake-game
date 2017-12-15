import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }
  ];

  // 먹이의 좌표
  this.fruit = { x: 5, y: 10 };

  this.direction = 'right';
}

SnakeGameLogic.prototype.up = function () {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log('up');
  this.direction = 'up';
}

SnakeGameLogic.prototype.down = function () {

  console.log('down');
  this.direction = 'down';
}

SnakeGameLogic.prototype.left = function () {
  console.log('left');
  this.direction = 'left';
}

SnakeGameLogic.prototype.right = function () {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  this.direction = 'right';
}

SnakeGameLogic.prototype.nextState = function () {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  let newHead;
  if(this.direction === 'up'){
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y - 1
    }
  } else if (this.direction === 'down') {
    newHead = {
      x: this.joints[0].x,
      y: this.joints[0].y + 1
    }
  } else if(this.direction === 'left') {
    newHead = {
      x: this.joints[0].x - 1,
      y: this.joints[0].y
    }
  }else if(this.direction === 'right'){
    newHead = {
      x: this.joints[0].x + 1,
      y: this.joints[0].y
    }
  }



  if (
    //게임판 영역 밖에 위치하는 경우
    newHead.x < 0 ||
    newHead.x >= COLS ||
    newHead.y < 0 ||
    newHead >= ROWS ||
    //뱀의 머리가 몸에 부딪히는 경우
    newHead.some(j => j.x === newHead.x && j.y === newHead.y);
  ){
    return false;
  }

  if (newHead.x === this.fruit.x && newHead.y === this.fruit.y) {
    //
    do{
      this.fruit.x = Math.floor(Math.random() * COLS);
      this.fruit.y = Math.floor(Math.random() * ROWS);
    }
    while(
      this.joints.some( j => j.x === this.fruit.x && j.y === this.fruit.y) || // 뱀의 몸 영역
      (newHead.x === this.fruit.x && newHead.y === this.fruit.y)  //머리가 새롭게 위치할 곳
    );
  } else {
    this.joints.pop();
  }

  this.joints.unshift(newHead);



  console.log(`nextState`);
  return true;


}


export default SnakeGameLogic;
