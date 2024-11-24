# tour-and-travel-server

User
Tour
Review

User {
    name
    email
    age
    photo
    role -> user, admin
    status -> active, inactive 
}

tour {
    name
    duration
    rating
    price
    coverImage
    image[]
    startDate
    tourLocation
}

review {
    review
    rating
    tour -> ref
    user -> ref
}

project setup:
// module/user/
-- model
-- interface
-- zod/joi
-- router
-- service
-- controller