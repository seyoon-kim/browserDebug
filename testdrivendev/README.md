TDD 학습
===============

# 소개

- Test-Driven Development:By Example 책을 읽고 실습 및 내용을 정리한다.

## 목표

- TDD의 목표는 깔끔한 코드를 얻는 것
- 한번에 목표를 도달하기 어려우니 나누워서 정복하자.

- - -

## 1부 정리

### 1장, 다중 통화를 지원하는 Money 객체

- stub, 메서드의 서명부와 반환 명령만 작성, 이 메서드를 호출하는 코드가 컴파일 될 수 있도록 껍데기만 만들어 둔다.
- Dollar 생성자의 five 객체를 생성한뒤 amount값을 곱하는 times 함수를 호출한다. 그리고 변경된 amount값이 기대값과 동일한지 테스트 한다.

<a href="https://github.com/seyoon-kim/Training/commit/5031759565c27148bf1b1f3c7ac65fbc3d9c2c3b">1장 Commit</a>

### 2장, 타락한 객체

- Dollar 생성자의 의해 생성된 객체의 times 함수를 호출할때 각각 다른 값을 주었을때 올바른 기대값이 나오는가. 그러나 하나의 객체를 가지고 계속해서 times호출을 한다면 계산되어진 값으로 다시 호출하기 때문에 초기값으로 계산되어진 값이 나오지 않는다. 동일한 초기값을 가지고 times함수로 계산하기위해 times 함수를 호출 할때 마다 해당 객체의 프로퍼티의 값을 수정하지 않고 새로운 객체를 생성하고 계산된 값을 반환한다.

<a href="https://github.com/seyoon-kim/Training/commit/76a4d8ddba4972d909ae8f5e8a73b8b585d6567d">2장 Commit</a>

### 3장, 모두를 위한 평등

- function equals(새로생성된 Dollar객체){return 기존의 amount === 새로생성된 Dollar객체의 amount} 의 값이 같으면 같은 객체로 인식하는 함수 생성

<a href="https://github.com/seyoon-kim/Training/commit/6ede6fb4c17a29099a5343fa7c5c18deca974ad0">3장 Commit</a>

### 4장, 프라이버시

- 기존의 public한 변수 amount의 값을 private 하게 바꾸고 times함수에서 반환된 Dollar 인스턴스와 new Dollar로 만들어진 인스턴스의 private한 amount값이 같으면 같은 객체로 확인

<a href="https://github.com/seyoon-kim/Training/commit/fed9133e0cc46a2fd137dde781cc260ea3fdae7f">4장 Commit</a>

### 5장, 솔직히 말하자면

- Franc와 관련된 작업을 하는 Franc Class를 테스트 하기위해서 기존에 사용하던 dollar Class를 복사하여 생성

<a href="https://github.com/seyoon-kim/Training/commit/8c44bc231f5691eb08ea2a894741cb439937ea78">5장 Commit</a>

### 6장, 모두를 위한 평등

- Dollar와 Franc의 equals 함수는 똑같은 기능을 한다. 중복 제거를 위해 두 클래스의 공통된 Money 클래스를 생성하고 Money 클래스의 prototype에 equals 함수를 추가하여 각 자식 class에서 상속받아 사용하도록 한다.

<a href="https://github.com/seyoon-kim/Training/commit/5dcdd89dfbcc167f5c2cf17736b0526081526f20">6장 Commit</a>

### 7장, 사과와 오렌지

- Dollar 인스턴스와 Franc 인스턴스와 같지 않다는 것을 확인하기 위해 equals 함수를 통해 객체가 같은지 비교할 경우 amount값이 같을 뿐만 아니라 인자로 받은 객체와 this 객체의 생성자도 같은지 확인하여 둘다 같을 경우 true값 반환

<a href="https://github.com/seyoon-kim/Training/commit/255015945fb1a560c291d8156c38c517deddb102">7장 Commit</a>

### 8장, 객체만들기

