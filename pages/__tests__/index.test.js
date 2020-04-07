/* eslint-env jest */
import Index from '../index.js'
import { render } from '@testing-library/react'

describe('Index Page', () => {
  let renderIndexPage

  beforeEach(() => {
    renderIndexPage = () => render(
      <Index />
    )
  })
  it('should render the page', () => {
    const { queryByText } = renderIndexPage()
    // expect(queryByText('Brand Name')).not.toBeNull()
  })
})