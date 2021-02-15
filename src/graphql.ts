
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum ArticleType {
    MERCHANT_PROFILE = "MERCHANT_PROFILE",
    POST = "POST",
    COMMENT = "COMMENT",
    RATE = "RATE"
}

export enum AuthType {
    CUSTOMER = "CUSTOMER",
    SUPPLIER = "SUPPLIER",
    SHIPPER = "SHIPPER",
    ADMIN = "ADMIN",
    EDITOR = "EDITOR",
    ACCOUNTER = "ACCOUNTER",
    CASHIER = "CASHIER",
    SALESMAN = "SALESMAN",
    SUBSCRIBED = "SUBSCRIBED",
    MERCHANT = "MERCHANT"
}

export enum OrderStatus {
    PENDING = "PENDING",
    PACKAGED = "PACKAGED",
    DELEVIRED = "DELEVIRED",
    PAID = "PAID",
    CANCELED = "CANCELED"
}

export enum PersonRole {
    CUSTOMER = "CUSTOMER",
    SUPPLIER = "SUPPLIER",
    SHIPPER = "SHIPPER",
    STAFF = "STAFF"
}

export enum RelationType {
    ACTIVE = "ACTIVE",
    BLOCK = "BLOCK",
    MUTE = "MUTE"
}

export interface BuildArticleInput {
    article_type?: ArticleType;
}

export interface BuildCommentInput {
    auth_id: number;
    audience_article_id: number;
    comment_text: string;
}

export interface BuildHeartInput {
    auth_id: number;
    article_id: number;
}

export interface BuildMerchantCategoryInput {
    category_name: string;
    category_description: string;
    parentId?: number;
    flag_merchant_id?: number;
    picture_url?: string;
    isActive?: boolean;
}

export interface BuildMerchantInput {
    auth_id: number;
    merchant_title: string;
    tiny_description: string;
    long_description?: string;
    contact_name: string;
    instagram_url?: string;
    number_call?: string;
    number_whatsapp?: string;
    number_telegram?: string;
    bank_card_number?: string;
    bank_card_details?: string;
    avatar_url?: string;
    header_url?: string;
    note?: string;
    location?: string;
    merchant_category_id?: number;
    tag_titles?: string[];
}

export interface BuildPostInput {
    auth_id: number;
    merchant_id: number;
    post_text: string;
    picture_urls?: string[];
}

export interface BuildRateInput {
    auth_id: number;
    audience_article_id: number;
    rate_text: string;
    rate_stars: number;
}

export interface BuildSeenInput {
    auth_id: number;
    article_id: number;
}

export interface BuildTagInput {
    tag_title: string;
}

export interface CreateAddressInput {
    person_id: number;
    address_title: string;
    address_line1: string;
    address_line2?: string;
    location?: string;
    postal_code?: string;
    city: string;
    state: string;
    country: string;
    email?: string;
    phone: string;
    fax?: string;
}

export interface CreateAuthInput {
    authname: string;
    password: string;
    auth_type: AuthType[];
}

export interface CreateCustomerInput {
    customer_name: string;
    password: string;
    address_id?: number;
}

export interface CreateOrderDetailsInput {
    product_id: number;
    quantity: number;
    shipper_id?: number;
    required_date?: DateTime;
    ship_date?: DateTime;
    freight?: number;
    status?: string;
}

export interface CreateOrderInput {
    order_number: string;
    customer_id: number;
    shipper_id: number;
    order_date: DateTime;
    required_date: DateTime;
    ship_date: DateTime;
    freight: number;
    status: string;
    order_details: CreateOrderDetailsInput[];
}

export interface CreatePersonInput {
    person_role?: PersonRole;
    person_name: string;
}

export interface CreateProductCategoryInput {
    category_name: string;
    category_description: string;
    parentId?: number;
    flag_product_id?: number;
    picture_url?: string;
    isActive?: boolean;
}

export interface CreateProductInput {
    sku: string;
    supplier_sku?: string;
    product_category_id?: number;
    product_name: string;
    msrp?: number;
    price: number;
    price_currency?: string;
    currency_symbole?: string;
    unit_title?: string;
    unit_weight?: number;
    unit_weight_title?: string;
    is_discount?: boolean;
    discount?: number;
    ranking?: number;
    reorder_level?: number;
    is_active?: boolean;
    tag_ids?: number[];
}

export interface CreateShipperInput {
    shipper_name: string;
    contact_name: string;
    contact_title: string;
    url?: string;
    logo?: string;
    note?: string;
    our_id?: string;
}

export interface CreateSupplierInput {
    supplier_name: string;
    contact_name: string;
    contact_title: string;
    url?: string;
    logo?: string;
    note?: string;
    our_id?: string;
}

export interface ItemInput {
    title: string;
    price: number;
    description: string;
}