- 하위 클래스의 존재를 테스트에서 분리 함으로써 어떤 모델코드에도 영향을 주지 않고 상속 구조를 마음대로 변경할 수 있게 되었다.

<a href="https://github.com/seyoon-kim/Training/commit/8434c7ecbbe689eeb16a3acefc91841f57a8f86b">8장 Commit</a>

### 9장, 우리가 사는 시간

- 통화의 종류를 구분하는 프러퍼티 추가
- Franc, Money 각각의 클래스의 생성자에서 private한 currency 프러퍼티 초기화
- 각 클래스의 생성자를 호출하는 곳에서 그값에 맞는 인자를 전달

<a href="https://github.com/seyoon-kim/Training/commit/443e54562df5c642a883b2381f6258b0a47e958d">9장 Commit</a>

### 10장, 흥미로운시간

- 각 자식클래스에 있는 times함수를 부모 클래스인 money로 끌어올림
- equals 함수에서 객체의 클래스 네임을 비교하여 같은지 확인하는 것이 아니라 currency의 값이 동일한지 여부를 알아본다.

<a href="https://github.com/seyoon-kim/Training/commit/56bdd3817ce5381bc9a2765439968077f67fed2e">10장 Commit</a>

### 11장, 모든 악의 근원

- Money의 각각의 자식 객체를 생성하는 static한 메소드를 공통된 Money객체 생성으로 변경 후 필요 없는 하위 클래스를 제거
- 새로운 구조에서 필요 없게 된 테스트 제거

<a href="https://github.com/seyoon-kim/Training/commit/c968126fb50abfe1bf5c9bbac19822b9ebe4fedb">11장 Commit</a>

### 12장, 드디어, 더하기

- Money 클래스에 객체의 기존 객체와 인자로 받은 객체의 amount값을 더하여 합한 amount값을 프로퍼티를 갖는 함수를 반환하는 plus 함수 생성
- 환율을 계산하기위해 Bank 클래스를 생성하고 실제로 환율을 계산하는 reduce함수를 생성한다
- 비교하는 object들의 프로퍼티가 같으면 동일하다고 판다한는 equalObjectMatcher 생성

<a href="https://github.com/seyoon-kim/Training/commit/678c55df38c4af68b9aeee87904e9b3c444bba2c">12장 Commit</a>

### 13장, 진짜로 만들기

- augend, addend 값을 프로퍼티로 갖는 Sum 클래스생성 bank.reduce()의 인자로 Sum 객체를 받는다면 augend.amount, addend.amount값을 합침 amount와 인자로받은 화폐단위 to를 인자로받는 Money 객체 생성

<a href="https://github.com/seyoon-kim/Training/commit/cb934e03260975ee97e63d7b69feded98f5a76e5">13장 Commit</a>

### 14장, 바꾸기

- bank.addRate()함수는 인자로 from, to 화폐단위와 환율을 받은 뒤 rate라는 배열에 값을 보관한다.
- bank.reduce() 함수를 통해서 money.reduce()함수를 호출하고 그안에서 bank.rate()를 통해 from, to 값으로 rate 배열을 값을 찾은 뒤 해당 객체의 rate값을 반환한다.3. 반환된 rate값과 amount를 사용하여 새로운 dollar 객체를 생성한다.

<a href="https://github.com/seyoon-kim/Training/commit/03ee86ac883b8df68fbd893c8eaa404540a92109">14장 Commit</a>

### 15장, 서로 다른 통화 더하기

- 서로 다른 통화를 더한 값이 같은지 확인하는 테스트
- Bank.reduce() -> Sum.reduce() Bank 객체와 환전하고 싶은 단위를 인자로 받는다. (Bank를 거치는 이유는 Bank의 객체를 받아서 붙어있는 함수를 사용하기 위해서)
- Sum 객체의 augend의 값 5 dollar 객체, addend값 10 franc 객체의 값을 Money.reduce()를 통해 각각 환전할 단위로 바꾼다.
- Money.reduce() 함수안에 Bank.rate()에서 각각의 환율을 반환하고 반환된 환율로 amount값을 계산하고 모든 amount의값을 합산한뒤 Money 객체를 생선한다.

