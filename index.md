---
layout: default
title: Home
---

<div class="row">
  <div class="col-sidebar">
    <img src="/profile.jpg" alt="Profile photo" class="profile-photo">
    <h2>{{ site.author.name }}</h2>
    <p><em>{{ site.author.title }}</em><br>
    {{ site.author.affiliation }}</p>
    <div class="contact-info">
      <p><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
      <div class="social-links">
        {% if site.author.github %}
            <a href="https://github.com/{{ site.author.github }}" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
            </a>
        {% endif %}
        {% if site.author.linkedin %}
            <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
            </a>
        {% endif %}
        {% if site.author.substack %}
            <a href="https://{{ site.author.substack }}.substack.com" target="_blank" aria-label="Substack">
            <i class="si si-substack"></i>
            </a>
        {% endif %}
        <!-- {% if site.author.google_scholar %}
            <a href="https://scholar.google.com/citations?user={{ site.author.google_scholar }}">Google Scholar</a>
        {% endif %} -->
      </div>
    </div>
  </div>

  <div class="col-main">
    <h2>About</h2>
    <p>I am an M.S. student (expected 2027) in the Department of Electrical Engineering and Computer Science (EECS), at the University of California, Berkeley, advised by Alane Suhr in the NLP Group at the Berkeley AI Research Lab (BAIR). My research focuses on the intersection between <strong>assistance games, computational linguistics, and AI alignment</strong>.</p>
    
    <p> I previously recieved my B.S. in EECS with High Honors from UC Berkeley in 2025. As an undergraduate I was fortunate to participate in several research projects; first in the field of computational neuroscience under Albert Qu, where I researched decision making under uncertainty in rodents using recurrent neural network proxies, and later in the NLP group under Alane Suhr, where I worked on task decomposition and recursive reasoning in large language models.</p>

    <h2>News</h2>
    <ul>
      <li><strong>June 2026:</strong> I will be attending the 10th Annual <a href="https://workshop.humancompatible.ai">CHAI workshop</a> at Asilomar, and presenting preliminary work on Linguistic Assistance Games [<a href="files/Linguistic_Assistance_Games_CHAI_poster.pdf">Poster</a>].</li>
    </ul>
  </div>
</div>