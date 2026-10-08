# Yeshwant Pandit's academic website

Jekyll source for https://ypandit08.github.io/. The homepage keeps the existing
profile card style, displays the circular photo at up to 230 px on desktop and
200 px on small screens, and places the bio below the complete profile row in
the same card. Outer content cards share a 1240 px maximum width and consistent
side margins. The navigation uses the same maximum width.

## What each file does

| File | Purpose |
| --- | --- |
| `index.md` | Homepage route, title and layout; includes the homepage content. |
| `_includes/index-content.html` | Photo, name, affiliation, academic links and biography. Edit your bio here. |
| `_includes/nav.html` | Navigation shared by all pages. |
| `_layouts/default.html` | Shared HTML document, fonts, stylesheet and page content wrapper. |
| `publications.md` | Conference and journal publications, collaborators, venues and paper links. This is the single source of publication content. |
| `academic-activities.md` | Expandable lists of talks, workshops, visits, grants and reviewing service. |
| `contact.md` | Email and postal address. |
| `assets/style.css` | All site styling, including responsive layout and reduced-motion support. |
| `assets/profile1.jpg` | The photograph displayed on the homepage. Its displayed size is controlled in `assets/style.css`. |
| `assets/logos/google-scholar.png` | Google Scholar link icon. |
| `assets/logos/linkedin.png` | LinkedIn link icon. |
| `assets/logos/orcid.png` | ORCID link icon. |
| `assets/logos/dblp.png` | DBLP link icon. |
| `_config.yml` | Jekyll configuration, existing theme/plugins and files excluded from the generated site. |
| `Gemfile` | Ruby dependencies for local Jekyll/GitHub Pages development. |
| `Gemfile.lock` | Locked dependency versions. Keep it for reproducible dependency installation. |
| `.gitignore` | Keeps generated output, caches, local dependencies and macOS metadata out of Git. |
| `.editorconfig` | UTF-8, LF line endings, two-space indentation and trailing whitespace conventions. |
| `README.md` | This file guide and Mac upload instructions. |
| `CHANGELOG.md` | Exact changes, removed files and validation limits. |

The Minima theme and feed plugin are retained because the existing configuration
uses them. The custom default layout still controls the appearance of these four
pages. Generated theme/feed files may reappear in `_site` during a build; this is
normal. Do not commit `_site`.

## Upload on a Mac using GitHub Desktop

Using Desktop lets you upload edits and removals together, with a review before
publishing. You do not need to install Ruby to upload the code.

1. Download and unzip the updated archive in Finder.
2. Install GitHub Desktop from https://desktop.github.com/ and sign in.
3. Choose **File > Clone Repository**, select `ypandit08/ypandit08.github.io`,
   and choose a local folder. If already cloned, open it and fetch/pull first.
4. Select the branch currently used by your Pages site (usually `main`).
5. Choose **Repository > Show in Finder** to open the cloned repository.
6. Copy the CONTENTS of the unzipped `ypandit08.github.io-main` folder into the
   cloned repository, replacing matching files. Do not put that enclosing folder
   inside the repository. Keep the clone's `.git` folder and any newer files not
   supplied in the archive. Press **Command + Shift + .** in Finder to see and
   copy the new `.gitignore` and `.editorconfig` files.
7. Finder replacement does not reliably remove obsolete files. Explicitly remove
   only these paths from the clone if they exist:

   ```text
   _site/
   _data/publications.yml
   _includes/academic-activities-content.html
   _includes/publications-content.html
   assets/profile2.jpg
   assets/profile3.jpg
   assets/logos/cv.png
   assets/logos/cv1.png
   assets/logos/github.png
   ```

   Remove `_data/` only if it is empty. Preserve any unrelated data, workflows,
   custom domain file (`CNAME`), and newer work. The uploaded snapshot dates from
   April 19, 2026; compare newer edits before replacing their files.

8. Return to Desktop and review the **Changes** list. Confirm the file changes
   match `CHANGELOG.md` and no unrelated files were removed.
9. Enter a summary such as `Merge profile bio and clean up website source`,
   click **Commit to main** (or your publishing branch), then **Push origin**.
10. In GitHub, open **Settings > Pages**. Keep your existing working publishing
    configuration. For branch-based publishing of this source, it should point
    to the chosen branch and **/(root)**. If you use an existing Actions workflow,
    retain it rather than switching modes just for this update.
11. Check the repository's **Actions** tab for a successful Pages build/deploy.
    Then open your website and use **Command + Shift + R** to refresh.

Do not upload the ZIP itself: GitHub Pages needs the extracted source files.
The provided code has not been pushed or published automatically.

## Alternative: GitHub's website

Open https://github.com/ypandit08/ypandit08.github.io and choose **Add file >
Upload files**. Drag the extracted files/folders into the repository root, then
commit the upload. Use Finder's **Command + Shift + .** to include the two dotfiles.
You must separately delete the obsolete paths above in GitHub; uploading edited
files does not remove old files. Desktop is easier for this cleanup.

## Optional local preview

With a working Ruby and Bundler installation, open Terminal in the source folder:

```sh
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. Jekyll generates `_site` locally; it is ignored by Git.
Check desktop and mobile widths, navigation links, publication buttons, activity
accordions and the contact page before publishing.

Ruby/Jekyll was unavailable in the editing environment, so a complete Jekyll build
has not been run. HTML structure and referenced local assets were checked.

## Editing conventions

Use two-space indentation, UTF-8 and LF line endings. Keep presentation in CSS,
page content in its page/include, and shared structure in the default layout.
Avoid duplicate CSS overrides, inline styling and commented-out experiments.
Keep new-tab links paired with `rel="noopener noreferrer"` and images with useful
alt text. Store publications in `publications.md`; do not create a second list
that can drift out of date.

## Official instructions

- Upload files: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Commit and review in Desktop: https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop
- Push from Desktop: https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop
- Pages publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
