import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Footer', () => {
    it('checking the text elements in the Footer component', () => {
        render(<Footer />)

        expect(screen.getAllByText(/voicify/i)).toHaveLength(2);
        expect(screen.getByText(/Copyright 2023/i)).toBeInTheDocument();
        expect(screen.getByText(/Keep rocking & sing your song./i)).toBeInTheDocument();
        expect(screen.getByText(/AI LTD/i)).toBeInTheDocument();

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Blog/i)).toBeInTheDocument();
        expect(screen.getByText(/Settings/i)).toBeInTheDocument();
        expect(screen.getByText(/Cartoons/i)).toBeInTheDocument();
        expect(screen.getByText(/Pricing/i)).toBeInTheDocument();
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
        expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
        expect(screen.getByText(/History/i)).toBeInTheDocument();
        expect(screen.getByText(/Terms of Use/i)).toBeInTheDocument();
        expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
        expect(screen.getByText(/Refund Policy/i)).toBeInTheDocument();

        expect(screen.getAllByText(/Drizzy AI Model/i)).toHaveLength(3);
        expect(screen.getAllByText(/Juice AI Model/i)).toHaveLength(3);
        expect(screen.getAllByText(/Kanye AI Model/i)).toHaveLength(3);
    })
})






