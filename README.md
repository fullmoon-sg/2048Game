# ENHANCED 2048 GAME

## The original 2048 Game

The original 2048 Game is a single-gamer sliding block puzzle game designed by Italian web developer Gabriele Cirulli. The objective of the game is to reach the score of 2048 by 
sliding the numbered block on a 4x4 grid game board, hence the name of the game. For the gamer to reach the score 2048, the gamer will have to slide the numbering block by using 
either up, down, left or right movement, and merge two same numbered block together within the game board. Once, the two difference numbered blocks merges, it will become one single 
block with the new numbering derives by adding the two previous numbered block. However, the numbered block will not merged when they are different numbered block or a difference 
numbered block position in-between two same numbered block. 

After the end of each movement, a new numbered block either with a score of ‘2’ or ‘4’ will randomly appears on the grid of the game board. When the gamer reaches 2048 score, the 
gamer can continue to play until there are no empty grid left in the game board. 

## The Enhanced 2048 Game

For my project, I would be modifying one of the gaming rules and also add a new feature so as to make it simpler for gamer to win the game. The new game rule is that two same numbered 
block would allow to be merged even if there is a difference numbered block in-between them. As for the new feature, a “Power 2048” button would allow the system to randomly remove 
up to 3 numbered block from the game board. In order not to make it too easy for the gamer to win, the “Power 2048” can only be used once throughout the game, and those randomly 
removed numbered block with also deduce the game score accordingly.

## Strategy
The original 2048 Game is very addictive and easy to play. However, for the gamer to achieve above 2048 score, it can be quite challenging for beginner gamers, especially young kids. 
In my project, my primary target is for gamers who are looking for stress-free entertainment or young kids looking for entry level to adults gaming. During the game, if the gamer 
thinks that they have made a few mistakes and would never be able to achieve a good score, they can choose to use the “reset” button to reset the game or “Power 2048” to remove 
some numbered block. 

## Demo 

A live demo of the website can be viewed on https://fullmoon-sg.github.io/2048Game/

## UX

Gaming should be fun, entertaining and stress relieving past time. As such, the application designed is based on simple and elegance theme. The website has 4 difference pages that 
shared a common navigation bar on the top. There are Hall of Fame page, Login Page, Game Board page and Manage Records page. All pages are standardised with a setup of a navigation 
bar and body so that the gamers will find it easy to navigation around. In term of gaming experience, the main game board is located on the right with control button on the left. 
The reason for button control is preferred as the original 2048 was designed for mobile application and as such, it is more appropriate to use the touch input due to screen space 
constraint. Secondly, the game is designed for a desktop platform, as such, there are many screen area for control button and also make the website less empty.

## UI

In this project, I tried not to deviate too much from the original game color theme so that it can still retain some of the original game charisma. Therefore, I have choose a few 
different shades of silver when applying the color theme. For the fonts and numbers, I have choose “Fredoke One” as this font goes well with the different shades of silver color.

## Wireframes 

I have used MS PowerPoint as a tool to draft to the visual design of the website. Through the process of drafting, it helps me to have a better consistent ways of designing the user 
interface. 

<img src="../src/components/images/wireframe.jpg">

## Scope

* To provide gamers a similar style 2048 game but with difference experience when playing the enhanced 2048 game.
-	The control function is the arrow key button instead of hand sliding. This will allow the gamer to look at the game board without their view being block by their hands while sliding. 
-	The gamer can see their login name at the control panel. If they do well in the game, their login name will be recorded and reflect it in the Hall of Fame. 

* To make the 2048 game easy but yet entertaining to play
-	The game has a “Power 2048” feature power button that allows the gamer to remove up to 3 randomly numbered from the game board. This features is extremely useful when the gamer about to run out of move.  
-	To make the game more entertaining, a series of funny animated GIF is location of the left section of the game board. The series of animated GIF will change accordingly to the gamer’s score. As the gamer 
gains a higher score, the animated GIF will show more audience watching the gamer game. 

 * To provide a score board so that gamers can competing against each other when the skills are getting better.
- A Hall of Fame has been setup to display the top 10 gamers and their scores. The game with built-in the array loop, once receive the data from MongoDB via Heroku app, will automatically display the gamer 
with the highest score on the top of list and so on.

