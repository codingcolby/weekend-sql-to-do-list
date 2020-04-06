-- In Postgres, first create a database to store your tables and data.


-- CREATE A NEW TABLE
CREATE TABLE "todolist" (
	"id" SERIAL PRIMARY KEY,
	"task_name" VARCHAR(175) NOT NULL,
	"date_added" DATE NOT NULL,
	"priority_level" SMALLINT NOT NULL,
	"resources_needed" VARCHAR(250),
	"do_delegate" VARCHAR(8),
	"due_date" DATE,
	"completed" BOOLEAN
);


-- ADD A RECORD TO THE TABLE (the table must be created first)
INSERT INTO "todolist" ("task_name", "date_added", "priority_level", "resources_needed", "do_delegate","due_date", "completed")  VALUES ('Cat maintenance', '4/5/2020', 1, 'cat food, fresh water, litter scoop and plastic bag', 'Do', '4/5/2020', 'true');

INSERT INTO "todolist" ("task_name", "date_added", "priority_level", "resources_needed", "do_delegate","due_date", "completed")  VALUES ('Dishes', '4/5/2020', 1, 'new sponge', 'Do', '4/5/2020', 'true');

INSERT INTO "todolist" ("task_name", "date_added", "priority_level", "resources_needed", "do_delegate","due_date", "completed")  VALUES ('Launder clothes', '4/5/2020', 1, 'sort clothes', 'Do', '4/8/2020', 'false');

INSERT INTO "todolist" ("task_name", "date_added", "priority_level", "resources_needed", "do_delegate","due_date", "completed")  VALUES ('Take out the trash', '4/5/2020', 1, 'add new bag to trash can', 'Delegate', '4/6/2020', 'false');