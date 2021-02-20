# sugarbox_assignment_one


# set up process 
# sudo npm install
# for start server  :: node bin/www  or nodemon start or npm start 

# API End point 

# 1 create user 
# 127.0.0.1:8000/sugerbox/user 
# Method :: POST
# request body:: {"email": "piyushprabhat1994@gmail.com","password": "7417199405"}


# 2 Delete user 
# 127.0.0.1:8000/sugerbox/user/{id}
# 127.0.0.1:8000/sugerbox/user/603160cba6a03d7e0272edbc
# Method :: Delete
# i'm using hard delete 

# need to pass client_id from Headers
# client_id : suggerbox_assignment-2021