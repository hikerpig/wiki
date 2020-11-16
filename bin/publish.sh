#!/bin/bash
bundle exec jekyll build -d _remote_site && rsync -rv _remote_site/* cm@vultr-1:~/sites/wiki/_site/
