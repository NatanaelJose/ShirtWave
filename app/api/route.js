import { sql } from "@vercel/postgres";


export async function GET() {
    const { rows } = await sql`SELECT * FROM shirts;`;    
  
    return new Response(JSON.stringify({ data: rows }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  