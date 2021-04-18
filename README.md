# er-custom-hooks

[![NPM](https://img.shields.io/npm/v/er-custom-hooks.svg)](https://www.npmjs.com/package/er-custom-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting Started

```bash
npm install --save er-custom-hooks
```

## Basic Usage

```jsx
import React, {useEffect} from 'react'
import {useAsync, AsyncWrapper} from 'er-custom-hooks'
import getExampleReasources from 'er-custom-hooks-http'

const Example = () => {
  const {executeFunction, status, value} = useAsync(getExampleReasources)

  useEffect(() => {
    executeFunction()
  }, [])

  return <AsyncWrapper status={status}>
      <div>{value}</div>
    </AsyncWrapper>
}

export default Example

```
