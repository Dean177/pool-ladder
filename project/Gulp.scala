import java.net.InetSocketAddress

import play.sbt.PlayRunHook
import sbt._

trait EnvironmentSpecific {
  def envCommand(command: String): String = {
    if (System.getProperty("os.name").startsWith("Windows"))
      "cmd /c " + command
    else
      command
  }
}

object Gulp extends EnvironmentSpecific {
  def apply(base: File): PlayRunHook = {
    object GulpProcess extends PlayRunHook {
      var process: Option[Process] = None

      override def beforeStarted(): Unit = {
        Process(envCommand("npm install"), base).run()
        Process(envCommand("bower install"), base).run()
        Process(envCommand("gulp build"), base).run()
      }

      override def afterStarted(address: InetSocketAddress): Unit = {
        process = Some(Process(envCommand("gulp watch"), base).run())
      }

      override def afterStopped(): Unit = {
        process.foreach(p => p.destroy())
        process = None
      }
    }

    GulpProcess
  }
}

// Allows these to be run inside the sbt console.
object JsCommands extends EnvironmentSpecific {
  def npm: Command = Command.args("npm", "<task>") { (state, args) =>
    (envCommand("npm ") + args.mkString(" ")).!
    state
  }

  def gulp: Command = Command.args("gulp", "<task>") { (state, args) =>
    (envCommand("gulp ") + args.mkString(" ")).!
    state
  }

  def bower: Command = Command.args("bower", "<task>") { (state, args) =>
    (envCommand("bower ") + args.mkString(" ")).!
    state
  }

  def all: Seq[Command] = Seq(npm, gulp, bower)
}
