export interface GameClient {
  id: number;
  version: string;
  source: string;
  platform: string;
  type_client: string;
  upload_date: string;
  upload_server_date: string | null;
}
