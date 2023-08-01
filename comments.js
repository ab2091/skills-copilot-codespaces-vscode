// Create web server
// 1. use express to create web server
// 2. use express-session to create session middleware
// 3. use express-mysql-session to create session store
// 4. use express-handlebars to create template engine
// 5. use body-parser to parse request body
// 6. use express-static to serve static resource
// 7. use cookie-parser to parse cookie
// 8. use multer to parse multipart/form-data
// 9. use router to manage route
// 10. use express-jwt to verify token
// 11. use cors to solve cross origin problem
// 12. use express-sslify to force https
// 13. use helmet to set http header
// 14. use compression to compress response body
// 15. use express-validator to validate request body
// 16. use express-rate-limit to limit request frequency
// 17. use express-fileupload to upload file
// 18. use socket.io to create websocket server
// 19. use socket.io-redis to create websocket server cluster
// 20. use redis to create cache server
// 21. use mysql to create database server
// 22. use mysql2 to create database server cluster
// 23. use jsonwebtoken to create token
// 24. use bcryptjs to encrypt password
// 25. use uuid to generate uuid
// 26. use moment to format date
// 27. use lodash to operate object
// 28. use winston to log
// 29. use nodemailer to send email
// 30. use nodemailer-express-handlebars to create template engine for nodemailer
// 31. use nodemailer-smtp-transport to create transport for nodemailer

// 1. use express to create web server
const express = require('express')
const app = express()
// 2. use express-session to create session middleware
const session = require('express-session')
// 3. use express-mysql-session to create session store
const MySQLStore = require('express-mysql-session')(session)
// 4. use express-handlebars to create template engine
const exphbs = require('express-handlebars')
// 5. use body-parser to parse request body
const bodyParser = require('body-parser')
// 6. use express-static to serve static