import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import React from 'react'

const page = () => {
  return (
    <section>
      pricing
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </section>
  )
}

export default page
