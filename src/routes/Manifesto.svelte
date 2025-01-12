<script lang="ts">
	let manifesto = [
		"To the Feds, I'll keep this short, because I do respect what you do for our country. To save you a lengthy investigation, I state plainly that I wasn't working with anyone.",
		'This was fairly trivial: some elementary social engineering, basic CAD, a lot of patience.',
		'The spiral notebook, if present, has some straggling notes and To Do lists that illuminate the gist of it. My tech is pretty locked down because I work in engineering so probably not much info there.',
		'I do apologize for any strife of traumas but it had to be done.',
		'Frankly, these parasites simply had it coming. A reminder: the US has the #1 most expensive healthcare system in the world, yet we rank roughly #42 in life expectancy.',
		'United is the largest company in the US by market cap, behind only Apple, Google, Walmart. It has grown and grown, but has our life expectancy?',
		'No the reality is, these have simply gotten too powerful, and they continue to abuse our country for immense profit because the American public has allowed them to get away with it.',
		'Obviously the problem is more complex, but I do not have space, and frankly I do not pretend to be the most qualified person to lay out the full argument. But many have illuminated the corruption and greed (e.g.: Rosenthal, Moore), decades ago and the problems simply remain.',
		'It is not an issue of awareness at this point, but clearly power games at play. Evidently I am the first to face it with such brutal honesty.'
	];

	// svelte-ignore non_reactive_update
	let urls = [
		'https://www.bbc.co.uk',
		'https://www.bbc.co.uk/news/articles/ceqlj130rxpo',
		'https://www.cnn.com',
		'https://thehill.com',
		'https://www.cnn.com/2024/12/06/business/insurance-claim-denials-unitedhealthcare-ceo/index.html',
		'https://www.dailymail.co.uk',
		'https://www.foxnews.com',
		'https://www.nytimes.com',
		'https://www.theguardian.com',
		'https://www.washingtonpost.com',
		'https://www.wsj.com',
		'https://www.yahoo.com',
		'https://www.thesun.co.uk',
		'https://www.telegraph.co.uk',
		'https://www.usatoday.com',
		'https://www.latimes.com',
		'https://www.nbcnews.com',
		'https://www.independent.co.uk',
		'https://www.huffingtonpost.com',
		'https://www.mirror.co.uk',
		'https://www.bbc.com',
		'https://www.bbc.com/news/articles/cwypvd9kdewo',
		'https://www.reuters.com',
		'https://www.reuters.com/world/us/luigi-mangione-was-charged-with-murder-then-donations-started-pouring-2024-12-12/',
		'https://www.bloomberg.com',
		'https://www.abcnews.go.com',
		'https://www.abc.net.au',
		'https://www.abc.net.au/news/2024-12-20/luigi-mangione-court-pennsylvania-new-york-extradition/104749008',
		'https://www.express.co.uk',
		'https://www.cbsnews.com',
		'https://www.cbsnews.com/newyork/news/unitedhealthcare-ceo-murder-suspect-luigi-mangione-extradition-hearing/',
		'https://www.npr.org',
		'https://www.economist.com',
		'https://www.ft.com',
		'https://www.twitter.com',
		'https://www.reddit.com',
		'https://www.facebook.com',
		'https://www.instagram.com',
		'https://www.pinterest.com',
		'https://www.x.com',
		'https://www.tumblr.com',
		'https://www.aljazeera.com',
		'https://www.bsky.app',
		'https://www.threads.com',
		'https://www.4chan.org',
		'https://www.tiktok.com',
		'https://www.en.wikipedia.org',
		'https://www.wikipedia.org',
		'https://www.wikimedia.org',
		'https://www.wikileaks.org',
		'https://www.snopes.com',
		'https://www.politifact.com',
		'https://www.factcheck.org',
		'https://www.truthorfiction.com',
		'https://www.kenklippenstein.com/p/luigis-manifesto',
		'https://www.eveningstandard.co.uk',
		'https://www.apnews.com',
		'https://www.theatlantic.com',
		'https://www.thetimes.co.uk',
		'https://www.channelnewsasia.com',
		'https://www.channelnewsasia.com/us',
		'https://www.reddit.com/r/politics',
		'https://www.reddit.com/r/worldnews',
		'https://www.reddit.com/r/news',
		'https://news.sky.com',
		'https://www.nbcnews.com',
		'https://www.nbcnews.com/news/us-news/luigi-mangione-indicted-first-degree-murder-charge-grand-jury-unitedhe-rcna184313',
		'https://www.cbsnews.com',
		'https://edition.cnn.com',
		'https://www.bbc.co.uk/news',
		'https://www.axios.com',
		'https://www.axios.com/2024/12/09/luigi-mangione-unitedhealthcare-ceo-shooting-altoona',
		'https://www.axios.com/2024/12/10/luigi-mangione-unitedhealth-ceo-internet',
		'https://www.justice.gov',
		'https://www.justice.gov/usao-sdny/pr/luigi-mangione-charged-stalking-and-murder-unitedhealthcare-ceo-brian-thompson-and-use',
		'https://www.politico.com',
		'https://www.politico.com/newsletters/politico-nightly/2024/12/12/the-political-lessons-of-luigi-mangiones-media-diet-00194163'
	];

	urls = Array(270).fill(urls).flat();

	let paragraphs: string[][] = [];
	manifesto.forEach((paragraph) => {
		paragraphs.push(paragraph.split(' '));
	});
</script>

<div class="relative">
	<div
		role="img"
		aria-label="Luigi Mangione's manifesto, but with portions redacted using black bars."
	>
		{#each paragraphs as paragraph}
			<p class="my-4 select-none indent-4 text-xl font-bold">
				{#each paragraph as word}
					<a class="bg-black no-underline visited:bg-white" href={urls.pop()}>{`${word} `} </a>
				{/each}
			</p>
		{/each}
	</div>

	<div class="absolute bottom-0 left-0 right-0 top-0" aria-hidden="true"></div>
</div>