<a href="https://github.com/seyoon-kim/Training/commit/7ebfde8e0a84b502352046e8b390d241ba495e42">15장 Commit</a>

### 16장, 드디어, 추상화
- Sum 클래스에서 Sum 객체의 augend, addend 각각의 해당하는 숫자를 곱해주는 함수 생성

<a href="https://github.com/seyoon-kim/Training/commit/b3714f9cb98b0c2ede9d908d738b071540e2d569">16장 Commit</a>

- - -

## 3부 정리

### 25장, 테스트 주도 개발 패턴

#### 테스트
- 테스트를 자동화 함으로써 스트레스를 줄이자

#### 격리된 테스트
- 테스트를 실행하는 것은 서로 아무 영향이 없도록 해야한다
- 테스트가 충분히 빠르게 해서 직접, 자주 실행할 수 있게끔 만들자
- 테스트는 작은 스케일로 하는 것이 좋다.

#### 테스트 목록
- 시작하기 전에 작성해야 할 테스트의 목록을 모두 적을둘 것
- 테스트의 우선순위를 생각하자
  1. 구현해야 할것들 리스트업
  2. 우선 구현해야할 모든 오퍼레이션 리스트업
  3. 존재하지 않는 오퍼레이션의 널버전 리스트업
  4. 깔끔한 코드를 얻기 위한 리팩토링 작업 리스트업

#### 테스트 작성시기
- 테스트 대상이 되는 코드를 작성하기 직전에 작성하라

#### 단언(assert) 작성시기
- 단언을 제일먼저 쓰고 시작하자, 완료될 때 통과해야할 단언 부터 작성

#### 테스트 데이터
- 테스트를 읽을때 쉽고 따라가기 좋을만한 데이터를 사용하라

#### 명백한 데이터
- 테스트 자체에 예상되는 값과 실제 값을 포함하고 이둘 사이의 관계를 드러내기 위해 노력하자


### 26장, 빨간 막대 패턴

#### 한 단계 테스트
- 테스트를 고를때 새로운 무언가를 가르쳐 줄 수 있으며, 구현할 수 있다는 확신이 드는 테스트를 고를것

#### 시작 테스트
- 오퍼레이션이 아무 일도 하지 않는 경우를 먼저 테스트 할것

#### 설명 테스트
- 테스트를 통해 설명을 요청하고 테스트를 통해 설명하라.

#### 학습 테스트
- 외부에서 만든 소프트웨어를 테스트 할 경우 바로 사용하는 대신 API가 우리 예상대로 실행된다는 것을 확인해줄 만한 작은 테스트를 해보자

#### 또 다른 테스트
- 주제와 무관한 아이디어가 떠오르면 이에 대한 테스트를 할일 목록에 적어두고 다시 본론으로 들어온다.

#### 회귀 테스트
- 시스템 장애로 인하여 실패하는 테스트, 그리고 통과할 경우엔 장애가 수정되었다고 볼 수 있는 테스트를 간단하게 작성하라.

### 27장, 테스팅 패턴

#### 자식 테스트
- 지나치케 큰 테스트의 경우 원래 테스트 케이스의 깨지는 부분에 해당하는 작은 테스트 케이스를 작성하고 그 작은 테스트 케이스가 실행되도록 하자.
- 그 후에 다시 원래의 큰 테스트 케이스를 추가하자.

#### 모의 객체(가짜 객체)
- 비용이 많이 들거나 복잡한 리소스에 의존하는 객체를 테스트 하려면 상수를 반환하게끔 만든 속임수 버전의 리소스를 만들어라
- 마치 데이터베이스에서 받아 오는 것처럼 메모리에만 존재하는 객체를 사용하자

#### 셀프 션트
- 한 객체가 다른 객체와 올바르게 대화하는지 테스트 하기 위해서는 테스트 대상이 되는 객체가 원래의 대화 상대가 아니라 테스트 케이스와 대화하도록 만들면 된다.