## Structure
The application is designed based on simple and elegance theme. The intention is not to cluster the gamers with too many details or selection. I have adopted a “tree-branches” method because it is easy to
 navigation. On the landing page, the gamer can choose to activate new account or login in existing account, once it is validating completed, the login page will automatically change to game board page. The 
 automatically switches between login and game board page will have one less step to for gamer to proceed to play the game. Alternatively, gamer don’t want to log in but want to come to play, the gamer will have 
 clicked through the navigation bar.

<img src="../src/components/images/structure.jpg">

## Site Map 

<img src="../src/components/images/sitemap.jpg">

* Home Page
	- Hall of Fame 
* Login Page
  - Login Account
	- Create New Account
	- Login in existing account
  - Game Instructions
	- First Page
  	- Second Page
* Game Board page
  - Animated GIF
-  Control
	- Gamer Name
	-Game Score
	- Best Score
	- Control Function
		- Top
		- Left
		- Right
		-Down
	- Restart
	- Power 2048
- Game Board
* Manage Record
 	- Hall of Fame (Top 10)
		- Delete
	- Gamers Records

## Navigation Design

* Hall of Fame page – The home page is a simple page that has a body to display the top 10 best gamer name and score. The intent to restrict displaying 10 names is to create a challenger environment for gamers 
to compete among each other. 

* Login page – This page body is spilt into two sections. The left section is the login page while the right section is the game instructions. For the login page, the layout is a simple form which requires
gamer to key in their name and password to create an account. User can choose to create a new user account or log in into their existing account. Alternatively, the user can not to login or create account by
proceed to play the game. However, under such circumstances, the gamer will be treated as anonymous and assign a name as “John Doe”. In addition, “John Doe” scores will not be registered and will be excluded 
from “Hall of Fame” category. On the right section, it contains a two pages of simple instructions that teaches the special features that are not available in the original 2048 game. To view the different page 
of instructions, a “previous” and “next page” button is available to use.On the right section is the instruction page. The intent of creating an instruction page is to inform the gamer on the addition feature 
available on this game. 

* Gameboard page – This page is spilt into 3 sections. The first section is located on the left, which contains a serial of funny animated gif images. The intent to provide some amusements to the game as the 
animated images will change in accord to the gamer’s score. For example, the animated gift will started off with no audience when the score is low and a stadium of audience will cheers when the gamer reaches
high score. On the center section, it contains all the relevant information and control functions of the game. For the information portion, it contains the gamer’s name and also their current score. Right below 
the current score is that highest score ever record in the game. In the control section, 4 arrows button to indicate the movement direction and also special features like “Reset” and “Power 2048” button. Once 
the game ended, the 4 arrows button will disappear so that to inform the gamer that the game has ended. They could restart by activating the “reset button”. On the right of the section is a 4 x 4 grid game. This 
is when the randomly numbered block will appear or the merging numbered block takes place.

* Manage Records page – This page is supposed to view by the administration only. It supposed to be only able to view it when the administrative log in with special user account and password. However, this is not 
implementation this project. The intent of this page to allow the administrative to have quickly access to delete old record instead of login into database to remove unwanted accounts.

## Testing

All functionalities developed in this game were deployed and tested with both Microsoft Edge and Google Chrome browser. The result of the behaviour and performance were delivered as expected.

## Acknowledgement

I would like to acknowledge the following institution, API provider and websites for their contribution for making my first personal website project as a success.

### Domain Knowledge

- Trent Global College Singapore lectures and admin staff 
      
### Game formatting, Images and Fonts
- Bootstrap for HTML and CSS layout. https://getbootstrap.com/ 
- Google fonts for the html https://fonts.google.com/specimen/Fredoka+One
- The following website for providing the animated GIF files.
- https://giphy.com/explore/cheering-crowd
- https://giphy.com/gifs/l0HlSt6V3LFjKcqUE/html5
- https://giphy.com/gifs/oscars-academy-awards-oscars-2020-XH57VC47wCEnUPqErW
- https://giphy.com/explore/big-crowd
- http://www.lowgif.com/view.html
- https://giphy.com/gifs/yvY3xhx8wCWQb8XPGw/html5

                           **For Educational purposes**  
