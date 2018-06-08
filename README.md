# Project Name
**Author**:
**Version**: 1.0.0

## Links
* Master - https://github.com/jbach197/13-object-relational-mapping.git
* Pull Request - https://github.com/jbach197/13-object-relational-mapping/pull/1
* Heroku - https://bach-lab13.herokuapp.com/api/v1/address
* Travis - https://travis-ci.com/jbach197/13-object-relational-mapping

## Requirements Summary
* Create HTTP server with Express
* Create a resouce model that uses mongoose.Schema and mongoose.Model
* Create and RESTFUL CRUD routes for the above model
* Use body-parser to parse the boody on POST and PUT requests

## User Instructions
* Go view items in the model (GET request)
  * Via heroku - clicnk the above link
  * Via postman - enter https://bach-lab13.herokuapp.com/api/v1/address into the box, select 'GET' from the drop down and click 'SEND'
* To add a new item to the model (POST request)
  * In Postman enter https://bach-lab13.herokuapp.com/api/v1/address into the box, select 'POST' from the drop down.  Click 'body', 'raw' and enter information (JSON format) for the following fields: 
      {
        "name":
        "address1":
        "address2":
        "city":
        "state":
        "zip":
      }

### `/api/resource-name`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/resource-name/:id`
* `GET` request
  * should pass the id of a resource through the url endpoint to get a resource
    * **this should use `req.params`, not querystring parameters**
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to update a pre-existing resource
* `DELETE` request
  * should pass the id of a resource though the url endpoint to delete a resource
    * **this should use `req.params`**

### Tests
* create a test that will ensure that your API returns a status code of 404 for routes that have not been registered
* create a series of tests to ensure that your `/api/resource-name` endpoint responds as described for each condition below:
  * `GET` - test 200, returns a resource with a valid body
 * `GET` - test 404, respond with 'not found' for valid requests made with an id that was not found
 * `PUT` - test 200, returns a resource with an updated body
 * `PUT` - test 400, responds with 'bad request' if no request body was provided
 * `PUT` - test 404, responds with 'not found' for valid requests made with an id that was not found
 * `POST` - test 400, responds with 'bad request' if no request body was provided
 * `POST` - test 200, returns a resource for requests made with a valid body

## Credits and Collaborations