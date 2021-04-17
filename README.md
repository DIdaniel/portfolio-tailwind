### using tailwind CSS
우선 사용하면서 너무 만족했다.
재밋는 기능이 참 많고, 일반적인 css였다면 일일이 해줘야해서 손이 많이 가는 작업들이 한번에 되는 것을 보고 사용할만한 이유가 있다고 느껴졌다.

css를 다룰 줄 안다면 조금만 공식사이트를 찾아보면 다 사용 할 수 있었다.
또한 "https://nerdcave.com/tailwind-cheat-sheet" 이곳에서 말그대로 cheat를 조금 할 수 있다.
그러니 css를 안다면 더 빠르게 찾아서 적용할 수 있을것이다!

google font에서 사용되어지는 font를 사용하거나 할 때만 global css에서 잡아주면 되고 나머지는 className만 잘 작성하면 많은 작업들을 바로바로 할 수 있으니 일일이 css에 들어가지 않아도 되어서 편하기도 했다.

justify-conent, align-items처럼 이름이 조금 긴 경우에는 justify, items라고 사용하기도 하지만 이런걸 제외하면 대부분 심플하고 직관적이게 사용되었다.

화면 사이즈의 경우에도 @media screen을 사용하지 않고, sm, lg 이런 식으로 지정해주니까 유연하게 바뀌는 것을 보고 새삼 다시 감탄했다.

flex-col
=> flex-direction: column

justify-center
=> justify-content: center

lg:pt-32
=> 화면 사이즈가 large일 때, padding-top 사이즈 지정

전혀 모르면 이상하겠지만, 조금만 알면 더 이상 찾아보지 않아도 될만큼 이해할 수 있다.

그렇다면 어떤 문제는 없었을까?
조금 더 섬세하게 하는데는 문제가 있었다.
나는 어떤 값과 값의 사이의 17.3px 정도를 맞춰야한다면 이런것은 어려웠다.
아래의 이미지처럼 이렇게 px 혹은 %가 지정이 되어있어서 섬세하게 하는데는 무리가 있지만 빠르고 간결하게 하는데는 문제가 없었다.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
