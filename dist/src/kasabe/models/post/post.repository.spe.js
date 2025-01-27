"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const database_service_1 = require("../../../database/database.service");
const database_module_1 = require("../../../database/database.module");
const test_utils_1 = require("../../../test/test.utils");
const auth_module_1 = require("../../../auth/auth.module");
const auth_service_1 = require("../../../auth/auth.service");
const auth_repository_1 = require("../../../auth/auth/auth.repository");
const nest_access_control_1 = require("nest-access-control");
const auth_roles_1 = require("../../../auth/auth.roles");
const merchant_category_repository_1 = require("../merchant_category/merchant_category.repository");
const tag_repository_1 = require("../tag/tag.repository");
const person_repository_1 = require("../person/person.repository");
const post_repository_1 = require("./post.repository");
const merchant_repository_1 = require("../merchant/merchant.repository");
const build_post_inputs_1 = require("../../../test/fixtures/kasabe/post/build.post.inputs");
const heart_repository_1 = require("../heart/heart.repository");
const build_article_inputs_1 = require("../../../test/fixtures/kasabe/article/build.article.inputs");
const rate_repository_1 = require("../rate/rate.repository");
const comment_repository_1 = require("../comment/comment.repository");
const article_repository_1 = require("../article/article.repository");
jest.setTimeout(90000);
describe("post.repository.spec.ts", () => {
    let testUtils;
    let authService;
    let articleRepository;
    let merchantRepository;
    let merchantCategoryRepository;
    let tagRepository;
    let postRepository;
    let commentRepository;
    let rateRepository;
    let heartRepository;
    beforeEach(async (done) => {
        const module = await testing_1.Test.createTestingModule({
            imports: [
                nest_access_control_1.AccessControlModule.forRoles(auth_roles_1.roles),
                database_module_1.DatabaseModule,
                auth_module_1.AuthModule,
            ],
            providers: [
                database_service_1.DatabaseService,
                test_utils_1.TestUtils,
                auth_repository_1.AuthRepository,
                tag_repository_1.TagRepository,
                person_repository_1.PersonRepository,
                merchant_repository_1.MerchantRepository,
                comment_repository_1.CommentRepository,
                rate_repository_1.RateRepository,
                heart_repository_1.HeartRepository,
                auth_service_1.AuthService,
            ]
        }).compile();
        testUtils = module.get(test_utils_1.TestUtils);
        authService = module.get(auth_service_1.AuthService);
        try {
            tagRepository = testUtils.databaseService.connection.getCustomRepository(tag_repository_1.TagRepository);
            articleRepository = testUtils.databaseService.connection.getCustomRepository(article_repository_1.ArticleRepository);
            merchantRepository = testUtils.databaseService.connection.getCustomRepository(merchant_repository_1.MerchantRepository);
            merchantCategoryRepository = testUtils.databaseService.connection.getCustomRepository(merchant_category_repository_1.MerchantCategoryRepository);
            commentRepository = testUtils.databaseService.connection.getCustomRepository(comment_repository_1.CommentRepository);
            postRepository = testUtils.databaseService.connection.getCustomRepository(post_repository_1.PostRepository);
            rateRepository = testUtils.databaseService.connection.getCustomRepository(rate_repository_1.RateRepository);
            heartRepository = testUtils.databaseService.connection.getCustomRepository(heart_repository_1.HeartRepository);
        }
        catch (error) {
            console.error('merchantRepository| error>', error);
        }
        done();
    });
    beforeEach(async (done) => {
        try {
            await testUtils.cleanEntities();
        }
        catch (error) {
            console.log('<<post.repository.ts>> cleanEntities error: ', error);
        }
        done();
    });
    afterEach(async (done) => {
        await testUtils.closeDbConnection();
        done();
    });
    describe("[a] Variables()", () => {
    });
    describe("[b] loadSampleByCustomRepository()", () => {
    });
    describe("[c] fetch Post with hearts, comments, rates", () => {
        it("[1] should fetch Post with hearts, comments, rates", async (done) => {
            let loadError;
            try {
                await testUtils.loadSampleByCustomRepository([
                    "Auth",
                    "Tag",
                    "Article",
                    "MerchantCategory",
                    "Merchant",
                    "Post",
                    "Comment",
                    "Rate",
                    "Heart",
                ]);
            }
            catch (error) {
                loadError = error;
                console.log('<post.repository.spec| loadSampleByCustomRepository| error>', error);
            }
            const articleCount = build_article_inputs_1.BuildArticleInputs.length;
            const gArticle = await articleRepository.fetch();
            console.warn('<warn4| post.repository.spec| gArticle>', gArticle);
            expect(gArticle.length).toBeGreaterThanOrEqual(articleCount);
            const postCount = build_post_inputs_1.BuildPostInputs.length;
            const fPost = await postRepository.fetchById(1);
            console.log('<post.repository.spec| fPost>', fPost);
            expect(fPost).toBeDefined();
            expect(fPost.post_article).toBeDefined();
            expect(fPost.post_article.comments.length).toBe(2);
            expect(fPost.post_article.hearts.length).toBe(2);
            expect(loadError).toBeUndefined();
            done();
        });
    });
    describe("[b] build()", () => {
    });
    describe("[b] merchantCreate()", () => {
    });
    describe("[c] getMerchantPostsForAuth01()", () => {
    });
    describe("[d] getMerchantPostsForAuth02()", () => {
    });
    describe("[e] getMerchantPostsForAuth03()", () => {
    });
    describe("[f] getMerchantPostsForAuth04()", () => {
    });
    describe("[g] getMerchantPostsForAuth05()", () => {
    });
    describe("[h] getMerchantPostsForAuth06()", () => {
    });
    describe("[c] merchantGetById()", () => {
    });
    describe("[d] merchantUpdate()", () => {
    });
    describe("[e] merchantGetByRoomId()", () => {
    });
});
//# sourceMappingURL=post.repository.spe.js.map