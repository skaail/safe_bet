"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const timeController_1 = __importDefault(require("../controllers/timeController"));
const router = express_1.default.Router();
router.get('/:id', timeController_1.default.getTime);
router.get('/', timeController_1.default.getTimes);
router.post("/", timeController_1.default.addTime);
exports.default = router;
