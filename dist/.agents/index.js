"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Export all agents that should be available
const bias_agent_1 = __importDefault(require("./bias-agent"));
const my_custom_agent_1 = __importDefault(require("./my-custom-agent"));
exports.default = [
    bias_agent_1.default,
    my_custom_agent_1.default
];
