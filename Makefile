develop:
	npx webpack serve

install:
	npm ci

lint:
	npx eslint --ext .jsx,.js ./

build:
	rm -rf build
	NODE_ENV=production npx webpack

deploy:
	npm run deploy
