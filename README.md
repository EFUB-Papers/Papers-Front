<div align="center">

<h3>

![image](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/134a7f65-fff6-4b5e-8dcc-26d9cb4535c8)


프로젝트 명 : PAPERS(페이퍼즈)
  
</h3>
  <p>작업 기간 : 2023/09/05 ~ 2023/11/28</p>
  <br> <br>
</div>


<h2>🌈 프로젝트 소개</h2> 

<h3>페이퍼즈에서 웹 문서를 쉽게 링크로 달아 스크랩을 만들고 공유해 보세요! </h3> 

<br>

<h2>✏️ 프로젝트 기능</h2> 

- 스크랩 CRUD, 링크 미리보기 기능

- 구글 로그인 기능
  
- 카테고리와 키워드를 통한 검색 기능
  
- 폴더를 통한 스크랩 분류 기능
  
- 라이트 모드 / 다크 모드
  
- 팔로우 / 댓글 / 좋아요 기능

<br>

<h2>😁 팀원</h2> 

|Front end|Front end|
| :-: | :-: |
| <img src="https://github.com/KIT-Frontend-Team1/pair1-Git-Issue-Project/assets/123865139/490a8625-edaa-4c1a-afd1-966a661d7a0b" width="150"> | <img src="https://github.com/EFUB-Papers/Papers-Front/assets/125418818/7c3b3b99-0fb1-4b6b-82cf-6b49d1d381b6" width="150"> |
|[오혜린](https://github.com/ooherin)|[조정민](https://github.com/Cho-Jeongmin)|
| 마이 페이지, 폴더 페이지 | 구글 로그인, 메인 페이지 |
| 미리보기,다크 모드, 전체 모달 | 검색 페이지, 디테일 페이지 |

모든 페이지, 기능들을 협업해 만들었습니다! 

<br>

<h2>🔗 배포 링크 : vercel</h2> 

[https://papers-front.vercel.app/]

<br>

<h2>✨ 사용한 라이브러리</h2> 

- typescipt
  
- axios
  
- react-router-dom
  
- recoil (+persist)
  
- react-query
  
- react-oauth/google

- styled-components
  
- prettier
  
- eslint

<br/>

<h2> 📂 폴더 구조 </h2>

```javascript
-apis
  - axiosInstance.ts
  - comment.ts
  - folder.ts
  - follow.ts
  - likes.ts
  - member.ts
  - scraps.ts

- assets

- atom
  - modal.tsx
  - mode.tsx

- components
  - _common
  - DetailPage
  - FolderPage
  - Header
  - Modal

- contants
  - Api.ts
  - Category.ts

- hooks
  - apis (리액트 쿼리 커스텀 훅)
    - comment.ts
    - folder.ts
    - follow.ts
    - likes.ts
    - member.ts
    - scrap.ts
  - useInputs.tsx
  - useScroll.tsx

- layout
  - modalLayout
  - headerLayout
  - navbarLayout

- mock

- pages
  - AuthPage
  - CategoryPage
  - DetailPage
  - FolderPage
  - FollowingPage
  - LikePage
  - LoadingPage
  - LoginPage
  - MainPage
  - ScrapWritePage
  - SearchPage

- router
  - router.tsx

- style
  - common.ts
  - global.ts
  - reset.ts
  - theme.ts

- types
  - CommentType.ts
  - FolderType.ts
  - FollowingType.ts
  - ScrapType.ts
  - TagType.ts
  - UserType.ts

- utils
  - arrayHelper.ts
  - fileConvertor.ts
  - localStorage.ts
  - timeHelper.ts

- CombinedProvider.tsx

```
<br/>

<h2> 🎥 시연 영상 </h2>

<p>검색</p>

![검색](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/7887dbcb-e7e6-42b3-bd31-da9b6cead393)

<p>디테일 페이지</p>

![디테일보기_댓글](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/b9fad31a-ce0d-42cd-afd2-1bac04f7de0c)

<p>스크랩 작성</p>

![스크랩작성](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/75fac04c-353d-4773-8224-62e90a0560ed)

<p>카테고리 보기</p>

![카테고리보기](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/100faa5d-d886-4807-b6b3-3d7695b64671)

<p>유저 정보 수정</p>

![프로필-변경 (2)](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/37e0e741-8e25-4d54-8b88-2b6afbe61ddb)

<p>폴더 생성, 삭제</p>

![폴더-생성_삭제](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/c5ed4c10-2cf0-47c2-b917-cb1f18d6d05f)

<p>폴더 수정</p>

![폴더-수정](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/de282d04-341a-4b52-9034-6515a4b61e65)

<p>폴더 이동</p>

![폴더이동](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/9587c750-7123-4e5f-a2e2-3d0cb602a9d4)

<p>폴더 보기</p>

![폴더 보기](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/b72d95b3-5b34-42fe-9215-7cdb2eac1818)

<p>다른 유저 폴더 보기</p>

![다른사람_폴더보기](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/73a3baf3-378c-49c6-a90a-2094e8ec8d32)

<p>좋아요 리스트</p>

![좋아요하고_리스트](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/10c49931-c273-482d-9103-bd567bcf151f)

<p>팔로우 리스트</p>

![팔로우하고_팔로우리스크](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/91413249-5675-4c76-87d0-7bc4112d73e2)

<p>라이트 / 다크 모드</p>

![다크모드](https://github.com/EFUB-Papers/Papers-Front/assets/125418818/98584505-eadd-4d80-b4f7-e974e9d92138)

