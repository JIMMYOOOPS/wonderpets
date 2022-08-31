# wonderpets

takeaway work for second interview

# 作業 - 實作 GraphQL API server

1. 請使用 Node.js + Typescript + apollo-server (`https://github.com/apollographql/apollo-server`) 架設 GraphQL Server
   1. 使用 Typescript 撰寫時必須使用精確的型別名稱，不可用 `any` 型別
2. 建立使用者資料。直接儲存成 `.json` 格式即可不需要使用資料庫。使用者欄位如下:
   1. 帳號
   2. 密碼 (不可以用明碼儲存)
   3. 姓名
   4. 生日
3. 實作兩支 GraphQL API
   1. `login()`: 以使用者帳號及密碼進行登入並取得 JWT token
   2. `me()`: 從 HTTP 標頭 `Authorization` 取得 JWT token 確認使用者身份後，回傳當前的使用者資料
   3. 可以利用 `apollo-server` 提供的 playground 進行 API 測試
4. 請回信提供專案 github 網址，並在 `README.md` 中提供以下內容

   1. 程式啟動方式

      1. User information are stored in `userdatabase.json` according to requirements, where column names are saved in English and adding an additional token field that is generated during the gerneration.
      2. User information is generated via file `createfakeusers.ts` and can be regenerated under folder util running cmd `ts-node createfakeuser.ts`.
      3. The project can be initiated via the root folder. `npm start` (runs command `ts-node server.ts`)
      4. Finally, once the server is initiated the endpoint can be tested via http://localhost:3000/graphql.
      5. Requested endpoints for `login()` `me()` and can be tested using the graphql playground.

   2. 程式架構

      ![API Structure](/public/apistructure.png)

   3. api 的規格與範例
      the api doc and example can be viewed by the assistance of SpectaQL via running the following command in the root file. `npx spectaql -d ./config.yml` and will display on `http://localhost:4400/`
   4. 整個過程的研究心得

      1. Typescript

         Typescript as a super set of JavaScript definately makes me think twice on how I'm using or defining the types on variables. It is much clearer to me on what might an object oriented programming language look like. And more comfortable in using classes in JavaScript or Typescript.

         Previously, while learning JavaScript although ES6 made creating classes more approachable, during previous project developments I have seldom had the need in creating them since most functionalities can be dealt with without creating classes. However, after exposed to Typescript every varible and function require clear types through annotations. When developing this project, passing varibles from third party liabries often prove to be challenging since I have never given deep thought on what the types were for varibles such as an express request and digging into the modules has been quite inspiring.

         If I were to further learn Typescript, besides practicing and memorizing the basic syntax, a lot of desgin patterns on how to intergrate classes will be required.

      2. GraphQL
         1. Queries:
         2. Mutations:
