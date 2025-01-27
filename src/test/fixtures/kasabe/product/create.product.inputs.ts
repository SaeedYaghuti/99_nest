// import { CreateProductInput } from "../../../../kasabe/models/product/dto/create_product.input";
// import { CreateProductCategoryInput } from "../../../../kasabe/models/product_category/dto/create_product_category.input";
import { CreateProductInput } from "../../../../kasabe/models/product/dto/create_product.input";
import { CreateProductCategoryInput } from "../../../../kasabe/models/product_category/dto/create_product_category.input";


export const CreateProductInputs: CreateProductInput[] = [
    {
        sku: "1234656579",
        supplier_sku: "shirin-9758",
        // product_category_id: 1,
        product_name: "shirin asal",
        msrp: 2100,
        price: 2500,
        price_currency: "Toman",
        currency_symbole: "ت",
        unit_title: "Pcs",
        unit_weight: 100,
        unit_weight_title: "gr",
        is_discount: false,
        discount: 0.1,
        ranking: 7,
        reorder_level: 100,
        is_active: true,
        tag_ids: [],
    },
    {
        sku: "tester_zanjabil",
        supplier_sku: "test zanjabil",
        // product_category_id: 1,
        product_name: "zanjabil",
        msrp: 22000,
        price: 25000,
        price_currency: "Toman",
        currency_symbole: "ت",
        unit_title: "Pcs",
        unit_weight: 100,
        unit_weight_title: "gr",
        is_discount: false,
        discount: 0.1,
        ranking: 7,
        reorder_level: 100,
        is_active: true,
        tag_ids: [],
    },
]
