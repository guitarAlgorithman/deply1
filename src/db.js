
import {createPool} from 'mysql2/promise.js';
import {
DB_HOST,DB_NAME,DB_PASSWORD,DB_USER
} from './config.js'

export const pool = createPool({
    database: DB_NAME,
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASSWORD,
    ssl:{
		rejectUnauthorized: false
	}

})