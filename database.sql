-- In Postgres, first create a database to store your tables and data.

-- When creating tables, use an underscore in field names; do not use dashes or spaces. Fields should have some parameters such as date, varchar(250), integer, not null, etc. If needed, copy and paste the examples below, enhance or modify them for your purposes before executing the statement(s).

-- CREATE A NEW TABLE
CREATE TABLE "sometablename" (
	"id" serial primary key,
	"field_1" varchar(75),
	"field_2" varchar(100),
	"field_3" smallint not null,
	"field_4" date
);

-- ADD A RECORD TO THE TABLE (the table must be created first)
INSERT INTO "sometable"("field_1", "field_2", "field_3", "field_4") VALUES ("samplevalue1", "samplevalue2", 1234, "1/1/1900");