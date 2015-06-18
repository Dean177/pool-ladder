import React from 'react';
import {Row, Col} from 'react-bootstrap';

import RuleCard from './components/RuleCard';


export default React.createClass({
  render() {
    return (
      <Row>
        <Col md={12}>
          <h1 className="page-header">Softwire Rules</h1>
          <RuleCard>
              <h2 id="0">0. Common questions</h2>
              <p>
                  This section has some informal interpretations of these rules, specifically to answer some common questions.
              </p>
              <ol>
                  <li>After any foul, you can choose whether to play the cue ball from where it is,
                      or to move it to behind the baulk line (<a href="#6B">see rule 6B</a>).</li>
                  <li>When playing the cue ball from behind the baulk line, you may play it in any direction (<a href="#8B">see rule 8B</a>).</li>
                  <li>You <em>do</em> get two shots on the black after your opponent fouls (<a href="#6A">see rule 6A</a>).</li>
                  <li>If you foul on your first shot after an opponent's foul, then they <em>do not</em> get two shots.
                      (<a href="#6A">see rule 6A</a> ("two consecutive visits")).</li>
              </ol>
          </RuleCard>

          <RuleCard>
              <h2 id="1">1. The game</h2>
              <p>
                  The game shall be known as 8 Ball Pool and referred to in these rules as "The Game".
                  It is intended that players and teams should play 8 Ball Pool in the true spirit of the game and
                  in a sportsmanlike manner. It should be clearly understood that the referee is the sole judge of
                  what is fair and unfair play. The referee will take whatever action is necessary to ensure that
                  these rules are observed.
              </p>
          </RuleCard>

          <RuleCard>
              <h2>2. Requirements of the game</h2>
              <p>
                  The game is played on a rectangular 6-pocket table with 15 balls plus a cue ball.
                  Balls comprise of two numbered groups, 1-7 which are solid coloured balls, 9-15 are striped coloured
                  balls and the 8 ball is a solid black colour. Alternatively, the numerical groups 1-7 and 9-15 may be
                  represented by two different sets of 7 coloured balls. Usually red replaces stripes (9-15), yellow
                  replace solid (1-7). Balls in the two groups are known as object balls.
              </p>
          </RuleCard>

          <RuleCard>
              <h2>3. Object of the game</h2>
              <p>
                  The player or team pocketing all their group of object balls in any order, and then legally pocketing the 8 ball, wins the game.
              </p>
          </RuleCard>

          <RuleCard>
            <h2>4. Commencement of the game</h2>
            <Row>
              <Col md={9}>
                <ol>
                  <li id="4A">
                    <p>
                      The balls are racked as illustrated with the 8 ball (black) on the 8 ball spot,
                      which is at the intersection of the centre and corner pockets.
                    </p>
                  </li>
                  <li>
                    Order of play is determined by the flip of a coin. The winner of the flip has the option of breaking,
                    or requesting their opponent to do so.
                  </li>
                  <li>
                    The opening player plays at the triangle of object balls by striking the cue ball from any position
                    on, or behind, the baulk line. An object ball must be pocketed, or at least TWO object balls hit any
                    cushion. Failure to do so is a foul break and will result in the balls be re-racked as per rule sheet.
                    The opposing player then starts the game with two visits.
                  </li>
                  <li id="4D">
                    If the 8 ball (black) is pocketed from the break shot, the balls will be re-racked and the game will
                    be restarted by the same player. No penalty will be incurred. This applies even if other balls,
                    including the cue ball, are pocketed, or leave the playing surface ("off the table").
                  </li>
                  <li id="4E">
                    On the first occasion a player legally pockets an object ball, including following a foul, then that
                    ball denotes their group, unless one or more of both groups are pocketed, the player MUST then
                    nominate a group before play continues.
                  </li>
                  <li>
                    If no object ball is pocketed from a legal break, then the players continue alternatively
                    playing at either group until such a time as a legal pot is made, which decides the player's group.
                  </li>
                  <li>
                    If a foul is committed, (other than as in <a href="#4D">rule 4(D)</a>), and one or more object balls
                    are pocketed before playing groups are decided, then those balls are ignored in determining the groups
                    to be played. The oncoming player may play at any ball on the table, including the 8 ball (black)
                    for the first shot, the first legal pot to determine the group as in <a href="#4E">rule 4(E)</a>.
                  </li>
                  <li>
                    If a ball, or balls, are legally pocketed, this entitles the player to one additional
                    shot and this continues until the player either:
                    <ol>
                      <li>Fails to pocket one of their own set of allocated balls, or;</li>
                      <li>Commits a foul at any time.</li>
                    </ol>
                  </li>
                  <li>
                    Combination shots are allowed, providing the player hits one of their own group first,
                    or any ball with the first shot following any foul (<a href="#6C">see rule 6(C)</a>).
                  </li>
                </ol>
              </Col>
              <Col md={3}>
                <img className="rack-image" src="/assets/images/balls/softwire-rack.png" />
              </Col>
            </Row>
          </RuleCard>

          <RuleCard>
            <h2>5. Fouls</h2>
            <ol>
              <li>In off (cue ball pocketed).</li>
              <li>
                Hitting an opponent's ball(s) with the cue ball on first impact of the cue ball,
                except with the first shot following any foul.
              </li>
              <li>Failing to hit any ball with the cue ball, except where <a href="#8C">rule 8(C)</a> applies.</li>
              <li>Jump shot - defined as when the cue ball jumps over any part of any ball before making contact with any ball.</li>
              <li>
                Hitting the 8 ball (black) with the cue ball on first impact of the cue ball before all
                their own group are pocketed, except with the first shot following any foul.
              </li>
              <li>Potting any opponent's ball, except with the first shot following any foul.</li>
              <li>
                A ball shall be deemed "off the table" if it comes to rest anywhere other than on the bed of the table.
                <ol>
                  <li>
                    Any object ball or the 8 ball (black), shall be returned to the 8 ball spot
                    (<a href="#4A">see rule 4(A)</a>), or as near as possible to that spot without
                    touching any other ball, in direct line between that spot and the centre of the string line.
                  </li>
                  <li>If the cue ball, then the cue ball played from in hand (<a href="#8B">see rule 8(B) general</a>).</li>
                </ol>
              </li>
                <li>
                  If a player's body or clothing should touch any ball. Except the cue ball after the referee calls a "foul",
                  when the player is entitled to the cue ball in hand (<a href="#6B">see rule 6(B)</a>).
                </li>
                <li>Player not having at least part of one foot on the floor.</li>
                <li>Playing or touching with the cue any ball other than the cue ball.</li>
                <li>Striking the cue ball with any part of the cue other than the tip.</li>
                <li>Playing out of turn.</li>
                <li>Playing before all balls have come to rest.</li>
                <li>Playing before any ball(s) require re-spotting.</li>
                <li id="5O">Striking the cue ball with the cue more than once.</li>
                <li id="5P">
                    Push shot - defined as where the cue tip remains in contact with the cue ball for more than the momentary
                    time commensurate with a normal stroked shot, or the cue tip remains in contact with the cue ball once
                    it has commenced its forward motion.
                </li>
                <li>Failing to nominate when balls of both groups are pocketed with the first legal pot.</li>
                <li>Foul break, failing to pot an object ball or drive at least two object balls to hit any cushions.</li>
            </ol>
          </RuleCard>

          <RuleCard>
            <h2>6. Penalty following any foul</h2>
            <ol>
              <li id="6A">
                Following any foul the offending player loses their next visit to the table, giving their opponent
                two consecutive visits to the table
              </li>
              <li id="6B">
                If the cue ball has come to rest on the playing surface, then the player having two visits may proceed
                to play from where the cue ball lies, or the cue ball may be played from any position on or behind the baulk line.
                Moving the cue ball in this manner does not count as a shot, or visit.
                (Players are advised to ask the referee to hand them the cue ball).
              </li>
              <li id="6C">
                On the first shot only of the first visit, the oncoming player may, without nomination,
                play the cue ball on to any ball without penalty, including any opponent's ball(s), or 8 ball (black).
                If any object ball(s) is pocketed directly, or by combination, the player is deemed to have
                pocketed a legal ball(s), and continues with the first visit. However, the player must not pot
                the 8 ball (black), which would mean loss of game. Except if the player is on the 8 ball (black),
                then the game would be won. When the player fails to pot a ball on the first or subsequent shot
                of the first visit, play then continues with the second visit. The second visit is deemed to have
                started when the cue ball is struck on the first shot of the second visit.
              </li>
            </ol>
          </RuleCard>

          <RuleCard>
            <h2>7. Loss of game</h2>
            <ol>
              <li>
                If a player pockets the 8 ball (black) before all the balls in their own group, except on the break
                (<a href="#4D">see rule 4(D)</a>), the player loses the game.
              </li>
              <li>A player going in off the 8 ball (black) when the 8 ball (black) is pocketed, loses the game.</li>
              <li>
                A player pocketing the 8 ball (black) and any other ball on the same shot will lose the game.
                Except following a foul when only the 8 ball (black) and ball(s) of the opponents group are on the table,
                then with the first shot of the first visit, the player may legally pocket the 8 ball (black) as well as
                ball(s) of the opponent's group by any combination and in any order.
              </li>
              <li>A player who clearly fails to make any attempt to play a ball of their own group will lose the game.</li>
            </ol>
          </RuleCard>

          <RuleCard>
            <h2>8. General</h2>
            <ol>
              <li>
                Touching ball.
                <ol>
                  <li>
                      Touching opponent's ball or 8 ball (black), the player MUST play a ball of their own group.
                      Except on the first shot of the first visit following any foul, this entitles the player to any ball.
                  </li>
                  <li>
                    Touching any ball the player is legally entitled to play. The player may choose either;
                    <ol>
                      <li>
                        Play away from the touching ball, and be deemed to have played that ball. Should the cue ball fail
                        to make contact with any ball, or strike the opponents ball, or 8 ball (black),
                        then the shot is fair, no foul.
                      </li>
                      <li>
                        Play to move the touching ball, but great care should be taken not to play a push shot,
                        (<a href="#5P">foul 5(P)</a>), or contact the cue ball twice, (<a href="#5O">foul 5(O)</a>).
                        (Moving the object ball is not automatically a foul).
                      </li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li id="8B">
                Cue ball in hand. When a player has the cue ball in hand, the ball is played from any position on,
                or behind, the string line, and in any direction.
              </li>
              <li id="8C">
                Player in control. A player is said to be in control of the table from the time their body, cue,
                or clothing touches the table prior to their shot, throughout the visit, and up until the opponent
                does likewise prior to their visit. Any ball(s) which fall into pockets during this period,
                (including the 8 ball (black)).
              </li>
              <li>
                Completion of game. The game is completed when the 8 ball (black) is pocketed legally in any pocket,
                and all the remaining balls have come to rest, except on the break (<a href="#4D">see rule 4(D)</a>).
              </li>
            </ol>
          </RuleCard>

          <RuleCard>
              <h2>Stalemate</h2>
              <p>
                  Should any situation arise whereby a legal shot is IMPOSSIBLE to play, then the game shall be restarted by the player
                  who started that frame, whether this situation has been arrived at by accident or design.
              </p>
              <p>
                  If in the opinion of the referee neither player is allowing the game to progress, or a stalemate situation has arisen,
                  then the game shall be restarted by the player who started that frame. The referee shall not allow numerous visits with
                  neither player making any attempt to make the opening pot which decides the playing groups (unless it is felt that
                  progress is being made). If the player who started that frame did so by virtue of their opponent making a foul break,
                  that player will break on any restart, not the opponent who made the foul break.
              </p>
          </RuleCard>

          <RuleCard>
              <h2>Guidance</h2>
              <ol>
                  <li>The term "SHOT" means striking the cue ball once.</li>
                  <li>The term "VISIT" refers to the one turn at the table comprising of one or a series of shots.</li>
                  <li>The term "BREAK" refers to the first shot of a game, or the first shot of a game being restarted.</li>
                  <li id="10D">Coaching is deemed unsportsmanlike behaviour (<a href="#1">see rule 1</a>).</li>
                  <li>A referee may, only if requested, advise on the rules of the game.</li>
              </ol>
          </RuleCard>
        </Col>
      </Row>
    );
  }
});