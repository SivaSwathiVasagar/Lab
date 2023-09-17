## Technical Requirements

1. Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
2. Must get functionality required for each section working

## Learning Objectives

Practice setting up express applications.
Practice creating custom routes.
Practice using parameters from a request.
Take one Down and Pass it Around
Build an express application that enables users to count down the number of bottles of beer. Don't like beer? Pass around bottles of soda, kombucha, or milk etc.

## Instructions

. mkdir pass-it-around
. cd pass-it-around
. npm init -y
. build a basic express server

## Requirements

On the home page (get "/"), users should see:

1. "99 Bottles of beer on the wall"
2. a link that says "take one down, pass it around"
3. this should link to /98, where the number represents the number of bottles left.
4. When a number is given in the url (get "/:number_of_bottles"), users should see:

5. The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
6. a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
7. If there are 0 bottles left, do not show a link to "take one down"

Add a link to start over, which directs the user back to the home page.

# Hints

You should use an anchortag with an hrefto link to the next 'page'

# Bonus

Have some more fun
Update your page to be something like

99 little bugs in the code
99 little bugs
Take on down
Patch it around
127 bugs in the code
Make the bugs go down by one, but then have some sort of functionality where the bug count can randomlygo up

You have a lot of freedom to make it work how you want!
