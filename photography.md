---
layout: default
title: Photography
---

<div class="gallery-card" markdown="0"> 
    <h1>Photography</h1> 
    <!-- <p>In my free time, I enjoy travelling and shooting film with my Canon AE-1 Program. I was first introduced to film photography in a black and white film course at Cabrillo College, where I learned how to shoot and develop film. I think that there is a lot of value in physical media, and I think the optics behind lenses and the chemistry involved in the development process are really interesting! These are some of my favorite photos that I've taken:</p> -->
    <div class="gallery"> 
        {%- for photo in site.data.photos %} 
        <figure class="gallery-item" tabindex="0"> 
            <img src="{{ '/files/photos/' | append: photo.file | relative_url }}" alt="{{ photo.alt | escape }} ({{ photo.location | escape }}, {{ photo.year }})" loading="lazy"> 
            <figcaption aria-hidden="true">
                {{ photo.location | escape }} &middot; {{ photo.year }}
            </figcaption>
        </figure> {%- endfor %}
    </div>
</div>