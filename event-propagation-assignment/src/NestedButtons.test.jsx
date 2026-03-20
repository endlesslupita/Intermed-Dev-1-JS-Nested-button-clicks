import NestedButtons from './NestedButtons.jsx'
import { vi, describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('NestedButtons', () => {

    // Normal test 1: component renders correctly
    it('shows button label when rendered', () => {
        render(<NestedButtons />)
        expect(screen.getByText(/Click me without triggering parent/)).toBeInTheDocument()
    })

    // Normal test 2: outer card click triggers outer handler
    it('triggers outer handler when outer card is clicked', () => {
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
        render(<NestedButtons />)
        const outerCard = screen.getByRole('button', { name: /React Portfolio Project/i })
        fireEvent.click(outerCard)
        expect(alertSpy).toHaveBeenCalledWith('case description clicked')
        alertSpy.mockRestore()
    })

    // Normal test 3: inner button click triggers inner handler
    it('triggers inner handler when inner button is clicked', () => {
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
        render(<NestedButtons />)
        const innerButton = screen.getByRole('button', { name: 'Click me without triggering parent' })
        fireEvent.click(innerButton)
        expect(alertSpy).toHaveBeenCalledWith('button clicked')
        alertSpy.mockRestore()
    })

    // Normal test 4: inner button click does NOT trigger outer handler
    it('inner button click does not trigger outer handler', () => {
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
        render(<NestedButtons />)
        const innerButton = screen.getByRole('button', { name: 'Click me without triggering parent' })
        fireEvent.click(innerButton)
        expect(alertSpy).toHaveBeenCalledTimes(1)
        expect(alertSpy).not.toHaveBeenCalledWith('case description clicked')
        alertSpy.mockRestore()
    })

    // Edge case 1: rapid clicks on inner button never trigger outer handler
    it('rapid clicks on inner button do not trigger outer handler', () => {
        const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
        render(<NestedButtons />)
        const innerButton = screen.getByRole('button', { name: 'Click me without triggering parent' })
        fireEvent.click(innerButton)
        fireEvent.click(innerButton)
        fireEvent.click(innerButton)
        expect(alertSpy).toHaveBeenCalledTimes(3)
        expect(alertSpy).not.toHaveBeenCalledWith('case description clicked')
        alertSpy.mockRestore()
    })

    // Edge case 2: inner button is keyboard focusable
    it('inner button is keyboard focusable', () => {
        render(<NestedButtons />)
        const innerButton = screen.getByRole('button', { name: 'Click me without triggering parent' })
        innerButton.focus()
        expect(document.activeElement).toBe(innerButton)
    })

    // Edge case 3: outer card has tabIndex for keyboard accessibility
    it('outer card is keyboard accessible via tabIndex', () => {
        render(<NestedButtons />)
        const outerCard = screen.getByRole('button', { name: /React Portfolio Project/i })
        expect(outerCard).toHaveAttribute('tabIndex', '0')
    })

})
