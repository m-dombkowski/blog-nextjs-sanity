import { HTMLMotionProps, motion } from 'framer-motion'
import React, { forwardRef, useMemo } from 'react'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef,
) {
  const show = { opacity: 1 }
  const hide = { opacity: 0 }

  // const onTheRight = { x: '100%' }
  // const inTheCenter = { x: 0 }
  // const onTheLeft = { x: '-100%' }

  const transition = { duration: 0.5 }

  return (
    <motion.div
      ref={ref}
      initial={hide}
      animate={show}
      exit={hide}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)