export interface LoginAuthInput {
    authname: string;
    password: string;
}

export interface UpdateAddressInput {
    address_id: number;
    address_title: string;
    address_line1: string;
    address_line2?: string;
    location?: string;
    postal_code?: string;
    city: string;
    state: string;
    country: string;
    email?: string;
    phone: string;
    fax?: string;
}

export interface UpdateArticleInput {
    article_id: number;
    article_type: ArticleType;
}

export interface UpdateCommentInput {
    comment_id: number;
    comment_name: string;
}

export interface UpdateCustomerInput {
    customer_id: number;
    customer_name: string;
    password: string;
}

export interface UpdateHeartInput {
    heart_id: number;
}

export interface UpdateMerchantCategoryInput {
    id: number;
    category_name: string;
    category_description: string;
    parentId?: number;
    flag_merchant_id?: number;
    picture_url?: string;
    isActive?: boolean;
}

export interface UpdateMerchantInput {
    merchant_id: number;
    merchant_title?: string;
    tiny_description?: string;
    long_description?: string;
    contact_name?: string;
    instagram_url?: string;
    number_call?: string;
    number_whatsapp?: string;
    number_telegram?: string;
    bank_card_number?: string;
    bank_card_details?: string;
    avatar_url?: string;
    header_url?: string;
    note?: string;
    location?: string;
    product_category_id?: number;
    tag_ids?: number[];
    tag_inputs?: BuildTagInput[];
}

export interface UpdateOrderDetailsInput {
    order_details_id: number;
    quantity?: number;
    shipper_id?: number;
    required_date?: DateTime;
    ship_date?: DateTime;
    freight?: number;
    status?: string;
}

export interface UpdateOrderInput {
    order_id: number;
    shipper_id?: number;
    required_date?: DateTime;
    ship_date?: DateTime;
    freight?: number;
    status?: string;
    order_details?: UpdateOrderDetailsInput[];
}

export interface UpdatePersonInput {
    person_id: number;
    person_role: PersonRole;
    person_name: string;
}

export interface UpdatePostInput {
    post_id: number;
    post_name: string;
}

export interface UpdateProductCategoryInput {
    id: number;
    category_name: string;
    category_description: string;
    parentId?: number;
    flag_product_id?: number;
    picture_url?: string;
    isActive?: boolean;
}

export interface UpdateProductInput {
    product_id: number;
    sku: string;
    supplier_sku?: string;
    product_category_id?: number;
    product_name: string;
    msrp?: number;
    price: number;
    price_currency?: string;
    currency_symbole?: string;
    unit_title?: string;
    unit_weight?: number;
    unit_weight_title?: string;
    is_discount?: boolean;
    discount?: number;
    ranking?: number;
    reorder_level?: number;
    is_active?: boolean;
    rebuildsInput?: UpdateTagInput[];
}

export interface UpdateRateInput {
    rate_id: number;
    rate_name: string;
}

export interface UpdateSeenInput {
    seen_id: number;
}

export interface UpdateShipperInput {
    shipper_id: number;
    shipper_name: string;
    contact_name: string;
    contact_title: string;
    url?: string;
    logo?: string;
    note?: string;
    our_id?: string;
}

export interface UpdateSupplierInput {
    supplier_id: number;
    supplier_name?: string;
    contact_name?: string;
    contact_title?: string;
    url?: string;
    logo?: string;
    note?: string;
    our_id?: string;
}

export interface UpdateTagInput {
    tag_id: number;
    tag_title: string;
}

export interface AccessRole {
    role_id: number;
    role_resource: string;
    role_action: string;
    role_possession: string;
}

export interface Address {
    address_id: number;
    person: Person;
    person_id: number;
    address_title: string;
    address_line1: string;
    address_line2?: string;
    location?: string;
    postal_code?: string;
    city: string;
    state: string;
    country: string;
    email?: string;
    phone: string;
    fax?: string;
}

export interface Article {
    article_id: number;
    article_type: ArticleType;
    posts?: Post[];
    comments?: Comment[];
    rates?: Rate[];
}

export interface Auth {
    auth_id: number;
    authname: string;
    auth_type: AuthType;
    posts?: Post[];
    comments?: Comment[];
    rates?: Rate[];
    roles: AuthType[];
}

export interface Comment {
    comment_id: number;
    auth?: Auth;
    auth_id: number;
    comment_text: string;
    heart_count: string;
    liked: boolean;
    comment_count: string;
    created_at?: DateTime;
    updated_at?: DateTime;
}

export interface Customer {
    customer_id: number;
    person: Person;
    person_id: number;
    customer_name: string;
    password: string;
    order?: Order[];
}

export interface Heart {
    heart_id: number;
    auth?: Auth;
    auth_id: number;
    article?: Article;
    article_id: number;
}

