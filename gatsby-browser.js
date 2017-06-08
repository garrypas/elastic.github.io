import ReactGA from 'react-ga'
ReactGA.initialize('UA-27701047-4')

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.pathname)
}
