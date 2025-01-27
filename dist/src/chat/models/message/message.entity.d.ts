import { BaseEntity } from 'typeorm';
import { MsgVideo } from './msg_video.entity';
import { MsgAudio } from './msg_audio.entity';
import { MsgPhoto } from './msg_photo.entity';
import { MsgSticker } from './msg_sticker.entity';
import { Client } from '../client/client.entity';
import { Room } from '../room/room.entity';
import { MessageCreateDto } from './dto/message_create.dto';
export declare class Message extends BaseEntity {
    message_id: number;
    text?: string;
    created_at: Date;
    updated_at: Date;
    sender_client?: Client;
    sender_client_id: number;
    reciver_client?: Client;
    reciver_client_id?: number;
    reciver_room?: Room;
    reciver_room_id?: number;
    msg_video?: MsgVideo;
    msg_video_id?: number;
    msg_audio?: MsgAudio;
    msg_audio_id?: number;
    msg_photo?: MsgPhoto;
    msg_photo_id?: number;
    msg_sticker?: MsgSticker;
    msg_sticker_id?: number;
    static of(params: MessageCreateDto, sender_id: number): Message;
    checkDataValidation(): Promise<void>;
}
