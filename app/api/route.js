import { sql } from "@vercel/postgres";

export async function GET() {
    try {
        const { rows } =  await sql`SELECT * FROM shirts`;

        return new Response(JSON.stringify({ data: rows }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
        return new Response("Erro interno do servidor", { status: 500 });
    }
}
