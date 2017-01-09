In order to make the application work, you need to modify.js with information about your database, like login, password, host etc.

To install application use command:
npm install

To run the application use command:
npm run start

To create a shortened url:
POST /api/v1/urls/ (include the "url" parameter in x-www-form-urlencoded format)
Retrieves an object with generated shortened url

Endpoints:
CRUD for URLs
POST /api/v1/urls
Create a shortened URL, include the "url" parameter in x-www-form-urlencoded format
GET /api/v1/urls
Display all URLS
GET /api/v1/urls/:id
Display URL based upon id
POST /api/v1/urls/:id
Update URL based upon id, include the "url" parameter in x-www-form-urlencoded format 
DELETE /api/v1/urls/:id
Delete url based upon id

Routes:
/go/:shortURL
Redirects to the destination url

To test the app you need Postman, the postman collection is in the tests folder.