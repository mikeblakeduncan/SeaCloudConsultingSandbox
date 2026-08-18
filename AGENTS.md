# Sea Cloud Consulting sandbox

This is the sandbox repository. Site changes are made and reviewed here first,
then promoted to production. The `main` branch is both the repository default
and the GitHub Pages source. Pages publishes the repository root to:

https://mikeblakeduncan.github.io/SeaCloudConsultingSandbox/

Before editing or previewing the site, confirm the working tree is on `main`
and compare the relevant page with the live URL.

Production is a separate repository, also on `main`:

https://github.com/mikeblakeduncan/SeaCloudConsultingSite
https://mikeblakeduncan.github.io/SeaCloudConsultingSite/

Neither site is on the live domain yet. Every page carries `noindex` and
`robots.txt` disallows crawling until the DNS cutover.

## This repository is generated

The HTML here is build output. It is produced by the generator at
`C:\Users\mikeb\AI projects\website\site-generator` and is overwritten by the
next build, so editing a page in this repo will not survive. Change `pages.py`
or `build_site.py` there instead, rebuild, and deploy with
`python deploy.py sandbox` or `python deploy.py production`.
