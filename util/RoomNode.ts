import { RoomNodeParams } from '@/types/RoomNodeParams';

export class RoomNode {
  roomId: string;
  latestTimestamp: string;
  isUnread: boolean;
  next: RoomNode | null;
  prev: RoomNode | null;

  constructor({ roomId, latestTimestamp, isUnread = true }: RoomNodeParams) {
    this.roomId = roomId;
    this.latestTimestamp = latestTimestamp;
    this.isUnread = isUnread;
    this.next = null;
    this.prev = null;
  }
}