import { ROWS, COLS } from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    { x: 3, y: 0 },
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
  // for(let j of this.joints){
  //   j.y -= 1;
  // }
}

SnakeGameLogic.prototype.down = function () {
  this.direction = 'down';
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  // for (let j of this.joints) {
  //   j.y += 1;
  // }
  console.log('down');
}

SnakeGameLogic.prototype.left = function () {
  this.direction = 'left';
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
  // for (let j of this.joints) {
  //   j.x -= 1;
    //console.log(this.joints[i].x++);
  // }
}

SnakeGameLogic.prototype.right = function () {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
  this.direction = 'right';
  //console.log(this.joints);



 // console.log(this.joints.pop());
  //방향의 상태값을 저장
  //this.direction = 'right';

}

SnakeGameLogic.prototype.nextState = function () {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환

  //방향값 확인 후
  if( this.direction === 'down') {
    console.log("down");
    this.joints.unshift(
      {
        x: this.joints[0].x,
        y: this.joints[0].y + 1
      }
    );
    this.joints.pop();
  }else if( this.direction === 'up') {
    console.log("up");
    this.joints.unshift(
      {
        x: this.joints[0].x,
        y: this.joints[0].y - 1
      }
    );
    this.joints.pop();
  }else if( this.direction === 'left') {
    console.log("left");
    this.joints.unshift(
      {
        x: this.joints[0].x -1,
        y: this.joints[0].y
      }
    );
    this.joints.pop();
  }else if( this.direction === 'right'){
    this.joints.unshift(
      {
        x: this.joints[0].x + 1,
        y: this.joints[0].y
      }
    );
    console.log(this.joints);
    this.joints.pop();
  }

  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y ) {
    //alert("crush!");
    this.joints.push(
    {
      x: this.fruit.x,
      y: this.fruit.y
    });


    //먹이위치 재설정
    do{
      this.fruit.x = Math.floor(Math.random() * COLS);
      this.fruit.y = Math.floor(Math.random() * ROWS);
    } while (
      this.joints.some(item => item.x === this.fruit.x)
    );


  }else



    console.log(`nextState`);
    return true;


}


export default SnakeGameLogic;
