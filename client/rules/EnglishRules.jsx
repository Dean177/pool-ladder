import React from'react';
import RuleCard from './components/RuleCard';

export default React.createClass({
  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <h1 className="page-header">English Rules</h1>
                <RuleCard>
                    <h2>The Spirit of the Game</h2>
                    <p>The Game is known as Eight-Ball Pool.  It is expected that players will always play the game in the true spirit and in a sporting manner.  The Referee will take whatever action is necessary to ensure that the spirit and rules of the game are observed.</p>
                </RuleCard>

                <RuleCard>
                    <h2>Equipment</h2>
                    The Game of Eight-Ball Pool is played with:-
                    <ol type="1">
                        <li>A "Cue Ball" - being a white ball.</li>
                        <li>Fifteen "Object Balls" - consisting of:-
                            <ol type="a">
                                <li>"Colours" - being a group of seven red balls, (or balls numbered 1 to 7) and a group of seven yellow balls (or balls numbered 9 to 15).</li>
                                <li>The "Eight-Ball" - being a black ball marked with a number "8".</li>
                            </ol>
                        </li>
                        <li>A six pocket rectangular Pool Table with general characteristics as follows:-
                            <ol type="a">
                                <li>The cloth will be marked with a "Spot" at the position where a straight line drawn diagonally from the centre of a side pocket to the centre of a corner pocket would intersect with a straight line drawn diagonally from the centre of the opposite side pocket to the centre of the other corner pocket.</li>
                                <li>The cloth will be marked with a "Baulk Line", being a straight line, drawn from cushion to cushion, parallel to, and one fifth of the length of the table from, the face of the cushion that lies the greatest distance from the Spot.</li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Definitions</h2>
                    <ul>
                        <li>Shot:  A "Shot" begins when all balls stop moving from the previous Shot.
                            A player "Plays a Shot" by striking the Cue Ball with the tip of the cue.
                            A "Shot" ends when all balls stop moving from the current Shot.
                        </li>
                        <li>Play:  To "Play" an Object Ball is to play a shot that results in the Cue Ball's first contact with another ball to be with that Object Ball. To "Play" the Cue Ball is to strike it with the tip of the cue.</li>
                        <li>Ball On:  At any time during a frame, a ball "On" is any Object Ball that the player may play without incurring a penalty.</li>
                        <li>Pot:  A ball is "Potted" when it leaves the bed of the table, enters a pocket and remains in that pocket.</li>
                        <li>Visit:  A "Visit" comprises one shot or a series of shots. Each visit lasts until the player fails to pot a ball "On". (Or until a foul is committed or the frame ends)</li>
                        <li>Turn:  A players "Turn" at the table comprises one visit or, after most fouls committed by the opponent, two visits.</li>
                        <li>Frame:  A Frame is one game of Eight-Ball Pool between two players or two pairs of players. A Frame is played from the opening break and usually through until the Eight-Ball is potted. (Note: there are other ways that a frame may end - see "Loss of Frame")
                            <ol type="a">
                                <li>A player may concede a frame at any time.</li>
                            </ol>
                        </li>
                        <li>Match:  A Match is a predetermined number of frames of Eight-Ball Pool between two players, two pairs of players or two teams of players.</li>
                        <li>Player in Control:  A player (and the player's partner in doubles) is deemed to be "In Control" of the frame from the time that the balls stop moving from the final shot of an opponent's turn until the balls stop moving from the final shot of the player's turn.  There can be no instance, once a frame has commenced, that someone is not in control.</li>
                    </ul>
                </RuleCard>

                <RuleCard>
                    <h2>Object of the Game</h2>
                    <ol type="1">
                        <li>The object of the game is to win by being the first player to Pot a group of Colours in any order and in any pockets and then Pot the Eight-Ball in any pocket.
                        </li><li>When "On" a group of Colours, potting more than one ball of that Colour in the same shot is allowed.  But a separate shot must be played to pot the Eight-Ball and win the game.
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Playing from Baulk</h2>
                    <img className="rack-image" src="/assets/images/balls/english-rack.png" />
                    <ol type="1">
                        <li>Baulk is the rectangular area of the table that is bordered by the Baulk Line and the three cushions at that end of the table.</li>
                        <li>When playing from Baulk:-
                            <ol type="a">
                                <li>The centre point of the Cue Ball must be in Baulk when a shot is played. (If the centre point of the Cue Ball is directly on the Baulk Line it is not deemed to be in Baulk.)</li>
                                <li>The Cue Ball can be moved into position by hand or with the shaft of the cue, but when touched by the tip of the cue, a shot is deemed to have been played.</li>
                                <li>The Cue Ball may be played in any direction.</li>
                                <li>If a player wishes to play from Baulk after a “Foul Snooker”, “Foul Jaw Snooker” or "Time Foul":- The player must verbally advise the referee of this choice and the referee will then recover the Cue Ball and hand it to the player or place it on top of, and in the centre of, the cushion at the Baulk end of the table for the player to retrieve by hand.</li>
                                <li>After an "In Off", “Foul Snooker”, “Foul Jaw Snooker” or "Time Foul" the player must endeavour to position the Cue Ball so as not to create a Foul Snooker.  If the player claims a Foul Snooker from Baulk, the referee may choose to move the Cue Ball around to determine if there is any position in Baulk where the player would not be Foul Snookered. Whether such a position is found or not, the referee will announce the result and hand the Cue Ball back to the player or place it on top of, and in the centre of, the cushion at the Baulk end of the table for the player to retrieve by hand.</li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>The Break</h2>
                    <ol type="1">
                        <li>The Object Balls are racked with the Eight-Ball on the Spot.</li>
                        <li>In the absence of any competition / tournament rules to the contrary, a coin will be tossed to determine which player will break. If a series of frames is to be played (A Match), the break of each subsequent frame will alternate.</li>
                        <li>The first shot of a frame is called the "Break".  To "Break", the Cue Ball is played at the triangle of Object Balls from Baulk.  The frame is deemed to have commenced the instant that the Cue Ball is played</li>
                        <li>
                            <ol type="a">
                                <li>The Break will be deemed a "Fair Break" if:-
                                    <ol type="i">
                                        <li>At least one Colour is potted. AND/OR </li>
                                        <li>Four Object Balls (at least) are driven to a cushion.</li>
                                    </ol>
                                </li>
                                <li>If the Break is not a Fair Break it is a Non-Standard Foul and:-
                                    <ol type="i">
                                        <li>The opponent is awarded two visits.</li>
                                        <li>The balls are re-racked.</li>
                                        <li>The opponent re-starts the game and is under the same obligation to achieve a Fair Break.</li>
                                    </ol>
                                </li>
                                <li>
                                    <ol type="i">
                                        <li>If the Cue Ball is potted on a Fair Break it is a Non-Standard Foul that is penalised by the turn passing to the opponent.</li>
                                        <li>If the break is not a Fair Break and the Cue Ball is potted, the penalty for failure to perform a  Fair Break applies. (See (b) above).</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>If the Eight-Ball is potted on any break, the balls are re-racked and the same player will break again. When the Eight-Ball is potted on the break, all other aspects of the shot are ignored.  (Except if a Serious Foul or breech of the "Spirit of the Game occurs)</li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Legal Shot</h2>
                    <ol type="1">
                        <li>On all shots, the player must:-
                            <ol type="a">
                                <li>Cause the Cue Ball's initial contact with a ball to be with a ball "On",  AND THEN</li>
                                <li>Pot a ball "On"	OR; Cause the Cue Ball or any Object Ball to contact a cushion.</li>
                            </ol>
                        </li>
                        <li>Failure to play a Legal Shot is a Standard Foul.</li>
                        <li>Exceptions:
                            <ol type="a">
                                <li>On the Break, the conditions of a Legal Shot do not apply. See (F) The Break</li>
                                <li>When playing out of a Total Snooker a player is only obliged to meet the conditions of (1)(a) above.
                                    <ol type="i">
                                        <li>Definition: A player is in a Total Snooker when it is impossible to play any part of any of the player's        own Colour by way of a "straight line" shot. Leaving an opponent in a Total Snooker is not a foul.</li>
                                        <li>If a player believes that a Total Snooker exists, the player may ask the referee for a ruling.</li>
                                        <li>If the referee rules that a Total Snooker exists, the player's obligations under the "Legal Shot" rule are relaxed as follows:- The player need only cause the Cue Ball's initial contact to be with a ball "On".  The requirement to pot a ball and / or cause a ball to strike a cushion is waived.</li>
                                        <li>In a Total Snooker, the straight sections of the cushions DO come into consideration.  If a player has to strike a cushion prior to impact with a "ball on", then a "Total Snooker" does exist.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>Interpretations:
                            <ol type="a">
                                <li>If the Cue Ball's initial contact is with an Object Ball that is touching a cushion, simply forcing that Object Ball into the same cushion does not constitute a Legal Shot.</li>
                                <li>If the Cue Ball and an Object Ball are touching the same cushion, simply forcing the Cue Ball and&nbsp;/&nbsp;or that Object Ball into the same cushion does not constitute a Legal Shot.</li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Deciding Colours</h2>
                    <ol type="1">
                        <li>General
                            <ol type="a">
                                <li>When Colours have not been decided the table is deemed to be "Open". When the table is open a player may play at either group of Colours.</li>
                                <li>Colours can never be decided on a foul shot.</li>
                                <li>Once Colours are decided, the player remains "On" that coloured group for the duration of the frame. The opponent remains "On" the opposite coloured group.</li>
                                <li>Playing a shot after neglecting to nominate a choice of Colours is a Standard Foul. Any balls potted on  such a shot are left in the pocket and ignored for the purpose of deciding Colours.</li>
                            </ol>
                        </li>
                        <li>On the Break
                            <ol type="a">
                                <li>If no Colours are potted on the break the table is "Open".</li>
                                <li>If one or more Colours are potted on the break the player then has a right and obligation to verbally advise the referee of a choice of Colour before proceeding.  Failure to do so is a Standard Foul.  If a player is fouled under this rule the opponent faces an "Open" table.</li>
                                <li>
                                    <ol type="i">
                                        <li>If the player nominates a Colour that was potted on the break, the player is on that colour no matter what happens next.</li>
                                        <li>If the player nominates a Colour that was not potted on the break, to be on that Colour, the player must pot a ball of that Colour on the next shot.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>After the Break
                            <ol type="a">
                                <li>If a player pots one or more balls of the same Colour, the player is then "On" that Colour.</li>
                                <li>If a player pots one or more balls of different Colours, the player then has a right and obligation to verbally advise the referee of a choice of Colour before proceeding.  Once a colour is nominated in these circumstances, the player is on that colour no matter what happens next.  Failure to nominate is a Standard Foul.  If a player is fouled under this rule, the opponent faces an "Open" table.</li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Time Allowed</h2>
                    <ol type="1">
                        <li>A player has a maximum of sixty seconds to play each shot.</li>
                        <li>The Referee will start timing when all balls have come to rest from the previous shot.</li>
                        <li>If the first thirty seconds elapses before a shot is played, the referee will call "Thirty Seconds" as a warning to the player.  This call must be made the instant the thirty seconds has expired.  A Referee should not postpone the call because it appears that the player is about to play a shot.</li>
                        <li>If a shot is not played within sixty seconds it is a Non-Standard Foul.  The incoming player is awarded two visits from:-
                            <ol type="a">
                                <li>Where the Cue Ball lies,  or, if the player wishes</li>
                                <li>From Baulk.</li>
                            </ol>
                        </li>
                        <li>The referee may decide to grant "Time Out", being a period when timing ceases:-
                            <ol type="a">
                                <li>At the request of a player. (For example, something is obstructing the player or the player needs to leave the playing area.)  and / or</li>
                                <li>Because the referee deems that it is warranted. (For example, the referee may call time out when making a close foul snooker decision or when searching for a piece of equipment requested by the player.)</li>
                            </ol>
                        </li>
                        <li>When the referee has racked the balls the referee will call “Time Running”. The oncoming player then must play the break shot within 60 seconds.</li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Fouls</h2>
                    There are four types of foul. Standard Fouls, Non-Standard Fouls, Serious Fouls and Loss of Frame Fouls. A player can only be penalised for one foul at a time. If two or more fouls are committed during a shot, the foul that carries the most severe penalty will apply.
                    Exceptions:
                    <ol type="1">
                        <li>In the case of a Serious Foul and a Time Foul, the incoming player has the right to "Ball in hand". The penalty for a Time Foul still applies, even though a Serious Foul has been called and applied.</li>
                        <li>In the case of a Serious Foul and a Foul Break, the incoming player has the right to "Ball in hand". The penalty for a Foul Break still applies, even though a Serious Foul has been called and applied.</li>
                    </ol>

                    <h2>Standard Fouls</h2>
                    Standard fouls are to be called by the referee as soon as they occur and the fouled player is in control, until all balls from that shot come to rest. The referee then awards two visits to the opponent.
                    <ol type="1">
                        <li>Potting the Cue Ball - "In Off"  except on a Fair Break - see (F) The Break (4)(c)(1) .  The incoming player plays from Baulk  see (E) Playing from Baulk (d)(1)</li>
                        <li>Playing from outside Baulk when obliged to play from Baulk. see (E) Playing from Baulk (2)(a)</li>
                        <li>Potting an opponent's ball. (except, when it is the properly nominated ball following a Foul Snooker or Foul Jaw Snooker)</li>
                        <li>Failing to cause the Cue Ball's initial contact with a ball, to be with a ball "On".</li>
                        <li>Accidentally striking the Cue Ball with any part of the cue other than the tip.</li>
                        <li>Accidentally striking an Object Ball with any part of the cue.</li>
                        <li>Playing a shot before all balls have come to rest from the previous shot.</li>
                        <li>Playing a shot before any balls that require spotting, have been spotted.</li>
                        <li>
                            <ol type="a">
                                <li>Touching the table while having a cigarette (lit or unlit) in hand or mouth.</li>
                                <li>Causing a cigarette (lit or unlit) to touch the table or enter the space directly above the table.</li>
                                <li>Touching the table while having a beverage container in hand.</li>
                                <li>Causing a beverage container or beverage to touch the table or enter the space directly above the table.</li>
                            </ol>
                        </li>
                        <li>Touching the table when not in control of the frame. See (C) Definitions (9) - Player in Control Exception:  When a players’ turn is finished, that player has a maximum of ten (10) seconds to move away from the table. See 11 below</li>
                        <li>Not moving away from the table within ten (10) seconds of the time that all the balls stopped moving from the final shot of a turn at the table.</li>
                        <li>
                            Coaching: - During a frame, a player is required to play without receiving any advice from other persons relating to the playing of the frame. Should a team member or bone-fide supporter of a player offer advice, the referee will issue a "First and Final Warning" to that person that a repetition will result in the player being penalised via a Standard Foul.
                            Because it may not always be possible for the Referee to hear if a statement made to a player is advice, the referee may issue the First and Final Warning on the grounds that any statement made to a player, other than general barracking, is deemed to be coaching.
                            In a tournament setting, a First and Final warning may be given once only, before the commencement of the day's play as a block warning to all players and spectators.
                        </li>
                        <li>Leaving the playing area without permission. If a player needs to leave the playing area during a frame or match, "Time Out" must firstly be granted by the referee. see (I) Time Allowed (5)</li>
                        <li>Playing a shot after neglecting to nominate a choice of Colour when the obligation and right to do so existed. see (H) Deciding Colours (1)(d)</li>
                        <li>Playing A Push Shot or Double Hit of a type defined in (O) Push Shots and Double Hits.</li>
                        <li>Failing to perform a "Legal Shot". see (G)Legal Shot</li>
                        <li>After being awarded a Foul Snooker or Foul Jaw Snooker: - Playing an opponents ball or the Eight Ball without firstly nominating that ball.</li>
                        <li>Playing a shot while not having at least one foot touching the floor.</li>
                        <li>Failing to "Play Away" from a touching ball. see (T) Touching Balls (1)(a)</li>
                        <li>A ball remaining off the table. see (U) Balls Off the Table</li>
                        <li>Players body or clothing touching any ball.</li>
                        <li>Accidental Jump shot, miscue, or when forcing the cue ball to a cushion and the rebound jumps a ball.  (If the Cue ball leaves the bed of the table and misses an Object ball that would have been struck had the Cue Ball not left the table on an otherwise identical shot, the Cue Ball is deemed to have jumped over that object ball).  A break shot that results in the pack being jumped will be deemed to be not a Fair Break (see 4b). Also note M5 serious fouls</li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Non-Standard Fouls</h2>
                    Non-Standard fouls are to be called by the referee as soon as they occur and the fouled player is in control, until all balls from that shot come to rest.. The referee will then impose the relevant penalty.  Non-Standard Fouls are so called because the penalty and / or options of the incoming player may vary.
                    <ol type="1">
                        <li>Failure to perform a Fair Break. see (F) The Break (4)(a)&amp;(b)
                        </li><li>Failure to play a shot within 60 seconds of the time that the balls came to rest from the previous shot.
                        see (I) Time Allowed (4)
                    </li><li>Potting the Cue Ball on a Fair Break.  see (F) The Break (4)(c)(1)
                    </li></ol>

                    <h2>Serious Standard Fouls</h2>
                    Serious Fouls are to be called by the referee as soon as they occur and the fouled player is in control, until all balls from that shot come to rest. The referee will replace the balls as near as possible to the positions they were in before the Serious Foul was committed and award two visits to the opponent.
                    <ol type="1">
                        <li>Playing a shot out of turn (accidentally or deliberately).
                            <ol type="a">
                                <li>A player who plays a shot at any time during a frame when the right to do so does not exist has played out of turn. (For Example, A player who plays a shot immediately after playing a foul or immediately after the referee has called a foul on that player, has played out of turn.)
                                </li><li>Exception: - a shot played out of turn accidentally, that disrupts the balls to such an extent that the Referee deems it impossible to replace them, the referee will give the opponent the choice of either playing the balls from where they lie or replaying the frame.  If the frame is replayed the same player is to break again.
                            </li></ol>
                        </li><li>Deliberately striking a ball other than the Cue Ball with the tip of the cue.
                    </li><li>Deliberately causing any ball or balls to be moved in a manner other than that which may result from playing a normal shot.
                    </li><li>Deliberately striking the Cue Ball with other than the tip of the cue.
                    </li><li>Deliberate jump shot caused by elevating the cue on the shot, and forcing the cue ball to rebound from the bed of the table and causing the Cue Ball to Jump over any ball. (If the Cue ball leaves the bed of the table and misses an Object ball that would have been struck had the Cue Ball not left the table on an otherwise identical shot, the Cue Ball is deemed to have jumped over that object ball) Also note K22 standard fouls.
                    </li><li>Deliberately interfering, by word or action, so as to disrupt an opponent’s play.
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Loss of Frame Fouls</h2>
                    <ol type="1">
                        <li>Committing a foul in the same shot that the Eight Ball is potted. (Except on the Break)
                        </li><li>Potting the Eight Ball when a ball or balls of the player's own Colour are still on the table. (Except on the Break)
                    </li><li>Potting the Eight Ball and the last ball or balls of the player's own Colour in the same shot.
                    </li><li>Committing two Serious Fouls in the one frame.
                    </li><li>Committing a Serious Foul that disrupts the balls to such an extent that the Referee deems it impossible to replace them as close as possible to their original positions.
                    </li><li>Any deliberate attempt to prevent the opponent from potting the Eight Ball, when the opponent is on the Eight Ball, by way of a Serious Foul or other unsporting manoeuvre.
                    </li><li>If a player breeches the "Spirit of the Game" to such an extent that the frame (or match) should be awarded to the opponent.
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Push Shots and Double Hits</h2>
                    <ol type="1">
                        <li>Definitions:  Most shots commonly known as "Push Shots" in the game of "Snooker" are allowed in the game of Eight - Ball Pool.  Generally, any shot played with speed will not be deemed to be a Push Shot regardless of the fact that the cue tip may have come into contact with the Cue Ball more than once.
                        </li><li>Exceptions that are Standard Fouls:-
                        <ol type="a">
                            <li>When, during the playing of a shot, the tip of the cue strikes the Cue Ball twice and the referee is able to actually see each contact.
                            </li><li>When, during the playing of a shot, a player plays the cue so slowly through the Cue Ball that the cue tip remains in contact with the Cue Ball so as to be visibly                 pushing it along.
                        </li><li>When the Cue Ball is played into a touching Object Ball. See (S) Touching Balls
                        </li></ol>
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Snookers</h2>
                    <ol type="1">
                        <li>Definition:  A player is Snookered when it is impossible to play the finest cut possible on both sides of any of that player's own Colour by way of a "straight - line" shot. Snookering an opponent is not a foul.
                        </li><li>A player cannot be Snookered by a ball of the player's own Colour.  That is, if one of the player's own coloured group is an obstructing ball, it will be ignored for the purposes of determining a Snooker.
                    </li><li>A player cannot be Snookered on an Object Ball if the Cue Ball is touching that Object Ball.
                    </li><li>A player cannot be Snookered by the straight sections of the cushions. If a straight section of a cushion is preventing the finest possible cut on the side of an Object Ball, that section of cushion will be deemed not to exist for the purposes of determining a Snooker on that Object Ball.
                    </li><li>If an Object Ball is partly obscured by a curved section of a cushion (Jaw), this in itself does not constitute a Snooker.
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Foul Snookers</h2>
                    <ol type="1">
                        <li>Definition:  When an opponent plays a foul shot and this results in the incoming player being snookered, the incoming player is deemed to be Foul Snookered.
                        </li><li>If a player believes that a Foul Snooker exists, the player may ask the referee for a ruling.
                    </li><li>If the referee rules that a foul snooker exists, the player initially has the following options:-
                        <ol type="a">
                            <li>Play the Cue Ball from where it lies. see (4) (a) below	OR
                            </li><li>Ask the referee to remove the Cue Ball so as to allow the player to play from Baulk. see (4) (b) below
                        </li></ol>
                    </li><li><ol type="a">
                        <li><ol type="i"><li>If the player chooses to play the Cue Ball from where it lies, the player may, if the player wishes, nominate the Eight Ball (but see (5) below) or any one of the  opponent's Colour.  The player can nominate a particular ball by verbal description of it or its position or by pointing at it.  The Referee may ask for further information if any doubt exists as to which ball has been nominated.
                        </li><li>Once nominated, a ball is deemed to "become one" of the player's Colour for the first shot of the first visit.  The player may then play any of the player's own  Colour or the nominated ball. If any of the player's Colour and/or the nominated ball is potted, the player continues with the first visit.
                        </li></ol>
                        </li><li>If the player chooses to play the Cue Ball from Baulk, a Foul Snooker may no longer exist.  In this case the procedure under the heading (E) Playing from Baulk (2) (d) &amp; (2) (e) should be followed.  If the referee decides that a Foul Snooker does still exist, the player may nominate a ball and follow the procedure in (4) (a) above.
                        </li></ol>
                    </li><li>If the Eight Ball is nominated it may be played, but potting it will mean loss of frame.
                    </li><li><ol type="a">
                        <li>If a player is "On" the Eight Ball and Foul Snookered: - The player may play a nominated ball or the Eight Ball and pot either or both of these balls, directly or indirectly, in any pocket or pockets.
                            Assuming the player does not commit a foul:-
                            <ol type="i"><li>If neither the Eight Ball nor the nominated ball is potted, the player's first visit is complete.
                            </li><li>If the nominated ball is potted and the Eight Ball is not, the player continues with the first visit.
                            </li><li>If the nominated ball and the Eight Ball are potted, the player wins the frame.
                            </li><li>If the Eight Ball is potted and the nominated ball is not, the player wins the frame.
                            </li></ol>
                        </li></ol>
                    </li><li>If a Foul Snooker exists and the Cue Ball is touching an opponent's ball or balls, the player may, but is not obliged to, nominate one of those touching balls.
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Foul Jaw Snooker</h2>
                    <ol type="1">
                        If an opponent fouls and the Cue Ball comes to rest on or near a Jaw (curved part of a cushion), and that Jaw is preventing the player from playing the finest cut possible on both sides of any of that player's own Colour by way of a "straight - line" shot, the player is deemed to be Foul Snookered and all the rules pertaining to Foul Snookers will apply.
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Touching Balls</h2>
                    <ol type="1">
                        <li>General
                            <ol type="a">
                                <li>If the Cue Ball is touching an Object Ball, the player is obliged to "Play Away" from that Object Ball at an angle of more than 90 degrees. (That is, play the shot without causing the Cue Ball to make any initial further contact with that Object Ball)</li>
                                <li>If, when playing away from a touching ball, the touching ball rocks or moves without being contacted further, but simply because the Cue Ball is no longer there, no penalty will apply.</li>
                            </ol>
                        </li>
                        <li>When Colours have been decided:-
                            <ol type="a">
                                <li>Playing away from a touching Object Ball of the player's own Colour:- The instant a player plays away from a touching Object Ball of the player's own Colour, the player is deemed to have played that ball.  Therefore, the player needs to then only pot a ball or cause any ball to strike a cushion to fulfil all the requirements of a Legal Shot.</li>
                                <li>Playing away from a touching Object Ball of the opponent's Colour:- The player must play away from the touching ball and then meet all the requirements of a Legal Shot.</li>
                                <li>
                                    <ol type="i">
                                        <li>Playing away from the touching Eight Ball when "On" the Eight Ball:- The player must play away from the touching Eight Ball and then need only cause any ball                to strike a cushion to fulfil the requirements of a Legal Shot.</li>
                                        <li>Playing away from the touching Eight Ball when not "On" the Eight Ball.:- The player must play away from the touching Eight Ball and then meet all the requirements of a Legal Shot.</li>
                                    </ol>
                                </li>
                                <li>Playing away from two or more touching Object Balls:-
                                    <ol type="i">
                                        <li>If any of the touching Object Balls are of the player's Colour, the player will be deemed to have played away if the player plays away from any one of the touching              balls of the player's Colour. That is, the player may play into any of the other touching balls.  The player needs then to only pot a ball or cause any ball to strike a                  cushion to fulfil the requirements of a Legal Shot.</li>
                                        <li>If none of the touching Object Balls are of the player’s coloured group, the player must play away from all the touching balls and then meet all the requirements of a Legal Shot.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Balls Off the Table</h2>
                    <ol type="1">
                        <li>It is a Standard Foul if a ball leaves the playing surface (other than being potted) and remains off the playing surface or doesn't return by its own means.</li>
                        <li>Definitions / Examples
                            <ol type="a">
                                <li>"Playing Surface":- The Playing Surface of the table is the flat part of the table between the cushions</li>
                                <li>"By its own means":-
                                    <ol type="i">
                                        <li>It is not a foul if a ball leaves the playing surface, runs along the top of a cushion, drops back on to the playing surface and comes to rest there or falls into a pocket.</li>
                                        <li>It is a Standard Foul if a ball leaves the playing surface, comes into contact with a person or object that is not a part of the table and then returns to the playing surface.</li>
                                    </ol>
                                </li>
                                <li>"Off the Table":- It is a Standard Foul if a ball leaves the playing surface and comes to rest on other than the playing surface. (e.g. On the floor or on the top of a cushion)</li>
                                <li>"Spotted":- A ball is spotted when its centre point is placed on the spot or, if this is not possible, as near as possible to the spot in a direct line between the spot and the centre point of the cushion that lies the greatest distance from the Baulk Line.  If this is not possible, as near as is possible to the spot, in a direct line between the spot and the centre point of the baulk line. If any of the following balls require spotting, they are spotted in the following order:-
                                    <ol type="i">
                                        <li>Eight Ball   then</li>
                                        <li>Red Balls in any order (or balls numbered 1 to 7 in numerical order)   then</li>
                                        <li>Yellow Balls in any order (or balls numbered 9 to 15 in numerical order) Spotted balls should be placed as close to each other and any intervening balls as possible, without touching.</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>If a ball leaves the playing surface and remains off the playing surface, it shall be returned to the table:-
                            <ol type="a">
                                <li>If it is the Cue Ball it is to be played from Baulk.</li>
                                <li>If it is an Object Ball (or Balls) it is to be Spotted.</li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Balls Falling Without Being Hit</h2>
                    <ol type="1">
                        <li>Any ball that falls into a pocket at any time, without being struck, shall be replaced by the Referee to its original position, no penalty. Time will be re-started and the player in control continues with the visit.</li>
                        <li>Should any ball fall into the pocket after a shot is played and before balls come to rest, providing the fallen ball played no part in the shot, once all other balls have stopped moving, it shall be replaced as described above.
                            <ol type="a">
                                <li>If a legal pot was made play continues with the same visit.</li>
                                <li>If no pot was made play continues with the next visit.</li>
                                <li>If a foul was made then the next player will continue with the appropriate penalty.</li>
                            </ol>
                        </li>
                        <li>Should any ball fall into the pocket after a shot is played, but before balls come to rest, and the fallen ball would have been struck, then the Referee will replace all balls to their original positions
                        <ol type="a">
                            <li>If no infringements of the rules were committed during the shot, or if the cue ball is potted as a result of a ball falling that the cue ball would have otherwise hit, the player who played will replay the shot or may play a different shot
                            </li><li>If any foul was committed (other than as defined in a) above) then the next player will continue with the appropriate penalty.
                        </li></ol>
                    </li></ol>
                </RuleCard>

                <RuleCard>
                    <h2>Interference</h2>
                    <ol type="1">
                        <li>
                            If any balls are moved during a frame:-
                            <ol type="a">
                                <li>By a person other than the players taking part in the frame or,</li>
                                <li>As a direct result of one of the players being bumped or,</li>
                                <li>Due to any other event deemed outside the players' control such as:-
                                    <ol type="i">
                                        <li>"An Act of God" such as an earthquake etc</li>
                                        <li>Tip falling off a cue or end falling off a spider etc</li>
                                    </ol>
                                </li>
                            </ol>
                            The referee will replace the balls as near as possible to the positions they were in before the incident occurred, no penalty shall be imposed on either of the players and the frame shall continue.
                        </li>
                        <li>
                            <ol type="a">
                                <li>The referee will prevent any unauthorised marking of the table. If a player causes a block of billiard chalk or other foreign matter to be on any part of the table it is not a foul.  However, the referee will ensure that the item is removed.</li>
                                <li>If a player repeatedly causes a block of billiard chalk or other foreign matter to be on any part of the table the referee may deem that the player has breeched the Spirit of the Game and award the frame to the opponent.</li>
                                <li>Exception to (a) above: - A cigarette or beverage container. see (K) Standard Fouls (9).</li>
                            </ol>
                        </li>
                    </ol>
                </RuleCard>

                <RuleCard>
                    <h2>Impossible Shot</h2>
                    <p>
                        A situation may arise during a frame where it is impossible for a player to play a shot
                        without fouling.  In such a situation the player has no other option but to commit a foul.
                    </p>
                </RuleCard>

                <RuleCard>
                    <h2>Stalemate</h2>
                    <p>
                        The referee shall declare a Stalemate if both the player and the opponent have three turns
                        in succession where the Cue Ball fails to make contact with an Object Ball.  In such a case,
                        the frame will be replayed with the same player breaking.
                    </p>
                </RuleCard>
            </div>
        </div>
    );
  }
});