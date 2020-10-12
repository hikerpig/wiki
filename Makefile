update-index:
	node _scripts/gen-folder-summary.js

default: update-index

refresh-algolia:
	bundle exec jekyll algolia
