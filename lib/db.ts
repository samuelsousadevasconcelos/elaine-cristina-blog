import { Pool } from 'pg';

// Conexao portatil via DATABASE_URL — mesma variavel de ambiente serve
// tanto a instancia provisoria (Easypanel/simulador-thaonseguros) quanto
// a futura instancia da Elaine, sem mudar codigo (so o valor da env var).
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error('DATABASE_URL não configurada');
    }
    pool = new Pool({ connectionString });
  }
  return pool;
}
