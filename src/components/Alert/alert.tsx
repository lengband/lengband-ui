import React, { FC, useState } from 'react'
import classNames from 'classnames'

export type Size = 'lg' | 'sm'
export type Type = 'primary' | 'danger'

interface BaseAlertProps {
  title: string;
  closeale?: boolean;
  size?: Size;
  type?: Type;
  description?: string;
  className?: string;
}

export const Alert: FC<BaseAlertProps> = props => {
  const [show, setShow] = useState(true)
  const { 
    type,
    className,
    size,
    title,
    description,
    closeale,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
    [`alert-${size}`]: size,
  })
  if (show) {
    return (
      <div
        className={classes}
        {...restProps}
      >
        <div className="alert_title">{ title }</div>
        <div className="alert_description">{ description }</div>
        { closeale ? <i className="alert_close" onClick={ () => setShow(false) }>x</i> : null }
      </div>
    )
  }
  return null
  
}

Alert.defaultProps = {
  closeale: false,
  type: 'primary'
}

export default Alert;