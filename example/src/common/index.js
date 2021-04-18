import React from 'react'
import {AsyncWrapper} from 'er-custom-hooks'
const AsyncWrapperWithLoader =  props => <AsyncWrapper {...props} loaderComp="General loader..." />
export {AsyncWrapperWithLoader}
