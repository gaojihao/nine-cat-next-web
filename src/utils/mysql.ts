import type { Pool, PoolOptions, RowDataPacket } from 'mysql2/promise';
import mysql from 'mysql2/promise';

export interface MySqlConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  dbname: string;
  max_open_connection: number;
  max_idle_connection: number;
}

const defaultConfig: MySqlConfig = {
  host: '111.229.224.211',
  port: 3306,
  user: 'earth',
  password: 'Aa!%wu6ABye6',
  dbname: 'earth',
  max_open_connection: 200,
  max_idle_connection: 10,
};

type QueryValues =
  | string
  | number
  | boolean
  | Date
  | Buffer
  | null
  | Record<string, unknown>;

declare global {
  // eslint-disable-next-line no-var
  var __MYSQL_POOL__: Pool | undefined;
}

function createPool(config: MySqlConfig): Pool {
  const options: PoolOptions = {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.dbname,
    connectionLimit: config.max_open_connection,
    maxIdle: config.max_idle_connection,
    waitForConnections: true,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  };

  return mysql.createPool(options);
}

export function getPool(): Pool {
  if (!globalThis.__MYSQL_POOL__) {
    globalThis.__MYSQL_POOL__ = createPool(defaultConfig);
  }

  return globalThis.__MYSQL_POOL__;
}

export async function query<T = RowDataPacket[]>(
  sql: string,
  values: QueryValues[] = []
): Promise<T> {
  const pool = getPool();
  const [rows] = await pool.query(sql, values);
  return rows as T;
}

export async function closePool(): Promise<void> {
  if (globalThis.__MYSQL_POOL__) {
    await globalThis.__MYSQL_POOL__.end();
    globalThis.__MYSQL_POOL__ = undefined;
  }
}

