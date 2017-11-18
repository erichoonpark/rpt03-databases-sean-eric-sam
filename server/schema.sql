DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  /* Need username, message, roomname */
  -- message_id INT AUTO_INCREMENT,
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  message VARCHAR(200),
  roomname VARCHAR(20),
  PRIMARY KEY ( id )
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  user_id INT AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY ( user_id )
);



/*  Execute this file from the command line by typing:
mysql -u root
source server/schema.sql
 *  to create the database and the tables.*/

