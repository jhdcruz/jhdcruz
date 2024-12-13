/**
 * Return availability status from Cloudflare KV store.
 */
export const onRequest: PagesFunction<Env> = async (context) => {
	const status = await context.env.jhdcruz.get("status");
	return new Response(status);
};
