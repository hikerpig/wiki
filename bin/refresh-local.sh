#!/bin/bash
rsync -rv ~/foam-notes/* . && bundle exec jekyll build --baseurl ''
