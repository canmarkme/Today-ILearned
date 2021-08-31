# 임베디드 요소

임베디드 요소는 코드로 내용 작성하는 것이 아니라 외부 소스를 불러와서 내부에 삽입하는 것을 말합니다.

## 1. img - src, alt, width, height

- `src` 속성은 필수로 이미지 경로를 지정합니다.
- `alt` alternative text: 대체 텍스트. 속성을 읽어 사용자에게 이미지를 설명하므로, 접근성 차원에서 매우 유용합니다.
- `title` 그림에 마우스를 올렸을 때 툴팁 설명을 보여줍니다.
- width 가로 길이를 변경하면 height도 맞게 변합니다.

✨ **예시**

```html
<img
  class="fit-picture"
  src="/media/cc0-images/grapefruit-slice-332-332.jpg"
  alt="Grapefruit slice atop a pile of other slices"
  title="오렌지"
/>
```

🧪 **실행결과**

![img 예제](./images/img.png)

## 2. 웹에서 사용하는 이미지 유형

| Abbreviation | MIME type       | File extension(s)                          | Summary                                                                                   |
| ------------ | --------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| JPEG         | `image/jpeg`    | `.jpg`, `.jpeg`, `.jfif`, `.pjpeg`, `.pjp` | 정지 이미지의 손실 압축에 적합하다. (현재 가장 많이 사용됨)                               |
| PNG          | `image/png`     | `.png`                                     | PNG는 원본 이미지를 보다 정확하게 보여주거나 투 . 명도가 필요한 경우 JPEG보다 선호됩니다. |
| GIF          | `image/gif`     | `.gif`                                     | 여러장의 이미지로 이루어진 애니메이션 표현 가능합니다.                                    |
| WEBP         | `image/webp`    | `.webp`                                    | 구글이 만든 이미지 포맷, 품질, 압축률 등이 훨씬 우수 하나 지원 브라우저가 제한적입니다.   |
| SVG          | `image/svg+xml` | `.svg`                                     | 다양한 크기로 정확하게 그려야 하는 아이콘, 다이어그램 등에 사용됩니다.유일한 벡터이미지   |

래스터 이미지는 격자 형태로 만들어졌고 벡터이미지는 아이콘과 UI 요소들에 많이 쓰입니다.

검색창에 can i use 검색. https://caniuse.com/

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cf9dd5ce-fb83-48e4-9e03-481e14e77aec/Untitled.png)

# 4. 반응형 이미지 - srcset

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64570365-20d2-415e-8cff-5c4cb4bf79a0/Untitled.png)

환경에 따라 이미지 크기가 변하게 됩니다.

이미지 만드는 법 [placeholder.com](http://placeholder.com)

300

450

600

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd6e2f3f-cd19-4dc1-a1b4-5f88a613209c/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/886863d1-38f7-4985-98db-b18b6de1480f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a67fda9-a78a-4718-8885-95ecf36b5aa9/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32c67f33-3f7b-4660-9c7b-b192d0fb7b48/Untitled.png)

# 5. 반응형 이미지 - sizes

srcset은 작은화면은 작은 이미지 등등 뷰 포트에 따라 다른 이미지를 주는 경우

sizes

min-width 가장최소너비(이 보다 커야됨)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2fc51f1b-8fa6-4edc-92e4-ac20079cdc0c/Untitled.png)

# 6. video

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b2a935b-8d28-4959-ac46-30f4fa5c37b8/Untitled.png)

mp4 파일 하나 준비

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38890fcc-b0ed-41ab-8860-ad3795c0803e/Untitled.png)

이미지 태그는 내부에 자식 요소를 가질 수가 없으나 비디오는 자식 태그를 가질 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87aba5cf-b9b5-4425-a0ca-d1f265e682c0/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5598e80-6d2c-4fb3-aa73-79063f1716ed/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ed3bea2-3bf5-4e13-ad0d-98d168ce3575/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98cf9fd8-69e7-4431-8bd5-a1354beffbc7/Untitled.png)

src가 선택사항입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/689f8c71-1780-43cd-9623-31232cd08613/Untitled.png)

비디오 추가로 보여지는 속성이 controle

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/113ca0dd-9e59-4362-abd4-d7a7e415ad6c/Untitled.png)

소리, 전체화면 등등 옵션값을 줄 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c35bc8c0-4017-47e1-b355-97db20932dfe/Untitled.png)

autoplay는 새로고침한 경우 비디오가 재생되지 않습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05b980b3-4fcf-4b10-a119-f831f768c7aa/Untitled.png)

인스타그램처럼 사운드 없이 비디오가 시작되게 할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/350dd96d-a559-48e8-a2a6-14153042f4e5/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd242425-8fac-40a8-98be-bc50787ad23c/Untitled.png)

autoplay와 muted를 같이 써주면 비디오가 시작되는 것을 볼 수 있습니다.

poster로 썸네일 띄울 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/294ce1f7-dadd-4cb2-ba28-040a3c913cbd/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46b69843-7310-4ed3-98fe-131a5116bd70/Untitled.png)

# 7. audio

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/82921635-0f36-45e4-bdc7-6687183e8b71/Untitled.png)

multiple source elements

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd21f0c3-6590-4bcb-991d-ad04a12a7043/Untitled.png)

브라우저가 지원가능한 소스들을 찾게됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/812b4876-ab1a-4f72-a421-1aba3f1956f5/Untitled.png)

비디오는 muted를 써서 사용 가능하지만

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/532a66fa-e77e-4d34-a104-9345dad77473/Untitled.png)

# 8. canvas, iframe

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9d81761d-d30d-45df-9eea-b0424f9eebd9/Untitled.png)

마크업을 html로 하고 내부 그림을 그리기 위해서 자바스크립트를 이용합니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f36f0d6-7e03-491e-8870-a75cbb8e98bd/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c9a3c5e-4af6-4cb0-9c89-5ecbf4a2d4a7/Untitled.png)

소스를 외부에서 불러와서 프레임안에 씁니다.

예제는 다른 html을 띄어준 것 입니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c31f0329-7d6d-454b-b739-351572ca94e5/Untitled.png)

보통 구글 웹 같은 것 삽입할 때 많이 사용합니다.

인라인 프레임으로 허용된 url만 사용 가능합니다. ( 그래서 네이버지도는 안될 수도 있습니다....)

검색에 google map iframe

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1bdca9ff-31ce-4033-96e0-fb88b632e83d/Untitled.png)
