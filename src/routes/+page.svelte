<script>
	export let data;
	let { linkData } = data;
</script>

<div class="main">
	<h1 class="heading">Welcome to Link Chain</h1>
	<div class="link_container">
		{#each linkData as link}
			<div class="linklist">
				<a class="links" target="_blank" href={link.url} rel="noreferrer">
					{link.name}
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.heading {
		color: rgb(34 34 34 / 88%);
	}
	.link_container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.linklist {
		text-align: center;
		padding: 4px;
		min-height: 2rem;
		min-width: 28rem;
		background: linear-gradient(331deg, #edb8db 0%, #d6e1b4 100%);
		border-radius: 2px;
	}
	.linklist:hover {
		background: linear-gradient(133deg, #efa0d5 0%, #d4ea93 100%);
	}
	.links {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 700;
		background: -webkit-linear-gradient(#636bdb, #a554db);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
