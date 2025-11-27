# Jekyll Academic Website (converted)

This repository is a Jekyll-converted version of your academic website scaffold.

**Key features**
- Modular layout with includes (`_includes/sidebar.html`, `_includes/topnav.html`)
- `_layouts/default.html` master layout
- `jekyll-scholar` configured (see `_config.yml`) to generate publications at build time
- `activities` collection for Talks, Research Visits, Internships, Workshops and Services
- GitHub Actions workflow that builds the site and deploys `_site` to `gh-pages` branch

**To use**
1. Replace `assets/img/profile.jpg` and `assets/files/cv.pdf` with real files.
2. Update `publications/bibliography.bib` with your BibTeX.
3. Push to GitHub main branch. The workflow will build and deploy to `gh-pages`.
