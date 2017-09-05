function Money(){
  this.amount;
}

/*
* 1. 인자로 받은 object의 amount값과 기존의 amount값을 비교하여 boolean값 리턴
* 2. object.constructor 인스턴스의 생성자확인 인스턴스.constructor로 확인 할 수 있다.
* 3. 인자로 받은 객체와 this(equals를 호출한 객체)객체의 생성자가 같으지 확인
*/

Money.prototype.equals = function(object){
  var thisAmount = this.getAmount();
  var objectAmount = object.getAmount();
  return (thisAmount === objectAmount && object.constructor === this.constructor);
}

module.exports = Money;