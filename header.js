document.getElementById("navbar").innerHTML = `
<ul class="list-unstyled d-flex justify-content-evenly align-item-center p-2" style="color: #a1a1a1;">
<li class="nav-item">
    <a href="skills/index.html" class="nav-link">Skills</a>
</li>
<li class="nav-item">
    <a href="projects/index.html" class="nav-link">Projects</a>
</li>
<li class="nav-item">
    <a href="experiences/index.html" class="nav-link">Experiences</a>
</li>
<li class="nav-item">
    <a href="resume/index.html" class="nav-link">Resume</a>
</li>
<li class="nav-item" id="light">
  <span class="mdi mdi-white-balance-sunny"></span>
</li>
<li class="nav-item d-none" id="dark">
  <i class="fa-solid fa-moon" style="color: #000000;" class="d-none"></i>
</li>
</ul>
`