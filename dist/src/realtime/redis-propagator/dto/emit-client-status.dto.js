"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const emit_types_enum_1 = require("../types/emit_types.enum");
const emit_status_types_enum_1 = require("../types/emit_status_types.enum");
const class_validator_1 = require("class-validator");
class EmitClientStatusDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(emit_status_types_enum_1.EnumClientStatusTypes),
    __metadata("design:type", Number)
], EmitClientStatusDto.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], EmitClientStatusDto.prototype, "emitted_at", void 0);
exports.EmitClientStatusDto = EmitClientStatusDto;
//# sourceMappingURL=emit-client-status.dto.js.map