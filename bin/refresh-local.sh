#!/bin/bash
rsync -rv ~/foam-notes/* . && jekyll build --baseurl ''
