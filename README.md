# Real-Estate-Web-Application
# EstateVista

EstateVista is a comprehensive real estate platform designed to simplify the process of finding a new home. Users can explore a wide variety of property listings, including recent offers, places for rent, and places for sale. The application provides an intuitive and user-friendly interface, making it easy for users to search and filter properties based on their preferences. EstateVista aims to be the ultimate destination for anyone looking to buy or rent a property.

## Functionalities

- **Browse Listings:** Users can browse through a variety of property listings, including recent offers, places for rent, and places for sale.
- **Search and Filter:** Users can search for properties based on specific criteria and filter results to match their preferences.
- **Detailed Property Information:** Each listing provides detailed information about the property, including images, descriptions, and pricing.
- **Responsive Design:** The application is designed to be fully responsive, providing a seamless experience across different devices and screen sizes.

## APIs

### Authentication Routes (`auth.route.js`)
- **Signup:** `POST /signup`  
  Registers a new user.
- **Signin:** `POST /signin`  
  Authenticates a user and returns a token.
- **Google Signin:** `POST /google`  
  Authenticates a user using Google OAuth.
- **Signout:** `GET /signout`  
  Logs out the user.
- **Update User:** `POST /user/update/:id`  
  Updates user information. Requires authentication.
- **Delete User:** `DELETE /user/delete/:id`  
  Deletes a user. Requires authentication.
- **Get User Listings:** `GET /user/listings/:id`  
  Retrieves listings created by a user. Requires authentication.
- **Get User:** `GET /user/:id`  
  Retrieves user information. Requires authentication.
- **Create Listing:** `POST /listing/create`  
  Creates a new listing. Requires authentication.
- **Delete Listing:** `DELETE /listing/delete/:id`  
  Deletes a listing by ID. Requires authentication.
- **Update Listing:** `POST /listing/update/:id`  
  Updates a listing by ID. Requires authentication.
- **Get Listing:** `GET /listing/get/:id`  
  Retrieves a listing by ID.
- **Get Listings:** `GET /listing/get`  
  Retrieves all listings or filtered listings based on query parameters.

## Tools and Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **API:** RESTful API
- **Other Tools:** Swiper.js for carousel functionality, React Router for navigation
