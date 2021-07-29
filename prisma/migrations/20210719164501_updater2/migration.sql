-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "youtubeId" TEXT,
    "albumCoverUrl" TEXT,
    "artistId" INTEGER,
    "newField" INTEGER NOT NULL DEFAULT 1,
    FOREIGN KEY ("artistId") REFERENCES "Artist" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("albumCoverUrl", "artistId", "id", "name", "youtubeId") SELECT "albumCoverUrl", "artistId", "id", "name", "youtubeId" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
