# npm i --save asked-client 

## example

```ts
import { RequestClient } from "asked-client";

const client = RequestClient.create();

let result = client.signUp().then((result) => {
    console.log(result);
});
```

## How to Get your userId

#### 자신의 asked 주소에서 f12를 누르고, CTRL + SHIFT + C를 누릅니다

#### 팔로우 버튼을 선택합니다

![image](https://user-images.githubusercontent.com/88186573/156020502-e28226d6-0ac4-4013-8e7b-88c1dd150026.png)

#### 위 이미지에서 fw*OOOOOOOOO에서 fw*를 제외한 값이 ID입니다
