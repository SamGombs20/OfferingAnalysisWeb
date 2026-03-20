import { number } from "zod";
import { DailySummary } from "../types/global";

export const weeklySummary: DailySummary[] = [
  { week: 1, date: "2026-Jan-05", attendance: 180, offerings: 85000 },
  { week: 2, date: "2026-Jan-12", attendance: 195, offerings: 92500 },
  { week: 3, date: "2026-Jan-19", attendance: 210, offerings: 105000 },
  { week: 4, date: "2026-Jan-26", attendance: 205, offerings: 98000 },
  { week: 5, date: "2026-Feb-02", attendance: 220, offerings: 120000 },
  { week: 6, date: "2026-Feb-09", attendance: 198, offerings: 88000 },
  { week: 7, date: "2026-Feb-16", attendance: 215, offerings: 110500 },
  { week: 8, date: "2026-Feb-23", attendance: 230, offerings: 135000 },
  { week: 9, date: "2026-Mar-02", attendance: 212, offerings: 102000 },
  { week: 10, date: "2026-Mar-09", attendance: 190, offerings: 95000 },
  { week: 11, date: "2026-Mar-16", attendance: 225, offerings: 125000 },
  { week: 12, date: "2026-Mar-23", attendance: 208, offerings: 108000 },
];
export const attendanceRatio = [
  {
    name: "Adults",
    number: 150,
  },
  {
    name: "Children",
    number: 30,
  },
];
