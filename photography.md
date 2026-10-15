---
layout: default
title: Photography
---

<div class="page-card" markdown="0"> 
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
    <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" hidden>
        <button class="lightbox-btn lightbox-close" type="button" aria-label="Close">
            &times;
        </button>
        <button class="lightbox-btn lightbox-prev" type="button" aria-label="Previous photo">
            &#10094;
        </button>
        <figure class="lightbox-stage">
            <img class="lightbox-img" src="" alt="">
            <figcaption class="lightbox-caption"></figcaption>
        </figure>
        <button class="lightbox-btn lightbox-next" type="button" aria-label="Next photo">
            &#10095;
        </button>
        <div class="lightbox-count" aria-live="polite"></div>
    </div>
    <script src="{{ '/assets/js/lightbox.js' | relative_url }}" defer></script>
</div>