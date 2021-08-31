# 목록과 표

## 1. 목록 - ul, ol, li

### 1) ol(The Ordered List element) 정렬

`start`
목록 항목에 대해 계산을 시작할 정수입니다. 번호 type가 문자나 로마 숫자인 경우에도 항상 아라비아 숫자(1, 2, 3 등) 입니다. 예를 들어 문자 "d" 또는 로마 숫자 "iv"에서 요소의 번호를 매기기 시작하려면 를 사용 start="4"합니다.

`type`
번호 매기기 유형을 설정합니다. 기본값은 숫자.

- a 소문자의 경우
- A 대문자의 경우
- i 소문자 로마 숫자의 경우
- I 대문자 로마 숫자의 경우
- 1 숫자용(기본값)

`type` 둘러싸인 `<li>` 요소에 다른 속성이 사용되지 않는 한 지정된 유형이 **전체 목록에 사용**됩니다 .

✨ **예시**

```html
<ol type="i">
  <li>Introduction</li>
  <li>List of Greivances</li>
  <li>Conclusion</li>
</ol>
```

🧪 **실행결과**

![ol 예제](./images/ol.png)

### 2) ul(The Unordered List element) 비정렬

✨ **예시**

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <!-- closing </li> tag not here! -->
    <ul>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
      <li>second item third subitem</li>
    </ul>
  </li>
  <li>third item</li>
</ol>
```

🧪 **실행결과**

![ul 예제](./images/ul.png)

## 2. 정의 목록 - dl, dt, dd

### 1) <dl>: The Description List element

`<dl>`은 `<dt>`(요소를 사용하여 지정됨) 및 `<dd>`(요소에서 제공됨) 그룹 목록을 묶습니다. 용어 사전 구현이나 메타데이터(키-값 쌍 목록)를 표시하는 것입니다.
하나의 용어에 하나의 정의 형태로 이루어져 있다.

### 2) <dt>: The Description Term element 용어

### 3) <dd>: <dd>: The Description Details element 설명

✨ **예시**

```html
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

🧪 **실행결과**

![dl 예제](./images/dt.png)

### 이름-값 그룹을 `<div>`로 감싸기

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
</dl>
```

`<div>`로 감싸는 건 가능하지만 dt와 dd의 형제 태그로 사용은 불가능하다.

## 3. 표 - table, tr, th, td

### `<tr>`

#### 속성

`scope`
`<th>` 가 갖을 수 있는 특성이 있습니다. scope 표준에 맞게 접근성을 높여줍니다.

- row: 헤더가 속한 행의 모든 ​​셀과 관련됩니다.
- col: 헤더가 속한 열의 모든 셀과 관련됩니다.

✨ **예시**

```html
<table>
  <tr>
    <th scope="col">Player</th>
    <th scope="col">Gloobles</th>
    <th scope="col">Za'taak</th>
  </tr>
  <tr>
    <th scope="row">TR-7</th>
    <td>7</td>
    <td>4,569</td>
  </tr>
  <tr>
    <th scope="row">Khiresh Odo</th>
    <td>7</td>
    <td>7,223</td>
  </tr>
</table>
```

🧪 **실행결과**

![table 예제](./images/table.png)

### `<td>`

#### 속성

`colspan`
`rowspan`

## 4. thead, tbody, tfoot

테이블도 thead, tbody, tfoot로 나눠서 마크업이 가능합니다.

✨ **예시**

```html
<table>
  <caption>
    Council budget (in £) 2018
  </caption>
  <thead>
    <tr>
      <th scope="col">Items</th>
      <th scope="col">Expenditure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Donuts</th>
      <td>3,000</td>
    </tr>
    <tr>
      <th scope="row">Stationery</th>
      <td>18,000</td>
    </tr>
  </tbody>
</table>
```

🧪 **실행결과**

![thead 예제](./images/thead.png)

## 5. caption: 표 설명 요소

- 부모 `<table>` 요소의 **첫 번째 자식**이어야 합니다.
- 가운데 정렬로 들어갑니다.
- `<caption>` 요소를 가진 `<table>` 요소가 만약 `<figure>` 요소의 유일한 자식인 경우 `<figcaption>`을 대신 사용합니다.
