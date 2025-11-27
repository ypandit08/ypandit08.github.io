---
layout: default
title: Academic Activities
permalink: /activities/
---

<section class="card">
## Academic Activities

{% for item in site.activities %}
<article>
  <h2>{{ item.title }}</h2>
  <p><strong>Type:</strong> {{ item.type }} · <strong>Date:</strong> {{ item.date }}</p>
  <p>{{ item.excerpt }}</p>
  <hr/>
</article>
{% endfor %}
</section>
