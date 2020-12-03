<template>
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg navbar-light sticky-top">
			<!-- <a class="navbar-brand" href="/">halie.online</a> -->
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarContent">
				<ul class="navbar-nav">
					<li class="nav-item">
						<g-link to="/" class="nav-link" exact>Home</g-link>
					</li>
					<li class="nav-item">
						<g-link to="/portfolio/" class="nav-link">Portfolio</g-link>
					</li>
					<li class="nav-item">
						<g-link to="~/assets/resume.pdf" class="nav-link" target="_blank">Resume</g-link>
					</li>
					<li class="nav-item">
						<g-link to="/" class="nav-link">Contact</g-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<!--end of .container-->
</template>
