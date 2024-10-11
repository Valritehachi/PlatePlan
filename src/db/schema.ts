import {
  pgTableCreator,
  integer,
  serial,
  text,
  timestamp,
  pgEnum,
  date,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `plate_plan_${name}`);

const foodTypeEnum = pgEnum("food_type", [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
]);

export const foodTable = pgTable("food_table", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  foodName: text("food_name").notNull(),
  alternativeFood: text("alternative_food").notNull(),
  calories: integer("calories").notNull(),
  quantity: integer("quantity").notNull(),
  foodType: foodTypeEnum("food_type").default("breakfast").notNull(),
  dateConsumed: date("date_consumed").notNull(),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at"),
});

export const hydrationTable = pgTable("hydration_table", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  caloriesConsumed: integer("calories_consumed").notNull(),
  waterConsumed: integer("water_consumed").notNull(),
  dateConsumed: date("date_consumed").notNull(),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at"),
});

export const dailySummaryTable = pgTable("daily_summary_table", {
  id: serial("id").primaryKey(),
  date: date("date").unique().notNull(),
  userId: text("user_id").notNull(),
  totalCalories: integer("total_calories").notNull(),
  totalWater: integer("total_water").notNull(),
  createdAt: timestamp("created_at").default(new Date()),
  updatedAt: timestamp("updated_at"),
});

export type FoodInsert = typeof foodTable.$inferInsert;
export type FoodSelect = typeof foodTable.$inferSelect;

export type HydrationInsert = typeof hydrationTable.$inferInsert;
export type HydrationSelect = typeof hydrationTable.$inferSelect;

export type DailySummaryInsert = typeof dailySummaryTable.$inferInsert;
export type DailySummarySelect = typeof dailySummaryTable.$inferSelect;
