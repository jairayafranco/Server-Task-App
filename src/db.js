import mysql from 'mysql2';
import { config_db } from './config';

export const db = mysql.createConnection(config_db);

