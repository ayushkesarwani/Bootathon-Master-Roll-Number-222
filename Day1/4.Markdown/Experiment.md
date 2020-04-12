# DML(Data Manipulative Language)
### Aim:
To understand the concept of implementing Data Manipulation Language(DML) statements.
### Theory:
#### 1.Insert:
The INSERT into statement is part of the Data Manipulation Language commands. It is used to insert a new row in a table. There are two ways of using INSERT statement for inserting rows:
##### i) Only Values:
The first method is to specify only the value of the data to be inserted without the column names.
Syntax: INSERT INTO table_name VALUES (value1, value2, value3,...,value n);
##### ii) Selected Column Insert:
In the second method, we will specify both the columns which we want to fill and their corresponding values as shown below:
Syntax: INSERT INTO table_name (column1, column2, column3,..,column n) VALUES ( value1, value2, value3,..,value n);
#### 2.Update:
The UPDATE statement is part of the Data Manipulation Language commands. It is used to update the data of an existing table in the database. We can update single columns as well as multiple columns using UPDATE statement as per user's requirement.
Syntax : UPDATE table_name SET column1 = value1, column2 = value2,... WHERE condition;
##### i) Only Values:
The UPDATE statement updates columns in the existing table’s rows with new values. The SET clause indicates which column data should be modified and new values that they should hold. Here we omitted where clause so all table rows are updated.
Example: UPDATE employee SET salary = 4000;
##### ii) Updating Record Conditionally:
The UPDATE statement updates columns in the existing table’s rows with new values based on the WHERE condition. The SET clause indicates which column data should be modified and WHERE clause indicates which row in table will satisfy the condition and update row(s) with the new value.
UPDATE employee SET salary = 4000 WHERE empno = 21;
Hence, in the above example empno 21, salary will be updated to 4000.

#### 3. Delete:
The DELETE Statement in SQL is used to delete existing records from a table. We can delete a single record or multiple records depending on the condition we specify in the WHERE clause.
Syntax : DELETE FROM table_name WHERE some_condition;
### Procedure:
1. Write Query in the Query Editor and click on Execute Query button.
2. If you are existing user and want to save/restore your data, use Credentials.
3. Refer video more details:
