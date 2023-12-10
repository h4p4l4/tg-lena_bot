interface TelegramUser {
  id: number;
  is_bot: boolean;
  first_name: string;
  last_name?: string;
  username: string;
  language_code: string;
}

interface Chat {
  id: number;
  first_name: string;
  last_name?: string;
  username: string;
  type: 'private';
}

export interface TelegramMessage {
  message_id: number;
  from: TelegramUser;
  chat: Chat;
  date: number;
  text: string;
  entities: object[];
}
