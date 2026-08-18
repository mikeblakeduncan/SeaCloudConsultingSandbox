# Sea Cloud Consulting sandbox

This is the sandbox repository. Site changes are made and reviewed here first,
then promoted to production. The `main` branch is both the repository default
and the GitHub Pages source, published at:

https://mikeblakeduncan.github.io/SeaCloudConsultingSandbox/

Production is a separate repository, live on the real domain:

https://github.com/mikeblakeduncan/SeaCloudConsultingSite
https://seacloudconsulting.com

## This repository is generated

The HTML here is build output, produced by the generator at
`C:\Users\mikeb\AI projects\website\site-generator`. Editing a page here will
not survive the next build. Change `pages.py` or `build_site.py` instead.

**Always build the sandbox with `PRECUTOVER=1`.** That keeps `noindex` on every
page, keeps `robots.txt` closed, and keeps the `CNAME` file out, so this copy
never gets indexed alongside the live site or tries to claim the domain.
`deploy.py` refuses a build that carries a `CNAME`.
