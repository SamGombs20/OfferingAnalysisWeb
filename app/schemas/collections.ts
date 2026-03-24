import z, { date } from "zod";

export const WeeklyCollectionSchema = z.object({
    tithes:z.string().trim().min(1, "Tithes should be more!").regex(/^\d+$/, "Must be a number"),
    offerings:z.string().trim().min(1, "Offerings should be more!").regex(/^\d+$/, "Must be a number"),
    sundaySchool:z.string().trim().min(1, "Sunday School should have given more!").regex(/^\d+$/, "Must be a number"),
    building:z.string().regex(/^\d+$/, "Must be a number"),
    evangelism:z.string().regex(/^\d+$/, "Must be a number"),
    others:z.string().regex(/^\d+$/, "Must be a number"),
    cashCollections:z.string().trim().min(1, "The cash collections should be more!").regex(/^\d+$/, "Must be a number"),
    bankCollections:z.string().regex(/^\d+$/, "Must be a number"),
    adults:z.string().min(1, "Certainly there were more people!").regex(/^\d+$/, "Must be a number"),
    children:z.string().min(1, "Certainly there were more children!").regex(/^\d+$/, "Must be a number"),
    visitors:z.string().regex(/^\d+$/, "Must be a number"),
    newConverts:z.string().regex(/^\d+$/, "Must be a number"),
    date:z.string().min(1, "This is definately a wrong date!").regex(/^\d+$/, "Must be a number")
})