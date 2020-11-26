#!/bin/bash
rsync -rv --exclude-from='rsync-exclude.txt'  ~/foam-notes/* . && bundle exec jekyll build --baseurl ''
