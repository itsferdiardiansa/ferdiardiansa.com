import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BasicInfo from '../BasicInfo'
import type { Contents } from '@/types/contents'

describe('features/BasicInfo', () => {
  it('renders contents correctly', () => {
    const content: Pick<Contents, 'basicInfo'> = {
      basicInfo: {
        name: 'BasicInfo',
        pronouns: 'he/him',
        role: 'Senior Software Engineer',
        description: 'A beautifull day',
      },
    }

    render(<BasicInfo {...content} />)

    const titleText = screen.queryByTestId('biTitleText')
    const pronounsText = screen.queryByTestId('biPronounsText')
    const roleText = screen.queryByTestId('biRoleText')
    const descriptionText = screen.queryByTestId('biDescriptionText')

    expect(titleText).toBeInTheDocument()
    expect(pronounsText).toBeInTheDocument()
    expect(roleText).toBeInTheDocument()
    expect(descriptionText).toBeInTheDocument()
  })
})
