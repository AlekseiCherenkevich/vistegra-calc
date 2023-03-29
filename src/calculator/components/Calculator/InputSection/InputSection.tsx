import React from 'react'

import { SCalculatorSection } from '../../../styles'

export const InputSection = () => {
  return (
    <SCalculatorSection>
      <div>
        material: <input type="text" value={'steel'} />
      </div>
      <div>
        pipe: <input type="text" value={'10'} />
      </div>
      <div>
        width: <input type="text" value={'400'} />
      </div>
      <div>
        length: <input type="text" value={'1000'} />
      </div>
      <div>
        durability: <input type="text" value={'hard'} />
      </div>
    </SCalculatorSection>
  )
}