export interface Item {
    item_id: number;
    item_title: string;
    item_description?: string;
}

export interface ItemType {
    id: number;
    title: string;
    price: number;
    description: string;
}

export interface LoginToken {
    accessToken: string;
}

export interface Merchant {
    merchant_id: number;
    auth?: Auth;
    auth_id?: number;
    merchant_title: string;
    tiny_description: string;
    long_description?: string;
    contact_name: string;
    instagram_url?: string;
    number_call?: string;
    number_whatsapp?: string;
    number_telegram?: string;
    bank_card_number?: string;
    bank_card_details?: string;
    avatar_url?: string;
    header_url?: string;
    note?: string;
    location?: string;
    created_at?: DateTime;
    updated_at?: DateTime;
    category?: MerchantCategory;
    merchant_category_id?: number;
    tags?: Tag[];
    rate_count: string;
    rate_avg: string;
}

export interface MerchantCategory {
    id: number;
    category_name: string;
    category_description: string;
    children?: MerchantCategory[];
    parent?: MerchantCategory;
    parentId?: number;
    flag_merchant?: Merchant;
    flag_merchant_id?: number;
    picture_url?: string;
    isActive: boolean;
    merchants?: Merchant[];
}

export interface MessageType {
    message: string;
}

export interface IMutation {
    authTestMutation(message: string): MessageType | Promise<MessageType>;
    authBuild(auth: CreateAuthInput): Auth | Promise<Auth>;
    addressTestMutation(message: string): MessageType | Promise<MessageType>;
    build(seen: BuildSeenInput): Seen | Promise<Seen>;
    rebuild(seen: UpdateSeenInput): Seen | Promise<Seen>;
    articleTestMutation(message: string): MessageType | Promise<MessageType>;
    heartTestMutation(message: string): MessageType | Promise<MessageType>;
    commentTestMutation(message: string): MessageType | Promise<MessageType>;
    customerTestMutation(message: string): MessageType | Promise<MessageType>;
    postTestMutation(message: string): MessageType | Promise<MessageType>;
    rateTestMutation(message: string): MessageType | Promise<MessageType>;
    merchantTestMutation(message: string): MessageType | Promise<MessageType>;
    merchantBuild(merchant: BuildMerchantInput): Merchant | Promise<Merchant>;
    merchantRebuild(merchant: UpdateMerchantInput): Merchant | Promise<Merchant>;
    merchantCategoryTestMutation(message: string): MessageType | Promise<MessageType>;
    orderTestMutation(message: string): MessageType | Promise<MessageType>;
    orderDetailsTestMutation(message: string): MessageType | Promise<MessageType>;
    buildDetails(orderDetails: CreateOrderDetailsInput): OrderDetails | Promise<OrderDetails>;
    rebuildDetails(orderDetails: UpdateOrderDetailsInput): OrderDetails | Promise<OrderDetails>;
    personTestMutation(message: string): MessageType | Promise<MessageType>;
    productTestMutation(message: string): MessageType | Promise<MessageType>;
    productCategoryTestMutation(message: string): MessageType | Promise<MessageType>;
    shipperTestMutation(message: string): MessageType | Promise<MessageType>;
    supplierTestMutation(message: string): MessageType | Promise<MessageType>;
    tagTestMutation(message: string): MessageType | Promise<MessageType>;
    kasabeTestMutation(message: string): MessageType | Promise<MessageType>;
    seenTestMutation(message: string): MessageType | Promise<MessageType>;
    createItem(input: ItemInput): ItemType | Promise<ItemType>;
    updateItem(input: ItemInput, id: string): ItemType | Promise<ItemType>;
    deleteItem(id: string): ItemType | Promise<ItemType>;
}

export interface Order {
    order_id: number;
    order_number: string;
    customer: Customer;
    customer_id: number;
    shipper?: Shipper;
    shipper_id?: number;
    order_date: DateTime;
    required_date: DateTime;
    ship_date: DateTime;
    freight?: number;
    status: OrderStatus;
    order_details: OrderDetails[];
}

export interface OrderDetails {
    order_details_id: number;
    order: Product;
    order_id: number;
    product: Product;
    product_id: number;
    msrp: number;
    discount: number;
    quantity: number;
    price: number;
    shipper: Shipper;
    shipper_id: number;
    required_date?: DateTime;
    ship_date?: DateTime;
    freight?: number;
    status: OrderStatus;
}

export interface Person {
    person_id: number;
    person_role: PersonRole;
    person_name: string;
}

export interface Post {
    post_id: number;
    auth?: Auth;
    auth_id: number;
    post_text: string;
    picture_urls?: string[];
    created_at?: DateTime;
    updated_at?: DateTime;
    heart_count: string;
    liked: boolean;
}

