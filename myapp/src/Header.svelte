
<script>
	import { PageRouterInit } from "./components/Navigation";



</script>

	
	<header id="header">
		<h1>테스트 </h1>
		<nav>
			<ul>
				{#each PageRouterInit as PageRouter}
					<li><a href="#{PageRouter.url}">{PageRouter.index}</a></li>
				{/each}
				<li><a href="#/detail">Intro</a></li>
				<li><a href="#/Main">What I Do</a></li>
				<li><a href="#/two">Who I Am</a></li>
				<li><a href="#/work">My Work</a></li>
				<li><a href="#/contact">Contact</a></li>
			</ul>
		</nav>
	</header>
