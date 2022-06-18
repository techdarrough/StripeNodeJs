"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
// Env vars and stripe api
const dotenv_1 = require("dotenv");
if (process.env.NODE_ENV !== "production") {
    dotenv_1.config();
}
// Init Stripe
const stripe_1 = __importDefault(require("stripe"));
exports.stripe = new stripe_1.default(process.env.STRIPE_SECERT, {
    apiVersion: "2020-03-02",
});
const api_1 = require("./api");
const port = process.env.PORT || 3000;
api_1.app.listen(port, () => console.log(`API running on http://localhost:${port}`));
//# sourceMappingURL=index.js.map