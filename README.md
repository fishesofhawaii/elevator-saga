# elevator-saga

Current Algorithm
* I waste a lot of moves
* Goes from top to bottom, storing button presses and floor presses globally
* Elevators all go from bottom, to top, and stop at floors in line with the indicator (up/down)
* Maybe "big" elevators should keep the current algorith (sometimes top and bottom are getting starved)
* Maybe "small" elevators can be a little greedier? 

Learnings (even if trivial)
* Floor 0 can't go down
* Floor (max) can't go up
* Load factor 1.0 is Max, but it's rare to see this. 0.775, 0.825 might be load factors that are full as well
* You need to "go to floor" in order to stop (or explicitly call stop)
* Challenge 10, 2 elevators, one is big
* A lot of times... if people are going down, they're going to the bottom floor, same can't be said for up