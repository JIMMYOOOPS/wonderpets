# Wonderpets

Takeaway Homework for Second Interview

# 作業 - 實作 GraphQL API server

1. 程式啟動方式

   1. User information are stored in `userdatabase.json` according to requirements, where column names are saved in English and adding an additional token field that is generated during the gerneration.
   2. User information is generated via file `createfakeusers.ts` and can be regenerated under folder util running cmd `ts-node createfakeuser.ts`.
   3. The .env file should include the following fields
      1. BCRYPT_SALT=(VALUE)
      2. TOKEN_EXPIRE=(VALUE)
      3. TOKEN_SECRET=(VALUE)
   4. The project can be initiated via the root folder. `npm start` (runs command `ts-node server.ts`)
   5. Finally, once the server is initiated the endpoint can be tested via http://localhost:3000/graphql.
   6. Requested endpoints for `login()` and `me()` can be tested using the graphql playground.
      1. For testing purposes, the required account and password for `login()` can be found in `user.json` to retrieve the token while user logs in. Passwords are hashed in the `userdatabase.json` file.
      2. Once the token is retrieved from `login()`, `me()` can be reached by adding `'Bearer'+token` to the header.

2. 程式架構

   ![API Structure](/public/apistructure.png)

3. api 的規格與範例

   the api doc and example can be viewed by the assistance of SpectaQL via running the following command in the root file. `npx spectaql -d ./config.yml` and will display on `http://localhost:4400/`

4. 整個過程的研究心得

   1. Typescript

      Typescript as a superset of JavaScript makes me think twice about how I'm using or defining the types of variables. It is much clearer to me what might an object-oriented programming language look like. And after this exercise, I am more comfortable and aware of how to use classes in JavaScript or Typescript.

      While ES6 has made creating classes more approachable, in previous projects I seldom needed to create classes since most functionalities are dealt without it. However, after being exposed to Typescript every variable and function requires clear types through annotations. One of the challenges while developing this project was passing variables from third-party libraries. Since the type of the variable is often encapsulated in the modules, such as an express request and digging into the modules to learn about the structures has been inspiring.

      If I were to further learn Typescript, besides practising and memorizing the basic syntax, a lot of design patterns on how to use interface, encapulization is required.

   2. GraphQL

      Since RESTful API normally highlights the importance of making clear endpoints as resources and structuring the project through routes. Learning GraphQL as a substitution felt extremely unintuitive to grasp the concept of a single endpoint. However, after spending some time playing with the query structure it made much more sense.

      Rather than using endpoints as resources to retrieve information, GraphQL uses a schema structure that provides all information and is easier to query for results from the Front-End developers' view. Using a query to perform HTTP GET requests and Mutation for HTTP POST/PUT/DELETE under the schema structure largely reduces the communication costs on what each endpoint should look like, and no need for minor adjustments for each endpoint to fulfil specific needs.

      After this exercise, I have a change of view on the difference between RESTFUL API and GraphQL, where some resemblance between the design patterns can be found. For example, the structure under query and mutation can be seen as endpoints while the types or inputs set are the resources provided. Resolvers are similar to the controller functions that further manipulate the final results of the resources.
