<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import '@fontsource/libre-baskerville';
</script>

<main class="mx-auto max-w-prose px-4">
	{@render children()}
</main>
