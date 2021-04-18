import React, {useEffect} from 'react'
import {useAsync, AsyncWrapper} from 'er-custom-hooks'
import {AsyncWrapperWithLoader} from './common/index'

const asyncFunc = () => {
  return new Promise((resolve, reject) => {
    let wait = setTimeout(() => {
      clearTimeout(wait);
      resolve();
    }, 2500)
  })
}

const App = () => {
  const {executeFunction, status} = useAsync(asyncFunc)

  useEffect(() => {
    executeFunction()
  }, [])

  return <React.Fragment>

    <AsyncWrapperWithLoader status={status}>
      <div>With general loader</div>
    </AsyncWrapperWithLoader>

    <AsyncWrapper status={status} loaderComp="Custom loader...">
      <div>With custom loader</div>
    </AsyncWrapper>

  </React.Fragment>
}

export default App