export interface Product {
    product_id: number;
    sku: string;
    supplier_sku?: string;
    category?: ProductCategory;
    product_category_id?: number;
    product_name: string;
    msrp?: number;
    price: number;
    price_currency?: string;
    currency_symbole?: string;
    unit_title?: string;
    unit_weight?: number;
    unit_weight_title?: string;
    is_discount?: boolean;
    discount?: number;
    ranking?: number;
    reorder_level?: number;
    is_active?: boolean;
    tags?: Tag[];
    order_details?: OrderDetails[];
}

export interface ProductAttribute {
    attribute_id: number;
    attribute_name: string;
}

export interface ProductAttributeValueNumber {
    value_id: number;
    product: Product;
    attribute: ProductAttribute;
    value: number;
    unit: string;
}

export interface ProductAttributeValueString {
    value_id: number;
    product: Product;
    attribute: ProductAttribute;
    value: string;
    unit: string;
}

export interface ProductCategory {
    id: number;
    category_name: string;
    category_description: string;
    children?: ProductCategory[];
    parent?: ProductCategory;
    parentId?: number;
    flag_product?: Product;
    flag_product_id?: number;
    picture_url?: string;
    isActive: boolean;
    products?: Product[];
}

export interface IQuery {
    authTestQuery(message: string): MessageType | Promise<MessageType>;
    testGuardQuery(message: string): MessageType | Promise<MessageType>;
    whoAmI(): Auth | Promise<Auth>;
    testAC(): Auth | Promise<Auth>;
    testRBAC(): string | Promise<string>;
    authLogin(loginAuthInput: LoginAuthInput): LoginToken | Promise<LoginToken>;
    addressTestQuery(message: string): MessageType | Promise<MessageType>;
    fetchById(seen_id: number): Seen | Promise<Seen>;
    articleTestQuery(message: string): MessageType | Promise<MessageType>;
    heartTestQuery(message: string): MessageType | Promise<MessageType>;
    commentTestQuery(message: string): MessageType | Promise<MessageType>;
    customerTestQuery(message: string): MessageType | Promise<MessageType>;
    postTestQuery(message: string): MessageType | Promise<MessageType>;
    rateTestQuery(message: string): MessageType | Promise<MessageType>;
    merchantTestQuery(message: string): MessageType | Promise<MessageType>;
    merchantFetchById(merchant_id: number): Merchant | Promise<Merchant>;
    merchantCategoryTestQuery(message: string): MessageType | Promise<MessageType>;
    orderTestQuery(message: string): MessageType | Promise<MessageType>;
    orderDetailsTestQuery(message: string): MessageType | Promise<MessageType>;
    getOrderDetailsById(orderDetails_id: number): OrderDetails | Promise<OrderDetails>;
    personTestQuery(message: string): MessageType | Promise<MessageType>;
    productTestQuery(message: string): MessageType | Promise<MessageType>;
    productCategoryTestQuery(message: string): MessageType | Promise<MessageType>;
    shipperTestQuery(message: string): MessageType | Promise<MessageType>;
    supplierTestQuery(message: string): MessageType | Promise<MessageType>;
    tagTestQuery(message: string): MessageType | Promise<MessageType>;
    kasabeSayHelloQuery(): string | Promise<string>;
    kasabeTestQuery(message: string): MessageType | Promise<MessageType>;
    hello(): string | Promise<string>;
    seenTestQuery(message: string): MessageType | Promise<MessageType>;
    items(): ItemType[] | Promise<ItemType[]>;
}

export interface Rate {
    rate_id: number;
    auth?: Auth;
    auth_id: number;
    rate_text: string;
    rate_stars: number;
    heart_count: string;
    liked: boolean;
    created_at?: DateTime;
    updated_at?: DateTime;
}

export interface Relation {
    relation_id: number;
    auth?: Auth;
    auth_id: number;
    merchant?: Merchant;
    merchant_id: number;
    relation_type?: RelationType;
    created_at?: DateTime;
    updated_at?: DateTime;
}

export interface Seen {
    seen_id: number;
    auth?: Auth;
    auth_id: number;
    article?: Article;
    article_id: number;
    created_at?: DateTime;
}

export interface Shipper {
    shipper_id: number;
    person?: Person;
    person_id: number;
    shipper_name: string;
    contact_name: string;
    contact_title: string;
    url?: string;
    logo?: string;
    note?: string;
    our_id?: string;
    order?: Order[];
}

export interface Supplier {
    supplier_id: number;
    person: Person;
    person_id: number;
    supplier_name: string;
    contact_name: string;
    contact_title: string;
    url?: string;
    logo?: string;
    note?: string;
    our_id?: string;
}

export interface Tag {
    tag_id: number;
    tag_title: string;
    products: Product[];
    merchants: Merchant[];
}

export type DateTime = any;
