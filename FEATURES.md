#Features#

##CORE FEATURES##

- Facebook authentication DONE (THROUGH FIREBASE)
- Submissions comprise of:
  - Picture DONE
  - Category (Desserts, appetizers, entrees;  vegetarian/not) TODO
  - Dish Name DONE
  - Description TODO
  - Geo-tag of latitude/longitude DONE (THROUGH GEOFIRE)
  - Price DONE
- Geo-tag when app opens (whether user is searching or recommending) DONE
- Gently deny fast-food/grocery store submissions TODO
- Star to keep submissions you like TODO
- Swipe navigation between options in discover mode DONE

## USER PROFILE ##
- Store user submissions in user profile SAVED NON-NORMALIZED IN FIREBASE, BUT NOT ACCESSIBLE YET TO USER
- Store starred submissions in user profile. SAVED NON-NORMALIZED IN FIREBASE, BUT NOT ACCESSIBLE YET TO USER

## PAGES ##
- Signup DONE
- Login DONE
- Nav bar
  - Discover 
  - Search (TODO XC)
    - Leads to a 9*9 scrolldown or probably a carousel
  - My Account (TODO)
  - Logout TODO
- Homepage/ Discovery: Search meals near you (carousel)
  - Optional: choose a category
  - View one meal square pic at a time
    - Ratings
      - Want DONE
      - Like DONE
      - XC: tried  (TODO)
      - XC: dislike (this, dish, place)
    - Tap for more info (price, comments, etc)
    - Swipe right/left to see new/old (DONE)
    - XC: fling during rediscover (?????)
- My account (tiled up to 9, scroll down for more)
  - Tap a "want" for more info
    - Ratings
      - Unwant (TODO)
      - Tried (XC)
      - Like (BUTTON EXISTS, NOT YET FUNCTIONAL)
    - Tap to see price, comments, etc
  - See more account details (XC) TODO
    - Likes (all) TODO
      - XC: unlike TODO
    - Submissions (all) TODO
      - XC: edit submission (OP only) TODO
- Submission process: a sequence of views
  - Take square photo DONE
  - Category checkbox TODO
  - Restaurant name (DONE) (XC TODO: guess from API or from existing db)
  - Optional comments/description (TODO)
  - XC: approve/adjust location (TODO)
  - XC: post to fb (TODO)

##ADDITIONAL FEATURES##
- Present food based on # of likes TODO
- Reporting system for submission abuse. TODO
  - Report, block, detect spam TODO
- See additional meals at the specific location on the More Info page. TODO
- Add option to end of submit proscess where you post to FB (and/or twitter, etc.) TODO
- Advanced recommendation engine
  - Based on what you like/recommend. NOT WORTH IT FOR SMALL-SCALE APP: NOT ENOUGH DATA FOR
    A MEANINGFUL RECOMMENDATION ENGINE
- Image filters and effects. TODO
- Friend community, profile info NOT WORTH IT FOR SMALL-SCALE APP: FOCUS ON FOOD, NOT USERS

## UI/UX OPTIMIZATIONS ##
- Fling navigation to move backward through options.
  - If you have gone back to look at earlier meals, you should be able to fling foward to the next new meal TODO

## SUBMISSIONS PAGE
- Pre-populate restaurants according to API  TODO
- Submit from your phone's photo gallery TODO
- Let submitter approve or adjust gps location TODO

## Accounts page ##
- Edit your submissions and likes TODO
