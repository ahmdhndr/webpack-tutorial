# Refactor Code

In this section, we split each function in app.js into a single file, then call all required files
into index.html based on which js files depend on other js files. And very inconvenient if there are
many files that we will use based on the order of dependence. This is where Webpack plays an
important role.
