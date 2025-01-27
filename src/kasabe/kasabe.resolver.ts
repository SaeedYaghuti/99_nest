import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { KasabeService } from './kasabe.service';
import { MessageType } from '../util/type/message.type';

const PONG_EVENT_NAME = 'pong';

@Resolver('Kasabe')
export class KasabeResolver {
    // Constructor
    constructor(
        private kasabeService: KasabeService,

        // @Inject('PUB_SUB') 
        // private pubSub: PubSubEngine,

    ) {}
    
    //#region  Test
    @Query(() => String)
    async kasabeSayHelloQuery(): Promise<String> {
        // console.log('<krts| frontend calling kasabeSayHelloQuery is running...> ');
        return "hello";
    }
    
    @Query(() => MessageType)
    async kasabeTestQuery(@Args('message') message: string): Promise<MessageType> {
        // console.log('<krts| frontend calling kasabeTestQuery: message> ', message);
        const result = await this.kasabeService.testQuery(message);
        // console.log('<krts| result result>', result);
        return result;
    }

    @Mutation(() => MessageType)
    async kasabeTestMutation(@Args('message') message: string): Promise<MessageType> {
        // this.pubSub.publish('commentAdded', { comment: {id: 1, content: 'It is a message'} });
        return await {
            message: message
        };
    }

    @Query(() => String)
    async hello( ): Promise<string> {
        return 'hello';
    }
    
    //#endregion

    //#region  Ping Pong
    //  TODO: implement subscription
    // @Mutation('ping')
    // async ping() {
    //     const pingId = Date.now();
    //     this.pubSub.publish(PONG_EVENT_NAME, { [PONG_EVENT_NAME]: { pingId } });
    //     return { id: pingId };
    // }

    // @Subscription(PONG_EVENT_NAME)
    // pong() {
    //     return this.pubSub.asyncIterator(PONG_EVENT_NAME);
    // }
    //#endregion

}
