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
   2. 程式架構
   3. api 的規格與範例
   4. 整個過程的研究心得
      1. Typescript
         1. Type as a system providing syntax + features and design patterns
         2. Still runs script as javascript in node.js runtime except it compiles .ts files to .js files
         3. Types
            1. Primitive Types: number, string, boolean, symbol, viod, null, undefined.
            2. Object Types: functions, arrays, classes, objects
            3. Tuple: records the values opposing to keys sets in an array([number, string, date]) form which is distinct from an array.
            4. Type annotations and inferences: declaring the annotation of each varible declared.
               1. Timing for annotations: 1) varible that returns 'any' as a type. 2)Delayed initialization 3)Inference failing
         4. Using interface in defining objects assist on catching errors during development
      2. GraphQL
         1.
