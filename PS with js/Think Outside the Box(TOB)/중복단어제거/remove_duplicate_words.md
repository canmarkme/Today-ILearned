![](../images/remove_duplicate_words.png)


## ๐ค Comment

### 1) filter() ํจ์
ํน์  ์กฐ๊ฑด์ ๋ถํฉํ๋ ๋ฐฐ์ด์ **๋ชจ๋  ๊ฐ์ ๋ฐฐ์ด ํํ**๋ก ๋ฆฌํดํฉ๋๋ค. 

```javascript
array.filter(callback(element, index, array))
```

- element: ํ์ฌ ์ฒ๋ฆฌ ์ค์ธ ๋ฐฐ์ด์ element
- index: ํ์ฌ ์ฒ๋ฆฌ ์ค์ธ ๋ฐฐ์ด์ idnex. (Optional)
- array: filter()๊ฐ ํธ์ถ๋ ๋ฐฐ์ด์๋๋ค. (Optional)



### 2) indexOf() ํจ์
๋ฐฐ์ด ์์์ ์ฐพ์ผ๋ ค๋ ๊ฐ(searchElement)๊ณผ ์ ํํ๊ฒ ์ผ์น(===)ํ๋ **์ฒซ๋ฒ์งธ** element์ index๋ฅผ ๋ฐํํฉ๋๋ค. ์ฐพ๋ ๊ฐ์ด ์กด์ฌํ์ง ์์ผ๋ฉด -1์ ๋ฐํํฉ๋๋ค. 

```javascript
array.indexOf(searchElement, fromIndex);
```

- searchElement: ์ฐพ๋ ๊ฐ
- fromIndex: ๊ฒ์์ ์์ํ  index (Optional)

### 3) ์ฐธ๊ณ  ๋ธ๋ก๊ทธ
https://hianna.tistory.com/422
https://hianna.tistory.com/404
https://hianna.tistory.com/406


