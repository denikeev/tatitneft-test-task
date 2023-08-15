develop:
	npx webpack serve

install:
	npm ci

build:
	rm -rf build
	NODE_ENV=production npx webpack

lint:
	npx eslint --ext .jsx,.js ./
