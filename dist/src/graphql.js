"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleType;
(function (ArticleType) {
    ArticleType["MERCHANT_PROFILE"] = "MERCHANT_PROFILE";
    ArticleType["POST"] = "POST";
    ArticleType["COMMENT"] = "COMMENT";
    ArticleType["RATE"] = "RATE";
})(ArticleType = exports.ArticleType || (exports.ArticleType = {}));
var AuthType;
(function (AuthType) {
    AuthType["CUSTOMER"] = "CUSTOMER";
    AuthType["SUPPLIER"] = "SUPPLIER";
    AuthType["SHIPPER"] = "SHIPPER";
    AuthType["ADMIN"] = "ADMIN";
    AuthType["EDITOR"] = "EDITOR";
    AuthType["ACCOUNTER"] = "ACCOUNTER";
    AuthType["CASHIER"] = "CASHIER";
    AuthType["SALESMAN"] = "SALESMAN";
    AuthType["SUBSCRIBED"] = "SUBSCRIBED";
    AuthType["MERCHANT"] = "MERCHANT";
})(AuthType = exports.AuthType || (exports.AuthType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PACKAGED"] = "PACKAGED";
    OrderStatus["DELEVIRED"] = "DELEVIRED";
    OrderStatus["PAID"] = "PAID";
    OrderStatus["CANCELED"] = "CANCELED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var PersonRole;
(function (PersonRole) {
    PersonRole["CUSTOMER"] = "CUSTOMER";
    PersonRole["SUPPLIER"] = "SUPPLIER";
    PersonRole["SHIPPER"] = "SHIPPER";
    PersonRole["STAFF"] = "STAFF";
})(PersonRole = exports.PersonRole || (exports.PersonRole = {}));
var RelationType;
(function (RelationType) {
    RelationType["ACTIVE"] = "ACTIVE";
    RelationType["BLOCK"] = "BLOCK";
    RelationType["MUTE"] = "MUTE";
})(RelationType = exports.RelationType || (exports.RelationType = {}));
//# sourceMappingURL=graphql.js.map