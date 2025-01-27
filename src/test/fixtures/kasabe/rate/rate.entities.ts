import { Rate } from "../../../../kasabe/models/rate/rate.entity";

export const RateEntities: Partial<Rate> [] = [
    {
        auth_id: 1,
        rate_article_id: 3,
        audience_article_id: 2, // article-id: 2 => first post: white and gold 
        rate_text: "rate one",
        rate_stars: 5,
        
    },
    {
        auth_id: 1,
        rate_article_id: 4,
        audience_article_id: 2, // article-id: 2 => first post: white and gold 
        rate_text: "rate two",
        rate_stars: 3,
        
    },
    
]
