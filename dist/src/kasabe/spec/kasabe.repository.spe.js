"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const nest_access_control_1 = require("nest-access-control");
const models_1 = require("../models");
const auth_1 = require("../../auth");
const database_1 = require("../../database");
const test_1 = require("../../test");
const merchant_repository_1 = require("../models/merchant/merchant.repository");
jest.setTimeout(90000);
describe("comment.repository.spec.ts", () => {
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
                nest_access_control_1.AccessControlModule.forRoles(auth_1.roles),
                database_1.DatabaseModule,
                auth_1.AuthModule,
            ],
            providers: [
                database_1.DatabaseService,
                test_1.TestUtils,
                auth_1.AuthRepository,
                models_1.TagRepository,
                models_1.PersonRepository,
                models_1.MerchantRepository,
                models_1.CommentRepository,
                models_1.RateRepository,
                models_1.HeartRepository,
                auth_1.AuthService,
            ]
        }).compile();
        testUtils = module.get(test_1.TestUtils);
        authService = module.get(auth_1.AuthService);
        try {
            tagRepository = testUtils.databaseService.connection.getCustomRepository(models_1.TagRepository);
            articleRepository = testUtils.databaseService.connection.getCustomRepository(models_1.ArticleRepository);
            merchantRepository = testUtils.databaseService.connection.getCustomRepository(models_1.MerchantRepository);
            merchantCategoryRepository = testUtils.databaseService.connection.getCustomRepository(models_1.MerchantCategoryRepository);
            commentRepository = testUtils.databaseService.connection.getCustomRepository(models_1.CommentRepository);
            postRepository = testUtils.databaseService.connection.getCustomRepository(models_1.PostRepository);
            rateRepository = testUtils.databaseService.connection.getCustomRepository(models_1.RateRepository);
            heartRepository = testUtils.databaseService.connection.getCustomRepository(models_1.HeartRepository);
        }
        catch (error) {
            console.error('merchantRepository| error>', error);
        }
        done();
    });
    beforeEach(async (done) => {
        try {
            await testUtils.cleanDB();
        }
        catch (error) {
            console.log('<<comment.repository.ts>> cleanEntities error: ', error);
        }
        done();
    });
    afterEach(async (done) => {
        await testUtils.closeDbConnection();
        done();
    });
    describe("[a] Variables()", () => {
    });
    describe("[b] loadSampleByCustomRepository", () => {
    });
    describe("[c] build and fetch Comment", () => {
    });
    describe("[d] build and fetch Rate", () => {
    });
    describe("[e] fetch Comment", () => {
    });
    describe("[f] fetch01 Merchant completely", () => {
    });
    describe("[g] fetch02 Merchant completely", () => {
    });
    describe("[h] fetch03 Merchant relation by orm seperate query", () => {
    });
    describe("[i] postRepository.getPostHeart", () => {
    });
    describe("[ii] rateRepository.getRateHeart", () => {
    });
    describe("[j] postRepository.getPostCommentData", () => {
    });
    describe("[jj] rateRepository.getRateCommentData", () => {
    });
    describe("[k] postRepository.fetch01", () => {
    });
    describe("[kk] commentRepository.fetch01", () => {
    });
    describe("[kkk] rateRepository.fetch01", () => {
    });
    describe("[l] merchantRepository.fetch04()", () => {
    });
    describe("[ll] merchantRepository.fetch05()", () => {
        it("[1] should fetch Merchant with 10-post, post.liked, post.heart-count, post.1st-comment, post.comment-count", async (done) => {
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
                console.log('<kasabe.repository.spec| e| fetch02| error>', error);
            }
            expect(loadError).toBeUndefined();
            const authInput = {
                authname: "tayebat",
                password: "1234",
                auth_type: [auth_1.AuthType.MERCHANT],
            };
            const bAuth = await authService.build(authInput);
            expect(bAuth.authname).toBe(authInput.authname);
            const tagInput = {
                tag_title: "customer-lover"
            };
            const bTag = await tagRepository.build(tagInput);
            expect(bTag.tag_title).toBe(tagInput.tag_title);
            const merchantInput = {
                auth_id: bAuth.auth_id,
                merchant_title: "Tayebat",
                tiny_description: "Painting, Structure tools, chalk, ...",
                long_description: "we will associate you while building",
                contact_name: "Abdorrahim Tayebat",
                instagram_url: "instagram.com/Tayebat",
                number_call: "09194846922",
                number_whatsapp: "09194846922",
                number_telegram: "09194846922",
                bank_card_number: "1111222233334444",
                bank_card_details: "mellat bank name of ibrahim shahbazi",
                avatar_url: "30966443811696465.jpeg",
                header_url: "30966443811696465.jpeg",
                note: "Call me only from 8am to 8pm",
                location: "hormud",
                merchant_category_id: 1,
                tag_titles: ["scaffolding", "painting", "chalk", "cement", "faramasons"]
            };
            const bMerchant = await merchantRepository.build(merchantInput);
            expect(bMerchant.merchant_title).toBe(merchantInput.merchant_title);
            const heartInput = {
                auth_id: bAuth.auth_id,
                article_id: bMerchant.article_id,
            };
            const bHeart = await heartRepository.build(heartInput);
            expect(bHeart.article_id).toBe(heartInput.article_id);
            const postInput = {
                auth_id: bAuth.auth_id,
                merchant_id: bMerchant.merchant_id,
                picture_urls: ["30966443811696465.jpeg"],
                post_text: "1| Azadi Chalk recived...",
            };
            const bPost = await postRepository.build(postInput);
            expect(bPost.post_text).toBe(postInput.post_text);
            for (let i = 0; i < 3; ++i) {
                const postInput = {
                    auth_id: bAuth.auth_id,
                    merchant_id: bMerchant.merchant_id,
                    picture_urls: ["30966443811696465.jpeg"],
                    post_text: `${i + 2}| Azadi Chalk recived...`,
                };
                try {
                    const bPost = await postRepository.build(postInput);
                    expect(bPost.post_text).toBe(postInput.post_text);
                }
                catch (error) { }
            }
            for (const auth_id of [1, 2, bAuth.auth_id]) {
                const heartInput = {
                    auth_id: auth_id,
                    article_id: bPost.post_article_id,
                };
                try {
                    const bHeart = await heartRepository.build(heartInput);
                    expect(bHeart.article_id).toBe(heartInput.article_id);
                }
                catch (error) { }
            }
            let bComment;
            for (const auth_id of [1, 2, bAuth.auth_id]) {
                const commentInput = {
                    auth_id: auth_id,
                    audience_article_id: bPost.post_article_id,
                    comment_text: `hurmoud love Tayebat ${auth_id} times`
                };
                try {
                    const bComent = await commentRepository.build(commentInput);
                    if (auth_id === bAuth.auth_id)
                        bComment = bComent;
                    expect(bComent.comment_text).toBe(commentInput.comment_text);
                }
                catch (error) { }
            }
            for (const auth_id of [1, 2, bAuth.auth_id]) {
                const heartInput = {
                    auth_id: auth_id,
                    article_id: bComment.comment_article_id,
                };
                try {
                    const bHeart = await heartRepository.build(heartInput);
                    expect(bHeart.article_id).toBe(heartInput.article_id);
                }
                catch (error) { }
            }
            const rateInput = {
                auth_id: bAuth.auth_id,
                audience_article_id: bMerchant.article_id,
                rate_text: "You deserve 50 star",
                rate_stars: 5
            };
            const bRate = await rateRepository.build(rateInput);
            expect(bRate.rate_text).toBe(rateInput.rate_text);
            for (let i = 0; i < 3; ++i) {
                const rateInput = {
                    auth_id: bAuth.auth_id,
                    audience_article_id: bMerchant.article_id,
                    rate_text: "You deserve 50 star",
                    rate_stars: 5
                };
                try {
                    const bRat = await rateRepository.build(rateInput);
                    expect(bRat.rate_text).toBe(rateInput.rate_text);
                }
                catch (error) { }
            }
            for (const auth_id of [1, 2, bAuth.auth_id]) {
                const heartInput = {
                    auth_id: auth_id,
                    article_id: bRate.rate_article_id,
                };
                try {
                    const bHeart = await heartRepository.build(heartInput);
                    expect(bHeart.article_id).toBe(heartInput.article_id);
                }
                catch (error) { }
            }
            let bRateComment;
            for (const auth_id of [1, 2, bAuth.auth_id]) {
                const commentInput = {
                    auth_id: auth_id,
                    audience_article_id: bRate.rate_article_id,
                    comment_text: `${auth_id} times I said your rate is not fair!`,
                };
                try {
                    const bComent = await commentRepository.build(commentInput);
                    if (auth_id === bAuth.auth_id)
                        bRateComment = bComent;
                    expect(bComent.comment_text).toBe(commentInput.comment_text);
                }
                catch (error) { }
            }
            const i = new merchant_repository_1.FetchMerchantInput();
            i.auth_id = bAuth.auth_id;
            i.merchant_id = bMerchant.merchant_id;
            let fPosts;
            let fError;
            try {
                fPosts = await merchantRepository.fetch05(i);
            }
            catch (error) {
                fError = error;
                console.error('<fetch05| error>', error);
            }
            console.warn("<kasabe.spec|f05| fPosts>", JSON.stringify(fPosts, null, 2));
            expect(fPosts).toBeDefined();
            done();
        }, 90000);
    });
    describe("[o] build()", () => {
    });
    describe("[b] merchantCreate()", () => {
    });
    describe("[c] getMerchantCommentsForAuth01()", () => {
    });
    describe("[d] getMerchantCommentsForAuth02()", () => {
    });
    describe("[e] getMerchantCommentsForAuth03()", () => {
    });
    describe("[f] getMerchantCommentsForAuth04()", () => {
    });
    describe("[g] getMerchantCommentsForAuth05()", () => {
    });
    describe("[h] getMerchantCommentsForAuth06()", () => {
    });
    describe("[c] merchantGetById()", () => {
    });
    describe("[d] merchantUpdate()", () => {
    });
    describe("[e] merchantGetByRoomId()", () => {
    });
});
//# sourceMappingURL=kasabe.repository.spe.js.map