"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const items_service_1 = require("./items.service");
describe('ItemsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [items_service_1.ItemService],
        }).compile();
        service = module.get(items_service_1.ItemService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=items.service.spe.js.map