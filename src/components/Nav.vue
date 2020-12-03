<template>
	<div class="container-fluid">
		<nav class="navbar navbar-expand-lg sticky-top">
			<a class="navbar-brand" href="/">halie.online</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse d-flex justify-content-end" id="navbarContent">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="/portfolio" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Portfolio
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#">Web Design</a>
							<a class="dropdown-item" href="#">Ux Demo Videos</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Fine Art</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Resume</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
	<!--end of .container-->
</template>
