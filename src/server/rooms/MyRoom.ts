import { Room, Client } from "colyseus"
import { MyRoomState } from "./schema/MyRoomState"

export class MyRoom extends Room {
  onCreate(options: any) {
    this.setState(new MyRoomState())

    this.onMessage("keydown", (client, message) => {
      this.broadcast('keydown', message, { 
        except: client
      })
    })
  }

  onJoin(client: Client, options: any) {}

  onLeave(client: Client, consented: boolean) {}

  onDispose() {}
}
