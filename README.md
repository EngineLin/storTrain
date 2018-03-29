
# StorTrain
> 輕鬆將想要攜帶的資料帶到下一個頁面，利用 localStorage 進行跨頁面資料攜帶。

A brief description of your project, what it is used for.

## Installing / Getting started

Using npm:

```shell
$ npm install --save-dev stortrain
```
Using yarn:

```shell
$ yarn add storTrain
```

## Example
```js
const input_1 = document.getElementById('input_1')
const button = document.getElementById('button')

stortrain.bind(button, {valueName: input_1})
```

效果: 當 Button 被點擊，input_1 的資料會被存在 localStorage 中，等網頁傳換到 button 連結的網址後在全域的 stortrain 中回傳前面帶回來的值。

## Options
link 可以在設定中設定物件的連結位址(a)

## Developing
### Built With

List main libraries, frameworks used including versions (React, Angular etc...)
### Prerequisites

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.
### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.
Building

If your project needs some additional steps for the developer to build the project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets executed.
### Deploying / Publishing

give instructions on how to build and release a new version In case there's some step you have to take that publishes this project to a server, this is the right time to state it.

packagemanager deploy your-project -s server.com -u username -p password

And again you'd need to tell what the previous code actually does.
## Versioning

We can maybe use SemVer for versioning. For the versions available, see the link to tags on this repository.
## Configuration

Here you should write what are all of the configurations a user can enter when using the project.
## Tests

Describe and show how to run the tests with code examples. Explain what these tests test and why.

## Give an example

## Style guide

Explain your code style and show how to check it.
## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.
## Database

Explaining what database (and version) has been used. Provide download links. Documents your database design and schemas, relations etc...
## Licensing

State what the license is and how to find the text version of the license.
