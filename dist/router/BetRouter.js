"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const betController_1 = __importDefault(require("../controllers/betController"));
const router = express_1.default.Router();
router.get('/:id', betController_1.default.getBet);
router.get('/', betController_1.default.getBets);
router.post("/", betController_1.default.addBet);
exports.default = router;
