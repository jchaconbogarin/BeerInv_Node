# Beerinv Project

This project consists in the creation of a RESTful API for a beer inventory.

# Resources

- https://www.djamware.com/post/5b56a6cc80aca707dd4f65a9/nodejs-expressjs-sequelizejs-and-postgresql-restful-api

# Initial Setup

## Database Setup

1. Install PosgreSQL server and open a new SQL Sheet as the postgres user.
2. Execute the following code
```sql
CREATE ROLE beerinv WITH LOGIN PASSWORD 'password_here';
CREATE DATABASE beerinv_node_dev;
CREATE DATABASE beerinv_node_test;
CREATE DATABASE beerinv_node_prod;
GRANT ALL PRIVILEGES ON DATABASE beerinv_node_dev TO beerinv;
GRANT ALL PRIVILEGES ON DATABASE beerinv_node_test TO beerinv;
GRANT ALL PRIVILEGES ON DATABASE beerinv_node_prod TO beerinv;
```
3. Update the database passwords in the `./config/config.json` file.

