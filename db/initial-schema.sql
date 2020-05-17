CREATE TABLE Accounts (
  uuid                VARCHAR(36) PRIMARY KEY CHECK (char_length(uuid) = 36) ,
  username            VARCHAR(512) NOT NULL UNIQUE ,
  password            VARCHAR(512) NOT NULL ,
  email               VARCHAR(512) NOT NULL UNIQUE ,
  firstname           VARCHAR(512) NOT NULL ,
  lastname            VARCHAR(512) NOT NULL ,
  isdisabled          BOOLEAN NOT NULL DEFAULT FALSE,
  createdat           TIMESTAMP NOT NULL ,
  updatedat           TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE VIEW ActiveAccounts AS
  SELECT * from Accounts
  WHERE NOT isDisabled;

