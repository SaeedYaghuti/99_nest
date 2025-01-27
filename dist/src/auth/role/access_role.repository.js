"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const access_role_entity_1 = require("./access_role.entity");
let AccessRoleRepository = class AccessRoleRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('AccessRoleRepository');
    }
    async createAccessRole(rAccessRole) {
    }
    async updateAccessRole(rAccessRole) {
    }
    async getAccessRoleById(rId) {
    }
};
AccessRoleRepository = __decorate([
    typeorm_1.EntityRepository(access_role_entity_1.AccessRole)
], AccessRoleRepository);
exports.AccessRoleRepository = AccessRoleRepository;
//# sourceMappingURL=access_role.repository.js.map