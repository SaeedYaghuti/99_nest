import { MerchantService } from './merchant.service';
import { BuildMerchantInput } from './dto/create_merchant.input';
import { UpdateMerchantInput } from './dto/update_merchant.input';
import { Merchant } from './merchant.entity';
import { MessageType } from '../../../util/type/message.type';
export declare class MerchantResolver {
    private merchantService;
    constructor(merchantService: MerchantService);
    merchantTestQuery(message: string): Promise<MessageType>;
    merchantTestMutation(message: string): Promise<MessageType>;
    merchantBuild(merchant: BuildMerchantInput): Promise<Merchant>;
    merchantRebuild(merchant: UpdateMerchantInput): Promise<Merchant>;
    merchantFetchById(merchant_id: number): Promise<Merchant>;
}
