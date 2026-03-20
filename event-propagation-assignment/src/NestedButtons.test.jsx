import NestedButtons from './NestedButtons.jsx'
import { vi, describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NestedButtons', () => {
    it('shows button label when rendered', async () => {
        render(<NestedButtons />)
        expect(screen.getByText(/Click me without triggering parent/)).toBeInTheDocument()
    })
})
