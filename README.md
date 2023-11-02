## Instructions 

Firstly download the code and install node modules in it by writing npm I and hit enter.
To initiate the application write “npm start” in the same terminal in which node modules had been
installed 
Then the server will be started and the database will be connected.
Once the server starts open POSTMAN or Thunder Client or any other API testing Environment 

•	Add Data
Select post method and use this url  http://localhost:2000/api/books to Add new object and then go to body tab then Raw subtab and then select JSON and then insert details according to the format given below
{
    "bookName":"Macbeth”, (note: always use different Book Name)
    "authorName":"William Shakespeare",
    "ISBN":"12345”, (note: always use different numbers combination)  
    "publicationDate":"02-11-2023",
    "price":"1000"
}
 And then Hit Send Button, in this way the data will be added to database.

•	Retrieve Data
In order to retrieve all data from the database select get method with the url http://localhost:2000/api/books and hit send , all data will be visible to you and if you want to retrieve data of specific book use this url and put specific book id into it http://localhost:2000/api/books/id then only specified bokk details will be shown to you (Note you can Copy Id from the you list of all the data shown by the previous url)

•	Update Data
To update any existing Data on database select put method and use the url http://localhost:2000/api/books/id and in the place of id insert desired book id which has to edited. And use same format to put data as shown previously in Add Data section.

•	Delete Data
In order to delete any book from database  select delete method and use the same link as used in Update Data and in the place of id insert desired book id which has to be deleted.

