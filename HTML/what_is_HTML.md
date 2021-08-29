# 1. HTML은 어떻게 생겼을까

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/23a86699-0832-4813-a3d5-858ebb107daf/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/689ed045-802d-4990-bef7-c26cf6908add/Untitled.png)

웹 페이지는 요소들이 나열되어 구성한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6b2842a-ce91-4d4a-b3ff-648032ce69d9/Untitled.png)

코드를 읽을 때 가독성을 위해 될수있으면 모두 소문자로 쓰기.

# 2. 빈 요소

HTML은 각각 요소들이 나열되어 있는 형태고 그 요소들은 태그로 구성되어 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/525b0b7c-75d5-41a5-bfa5-d590af8d6d16/Untitled.png)

빈 요소로 쓸 수 있는 태그들은 웹 표준에 정해져있다.

# 3. 요소의 중첩

태그 아에 text 뿐 아니라 다른 요소를 넣을 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/daa69327-8458-4908-b5e5-ec40f44e0129/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46a4ded6-bb8c-4f6c-bbaf-bf512aea142f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1a57236-9f8c-4814-91f8-96d3cbbca871/Untitled.png)

HTML 문법으로는 들여쓰기가 필요없지만, 가독성을 위해 들여쓰기를 쓴다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/adc9e725-f91e-4e4c-a840-3c1d65b56bff/Untitled.png)

부모 태그 안에 자식태그가 쏙 들어가있어야 한다. 자식 태그가 다 닫히고 부모태그가 닫히는 형태

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c18b2476-6c1c-4fb8-83fd-8aaf138121b4/Untitled.png)

내용으로 두가지가 들어갈 수 있는데 첫번째는 태그이고 두번째는 다른 요소입니다.

# 4. 주석

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef690fa9-0591-493f-a77a-c7fd920240b6/Untitled.png)

# 5. HTML 문서의 구조

이제부터 실제로 쓰이는 태그를 봅니다 .

어떤 HTML 문서를 열어도 필수적으로 가지고 있는 태그들입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e34645d1-d845-4218-ae5f-e24f5948b228/Untitled.png)

1 선언이 관습화되었다.(없어도 괜찮지만..)

2 하나의 문서에 하나만 있다. 모든 요소들은 html 태그안에 들어가야한다.

두개의 자식을 가진다. head, body

3 탭 제목 정보, 혹은 검색 엔진

4 바디는 그 외 모든것

# 6. HEAD 태그

html 첫 번째 자식요소인 head 태그

태그의 정보 파악하는 방법

검색 키워드

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76942ac1-ad4d-4d08-a4ac-fb0038063128/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93c23ded-a9c5-416f-9e9e-5aef284cfc43/Untitled.png)

모질라에서 만든 웹사이트고 웹 개발에 관련된 전반적인 내용이 있는 사이트입니다.

여기서 기계는 웹브라우저입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/320a9be5-d939-4bfb-98c7-58524f006efa/Untitled.png)

# 7. BODY 태그

mdn 링크

# 8. 태그를 구분짓는 특성

몇가지 구분으로 나뉠 수 있다.

body 영역에 들어가는 태그

그룹화할때 하는 태그를 구획을 나누는 태그라고 한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/249f5381-3fc5-4053-b412-9f7b681de120/Untitled.png)

내부 아이템이 없을떄는 눈에 보이지 않습니다 .

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b1fc3e3d-1db9-4477-909e-539b42e6dfa4/Untitled.png)

구획을 나누는 태그가 중요한 이유는

# 9. 블록과 인라인

태그를 구분 짓는 특성중 블록과 인라인이 또 있습니다.

그림 1, 4는 블록 2, 3는 인라인

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/394a4b9c-f789-43b8-8c3d-e43afe274202/Untitled.png)

블록은 본인 너비와 상관없이 한층을 모두 차지합니다. body 아래에 있다면 보여지는 웹페이지의 가로 너비를 모두 차지합니다. 부모가 허용하는 가로 최대까지 모두 차지합니다.

인라인은 해당 컨텐츠가 가지는 공간만큼 차지합니다.

3뒤에 4 블록이 들어갈 수 없고 한층을 다 차지합니다.

# 10 콘텐츠 카테고리
