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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_repository_1 = require("./post.repository");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async testQuery(message) {
        return await { message };
    }
    async build(post) {
        console.log('service build() is running');
        const gPost = await this.postRepository.build(post);
        console.log('service build() db resutlt post:> ');
        console.log(gPost);
        return gPost;
    }
    async rebuild(post) {
        console.log('service rebuild() is running');
        const gPost = await this.postRepository.rebuild(post);
        console.log('service rebuild() db resutlt post:> ');
        console.log(gPost);
        return gPost;
    }
    async fetchById(rId) {
        console.log('service fetchById() is running');
        const fPost = await this.postRepository.fetchById(rId);
        console.log('service fetchById() db resutlt fPost:> ');
        console.log(fPost);
        return fPost;
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_repository_1.PostRepository)),
    __metadata("design:paramtypes", [post_repository_1.PostRepository])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map