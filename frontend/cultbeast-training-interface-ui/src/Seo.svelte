<script type="ts">
	// import { page } from '$app/stores';

	const brand = 'CULT Challenge';

	export let title = brand;
	export let description =
		'We are a network of cultdao.io fans promoting freedom, fairness, education and love.';
	export let image =
		'https://raw.githubusercontent.com/michael-spengler/fairness/main/diagrams-documents-images/cult-money-1500x500.jpeg';
	// export let url = `https://${$page.host}${$page.url.pathname}`;
	export let url = `https://cultplayground.org`;
	export let twitterHandle = '@Peer2PeerE';
</script>

<svelte:head>
	<!-- <title>{title} - {brand}</title> -->
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${title} - ${brand}`} />
	<meta property="og:site_name" content={brand} />
	<meta property="og:description" content={description} />
	<meta property="og:image" name="og:image" content={image} />
	<meta name="og:url" content={url} />

	<meta name="twitter:site" content={twitterHandle} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${title} - ${brand}`} />
	<meta name="twitter:description" content={description} />
</svelte:head>
