// Que 1.	 Advanced Product Discount Eligibility (Nested if)
// ------
// 	An e-commerce site applies a discount if a user is a member AND if their purchase total exceeds a certain amount.

// - The outer if checks for isMember. Only if the user is a member does the inner if check the purchaseTotal. This demonstrates a dependency: the purchase total discount is only relevant for members.

// 	Note : You have to achieve this functionality using the nested if
// 		1) if the user is member and purchase amount is greater than 200 apply 15% discount.
// 		2) if the user is member and purchase amount is greater than 100 apply 10% discount.
// 		3) if the user is member and purchase amount is less than 100 :  Member, but purchase total is too low for an extra discount.
// 		4) if the user is not a member and purchase amount is greater than 500 apply 5% discount general discount.
// 		5)  if the user is not a member and purchase amount is less than 500 : User is not a member. No member discounts apply.

// 	Sample input : 	isMember = true
// 			purchaseTotal = 250
// 	Sample output :  User is a member.
// 			 Qualifies for a 15% member discount!
// 			 Original Price: $250.00, Final Price: $212.50


// 	Sample input : 	isMember = false
// 			purchaseTotal = 70
// 	Sample output :  User is not a member. No member discounts apply.
// 			 Original Price: $70.00, Final Price: $70.00

// 	Sample input : 	isMember = false;
// 			purchaseTotal = 600;
// 	Sample output : User is not a member. No member discounts apply.
// 			Qualifies for a 5% general discount on large order.
// 			Original Price: $600.00, Final Price: $570.00

// ============================================================================================

// Que 2.   Online Game Matchmaking Eligibility (Nested if)
// -------
// 	 A game's matchmaking system checks player eligibility based on their rank and then, for certain ranks, their online status or ping.

// - The outer if-else if categorizes players by playerRank. For "Gold" and "Silver" ranks, a nested if-else further checks isOnline and playerPing to refine eligibility. This ensures that ping only matters for players who are already online in specific ranks.



// 	Requirements :
// 			1. Player Rank (playerRank): This is the primary classification. Games often use ranking systems (like Bronze, Silver, Gold, Platinum, Diamond) to group players of 			   similar skill levels.
// 			2. Online Status (isOnline): A boolean (true/false) indicating if the player is currently connected to the game server. You can't matchmake if you're not online!
// 			3. Player Ping (playerPing): A numerical value (in milliseconds, ms) representing the network latency between the player and the game server. Lower ping means a 			   better connection. This condition is nested because it only becomes relevant for certain ranks when the player is online.

// 	Note : 	You have to achieve this functionality using the nested if

// 	conditions :
// 			1) if the player rank is diamond or platinum he is a High-ranked player. and if the user is online Searching for competitive match in high-tier, else You 					are offline. Cannot search for high-tier match. 

// 			2) if the player rank is gold or silver he is a mid-ranked player, and if the user is online and if the ping is < 80 Searching for balanced match in mid-tier (low 				ping), else  Searching for balanced match in mid-tier (high ping - may experience lag). else You are offline. Cannot search for mid-tier match.

// 			3) if the player rank is bronze he is a Low-ranked player. and if he is online Searching for casual match in low-tier. else You are offline. Cannot search for low-				tier match.
// 			4) if no condition matches display message Unranked player. Complete placement matches first.

// 	Sample input : playerRank = "Gold",  isOnline = true ,  playerPing = 45
// 	sample output : Mid-ranked player detected.
// 			Matchmaking Status: Searching for balanced match in mid-tier (low ping).

// 	Sample input : playerRank = "Platinum", isOnline = false, playerPing = 20
// 	sample output : High-ranked player detected.
// 			Matchmaking Status: You are offline. Cannot search for high-tier match.

// 	Sample input :playerRank = "Gold", isOnline = true, playerPing = 120
// 	sample output : Mid-ranked player detected.
// 			Matchmaking Status: Searching for balanced match in mid-tier (high ping - may experience lag).

// ===========================================================================================================================

// Que 3.	Day of the Week Lookup (switch)
// ------
// 	 Display the name of the day based on a numerical representation (e.g., 1 for Monday, 2 for Tuesday).

// - The switch statement evaluates the dayNumber and matches it against case values. Once a match is found, the corresponding code block is executed, and break exits the switch. The default case handles any numbers that don't match.

// 	Sample input : dayNumber = 3
// 	Sample output : Day number 3 is: Wednesday

// 	Sample input:	dayNumber = 7
// 	Sample output:  Day number 7 is: Sunday

// 	Sample input:	dayNumber = 0
// 	Sample output :  Invalid Day Number

// ==============================================================================================================================

// Que 4.  Basic Calculator Operations (Switch)
// -------
// 	Perform a mathematical operation (addition, subtraction, multiplication, division) based on an operator symbol.

// - The switch statement uses the operator string to determine which calculation to perform on num1 and num2. The default case handles unrecognized operators.

// 	Sample input : operator = +
// 	Sample output : Result of 5 + 2 is: 7

// 	Sample input : operator = *
// 	Sample output : Result of 5 * 2 is: 10

// 	Sample input :  num1 = 8;
// 			num2 = 0;
// 			operator = /
// 	Sample output : Error: Division by zero

// 	Sample input : operator = %
// 	Sample output : Error: Invalid operator

// ===============================================================================================

// Que 5.	Traffic Light States	(switch)
// -------
// 	Determine the action a driver should take based on the current traffic light color.

// - The switch statement uses the lightColor string. Each case corresponds to a specific color and provides the appropriate action message. default covers any unexpected light states.

// 	Sample input : lightColor = green
// 	Sample output : Go! It's safe to proceed.

// 	Sample input : lightColor = red
// 	Sample output : Stop! Do not proceed.

// 	Sample input : lightColor = yellow
// 	Sample output : Prepare to stop. Light is about to turn red.

// 	Sample input : lightColor = blue
// 	Sample output : Unknown light state. Exercise caution.

// =========================================================================================

// Que 6.	Browser Compatibility Message	(switch)
// ------
// 	A simple web application needs to display a specific message to users based on their browser, suggesting optimization or compatibility.

// - The switch statement takes the browserName string. Each case provides a tailored message for a known browser. The default covers browsers not explicitly listed. (Note: In real-world, browser detection is complex, but this simplifies it for the switch example).

// 	Sample input : browserName = Chrome
// 	Sample output : Optimized experience with Chrome.

// 	Sample input : browserName = Firefox
// 	Sample output : Ensuring smooth performance on Firefox.

// 	Sample input : browserName = Safari
// 	Sample output : Best viewed on Safari for Apple devices.

// 	Sample input : browserName = Edge
// 	Sample output : An AI browser, Edge is fully supported.

// 	Sample input : browserName = Opera
// 	Sample output : Your browser may have limited support. Please use a modern browser.

// ============================================================================================

// Que 7.	User Feedback Categorization	(switch)
// -------
// 	Categorize user feedback based on a feedback type to route it to the correct department.

// - The switch statement uses the feedbackType string. Specific cases map to different departments, and the default handles general inquiries or uncategorized feedback.

// 	implement the switch case with following cases
// 	1) bug_report
// 	2) feature_request
// 	3) billing_inquiry
// 	4) general_question

// 	based on the user input display the appropriate route.

// 	Sample input : feedbackType = bug_report
// 	Sample output : Feedback type: bug_report. Routing to: Technical Support Team

// 	Sample input : feedbackType = feature_request
// 	Sample output : Feedback type: bug_report. Routing to: Product Development Team

// =========================================================================================