#### 로그 문자열
- 메시지의 호출순서가 올바른지를 검사하려면 로그 문자열을 가지고 있다가 메시지가 호출할 때마다 그 문자열에 추가하도록 한다.

#### 크래시 테스트 더미
- 호출되지 않을 것 같은 에러 코드(발생하기 힘든 에러 상황)는 실제 작업을 수행하는 대신 그냥 예외를 발생시키기만 하는 특수한 객체를 만들어서 이를 호출한다.

#### 깨진 테스트
- 혼자서 프로그래밍할 때 프로그래밍 세션을 마지막 테스트가 꺠진 상태로 끝마치는 것이 좋다.

#### 깨끗한 체크인
- 팀 프로그래밍할 때 모든 테스트가 성공한 상태로 마치는 것이 좋다

### 28장, 초록 막대 패턴

#### 가짜로 구현하기
- 실패하는 테스트를 만든 후 첫 번째 구현은 일단 상수를 반환하게 하라
- 일단 테스트가 통과하면 단계적으로 상수를 변수로 사용하는 수식으로 변형한다.

#### 삼각측량
- 예(example)가 두개 이상일 때만 추상화를 하라
- 올바른 함수를 구현 했다면 두 단언 중 하나를 삭제 가능하다.

<pre><code>
function testSum(){
  assertEquals(4, plus(3, 1));
  assertEquals(7, plus(3, 4));
}
// 예가 두 개 이상일 경우 추상화 가능
function plus(augend, addend){
  return augend + addend
}
</pre></code>

#### 명백한 구현
- 단순한 연산들은 그냥 구현해 버려라.

#### 하나에서 여럿으로
- 객체 컬렉션을 다루는 연산은 일단 컬렉션 없이 구현한 뒤 구현하고 그다음에 컬렉션을 사용하라

<pre><code>
//Before

function testSum(){
  assertEquals(5, sum(5, [1,2,3,4,5]));
}

function sum(value, values){
  return value
}

//After 콜렉션 사용
function sum(value, values){
  var sum = 0;
  // sum 연산 배열의 메스드 이용
  return sum
}
</pre></code>

### 30장, 디자인 패턴

#### 커맨드
- 계산 작업에 대한 호출을 메시지가 아닌 객체로 표현한다.

#### 값 객체
- 객체가 생성된 이후 그 값이 절대로 변하지 않게 하여 별칭 문제가 발생하지 않게 한다.

#### 널 객체
- 계산 작업의 기본 사례를 객체로 표현한다.

#### 템플릿 메소드
- 계산 작업의 변하지 않는 순서를 여러 추상 메서드로 표현한다. 이 추상 메소드들은 상속을 통해 특별한 작업을 수행하게끔 구체화 된다.

#### 플러거블 객체
- 둘 이상의 구현을 객체로 호출함으로써 다양성을 표현한다.

#### 플러거블 셀렉터
- 객체별로 서로 다른 메소드가 동적으로 호출되게 함으로써 필요 없는 하위 클래스의 생성을 피한다.

#### 팩토리 메소드
- 생성자 대신 메소드를 호출함으로써 객체를 생선한다.

#### 임포스터
- 현존하는 프로토콜을 갖는 다른 구현을 추가하여 시스템에 변이를 도입한다.

#### 컴포지트
- 하나의 객체로 여러 객체의 행위 조합을 표현한다.

#### 수집 매개 변수
- 여러 다른 객체에서 계산한 결과를 모으기 위해 매개 변수를 여러 곳으로 전달한다.

### 31장, 리팩토링

#### 차이점 일치시키기
- 비슷해 보이는 두코드가 단계적으로 닮아 가게끔 수정한다.
- 두 반복문의 구조가 비슷하다. 이 둘을 동일하게 만들고 나서 하나로 합친다.
- 조건문에 의해 나눠지는 두 분기의 코드가 비슷하다. 이둘을 동일하게 만들고 나서 조건문을 제거한다.
- 두 클래스가 비슷하다. 이둘을 동일하게 만들고 나서 하나를 제거한다.

