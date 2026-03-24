import z, { date } from "zod";

export const WeeklyCollectionSchema = z.object({
    tithes:z.string().trim().min(1, "Tithes should be more!"),
    offerings:z.string().trim().min(1, "Offerings should be more!"),
    sundaySchool:z.string().trim().min(1, "Sunday School should have given more!"),
    building:z.string(),
    evangelism:z.string(),
    others:z.string(),
    cashCollections:z.string().trim().min(1, "The cash collections should be more!"),
    bankCollections:z.string(),
    adults:z.string().min(1, "Certainly there were more people!"),
    children:z.string().min(1, "Certainly there were more children!"),
    visitors:z.string(),
    newConverts:z.string(),
    date:z.string()
})