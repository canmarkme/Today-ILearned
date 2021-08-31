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

## 3. 반응형 이미지 - srcset

`src`
이미지의 URL.

`srcset`
쉼표로 구분하는 한 개 이상의 문자열 목록입니다. 반응형(view point) 이미지. 사용자의 view port에 따라서 화면이 보여집니다.

- 이미지의 URL
- 선택적으로, 공백과 함께 그 뒤를 잇는...
  - **너비 서술자**(양의 정수와 바로 뒤의 '**w**' 문자). 너비 서술자의 값을 sizes 특성으로 지정한 소스 크기로 나눠서 픽셀 밀도를 구합니다.
  - **픽셀 밀도 서술자**(양의 실수와 바로 뒤의 '**x**' 문자). 서술자를 포함하지 않은 경우 기본값인 1x 로 간주합니다.

환경에 따라 이미지 크기가 변하게 됩니다.
ps. 실행이 안될 경우, 개발자 모드 > Network 탭 > Disable cashe 선택합니다.
크롬은 이미지를 저장소에 저장하여 재방문하면 같은 이미지를 보여주기 때문..

[placeholder.com](http://placeholder.com) 이미지 만드는 법 https://via.placeholder.com/150

✨ **예시**

```html
<img
  src="images/large.png"
  srcset="
    images/small_srcset.png 300w,
    images/medium.png       450w,
    images/large.png        600w
  "
  sizes="(min-width: 600px) 600px,
          (min-width: 600px) 450px,
          300px,"
  alt="responsive images"
/>
```

## 4. 반응형 이미지 - sizes

view port size에 맞게 설정할 수 있습니다.
min-width 가장최소너비(이 보다 커야됨)

## 5. video

이미지 태그는 내부에 자식 요소를 가질 수가 없으나 비디오는 자식 태그를 가질 수 있습니다.

- src가 선택사항입니다.
- `controls`
  브라우저는 사용자가 볼륨, 탐색 및 재생 일시 중지/재시작을 훌 수 있는 컨트롤을 제공합니다.
- `autoplay`
  비디오 자동 재생을 비활성화하려면 **autoplay="false"**작동하지 않습니다. 속성이 <video>태그 에 있는 경우 동영상이 자동 재생됩니다 . 자동 재생을 제거하려면 속성을 완전히 제거해야 합니다.
- `muted`
  설정하면 오디오가 처음에 무음으로 설정됩니다. 기본값 false은 비디오가 재생될 때 오디오가 재생됨을 의미하는 입니다.
- `poster`
  썸네일 사용. 이 속성을 지정하지 않으면 첫 번째 프레임이 썸네일이 됩니다.

## 6. audio

### `<audio>` with multiple `<source>` elements

✨ **예시**
브라우저가 지원가능한 소스들을 찾게됩니다.

```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
</audio>
```

비디오는 muted를 써서 영상 바로 시작이 가능하지만 오디오는 불가능합니다.

## 6. canvas, iframe

### 1) `<canvas>`: The Graphics Canvas element

마크업을 html로 하고 내부 그림을 그리기 위해서 자바스크립트를 이용합니다.

✨ **예시**

**html**

```html
<canvas width="300" height="300">
  An alternative text describing what your canvas displays.
</canvas>
```

**javascript**

```javascript
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

🧪 **실행결과**

![canvas 예제](./images/canvas.png)

### 2) `<iframe>`: The Inline Frame element

현재 문서 안에 다른 HTML 페이지를 삽입합니다. 보통 구글 웹 같은 것 삽입할 때 많이 사용합니다. 인라인 프레임으로 허용된 url만 사용 가능합니다. ( 그래서 네이버지도는 안될 수도 있습니다....)

✨ **예시**

```html
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="300"
  height="200"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
>
</iframe>
```

🧪 **실행결과**

![iframe 예제](./images/iframe.png)

검색창에 google map iframe
https://developers.google.com/maps/documentation/embed/get-started
