# Unit 04 Mini-Project: Robot Gladiators RPG
In this activity, you will work with a group to build a game using Javascript and Web API's.

## Instructions

The completed application should meet the following criteria:

* As a user, I want to start the game by clicking on a button.

* As a user, I want choose a robot gladiator.

* As a user I want to "fight" against the computer by pressing various keys to attack my opponent.

* As a user, I want to win the game when my opponent has 0 health points(HP).

* As a user, I want to lose the game when my robot has 0 health points.

* As a user, I want to see my total wins and losses on the screen.

* As a user, a timer should appear on the screen asking me if I would like to play again. If I say yes the game restarts and play resumes. If I say no a message thanking em for playing displays.


## Specifications
​
1. Player starts with money, HP, and attack values. Chosen robot image appears on screen.
​
2. Computer chooses next robot in list of opponents. Chosen robot image appears on screen.
​
  * If no more robots exist, player wins, go to **5**
​
3. Computer randomly chooses turn order
​
  * If player's turn, ask to `attack` or `run`
​
    * If `run`, lose money, skip to **4**
​
    * If `attack`, randomly deduct opponent's HP based on player's attack power
​
      * If opponent is out of HP, player receives money, skip to **4**
​
  * If opponent's turn, randomly deduct HP from player based on opponent's attack power
​
    * If player is out of HP, they lose, go to **5**
​
  * Repeat turns
​
4. Ask player if they would like to shop
​
  * If `yes`, ask player if they want to `refill` HP, `upgrade` attack power, or `exit`
​
    * If `refill` or `upgrade`, check if player can afford option, then deduct funds
​
  * Go to **2**
​
5. Display win/lose message and money total and save in localStorage
​
6. Ask player if they want to play again
​
  * If `yes`, reset game state and go to **2**