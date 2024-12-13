export const onRequest: PagesFunction<Env> = async (context) => {
	const status = await context.env.jhdcruz.get("status");
	return new Response(status, {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
