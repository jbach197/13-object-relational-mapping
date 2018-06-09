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
  * In postman (or Heroku)  enter the above Heroku URL into the box, select 'GET' from the drop down and click 'SEND'.  This will show all items in the datbase.
  * To select a specific item, follow the above steps but add '/an id' to the URL
* To add a new item to the model (POST request, 
  * In Postman enter the above Heroku URL into the box, select 'POST' from the drop down.  Click 'body', 'raw' and JSON formt.  Enter data for the following fields:
      {
        "name":
        "address1":
        "address2":
        "city":
        "state":
        "zip":
      }
  * Confirm data appears by doing another GET request.
* To delete an item in the model (DELETE request)
  * In Postman enter the above Heroku URL into the box, followed by '/an id'.  Select 'Delete' from the drop down and clicn 'SEND'
  * You can confirm deletion by complting another GET request making sure the person doe not appear.

## Expected Error Messages and Status Codes
* 200 status code upon successful completion
* 404 not found error for routes that have not been registered
* 400 bad request for errors within the body of the request status code for routes 

## Credits and Collaborations
General help from the TAs, instructor and Google.  Did not work with anyone specific.