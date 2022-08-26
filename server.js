"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var apollo_server_express_1 = require("apollo-server-express");
var apollo_server_core_1 = require("apollo-server-core");
var graphql_scalars_1 = require("graphql-scalars");
var users = [
    {
        "id": "",
        "account": "",
        "password": "",
        "name": "",
        "birthday": ""
    },
    {
        "id": "",
        "account": "",
        "password": "",
        "name": "",
        "birthday": ""
    },
    {
        "id": "",
        "account": "",
        "password": "",
        "name": "",
        "birthday": ""
    }
];
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function () {
        var resolvers, typeDefs, server, app, port;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resolvers = {
                        Query: {
                            users: function () { return users; }
                        },
                        DateTime: graphql_scalars_1.DateTimeResolver
                    };
                    typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID\n    account: String\n    password: String\n    userName: String\n    birthday: DateTime\n  }\n  \n  type Query {\n    users: [User]\n  }\n  \n  scalar DateTime\n  "], ["\n  type User {\n    id: ID\n    account: String\n    password: String\n    userName: String\n    birthday: DateTime\n  }\n  \n  type Query {\n    users: [User]\n  }\n  \n  scalar DateTime\n  "])));
                    server = new apollo_server_express_1.ApolloServer({
                        typeDefs: typeDefs,
                        resolvers: resolvers,
                        csrfPrevention: true,
                        cache: 'bounded',
                        plugins: [
                            (0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)({ embed: true }),
                        ]
                    });
                    app = (0, express_1["default"])();
                    port = 3000;
                    return [4 /*yield*/, server.start()];
                case 1:
                    _a.sent();
                    server.applyMiddleware({ app: app });
                    app.listen({ port: port }, function () {
                        return console.log("\uD83D\uDE80 Server ready at http://localhost:".concat(port).concat(server.graphqlPath));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
startApolloServer();
var templateObject_1;
