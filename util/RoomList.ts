import { RoomNodeParams } from '@/types/RoomNodeParams';
import { RoomNode } from './roomNode';


/**
 * RoomList is a doubly linked list that'll allow us to (in real time):
 * 1. maintain sort order of chat rooms within `main`
 * 2. track read/unread status of messages 
 * 3. provide in-app/out-app notifications
 * 
 * Class is sorted by read/unread, and then by timestamp. For example:
 * [{unread, 12:00pm}, {unread, 11:30am}, {unread, 11:00am}, {read, 11:30am}, {read, 10:00am}]
 * 
 * Methods:
 * 1. roomSort -> helper for the subsequent methods
 * 2. roomAdd -> adds room to DLL.
 * 3. roomUnread -> moves room to front of DLL. Used when new unread message is delivered
 * 4. roomRead -> moves room to middle of DLL. Used when message has been read/room visited
 * 5. roomDelete -> removes room from DLL
 */
export class RoomList {
  head: RoomNode | null;
  tail: RoomNode | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  
  // methods
  private sortTimestamps(rooms: RoomNodeParams[]) {
    return rooms.sort((a, b) => {
      return new Date(b.latestTimestamp).getTime() - new Date(a.latestTimestamp).getTime();
    });
  }
  
  private sortRooms(rooms: RoomNodeParams[]) {
    const unreadRooms = rooms.filter(room => room.isUnread);
    const readRooms = rooms.filter(room => !room.isUnread);
  
    const sortedUnreadRooms = this.sortTimestamps(unreadRooms);
    const sortedReadRooms = this.sortTimestamps(readRooms);
  

    return [...sortedUnreadRooms, ...sortedReadRooms];
  }

  roomAdd() {};
  roomUnread() {};
  roomRead() {};
  roomDelete() {};
}