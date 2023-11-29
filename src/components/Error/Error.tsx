import React, { FC } from 'react'
import { FallbackProps } from 'react-error-boundary'

export const ErrorBoundaryComponent: FC<FallbackProps & Record<string, string>> = (props) => {
   return <div>Error</div>
}
