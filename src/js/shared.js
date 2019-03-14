window.addEventListener('load',function insertNavbar(){
    var background = document.getElementById('navbar');
 background.innerHTML =("afterBegin",`
<nav class="navbar navbar-expand-sm transparent navbar-light">
			<div class="d-flex w-100 justify-content-between">
				<a href="https://ultrastanoje.github.io/" class="navbar-brand mr-0"><span class="letter" data-letter="S">SS</span></a>
				<button class="navbar-toggler" onclick="getTextHeight()"
					style="background-color: white; line-height: 1.0!important; margin: 16px;" type="button"
					data-toggle="collapse" data-target="#navbar9">
					<span class="navbar-toggler-icon"></span>
				</button>
			</div>
			<div class="navbar-collapse collapse" id="navbar9">
				<ul class="navbar-nav mx-auto nav-tabs nav-justified">
					<li class="nav-item active">
						<a class="nav-link" href="https://ultrastanoje.github.io/" style="color: aliceblue!important;">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://ultrastanoje.github.io/src/html/skills.html" style="color: aliceblue!important;">Skills</a>
					</li>
					<li class="nav-item dropdown">
 							<a class="nav-link dropdown-toggle" style="color: white;background-color:transparent" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Download CV</a>
							<div class="dropdown-menu" style="background-color: transparent;">
							<a class="dropdown-item" style="color: #00B4F1;" href="src/docs/CV-Stefan-Stanojlovic.pdf" target="_blank">PDF</a>
							<a class="dropdown-item" style="color: #00B4F1;" href="src/docs/CV-Stefan-Stanojlovic.docx" target="_blank">Word</a>
							</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://ultrastanoje.github.io/src/html/contact.html" style="color: aliceblue!important;">Contact</a>
					</li>
				</ul>
			</div>
			<div class="d-flex w-100">
				&nbsp;
			</div>
    </nav>`);
});