#### 변화 격리하기
- 객체나 메서드의 일부만 바꾸려면 일단 바꿔야 할 부분을 격리한다.

#### 데이터 이주시키기
- 표현 양식을 변경시키기 위해 일시적으로 데이터를 중복시킨다.

#### 메소드 추출하기
- 길고 복잡한 메서드를 읽기 쉽게 만들기 위해 긴 메서드의 일부분을 별도의 메서드로 분리해내고 이를 호출하게 한다.

1. 기존의 메서드에서 별도의 메서드로 분리할 만한 부분을 찾아낸다. 반복문 내부의 코드, 조건문의 가지들
2. 추출할 영역의 외부에서 선언된 임시 변수에 대해 할당하는 문장이 없는지 확인
3. 추출할 코드를 복사해서 새 코드에 붙인다
4. 원래 메서드에 있던 각각의 임시 변수와 매개 변수 중 새 메서드에서도 쓰이는게 있으면 이들을 새 메서드의 매개 변수로 추가
5. 기존으 메소드에서 새 메서드를 호출한다.

#### 메서드 인라인
- 너무 꼬여 있거나 산재한 제어 흐름을 단순화 하기 위해서는 메서드를 호출하는 부분을 호출될 메서드의 본문으로 교체한다.

1. 메서드를 복사한다.
2. 메서드 호출하는 부분을 지우고 복사한 코드를 붙인다
3. 모든 형식 매개 변수를 실제 매개 변수로 변경한다.

#### 메소드 옮기기
- 메소드를 원래 있어야 할 장소로 옮기기 위해 어울리는 클래스에 메서드를 추가해주고 그것을 호출하게 해라

1. 메서드를 복사한다.
2. 원하는 클래스에 붙이고 이름을 적절히 지어 준다음 컴파일
3. 원래 객체가 메서드 내부에서 참조 한다면, 원래 객체를 새 메서드의 매개 변수로 추가한다. 원래 객체의 필드들이 참조되고 있다면 그것들도 매개 변수로 추가한다. 만약 원래 객체의 필드들이 갱신된다면 포기해야 한다.
4. 원래 메서드의 본체를 지우고, 그곳에 새 메서드를 호출하는 코드를 넣는다.

#### 메소드 객체
- 여러 개의 매개변수와 지역변수를 갖는 복잡한 메서드는 메서드를 꺼내서 객체로 만든다.

1. 메서드와 같은 매개 변수를 갖는 객체를 만든다.
2. 메스드의 지역 변수를 객체의 인스턴스 변수로 만든다.
3. 원래 메스드와 동일한 내용을 갖는 run() 이라는 이름의 메서드를 만든다
4. 원래 메서드에서는 새로 만들어진 클래스의 인스턴스를 생성하고 run()을 호출한다.

#### 메서드 매개변수를 생성자 매개 변수로 바꾸기
1. 생성자에 매개변수를 추가한다.
2. 매개 변수와 같은 이름을 갖는 인스턴스 변수를 추가한다.
3. 생성자에서 인스턴스 변수의 값을 설정한다.
4. 'param'을 'this.param'으로 바꾼다
5. 매개 변수에 대한 참조가 더 이상 존재 하지 않으면 해당 매개 변수를 메서드와 모든 호출자에서 제거한다.
6. 이제 필요 없어진 'this'를 제거
7. 변수명을 적절히 변경한다

### 32장, TDD 마스터 하기

#### 테스트할 필요가 없는것은 무엇인가
- 당신이 작성하는 것들에 대해서만 테스트 하라

#### 테스트를 지워야 할때는 언제인가
- 테스트를 삭제할 경우 자신감이 줄어들 것같으면 지우지 마라
- 두 개의 테스트가 코드의 동일한 부분을 실행하더라도, 이 둘이 서로 다른 시나리오를 말한다면 그대로 두어라
