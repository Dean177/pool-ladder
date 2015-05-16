# --- !Ups

create table "EloRating" ("id" BIGINT GENERATED BY DEFAULT AS IDENTITY(START WITH 1) NOT NULL PRIMARY KEY,"gameId" BIGINT NOT NULL,"playerId" BIGINT NOT NULL,"change" INTEGER NOT NULL,"newRating" INTEGER NOT NULL,"date" TIMESTAMP NOT NULL);
create table "Game" ("id" BIGINT GENERATED BY DEFAULT AS IDENTITY(START WITH 1) NOT NULL PRIMARY KEY,"winnerId" BIGINT NOT NULL,"loserId" BIGINT NOT NULL,"playedOn" TIMESTAMP NOT NULL);
create table "Player" ("id" BIGINT GENERATED BY DEFAULT AS IDENTITY(START WITH 1) NOT NULL PRIMARY KEY,"name" VARCHAR NOT NULL,"isActive" BOOLEAN NOT NULL,"creationDate" TIMESTAMP NOT NULL);
alter table "EloRating" add constraint "gameForeignKey" foreign key("gameId") references "Game"("id") on update NO ACTION on delete NO ACTION;
alter table "EloRating" add constraint "playerForeignKey" foreign key("playerId") references "Player"("id") on update NO ACTION on delete NO ACTION;
alter table "Game" add constraint "loserForeignKey" foreign key("loserId") references "Player"("id") on update NO ACTION on delete NO ACTION;
alter table "Game" add constraint "winnerForeignKey" foreign key("winnerId") references "Player"("id") on update NO ACTION on delete NO ACTION;

# --- !Downs

alter table "Game" drop constraint "loserForeignKey";
alter table "Game" drop constraint "winnerForeignKey";
alter table "EloRating" drop constraint "gameForeignKey";
alter table "EloRating" drop constraint "playerForeignKey";
drop table "Player";
drop table "Game";
drop table "EloRating";

