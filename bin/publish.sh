#!/bin/bash
jekyll build --baseurl '' && rsync -rv _site/* cm@vultr-1:~/sites/wiki/_site/
