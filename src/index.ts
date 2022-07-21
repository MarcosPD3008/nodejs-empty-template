import { config } from 'dotenv';
import ServerApp from './server/serverApp';

config()
const serverApp = new ServerApp();
serverApp.runServer();